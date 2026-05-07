"use client";

import * as Dialog from "@radix-ui/react-dialog";
import * as Tabs from "@radix-ui/react-tabs";

import { MorphingLogo } from "@/components/motion/MorphingLogo";
import { Reveal } from "@/components/motion/Reveal";
import { Badge } from "@/components/ui/Badge";
import { Container, Section, SectionHeader } from "@/components/ui/Section";
import { profile } from "@/content/profile";
import { cn } from "@/lib/utils";

import {
  AutonomousDeliveryBotCard,
  BitcoinSpinCoin,
  ChatbotYappingCard,
  DataAnalysisDashboardCard,
  FlyingBirdSkyCard,
  GenderAgePredictionCard,
  HomeSecurityAutomationCard,
  StokesLawTerminalVelocityCard,
  TiltRotorMechanismCard,
} from "./animations";
import { morphTintForProjectCategory } from "./project-category-tint";
import { ProjectCardFooter } from "./project-card-footer";
import { ProjectDetailModal } from "./project-detail-modal";
import {
  isAutonomousDeliveryBotProject,
  isChatbotEmbeddingsProject,
  isCryptageProject,
  isDataAnalysisDashboardProject,
  isGenderAgePredictionProject,
  isHomeSecurityAutomationProject,
  isStokesLawTerminalVelocityProject,
  isTiltRotorMechanismProject,
  isTwitterSentimentNlpProject,
} from "./project-hero-matchers";
import { ProjectModalHero } from "./project-modal-hero";
import type { ProjectCategory } from "./types";

/**
 * Tabbed project grid: each card opens a {@link ProjectDetailModal} with {@link ProjectModalHero}.
 */
export function ProjectsSection() {
  const categories = Object.keys(profile.projects) as ProjectCategory[];
  const defaultTab = categories[0] ?? "AI/ML";

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
          <Tabs.Root defaultValue={defaultTab}>
            <Tabs.List className="inline-flex flex-wrap gap-2 rounded-full bg-white/5 p-2 shadow-[0_0_0_1px_rgba(255,255,255,0.10)]">
              {categories.map((category) => (
                <Tabs.Trigger
                  key={category}
                  value={category}
                  className={cn(
                    "rounded-full px-4 py-2 text-sm font-semibold text-white/70 outline-none transition",
                    "data-[state=active]:bg-white data-[state=active]:text-black data-[state=active]:shadow-[0_14px_40px_rgba(0,0,0,0.35)]",
                    "hover:bg-white/10 hover:text-white",
                  )}
                >
                  {category}
                </Tabs.Trigger>
              ))}
            </Tabs.List>

            {categories.map((category) => (
              <Tabs.Content key={category} value={category} className="mt-6 outline-none">
                <div className="grid auto-rows-[280px] gap-4 md:grid-cols-2 md:items-stretch">
                  {profile.projects[category].map((project, index) => (
                    <Reveal
                      key={`${category}-${project.title}-${index}`}
                      delay={0.03 * index}
                      className="min-h-0 h-full"
                    >
                      <Dialog.Root>
                        <Dialog.Trigger asChild>
                          <button
                            type="button"
                            className="group flex h-full min-h-0 w-full flex-col rounded-3xl bg-white/5 p-6 text-left shadow-[0_0_0_1px_rgba(255,255,255,0.10)] backdrop-blur-md transition hover:bg-white/7 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20"
                          >
                            {isCryptageProject(project) ? (
                              <>
                                <div className="grid min-h-0 flex-1 place-items-center">
                                  <BitcoinSpinCoin sizePx={168} depthPx={16} />
                                </div>
                                <ProjectCardFooter title={project.title} />
                              </>
                            ) : isTwitterSentimentNlpProject(project) ? (
                              <>
                                <div className="flex min-h-0 w-full flex-1 flex-col overflow-hidden">
                                  <FlyingBirdSkyCard variant="card" />
                                </div>
                                <ProjectCardFooter title={project.title} />
                              </>
                            ) : isDataAnalysisDashboardProject(project) ? (
                              <>
                                <div className="flex min-h-0 w-full flex-1 flex-col overflow-hidden">
                                  <DataAnalysisDashboardCard variant="card" />
                                </div>
                                <ProjectCardFooter title={project.title} />
                              </>
                            ) : isGenderAgePredictionProject(project) ? (
                              <>
                                <div className="flex min-h-0 w-full flex-1 flex-col overflow-hidden">
                                  <GenderAgePredictionCard variant="card" />
                                </div>
                                <ProjectCardFooter title={project.title} />
                              </>
                            ) : isChatbotEmbeddingsProject(project) ? (
                              <>
                                <div className="flex min-h-0 w-full flex-1 flex-col overflow-hidden">
                                  <ChatbotYappingCard variant="card" />
                                </div>
                                <ProjectCardFooter title={project.title} />
                              </>
                            ) : isTiltRotorMechanismProject(project) ? (
                              <>
                                <div className="flex min-h-0 w-full flex-1 flex-col items-center justify-center overflow-visible">
                                  <TiltRotorMechanismCard variant="card" />
                                </div>
                                <ProjectCardFooter title={project.title} />
                              </>
                            ) : isStokesLawTerminalVelocityProject(project) ? (
                              <>
                                <div className="flex min-h-0 w-full flex-1 flex-col items-center justify-center overflow-visible">
                                  <StokesLawTerminalVelocityCard variant="card" />
                                </div>
                                <ProjectCardFooter title={project.title} />
                              </>
                            ) : isHomeSecurityAutomationProject(project) ? (
                              <>
                                <div className="flex min-h-0 w-full flex-1 flex-col items-center justify-center overflow-visible">
                                  <HomeSecurityAutomationCard variant="card" />
                                </div>
                                <ProjectCardFooter title={project.title} />
                              </>
                            ) : isAutonomousDeliveryBotProject(project) ? (
                              <>
                                <div className="flex min-h-0 w-full flex-1 flex-col items-center justify-center overflow-visible">
                                  <AutonomousDeliveryBotCard variant="card" />
                                </div>
                                <ProjectCardFooter title={project.title} />
                              </>
                            ) : (
                              <>
                                <MorphingLogo
                                  compact
                                  tint={morphTintForProjectCategory(category)}
                                />

                                <div className="mt-5 flex min-h-0 flex-1 flex-col gap-4">
                                  <div className="flex min-h-0 shrink-0 items-start justify-between gap-4">
                                    <div className="min-w-0">
                                      <h3 className="text-lg font-semibold text-white">
                                        {project.title}
                                      </h3>
                                      <p className="mt-2 text-sm leading-6 text-white/70 line-clamp-3">
                                        {project.description}
                                      </p>
                                    </div>
                                  </div>

                                  <div className="mt-auto flex min-h-0 flex-wrap gap-2">
                                    {project.tags.map((tag) => (
                                      <Badge key={tag}>{tag}</Badge>
                                    ))}
                                  </div>
                                </div>

                                <div className="mt-4 text-xs font-medium text-white/30">
                                  Click to view details ↗
                                </div>
                              </>
                            )}
                          </button>
                        </Dialog.Trigger>

                        <ProjectDetailModal
                          project={project}
                          categoryLabel={category}
                          hero={
                            <ProjectModalHero project={project} category={category} />
                          }
                        />
                      </Dialog.Root>
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
