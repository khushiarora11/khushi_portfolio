import { HeroSection } from "@/components/hero-section"
import { StatsSection } from "@/components/stats-section"
import { AboutSection } from "@/components/about-section"
import { SkillsSection } from "@/components/skills-section"
import { HonorsAwardsSection } from "@/components/honors-awards-section"
import { RecommendationsSection } from "@/components/recommendations-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-fuchsia-50 via-purple-50 to-violet-50 dark:from-fuchsia-950 dark:via-purple-950 dark:to-violet-950">
      <HeroSection />
      <StatsSection />
      <AboutSection />
      <SkillsSection />
      <HonorsAwardsSection />
      <RecommendationsSection />
      <ContactSection />
      <Footer />
    </div>
  )
}
