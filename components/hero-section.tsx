"use client"

import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"
import { motion } from "framer-motion"
import { ArrowDown, Linkedin, Mail, FileText } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function HeroSection() {
  return (
    <div className="relative">
      <Navbar />
      <div className="container min-h-[calc(100vh-4rem)] flex items-center py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="md:col-span-7 space-y-6"
          >
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              <span className="block">Hi, I'm Khushi Arora</span>
              <span className="bg-gradient-to-r from-fuchsia-600 via-purple-600 to-violet-600 dark:from-fuchsia-400 dark:via-purple-400 dark:to-violet-400 text-transparent bg-clip-text">
                Social Media Strategist
              </span>
            </h1>
            <p className="text-xl text-muted-foreground md:text-2xl">
              Bringing passion to every post and purpose to every strategy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-fuchsia-600 hover:bg-fuchsia-700 dark:bg-fuchsia-600 dark:hover:bg-fuchsia-700"
              >
                <Link href="#contact" className="inline-flex items-center gap-2">
                  <Mail className="h-4 w-4" /> Contact Me
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-fuchsia-600 text-fuchsia-600 hover:bg-fuchsia-50 dark:border-fuchsia-400 dark:text-fuchsia-400 dark:hover:bg-fuchsia-950 bg-transparent"
              >
                <Link href="/cv" className="inline-flex items-center gap-2">
                  <FileText className="h-4 w-4" /> View CV
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-fuchsia-600 text-fuchsia-600 hover:bg-fuchsia-50 dark:border-fuchsia-400 dark:text-fuchsia-400 dark:hover:bg-fuchsia-950 bg-transparent"
              >
                <Link
                  href="https://linkedin.com/in/khushiarora1/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  <Linkedin className="h-4 w-4" /> LinkedIn
                </Link>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-5 flex justify-center md:justify-end"
          >
            <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-fuchsia-200 dark:border-fuchsia-800 shadow-xl">
              <Image
                src="/images/khushi-headshot.jpeg"
                alt="Khushi Arora - Professional Headshot"
                fill
                className="object-cover"
                style={{ objectPosition: "50% 30%" }}
                priority
              />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:flex flex-col items-center"
        >
          <Link
            href="#about"
            className="flex flex-col items-center text-muted-foreground hover:text-fuchsia-600 dark:hover:text-fuchsia-400 transition-colors"
          >
            <span className="text-sm mb-2">Scroll Down</span>
            <ArrowDown className="animate-bounce" />
          </Link>
        </motion.div>
      </div>
    </div>
  )
}
