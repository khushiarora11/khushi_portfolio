import { Navbar } from "@/components/navbar"
import { ProjectsSection } from "@/components/projects-section"
import { Footer } from "@/components/footer"

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-fuchsia-50 via-purple-50 to-violet-50 dark:from-fuchsia-950 dark:via-purple-950 dark:to-violet-950">
      <Navbar />
      <div className="pt-20">
        <ProjectsSection />
      </div>
      <Footer />
    </div>
  )
}
