"use client"

import { Card, CardContent } from "@/components/ui/card"
import { AwardIcon, Star } from "lucide-react"

interface Award {
  title: string
  date: string
  organization: string
  description?: string
  icon: "star" | "award"
}

const awards: Award[] = [
  {
    title: "Shining Star of the Month",
    date: "May 2023",
    organization: "TravClan",
    description:
      "Recognized for outstanding performance and exceptional contribution to social media marketing campaigns.",
    icon: "star",
  },
  {
    title: "Nominated for Intern of the Year",
    date: "2024-2025",
    organization: "Newcastle University",
    description:
      "Nominated for exceptional performance as a Social Media Marketing Assistant at the School of Arts and Cultures.",
    icon: "award",
  },
]

export function HonorsAwardsSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-fuchsia-50 via-purple-50 to-violet-50 dark:from-fuchsia-950 dark:via-purple-950 dark:to-violet-950">
      <div className="container">
        <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h2 className="text-3xl font-bold tracking-tight mb-4 bg-gradient-to-r from-fuchsia-600 to-violet-600 dark:from-fuchsia-400 dark:to-violet-400 text-transparent bg-clip-text">
            Awards & Recognition
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Awards and recognition received for outstanding performance and contributions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {awards.map((award, index) => (
            <div
              key={index}
              className="animate-in fade-in slide-in-from-bottom-4 duration-700"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Card className="h-full border-fuchsia-200 dark:border-fuchsia-800 hover:shadow-md transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-to-r from-fuchsia-100 to-violet-100 dark:from-fuchsia-900/30 dark:to-violet-900/30 p-3 rounded-full">
                      {award.icon === "star" ? (
                        <Star className="h-6 w-6 text-fuchsia-600 dark:text-fuchsia-400" />
                      ) : (
                        <AwardIcon className="h-6 w-6 text-fuchsia-600 dark:text-fuchsia-400" />
                      )}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-fuchsia-600 dark:text-fuchsia-400 mb-2">{award.title}</h3>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                        <p className="text-muted-foreground font-medium">{award.organization}</p>
                        <p className="text-sm text-muted-foreground">{award.date}</p>
                      </div>
                      {award.description && (
                        <p className="text-muted-foreground text-sm leading-relaxed">{award.description}</p>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
