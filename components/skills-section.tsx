"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

interface SkillCategory {
  category: string
  skills: string[]
}

const skillCategories: SkillCategory[] = [
  {
    category: "Digital Marketing",
    skills: [
      "Google Ads",
      "Meta Business Suite",
      "Social Media Strategy",
      "Campaign Management",
      "Content Marketing",
      "Brand Development",
    ],
  },
  {
    category: "Social Media",
    skills: [
      "Hootsuite",
      "Asana",
      "Social Media Analytics",
      "Community Management",
      "Influencer Partnerships",
      "Content Calendars",
    ],
  },
  {
    category: "Content Creation",
    skills: ["Canva", "Figma", "Adobe Creative Suite", "CapCut", "Video Editing", "Copywriting"],
  },
  {
    category: "Analytics & SEO",
    skills: [
      "Google Analytics",
      "Google Analytics 4",
      "Looker Studio",
      "SEMrush",
      "KPI Tracking",
      "SEO Optimization",
      "Performance Metrics",
      "Data-driven Strategy",
    ],
  },
  {
    category: "Other Tools",
    skills: [
      "Microsoft Office",
      "CRM Systems",
      "Hubspot",
      "Mailchimp",
      "Website Management",
      "Cross-functional Collaboration",
    ],
  },
]

const languages = ["English (Fluent)", "Hindi (Native)"]

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="py-20 bg-gradient-to-br from-fuchsia-50 via-purple-50 to-violet-50 dark:from-fuchsia-950 dark:via-purple-950 dark:to-violet-950"
    >
      <div className="container">
        <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="inline-block px-3 py-1 rounded-full bg-fuchsia-100 dark:bg-fuchsia-900/30 text-fuchsia-800 dark:text-fuchsia-300 text-sm font-medium mb-2">
            Skills & Languages
          </div>
          <h2 className="text-3xl font-bold tracking-tight mb-4 bg-gradient-to-r from-fuchsia-600 to-violet-600 dark:from-fuchsia-400 dark:to-violet-400 text-transparent bg-clip-text">
            Professional Expertise
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and language proficiency.
          </p>
        </div>
        <Tabs defaultValue="Digital Marketing" className="max-w-4xl mx-auto">
          <TabsList className="grid grid-cols-2 md:grid-cols-5 mb-8">
            {skillCategories.map((category) => (
              <TabsTrigger key={category.category} value={category.category}>
                {category.category}
              </TabsTrigger>
            ))}
          </TabsList>
          {skillCategories.map((category) => (
            <TabsContent key={category.category} value={category.category}>
              <Card className="border-fuchsia-200 dark:border-fuchsia-800">
                <CardContent className="p-6">
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge
                        key={skill}
                        className="bg-gradient-to-r from-fuchsia-500 to-violet-500 hover:from-fuchsia-600 hover:to-violet-600 text-white dark:from-fuchsia-600 dark:to-violet-600 dark:hover:from-fuchsia-500 dark:hover:to-violet-500 px-3 py-1 text-sm"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>

        <div className="mt-12 text-center animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
          <h3 className="text-xl font-bold mb-4">Languages</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {languages.map((language) => (
              <Badge
                key={language}
                variant="outline"
                className="border-fuchsia-300 dark:border-fuchsia-700 px-4 py-2 text-base"
              >
                {language}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
