"use client";

import * as Tabs from "@radix-ui/react-tabs";
import { profile } from "@/content/profile";
import { Reveal } from "@/components/motion/Reveal";
import { Badge } from "@/components/ui/Badge";
import { Container, Section, SectionHeader } from "@/components/ui/Section";
import { cn } from "@/lib/utils";
import { ExternalLink, GitBranch } from "lucide-react";

type ProjectCategory = keyof typeof profile.projects;

export function ProjectsSection() {
  const categories = Object.keys(profile.projects) as ProjectCategory[];
  const defaultValue = categories[0] ?? "AI/ML";

  return (
    <Section id="projects">
      <Container>
        <Reveal>
          <SectionHeader
            eyebrow="Work"
            title="Projects"
            description="Tabbed by domain: AI/ML, SDE, IoT, and Mechanical."
          />
        </Reveal>

        <Reveal delay={0.05}>
          <Tabs.Root defaultValue={defaultValue}>
            <Tabs.List className="inline-flex flex-wrap gap-2 rounded-full bg-white/5 p-2 shadow-[0_0_0_1px_rgba(255,255,255,0.10)]">
              {categories.map((c) => (
                <Tabs.Trigger
                  key={c}
                  value={c}
                  className={cn(
                    "rounded-full px-4 py-2 text-sm font-semibold text-white/70 outline-none transition",
                    "data-[state=active]:bg-white data-[state=active]:text-black data-[state=active]:shadow-[0_14px_40px_rgba(0,0,0,0.35)]",
                    "hover:bg-white/10 hover:text-white",
                  )}
                >
                  {c}
                </Tabs.Trigger>
              ))}
            </Tabs.List>

            {categories.map((c) => (
              <Tabs.Content key={c} value={c} className="mt-6 outline-none">
                <div className="grid auto-rows-fr gap-4 md:grid-cols-2">
                  {profile.projects[c].map((p, idx) => (
                    <Reveal
                      key={`${c}-${p.title}-${idx}`}
                      delay={0.03 * idx}
                      className="h-full"
                    >
                      <article className="flex h-full min-h-[260px] flex-col rounded-3xl bg-white/5 p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.10)] backdrop-blur-md transition hover:bg-white/7">
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <h3 className="text-lg font-semibold text-white">
                              {p.title}
                            </h3>
                            <p className="mt-2 text-sm leading-6 text-white/70">
                              {p.description}
                            </p>
                          </div>
                          <div className="flex shrink-0 items-center gap-2">
                            {p.links?.github ? (
                              <a
                                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white/80 hover:bg-white/15 hover:text-white"
                                href={p.links.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub"
                              >
                                <GitBranch className="h-4 w-4" />
                              </a>
                            ) : null}
                            {p.links?.demo ? (
                              <a
                                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white/80 hover:bg-white/15 hover:text-white"
                                href={p.links.demo}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Live demo"
                              >
                                <ExternalLink className="h-4 w-4" />
                              </a>
                            ) : null}
                          </div>
                        </div>

                        <div className="mt-auto pt-5 flex flex-wrap gap-2">
                          {p.tags.map((t) => (
                            <Badge key={t}>{t}</Badge>
                          ))}
                        </div>
                      </article>
                    </Reveal>
                  ))}
                </div>
              </Tabs.Content>
            ))}
          </Tabs.Root>
        </Reveal>
      </Container>
    </Section>
  );
}

