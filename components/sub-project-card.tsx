"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"

interface SubProjectCardProps {
  title: string
  description: string
  imageLinks: { url: string; alt: string }[]
  index: number
}

export function SubProjectCard({ title, description, imageLinks, index }: SubProjectCardProps) {
  const [currentImage, setCurrentImage] = useState(0)
  const imageCount = imageLinks.length

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % imageCount)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + imageCount) % imageCount)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Card className="overflow-hidden h-full border-fuchsia-200 dark:border-fuchsia-800 hover:shadow-md transition-shadow duration-300">
        <CardHeader className="bg-fuchsia-50 dark:bg-fuchsia-900/20 pb-2">
          <CardTitle className="text-lg font-bold text-fuchsia-600 dark:text-fuchsia-400">{title}</CardTitle>
          <CardDescription className="text-base">{description}</CardDescription>
        </CardHeader>
        <CardContent className="p-0">
          <div className="relative aspect-video w-full overflow-hidden bg-muted">
            <div className="relative w-full h-full">
              <Image
                src={imageLinks[currentImage].url || "/placeholder.svg"}
                alt={imageLinks[currentImage].alt}
                fill
                className="object-contain p-4"
              />
            </div>

            {imageCount > 1 && (
              <>
                <Button
                  variant="outline"
                  size="icon"
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-black/80 border-fuchsia-200 dark:border-fuchsia-800 hover:bg-fuchsia-100 dark:hover:bg-fuchsia-950"
                  onClick={prevImage}
                >
                  <ChevronLeft className="h-4 w-4" />
                  <span className="sr-only">Previous</span>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-black/80 border-fuchsia-200 dark:border-fuchsia-800 hover:bg-fuchsia-100 dark:hover:bg-fuchsia-950"
                  onClick={nextImage}
                >
                  <ChevronRight className="h-4 w-4" />
                  <span className="sr-only">Next</span>
                </Button>
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
                  {Array.from({ length: imageCount }).map((_, i) => (
                    <button
                      key={i}
                      className={`w-2 h-2 rounded-full ${
                        i === currentImage ? "bg-fuchsia-600 dark:bg-fuchsia-400" : "bg-white/60 dark:bg-gray-600"
                      }`}
                      onClick={() => setCurrentImage(i)}
                      aria-label={`Go to item ${i + 1}`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
