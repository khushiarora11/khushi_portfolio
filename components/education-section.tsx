"use client"

import { motion } from "framer-motion"
import { EducationCard } from "@/components/education-card"

const education = [
  {
    degree: "MSc Digital Marketing",
    institution: "Newcastle University",
    location: "Newcastle upon Tyne, UK",
    period: "September 2024 - Present",
    grade: "Distinction (Predicted)",
    activities: "Course Rep, Business Ambassador, International Marketing Ambassador",
  },
  {
    degree: "Bachelor of Arts in Entrepreneurship",
    institution: "University of Delhi",
    location: "New Delhi, India",
    period: "June 2021 - 2024",
    grade: "Upper Second-Class Honours (2:1)",
    activities: "President, RAQS: The Dramatics Society Of Kalindi College",
  },
]

export function EducationSection() {
  return (
    <section id="education" className="py-20 bg-white dark:bg-gray-950">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-block px-3 py-1 rounded-full bg-fuchsia-100 dark:bg-fuchsia-900/30 text-fuchsia-800 dark:text-fuchsia-300 text-sm font-medium mb-2">
            Education
          </div>
          <h2 className="text-3xl font-bold tracking-tight mb-4 bg-gradient-to-r from-fuchsia-600 to-violet-600 dark:from-fuchsia-400 dark:to-violet-400 text-transparent bg-clip-text">
            Academic Background
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My educational journey in digital marketing and entrepreneurship.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {education.map((edu, index) => (
            <EducationCard key={index} {...edu} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
