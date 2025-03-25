"use client"

import type React from "react"

import { useState } from "react"
import { SectionContainer, SectionHeader } from "@/components/ui/fixed-section-container"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { Progress } from "@/components/ui/progress"
import { Box, BarChart, Layers, LineChart, Palette, BrainCircuit } from "lucide-react"
import { cn } from "@/lib/utils"

// Define the SkillCategory type
interface SkillCategory {
  name: string
  icon: React.ReactNode
  skills: Array<{
    name: string
    level: number
    color?: string
  }>
}

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<string>("Marketing")

  // Define the skill categories with their respective skills
  const skillCategories: SkillCategory[] = [
    {
      name: "Marketing",
      icon: <BarChart className="h-5 w-5" />,
      skills: [
        { name: "Digital Marketing", level: 85 },
        { name: "Content Marketing", level: 90 },
        { name: "Social Media Marketing", level: 95 },
        { name: "Email Marketing", level: 80 },
        { name: "SEO", level: 75 },
      ],
    },
    {
      name: "Content",
      icon: <Layers className="h-5 w-5" />,
      skills: [
        { name: "Content Creation", level: 90 },
        { name: "Copywriting", level: 85 },
        { name: "Blog Writing", level: 80 },
        { name: "Script Writing", level: 75 },
        { name: "Editing", level: 85 },
      ],
    },
    {
      name: "Design",
      icon: <Palette className="h-5 w-5" />,
      skills: [
        { name: "Social Media Design", level: 80 },
        { name: "Brand Identity", level: 75 },
        { name: "Visual Communication", level: 85 },
        { name: "Typography", level: 70 },
        { name: "Color Theory", level: 80 },
      ],
    },
    {
      name: "Analytics",
      icon: <LineChart className="h-5 w-5" />,
      skills: [
        { name: "Google Analytics", level: 80 },
        { name: "Social Media Analytics", level: 90 },
        { name: "Data Visualization", level: 75 },
        { name: "Performance Tracking", level: 85 },
        { name: "Insights & Reporting", level: 80 },
      ],
    },
    {
      name: "Technical",
      icon: <Box className="h-5 w-5" />,
      skills: [
        { name: "HTML/CSS", level: 60 },
        { name: "SEO Best Practices", level: 75 },
        { name: "CMS (WordPress)", level: 70 },
        { name: "Social Media APIs", level: 65 },
        { name: "Marketing Tools", level: 85 },
      ],
    },
    {
      name: "Soft Skills",
      icon: <BrainCircuit className="h-5 w-5" />,
      skills: [
        { name: "Communication", level: 95 },
        { name: "Creativity", level: 90 },
        { name: "Problem Solving", level: 85 },
        { name: "Adaptability", level: 90 },
        { name: "Project Management", level: 80 },
      ],
    },
  ]

  // Find the active category
  const activeSkills = skillCategories.find((cat) => cat.name === activeCategory)?.skills || []

  // Calculate statistics
  const stats = [
    { label: "Years Experience", value: "2+" },
    { label: "Projects Completed", value: "12+" },
    { label: "Roles", value: "5+" },
    { label: "Platforms Mastered", value: "4+" },
  ]

  // Languages
  const languages = [
    { name: "English", proficiency: "Professional working proficiency" },
    { name: "Hindi", proficiency: "Native or bilingual proficiency" },
  ]

  return (
    <SectionContainer id="skills" className="relative overflow-hidden">
      <ScrollReveal>
        <SectionHeader
          title="Skills & Expertise"
          subtitle="I've cultivated a diverse skill set that enables me to create effective marketing campaigns and compelling content."
        />
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        {/* Statistics Section */}
        <ScrollReveal className="col-span-1 space-y-8">
          <div className="bg-card rounded-lg border shadow-sm p-6">
            <h3 className="text-xl font-semibold mb-4">At a Glance</h3>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-4 bg-muted rounded-md">
                  <div className="text-3xl font-bold text-primary">{stat.value}</div>
                  <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-card rounded-lg border shadow-sm p-6">
            <h3 className="text-xl font-semibold mb-4">Languages</h3>
            <div className="space-y-4">
              {languages.map((lang, index) => (
                <div key={index} className="space-y-1">
                  <div className="flex justify-between">
                    <span className="font-medium">{lang.name}</span>
                    <span className="text-sm text-muted-foreground">{lang.proficiency}</span>
                  </div>
                  <Progress value={lang.name === "English" ? 85 : 100} className="h-2" />
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Skills Categories and Details */}
        <div className="col-span-1 md:col-span-2 bg-card rounded-lg border shadow-sm overflow-hidden">
          <div className="grid grid-cols-3 md:grid-cols-6 border-b">
            {skillCategories.map((category) => (
              <button
                key={category.name}
                onClick={() => setActiveCategory(category.name)}
                className={cn(
                  "flex flex-col items-center justify-center py-4 px-2 transition-colors",
                  category.name === activeCategory
                    ? "bg-background text-primary border-b-2 border-primary"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted",
                )}
              >
                <div className="mb-1">{category.icon}</div>
                <span className="text-xs font-medium">{category.name}</span>
              </button>
            ))}
          </div>

          <div className="p-6">
            <h3 className="text-xl font-semibold mb-6">{activeCategory} Skills</h3>
            <div className="space-y-8">
              {activeSkills.map((skill, index) => (
                <ScrollReveal key={index} className="space-y-2" delay={index * 0.1}>
                  <div className="flex justify-between">
                    <span className="font-medium">{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  )
}

