import { NextResponse } from "next/server";
import * as dialogflow from "@google-cloud/dialogflow";
import { readFileSync } from "node:fs";
import { resolve as resolvePath } from "node:path";

type Body = { text?: string; sessionId?: string };

function getDialogflowClient() {
  const projectId = process.env.DIALOGFLOW_PROJECT_ID;
  if (!projectId) return null;

  const json = process.env.GOOGLE_APPLICATION_CREDENTIALS_JSON;
  if (json) {
    try {
      const parsed = JSON.parse(json) as {
        client_email?: string;
        private_key?: string;
        project_id?: string;
      };
      if (parsed.client_email && parsed.private_key) {
        return new dialogflow.SessionsClient({
          projectId: projectId ?? parsed.project_id,
          fallback: true,
          credentials: {
            client_email: parsed.client_email,
            private_key: parsed.private_key,
          },
        });
      }
    } catch {
      // ignore: handled below by returning null
    }
  }

  const credentialsPath = process.env.GOOGLE_APPLICATION_CREDENTIALS;
  if (credentialsPath) {
    try {
      // Some folks accidentally paste JSON into GOOGLE_APPLICATION_CREDENTIALS.
      // If it looks like JSON, treat it like GOOGLE_APPLICATION_CREDENTIALS_JSON.
      const trimmed = credentialsPath.trim();
      if (trimmed.startsWith("{")) {
        const parsed = JSON.parse(trimmed) as {
          client_email?: string;
          private_key?: string;
          project_id?: string;
        };
        if (parsed.client_email && parsed.private_key) {
          return new dialogflow.SessionsClient({
            projectId: projectId ?? parsed.project_id,
            fallback: true,
            credentials: {
              client_email: parsed.client_email,
              private_key: parsed.private_key,
            },
          });
        }
        return null;
      }

      const abs = resolvePath(process.cwd(), credentialsPath);
      const raw = readFileSync(abs, "utf8");
      const parsed = JSON.parse(raw) as {
        client_email?: string;
        private_key?: string;
        project_id?: string;
      };

      if (parsed.client_email && parsed.private_key) {
        return new dialogflow.SessionsClient({
          projectId: projectId ?? parsed.project_id,
          fallback: true,
          credentials: {
            client_email: parsed.client_email,
            private_key: parsed.private_key,
          },
        });
      }
    } catch {
      // Missing/bad file path: treat as "not configured" instead of throwing.
      return null;
    }
  }

  // Final fallback: relies on Application Default Credentials (gcloud, GCE, etc.)
  return new dialogflow.SessionsClient({ projectId, fallback: true });
}

export async function POST(req: Request) {
  const body = (await req.json().catch(() => ({}))) as Body;
  const text = body.text?.toString().trim();
  const sessionId = body.sessionId?.toString().trim() || "default";

  if (!text) {
    return NextResponse.json({ error: "Missing text" }, { status: 400 });
  }

  const projectId = process.env.DIALOGFLOW_PROJECT_ID;
  const languageCode = process.env.DIALOGFLOW_LANGUAGE_CODE || "en";
  const client = getDialogflowClient();

  if (!client || !projectId) {
    return NextResponse.json(
      {
        reply:
          "Dialogflow is not configured yet. Set DIALOGFLOW_PROJECT_ID and credentials env vars to enable chat.",
      },
      { status: 200 },
    );
  }

  try {
    const sessionPath = client.projectAgentSessionPath(projectId, sessionId);
    const [response] = await client.detectIntent({
      session: sessionPath,
      queryInput: {
        text: { text, languageCode },
      },
    });

    const fulfillmentText =
      response.queryResult?.fulfillmentText ||
      response.queryResult?.fulfillmentMessages?.[0]?.text?.text?.[0] ||
      "";

    return NextResponse.json({
      reply: fulfillmentText || "I didn’t catch that—can you rephrase?",
    });
  } catch (e) {
    if (process.env.NODE_ENV !== "production") {
      console.error("Dialogflow detectIntent failed:", e);
    }

    const err = e as unknown as {
      message?: unknown;
      details?: unknown;
      code?: unknown;
      metadata?: unknown;
    };

    const message =
      (typeof err.details === "string" && err.details) ||
      (typeof err.message === "string" && err.message) ||
      "Dialogflow request failed";

    return NextResponse.json(
      {
        error: message,
        code:
          process.env.NODE_ENV !== "production" && typeof err.code === "number"
            ? err.code
            : undefined,
      },
      { status: 500 },
    );
  }
}

