"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"

interface ExperienceCardProps {
  title: string
  company: string
  location: string
  period: string
  description: string[]
  index: number
}

export function ExperienceCard({ title, company, location, period, description, index }: ExperienceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Card className="overflow-hidden h-full border-fuchsia-200 dark:border-fuchsia-800 hover:shadow-md transition-shadow duration-300">
        <CardHeader className="pb-2">
          <div className="flex justify-between items-start">
            <div>
              <CardTitle className="text-xl font-bold text-fuchsia-600 dark:text-fuchsia-400">{title}</CardTitle>
              <CardDescription className="text-base font-medium">{company}</CardDescription>
            </div>
            <Badge
              variant="outline"
              className="border-fuchsia-200 bg-fuchsia-50 text-fuchsia-700 dark:border-fuchsia-800 dark:bg-fuchsia-900/30 dark:text-fuchsia-300"
            >
              {period}
            </Badge>
          </div>
          <CardDescription>{location}</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
            {description.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </motion.div>
  )
}
