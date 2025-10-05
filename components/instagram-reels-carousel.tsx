"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Instagram } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

interface InstagramReel {
  url: string
  thumbnail: string
  title?: string
}

interface InstagramReelsCarouselProps {
  reels: InstagramReel[]
}

export function InstagramReelsCarousel({ reels }: InstagramReelsCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % reels.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + reels.length) % reels.length)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <div className="relative w-full max-w-md mx-auto">
      <div className="relative aspect-[9/16] rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0"
          >
            <Link
              href={reels[currentIndex].url}
              target="_blank"
              rel="noopener noreferrer"
              className="block relative w-full h-full group"
            >
              <Image
                src={reels[currentIndex].thumbnail || "/placeholder.svg"}
                alt={reels[currentIndex].title || `Instagram Reel ${currentIndex + 1}`}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Instagram className="w-16 h-16 text-white mb-3" />
                <span className="text-white text-xl font-medium">View on Instagram</span>
              </div>
            </Link>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows */}
        {reels.length > 1 && (
          <>
            <Button
              variant="outline"
              size="icon"
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-black/80 border-fuchsia-200 dark:border-fuchsia-800 hover:bg-fuchsia-100 dark:hover:bg-fuchsia-950 z-10"
              onClick={prevSlide}
            >
              <ChevronLeft className="h-4 w-4" />
              <span className="sr-only">Previous</span>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-black/80 border-fuchsia-200 dark:border-fuchsia-800 hover:bg-fuchsia-100 dark:hover:bg-fuchsia-950 z-10"
              onClick={nextSlide}
            >
              <ChevronRight className="h-4 w-4" />
              <span className="sr-only">Next</span>
            </Button>
          </>
        )}

        {/* Dots Indicator */}
        {reels.length > 1 && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {reels.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-fuchsia-600 dark:bg-fuchsia-400 w-6"
                    : "bg-white/60 dark:bg-gray-600 hover:bg-white/80 dark:hover:bg-gray-500"
                }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Reel Counter */}
      <div className="text-center mt-4">
        <p className="text-sm text-muted-foreground">
          {currentIndex + 1} / {reels.length}
        </p>
      </div>

      {/* Call to Action */}
      <div className="mt-4 text-center">
        <Button asChild className="w-full">
          <Link
            href={reels[currentIndex].url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2"
          >
            <Instagram className="h-4 w-4" /> View on Instagram
          </Link>
        </Button>
      </div>
    </div>
  )
}
