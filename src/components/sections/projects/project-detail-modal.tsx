"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import type { ReactNode } from "react";

import { Badge } from "@/components/ui/Badge";

import { ProjectLinks } from "./project-links";
import type { Project } from "./types";

type ProjectDetailModalProps = {
  project: Project;
  /** Tab label shown under the title (e.g. AI/ML, SDE) */
  categoryLabel: string;
  hero: ReactNode;
};

/**
 * Radix dialog shell: overlay, hero region, title row, scrollable details.
 * Close control is fixed to the top-right of the modal (not aligned with the title row).
 */
export function ProjectDetailModal({
  project,
  categoryLabel,
  hero,
}: ProjectDetailModalProps) {
  return (
    <Dialog.Portal>
      <Dialog.Overlay className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
      {/* Only `fixed` here — `relative` + `fixed` both apply and whichever wins last in CSS can break centering (modal stuck off-screen / zero-sized). */}
      <Dialog.Content className="fixed left-1/2 top-1/2 z-[51] flex max-h-[90vh] w-[min(92vw,920px)] -translate-x-1/2 -translate-y-1/2 flex-col overflow-hidden rounded-3xl bg-[#0b0d14] shadow-[0_0_0_1px_rgba(255,255,255,0.12),0_25px_90px_rgba(0,0,0,0.6)] outline-none">
        <Dialog.Close asChild>
          <button
            type="button"
            className="absolute right-4 top-4 z-[60] inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#12151f]/95 text-white/90 shadow-[0_0_0_1px_rgba(255,255,255,0.12)] backdrop-blur-sm transition hover:bg-white/12 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/25"
            aria-label="Close project details"
          >
            <X className="h-4 w-4" aria-hidden />
          </button>
        </Dialog.Close>

        <div className="min-h-0 flex-1 overflow-y-auto overflow-x-hidden">
          <div className="px-6 pb-2 pt-6">{hero}</div>

          <header className="flex items-start justify-between gap-4 border-b border-white/10 px-6 pb-5 pt-2">
            <div className="min-w-0 flex-1 pr-2">
              <Dialog.Title className="text-base font-semibold text-white">
                {project.title}
              </Dialog.Title>
              <Dialog.Description className="mt-1 text-sm text-white/60">
                {categoryLabel}
              </Dialog.Description>
            </div>
            <div className="flex shrink-0 items-center gap-2 pt-0.5">
              <ProjectLinks project={project} />
            </div>
          </header>

          <div className="px-6 py-6">
            <p className="text-sm leading-6 text-white/75">{project.description}</p>

            <div className="mt-5 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <Badge key={tag}>{tag}</Badge>
              ))}
            </div>

            {(project.links?.github || project.links?.demo) && (
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {project.links.github ? (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-between gap-3 rounded-2xl bg-white/8 px-4 py-3 text-sm font-semibold text-white/85 shadow-[0_0_0_1px_rgba(255,255,255,0.10)] transition hover:bg-white/12"
                  >
                    <span>GitHub repository</span>
                    <span className="text-white/40">Open ↗</span>
                  </a>
                ) : null}
                {project.links.demo ? (
                  <a
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-between gap-3 rounded-2xl bg-white/8 px-4 py-3 text-sm font-semibold text-white/85 shadow-[0_0_0_1px_rgba(255,255,255,0.10)] transition hover:bg-white/12"
                  >
                    <span>Live demo</span>
                    <span className="text-white/40">Open ↗</span>
                  </a>
                ) : null}
              </div>
            )}
          </div>
        </div>
      </Dialog.Content>
    </Dialog.Portal>
  );
}
