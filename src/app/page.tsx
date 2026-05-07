import { AnimatedBackdrop } from "@/components/visual/AnimatedBackdrop";
import { Footer, Header } from "@/components/layout";
import {
  ContactSection,
  EducationSection,
  ExperienceSection,
  Hero,
  ProjectsSection,
} from "@/components/sections";
import { ChatbotWidget } from "@/components/chat/ChatbotWidget";

export default function Home() {
  return (
    <div className="min-h-dvh">
      <AnimatedBackdrop />
      <Header brand="My Portfolio" />
      <main>
        <Hero />
        <ExperienceSection />
        <ProjectsSection />
        <EducationSection />
        <ContactSection />
      </main>
      <Footer />
      <ChatbotWidget />
    </div>
  );
}
