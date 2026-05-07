"use client";

import { ExternalLink, GitBranch } from "lucide-react";

import type { Project } from "./types";

/** Compact GitHub + demo icon buttons for project cards and dialogs */
export function ProjectLinks({ project }: { project: Project }) {
  return (
    <div className="flex shrink-0 items-center gap-2">
      {project.links?.github ? (
        <a
          className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white/80 hover:bg-white/15 hover:text-white"
          href={project.links.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <GitBranch className="h-4 w-4" />
        </a>
      ) : null}
      {project.links?.demo ? (
        <a
          className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white/80 hover:bg-white/15 hover:text-white"
          href={project.links.demo}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Live demo"
        >
          <ExternalLink className="h-4 w-4" />
        </a>
      ) : null}
    </div>
  );
}
