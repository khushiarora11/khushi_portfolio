"use client"

import { useState } from "react"
import { SectionContainer, SectionHeader } from "@/components/ui/fixed-section-container"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

export default function Projects() {
  // Project categories
  const categories = ["All", "Social Media", "Content", "Marketing"]
  const [activeCategory, setActiveCategory] = useState("All")

  // Projects data
  const projects = [
    {
      title: "Social Media Strategy for Newcastle University",
      description:
        "Developed and executed a comprehensive social media strategy to increase student engagement for university events.",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["Social Media", "Content", "Strategy"],
      link: "#",
    },
    {
      title: "Digital Marketing Campaign for Local Business",
      description:
        "Created and managed a full-scale digital marketing campaign for a local business, resulting in 40% increase in online sales.",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["Marketing", "Analytics", "Content"],
      link: "#",
    },
    {
      title: "Content Calendar Development for E-commerce",
      description:
        "Designed a 6-month content calendar for an e-commerce platform, including social media posts, blog articles, and email newsletters.",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["Content", "Strategy", "Marketing"],
      link: "#",
    },
    {
      title: "Instagram Growth Strategy",
      description:
        "Implemented a targeted growth strategy for a fashion brand's Instagram account, increasing followers by 200% in 3 months.",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["Social Media", "Analytics", "Strategy"],
      link: "#",
    },
    {
      title: "Email Marketing Sequence",
      description:
        "Developed an automated email marketing sequence for a SaaS company, improving conversion rates by 25%.",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["Marketing", "Content", "Strategy"],
      link: "#",
    },
    {
      title: "Community Management Guidelines",
      description:
        "Created comprehensive community management guidelines and procedures for a membership-based organization.",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["Social Media", "Content", "Strategy"],
      link: "#",
    },
  ]

  // Filter projects based on active category
  const filteredProjects =
    activeCategory === "All" ? projects : projects.filter((project) => project.tags.includes(activeCategory))

  return (
    <SectionContainer id="projects" className="relative">
      <ScrollReveal>
        <SectionHeader
          title="Projects"
          subtitle="A selection of my recent work and ongoing projects in digital marketing and content creation."
        />
      </ScrollReveal>

      <div className="flex justify-center flex-wrap gap-2 mt-8 md:mt-12">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={cn(
              "px-4 py-2 text-sm font-medium rounded-full transition-colors",
              activeCategory === category
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-muted-foreground hover:text-foreground hover:bg-muted/80",
            )}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {filteredProjects.map((project, index) => (
          <ScrollReveal key={index} delay={index * 0.1}>
            <div className="group bg-card border rounded-lg overflow-hidden transition-all hover:shadow-md">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold">{project.title}</h3>
                <p className="text-muted-foreground mt-2 text-sm">{project.description}</p>

                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="text-xs bg-muted px-2 py-1 rounded-md text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  className="inline-flex items-center text-sm text-primary font-medium mt-4 group-hover:underline"
                >
                  View Project
                  <ChevronRight className="h-4 w-4 ml-1" />
                </a>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </SectionContainer>
  )
}

