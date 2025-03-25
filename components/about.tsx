"use client"

import { SectionContainer, SectionHeader } from "@/components/ui/fixed-section-container"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { Button } from "@/components/ui/button"
import { FileText, ArrowRight } from "lucide-react"

export default function About() {
  return (
    <SectionContainer id="about" className="relative">
      <ScrollReveal>
        <SectionHeader
          title="About Me"
          subtitle="Learn more about my background, experience, and what drives me as a digital marketing professional."
        />
      </ScrollReveal>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 mt-12">
        <ScrollReveal className="flex justify-center lg:justify-end">
          <div className="relative w-full max-w-md">
            {/* Main image */}
            <img
              src="/placeholder.svg?height=600&width=500"
              alt="Khushi Arora"
              className="rounded-lg shadow-lg w-full max-w-md object-cover aspect-[3/4] z-10 relative border-4 border-background"
            />
            {/* Decorative elements */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-primary rounded-lg" />
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/10 rounded-full blur-xl" />
            <div className="absolute -bottom-6 right-10 w-32 h-32 bg-secondary/10 rounded-full blur-xl" />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2} className="flex flex-col justify-center">
          <h3 className="text-2xl font-bold mb-4">Digital Marketing Professional with a Passion for Creating Impact</h3>

          <div className="space-y-4 text-muted-foreground">
            <p>
              Pursuing an MSc in Digital Marketing from Newcastle University, I have gained practical experience across
              5+ roles in Social Media Marketing, Content Ideation, Campaign Management and Community Building.
            </p>
            <p>
              I've had the opportunity to work on a diverse range of projects, including website content, social media
              posts, blogs, ads, and scripts. Throughout these projects, I've collaborated with different departments,
              managing multiple content initiatives simultaneously.
            </p>
            <p>
              I excel at crafting engaging brand stories that enhance brand visibility and resonate with audiences
              across various platforms. My experience has refined my ability to create high-impact content that grabs
              attention and delivers results.
            </p>
            <p>
              I'm eager to apply my skills, creativity, and enthusiasm to new challenges, helping brands thrive with
              effective content.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button asChild>
              <a href="#contact">
                Work with Me <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href="#experience">
                <FileText className="mr-2 h-4 w-4" /> View Experience
              </a>
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </SectionContainer>
  )
}

