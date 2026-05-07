import type { ProjectCategory } from "./types";

/** Gradient accent for `MorphingLogo` — maps profile tab to logo palette */
export type MorphLogoTint = "cyan" | "violet" | "emerald" | "amber";

export function morphTintForProjectCategory(
  category: ProjectCategory,
): MorphLogoTint {
  switch (category) {
    case "AI/ML":
      return "violet";
    case "IoT":
      return "emerald";
    case "Mechanical":
      return "amber";
    default:
      return "cyan";
  }
}
