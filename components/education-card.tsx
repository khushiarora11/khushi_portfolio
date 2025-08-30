"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"

interface EducationCardProps {
  degree: string
  institution: string
  location: string
  period: string
  grade: string
  activities: string
  index: number
}

export function EducationCard({ degree, institution, location, period, grade, activities, index }: EducationCardProps) {
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
              <CardTitle className="text-xl font-bold text-fuchsia-600 dark:text-fuchsia-400">{degree}</CardTitle>
              <CardDescription className="text-base font-medium">{institution}</CardDescription>
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
        <CardContent className="space-y-2">
          <div>
            <span className="font-medium">Grade:</span> <span className="text-muted-foreground">{grade}</span>
          </div>
          <div>
            <span className="font-medium">Activities:</span> <span className="text-muted-foreground">{activities}</span>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
