import { HeroSection } from "@/components/sections/hero-section"
import { AboutSection } from "@/components/sections/about-section"
import { SkillsSection } from "@/components/sections/skills-section"
import { ProjectsSection } from "@/components/sections/projects-section"
import { ContactSection } from "@/components/sections/contact-section"
import { Navigation } from "@/components/navigation/navigation"
import { FloatingElements } from "@/components/effects/floating-elements"

export default function HomePage() {
  return (
    <main className="relative min-h-screen">
      <Navigation />
      <FloatingElements />

      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  )
}
