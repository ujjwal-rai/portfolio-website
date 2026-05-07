import { profile } from "@/content/profile";

/** Tab keys in `profile.projects` (AI/ML, SDE, IoT, Mechanical, …) */
export type ProjectCategory = keyof typeof profile.projects;

/** Single project entry from the profile */
export type Project = (typeof profile.projects)[ProjectCategory][number];

/** Hero animations render in the grid card and/or the dialog header */
export type HeroCardVariant = "card" | "modal";
