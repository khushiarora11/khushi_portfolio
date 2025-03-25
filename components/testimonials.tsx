"use client"

import { useState, useEffect, useCallback } from "react"
import { SectionContainer, SectionHeader } from "@/components/ui/fixed-section-container"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { cn } from "@/lib/utils"

export default function Testimonials() {
  const testimonials = [
    {
      content:
        "Khushi has shown exemplary performance when it comes to the Marketing domain. She is always forthcoming and knows her work. She always brings fresh perspectives to the table and is enthusiastic about all the assignments she takes up.",
      author: "Pronami Priti Borah",
      position: "People Operations Head, TravClan",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      content:
        "Khushi has contributed immensely in curating a brand and setting a great social media presence. Her ideas and dedication is admirable. She has been the go-to-person at work.",
      author: "Ehsaas Gakhar",
      position: "Team Lead, TravClan",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      content:
        "Khushi has done some great work as a new intern, learning and executing tasks with great speed. She has managed our social media handles very well, showcasing some incredibly imaginative ideas.",
      author: "Alex Johnson",
      position: "Marketing Director, Newcastle University",
      image: "/placeholder.svg?height=100&width=100",
    },
  ]

  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const nextTestimonial = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }, [testimonials.length])

  const prevTestimonial = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }, [testimonials.length])

  // Auto rotate testimonials
  useEffect(() => {
    if (isPaused) return

    const interval = setInterval(() => {
      nextTestimonial()
    }, 8000)

    return () => clearInterval(interval)
  }, [isPaused, nextTestimonial])

  return (
    <SectionContainer id="testimonials" className="relative">
      <ScrollReveal>
        <SectionHeader title="Testimonials" subtitle="What others say about working with me." />
      </ScrollReveal>

      <div
        className="mt-12 max-w-4xl mx-auto relative bg-card border rounded-lg p-6 lg:p-10 shadow-sm"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <Quote className="absolute text-primary/10 h-24 w-24 -top-4 -left-4 rotate-180" />

        <div className="relative z-10">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={cn(
                "transition-opacity duration-500 absolute inset-0",
                activeIndex === index ? "opacity-100 z-10" : "opacity-0 -z-10",
              )}
            >
              <blockquote className="text-lg md:text-xl italic text-muted-foreground">
                "{testimonial.content}"
              </blockquote>

              <div className="mt-6 flex items-center gap-4">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.author}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-medium">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.position}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Indicators and navigation */}
        <div className="absolute bottom-6 lg:bottom-10 right-6 lg:right-10 flex items-center gap-4">
          {/* Indicators */}
          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={cn(
                  "h-2 rounded-full transition-all",
                  activeIndex === index ? "w-6 bg-primary" : "w-2 bg-primary/30",
                )}
                onClick={() => setActiveIndex(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Navigation buttons */}
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8 rounded-full"
              onClick={prevTestimonial}
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8 rounded-full"
              onClick={nextTestimonial}
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </SectionContainer>
  )
}

