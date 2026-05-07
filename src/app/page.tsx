import { AnimatedBackdrop } from "@/components/visual/AnimatedBackdrop";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { ExperienceSection } from "@/components/site/ExperienceSection";
import { ProjectsSection } from "@/components/site/ProjectsSection";
import { EducationSection } from "@/components/site/EducationSection";
import { ContactSection } from "@/components/site/ContactSection";
import { Footer } from "@/components/site/Footer";
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
