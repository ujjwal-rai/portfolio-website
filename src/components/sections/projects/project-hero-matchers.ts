import type { Project } from "./types";

/**
 * Title-based guards: which project gets a custom animated hero vs the default MorphingLogo card.
 * Keep keywords aligned with titles in `src/content/profile.ts`.
 */

export function isCryptageProject(project: Project): boolean {
  const title = project.title.toLowerCase();
  return title.includes("cryptage") || title.includes("crypto tracker");
}

export function isTwitterSentimentNlpProject(project: Project): boolean {
  const title = project.title.toLowerCase();
  return title.includes("twitter") && title.includes("sentiment");
}

export function isDataAnalysisDashboardProject(project: Project): boolean {
  const title = project.title.toLowerCase();
  return title.includes("data analysis") && title.includes("dashboard");
}

export function isGenderAgePredictionProject(project: Project): boolean {
  const title = project.title.toLowerCase();
  return (
    title.includes("gender") &&
    title.includes("age") &&
    title.includes("prediction")
  );
}

export function isChatbotEmbeddingsProject(project: Project): boolean {
  return project.title.toLowerCase().includes("chatbot");
}

export function isTiltRotorMechanismProject(project: Project): boolean {
  const title = project.title.toLowerCase();
  return title.includes("tilt") && title.includes("rotor");
}

export function isStokesLawTerminalVelocityProject(project: Project): boolean {
  const title = project.title.toLowerCase().normalize("NFKD");
  return (
    title.includes("stokes") ||
    (title.includes("terminal velocity") && title.includes("law"))
  );
}

export function isHomeSecurityAutomationProject(project: Project): boolean {
  const title = project.title.toLowerCase();
  return title.includes("home automation") && title.includes("security");
}

export function isAutonomousDeliveryBotProject(project: Project): boolean {
  const title = project.title.toLowerCase();
  return (
    title.includes("autonomous") &&
    title.includes("delivery") &&
    title.includes("bot")
  );
}
