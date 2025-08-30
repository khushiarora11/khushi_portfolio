"use client"

import { motion } from "framer-motion"
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
    <section
      id="recommendations"
      className="py-20 bg-gradient-to-br from-fuchsia-50 via-purple-50 to-violet-50 dark:from-fuchsia-950 dark:via-purple-950 dark:to-violet-950"
    >
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-block px-3 py-1 rounded-full bg-fuchsia-100 dark:bg-fuchsia-900/30 text-fuchsia-800 dark:text-fuchsia-300 text-sm font-medium mb-2">
            Recommendations
          </div>
          <h2 className="text-3xl font-bold tracking-tight mb-4 bg-gradient-to-r from-fuchsia-600 to-violet-600 dark:from-fuchsia-400 dark:to-violet-400 text-transparent bg-clip-text">
            What People Say
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Testimonials from colleagues and supervisors who have worked with me.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {recommendations.map((recommendation, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-fuchsia-200 dark:border-fuchsia-800 hover:shadow-md transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <Avatar className="h-12 w-12 border-2 border-fuchsia-200 dark:border-fuchsia-800">
                      {recommendation.avatarUrl ? (
                        <AvatarImage src={recommendation.avatarUrl} alt={recommendation.name} />
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
