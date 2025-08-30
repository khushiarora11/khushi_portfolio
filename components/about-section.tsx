"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { MapPin } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-950">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <div className="inline-block px-3 py-1 rounded-full bg-fuchsia-100 dark:bg-fuchsia-900/30 text-fuchsia-800 dark:text-fuchsia-300 text-sm font-medium mb-2">
            About Me
          </div>
          <h2 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-fuchsia-600 to-violet-600 dark:from-fuchsia-400 dark:to-violet-400 text-transparent bg-clip-text mb-4">
            About Me
          </h2>
          <div className="flex items-center gap-2 text-muted-foreground mb-6">
            <MapPin className="h-4 w-4 text-fuchsia-600 dark:text-fuchsia-400" />
            <span>Newcastle upon Tyne, UK</span>
          </div>
          <div className="space-y-4 text-muted-foreground">
            <p>
              Pursuing an MSc in Digital Marketing from Newcastle University, I have gained practical experience across
              4+ roles in Social Media Marketing, Content Creation, Campaign Management and Community Building. Proven
              track record of capturing brand voice, analyzing performance metrics, and collaborating cross-functionally
              to achieve marketing objectives.
            </p>
            <p>
              I've had the opportunity to work on a diverse range of projects, including website content, social media
              posts, blogs, ads, scripts etc. Throughout these projects, I've collaborated with different departments,
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
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Button
              asChild
              className="bg-fuchsia-600 hover:bg-fuchsia-700 dark:bg-fuchsia-600 dark:hover:bg-fuchsia-700"
            >
              <Link href="#contact" className="inline-flex items-center gap-2">
                Contact Me
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
