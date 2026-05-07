"use client";

import * as React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import * as ScrollArea from "@radix-ui/react-scroll-area";
import { Bot, Send, X } from "lucide-react";
import { cn } from "@/lib/utils";

type ChatMessage = {
  id: string;
  role: "user" | "bot";
  text: string;
};

function uid() {
  return Math.random().toString(16).slice(2) + Date.now().toString(16);
}

export function ChatbotWidget() {
  const [open, setOpen] = React.useState(false);
  const [messages, setMessages] = React.useState<ChatMessage[]>(() => [
    {
      id: uid(),
      role: "bot",
      text: "Hi! Ask me about my experience, projects, tech stack, or how to contact me.",
    },
  ]);
  const [text, setText] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const sessionId = React.useMemo(() => {
    if (typeof window === "undefined") return "server";
    const key = "portfolio_chat_session";
    const existing = window.localStorage.getItem(key);
    if (existing) return existing;
    const next = uid();
    window.localStorage.setItem(key, next);
    return next;
  }, []);

  const bottomRef = React.useRef<HTMLDivElement | null>(null);
  React.useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [messages, open]);

  async function send() {
    const trimmed = text.trim();
    if (!trimmed || loading) return;

    const userMsg: ChatMessage = { id: uid(), role: "user", text: trimmed };
    setMessages((m) => [...m, userMsg]);
    setText("");
    setLoading(true);

    try {
      const res = await fetch("/api/dialogflow", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ text: trimmed, sessionId }),
      });
      const data = (await res.json()) as { reply?: string; error?: string };
      const reply =
        data.reply ??
        data.error ??
        "Chatbot is not configured yet. Once Dialogflow is connected, I’ll answer here.";
      setMessages((m) => [...m, { id: uid(), role: "bot", text: reply }]);
    } catch {
      setMessages((m) => [
        ...m,
        {
          id: uid(),
          role: "bot",
          text: "Network error. Try again in a moment.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <button
          className={cn(
            "fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full",
            "bg-white px-4 py-3 text-sm font-semibold text-black shadow-[0_18px_60px_rgba(0,0,0,0.45)]",
            "hover:bg-white/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30",
          )}
        >
          <Bot className="h-4 w-4" />
          Chat
        </button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
        <Dialog.Content
          className={cn(
            "fixed bottom-5 right-5 z-50 w-[min(92vw,420px)] overflow-hidden rounded-3xl",
            "bg-[#0b0d14] shadow-[0_0_0_1px_rgba(255,255,255,0.12),0_25px_90px_rgba(0,0,0,0.6)]",
            "data-[state=open]:animate-in data-[state=open]:slide-in-from-bottom-4 data-[state=open]:fade-in-0",
            "data-[state=closed]:animate-out data-[state=closed]:slide-out-to-bottom-4 data-[state=closed]:fade-out-0",
          )}
        >
          <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
            <div className="flex items-center gap-2">
              <div className="grid h-9 w-9 place-items-center rounded-2xl bg-white/10 text-white">
                <Bot className="h-4 w-4" />
              </div>
              <div>
                <Dialog.Title className="text-sm font-semibold text-white">
                  Portfolio Assistant
                </Dialog.Title>
                <Dialog.Description className="text-xs text-white/60">
                  Powered by Dialogflow (when configured)
                </Dialog.Description>
              </div>
            </div>
            <Dialog.Close asChild>
              <button
                className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white/80 hover:bg-white/15 hover:text-white"
                aria-label="Close"
              >
                <X className="h-4 w-4" />
              </button>
            </Dialog.Close>
          </div>

          <ScrollArea.Root className="h-[360px]">
            <ScrollArea.Viewport className="h-full px-4 py-4">
              <div className="grid gap-3">
                {messages.map((m) => (
                  <MessageBubble key={m.id} role={m.role} text={m.text} />
                ))}
                <div ref={bottomRef} />
              </div>
            </ScrollArea.Viewport>
            <ScrollArea.Scrollbar
              className="flex w-2 touch-none select-none bg-transparent p-0.5"
              orientation="vertical"
            >
              <ScrollArea.Thumb className="relative flex-1 rounded-full bg-white/15" />
            </ScrollArea.Scrollbar>
          </ScrollArea.Root>

          <div className="border-t border-white/10 p-4">
            <form
              className="flex items-center gap-2"
              onSubmit={(e) => {
                e.preventDefault();
                void send();
              }}
            >
              <input
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Ask something…"
                className="h-11 flex-1 rounded-2xl bg-white/8 px-4 text-sm text-white placeholder:text-white/40 shadow-[0_0_0_1px_rgba(255,255,255,0.10)] focus:outline-none focus:ring-2 focus:ring-white/20"
              />
              <button
                type="submit"
                disabled={loading}
                className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-black shadow-[0_12px_40px_rgba(0,0,0,0.35)] hover:bg-white/90 disabled:opacity-60"
                aria-label="Send"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

function MessageBubble({ role, text }: { role: "user" | "bot"; text: string }) {
  const isUser = role === "user";
  return (
    <div className={cn("flex", isUser ? "justify-end" : "justify-start")}>
      <div
        className={cn(
          "max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-6 shadow-[0_0_0_1px_rgba(255,255,255,0.10)]",
          isUser
            ? "bg-white text-black"
            : "bg-white/8 text-white backdrop-blur",
        )}
      >
        {text}
      </div>
    </div>
  );
}

