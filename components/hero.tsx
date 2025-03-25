"use client"

import { type MouseEvent, useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowDown, Download, Github, Linkedin } from "lucide-react"
import { motion } from "framer-motion"
import { useIsClient } from "@/hooks/use-is-client"

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const heroRef = useRef<HTMLDivElement>(null)
  const isClient = useIsClient()

  useEffect(() => {
    const handleMouseMove = (e: globalThis.MouseEvent) => {
      if (!heroRef.current) return

      const { left, top, width, height } = heroRef.current.getBoundingClientRect()
      const x = (e.clientX - left) / width
      const y = (e.clientY - top) / height

      setMousePosition({ x, y })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const handleScroll = (e: MouseEvent) => {
    e.preventDefault()
    const aboutSection = document.getElementById("about")
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  // Parallax effect values
  const moveX = mousePosition.x * 20
  const moveY = mousePosition.y * 20
  const rotateX = (mousePosition.y - 0.5) * 10
  const rotateY = (mousePosition.x - 0.5) * -10

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 lg:py-32"
      ref={heroRef}
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-background/50 z-10" />

      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {isClient && (
          <>
            <motion.div
              className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary/5 blur-3xl"
              animate={{
                x: moveX * -1,
                y: moveY * -1,
              }}
              transition={{ type: "spring", damping: 50 }}
            />
            <motion.div
              className="absolute bottom-1/3 right-1/3 w-96 h-96 rounded-full bg-secondary/5 blur-3xl"
              animate={{
                x: moveX,
                y: moveY,
              }}
              transition={{ type: "spring", damping: 50 }}
            />
          </>
        )}
      </div>

      {/* Content container */}
      <div className="container relative z-20">
        <div className="max-w-3xl mx-auto text-center">
          {/* Main content */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text">
                Khushi Arora
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Social Media Strategist blending creative content with data-driven insights
            </p>

            {/* 3D animated card */}
            <motion.div
              className="bg-card backdrop-blur-sm border shadow-lg rounded-lg p-6 md:p-8 mb-8 transform perspective-1000"
              animate={{
                rotateX: rotateX,
                rotateY: rotateY,
              }}
              transition={{ type: "spring", damping: 30 }}
            >
              <p className="text-muted-foreground mb-4">"Hustle with heart; market with mind"</p>
              <p>
                I help brands connect authentically with their audiences through strategic social media marketing and
                compelling content that drives engagement and results.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" asChild>
                <a href="#contact">Get in Touch</a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="/resume.pdf" download="Khushi_Arora_Resume.pdf">
                  <Download className="mr-2 h-4 w-4" /> Download CV
                </a>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center gap-4 mt-8">
              <a
                href="https://www.linkedin.com/in/khushiarora1/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-card hover:bg-muted border rounded-full p-3 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-card hover:bg-muted border rounded-full p-3 transition-colors"
                aria-label="GitHub Profile"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            <Button
              variant="ghost"
              size="icon"
              className="animate-bounce rounded-full"
              onClick={handleScroll}
              aria-label="Scroll to About section"
            >
              <ArrowDown className="h-6 w-6" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

