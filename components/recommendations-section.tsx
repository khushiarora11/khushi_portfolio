"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Linkedin } from "lucide-react"

interface Recommendation {
  name: string
  position: string
  company: string
  date: string
  text: string
  avatarUrl?: string
  initials: string
}

const recommendations: Recommendation[] = [
  {
    name: "Joel Bland",
    position: "Student Recruitment and Marketing",
    company: "Newcastle University",
    date: "May 20, 2025",
    text: "I had the pleasure of managing Khushi during their time as our social media intern at Newcastle University, and they were a real asset to the team. They brought fresh, creative ideas to our school's Instagram and consistently produced high-quality, engaging content. Their editing skills are top-notch, and they always delivered on time with a great attitude. Reliable, creative, and driven—any organisation would be lucky to have them, especially with their ability to stay up to date with trending content and produce their own spin on things.",
    initials: "JB",
  },
  {
    name: "Pronami Priti Borah",
    position: "People Operations Head",
    company: "TravClan",
    date: "July 30, 2023",
    text: "Khushi has shown exemplary performance when it comes to the Marketing domain. She is always forthcoming and knows her work. She always brings fresh perspectives to the table and is enthusiastic about all the assignments she takes up. She even eagerly embraces feedback, is a super quick learner (having a sense of ownership), and effectively collaborates with her colleagues. I wish Khushi all the best in her future endeavors and I am quite confident that she will succeed in whatever projects she undertakes. Good to have you on our team and glad to be working with you, Khushi!",
    initials: "PPB",
  },
  {
    name: "Ehsaas Gakhar",
    position: "People Operations Associate",
    company: "TravClan",
    date: "July 25, 2023",
    text: "Khushi has contributed immensely in curating a brand and setting a great social media presence. Her ideas and dedication is admirable. She has been the go-to-person at work. All the best!",
    initials: "EG",
  },
]

export function RecommendationsSection() {
  return (
    <section id="recommendations" className="py-20 bg-white dark:bg-gray-950">
      <div className="container">
        <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="inline-block px-3 py-1 rounded-full bg-fuchsia-100 dark:bg-fuchsia-900/30 text-fuchsia-800 dark:text-fuchsia-300 text-sm font-medium mb-2">
            Recommendations
          </div>
          <h2 className="text-3xl font-bold tracking-tight mb-4 bg-gradient-to-r from-fuchsia-600 to-violet-600 dark:from-fuchsia-400 dark:to-violet-400 text-transparent bg-clip-text">
            What People Say
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Testimonials from colleagues and supervisors who have worked with me.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {recommendations.map((recommendation, index) => (
            <div
              key={index}
              className="animate-in fade-in slide-in-from-bottom-4 duration-700"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Card className="h-full border-fuchsia-200 dark:border-fuchsia-800 hover:shadow-md transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <Avatar className="h-12 w-12 border-2 border-fuchsia-200 dark:border-fuchsia-800">
                      {recommendation.avatarUrl ? (
                        <AvatarImage src={recommendation.avatarUrl || "/placeholder.svg"} alt={recommendation.name} />
                      ) : null}
                      <AvatarFallback className="bg-fuchsia-100 text-fuchsia-800 dark:bg-fuchsia-900 dark:text-fuchsia-200">
                        {recommendation.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="flex items-center gap-1">
                        <h3 className="font-semibold text-lg">{recommendation.name}</h3>
                        <Linkedin className="h-4 w-4 text-fuchsia-600 dark:text-fuchsia-400" />
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {recommendation.position} {recommendation.company ? `at ${recommendation.company}` : ""}
                      </p>
                      <p className="text-xs text-muted-foreground">{recommendation.date}</p>
                    </div>
                  </div>
                  <blockquote className="border-l-2 border-fuchsia-200 dark:border-fuchsia-800 pl-4 italic text-muted-foreground">
                    "{recommendation.text}"
                  </blockquote>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
