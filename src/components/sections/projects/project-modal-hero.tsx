"use client";

import { MorphingLogo } from "@/components/motion/MorphingLogo";

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
import type { Project, ProjectCategory } from "./types";

/**
 * Large illustration shown at the top of the project detail dialog.
 */
export function ProjectModalHero({
  project,
  category,
}: {
  project: Project;
  category: ProjectCategory;
}) {
  const tint = morphTintForProjectCategory(category);

  if (isCryptageProject(project)) {
    return (
      <div className="grid place-items-center rounded-2xl bg-white/5 py-6 shadow-[0_0_0_1px_rgba(255,255,255,0.08)]">
        <BitcoinSpinCoin sizePx={160} depthPx={18} />
      </div>
    );
  }
  if (isTwitterSentimentNlpProject(project)) {
    return <FlyingBirdSkyCard variant="modal" />;
  }
  if (isDataAnalysisDashboardProject(project)) {
    return <DataAnalysisDashboardCard variant="modal" />;
  }
  if (isGenderAgePredictionProject(project)) {
    return <GenderAgePredictionCard variant="modal" />;
  }
  if (isChatbotEmbeddingsProject(project)) {
    return <ChatbotYappingCard variant="modal" />;
  }
  if (isTiltRotorMechanismProject(project)) {
    return <TiltRotorMechanismCard variant="modal" />;
  }
  if (isStokesLawTerminalVelocityProject(project)) {
    return <StokesLawTerminalVelocityCard variant="modal" />;
  }
  if (isHomeSecurityAutomationProject(project)) {
    return <HomeSecurityAutomationCard variant="modal" />;
  }
  if (isAutonomousDeliveryBotProject(project)) {
    return <AutonomousDeliveryBotCard variant="modal" />;
  }

  return <MorphingLogo tint={tint} />;
}
