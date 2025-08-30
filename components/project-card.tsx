"use client"

import { useState } from "react"
import { Card, CardDescription, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, ExternalLink, AlertCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Alert, AlertDescription } from "@/components/ui/alert"

interface VideoLink {
  url: string
  thumbnail?: string
}

interface ImageLink {
  url: string
  alt: string
}

interface ProjectCardProps {
  title: string
  company: string
  description: string
  results: string
  videoLinks?: VideoLink[]
  imageLinks?: ImageLink[]
  note?: string
  index: number
}

export function ProjectCard({
  title,
  company,
  description,
  results,
  videoLinks = [],
  imageLinks = [],
  note,
  index,
}: ProjectCardProps) {
  const [currentMedia, setCurrentMedia] = useState(0)
  const hasMedia = videoLinks.length > 0 || imageLinks.length > 0
  const mediaCount = videoLinks.length + imageLinks.length
  const isImage = (index: number) => index >= videoLinks.length

  const getMediaIndex = (index: number) => {
    if (isImage(index)) {
      return index - videoLinks.length
    }
    return index
  }

  const nextMedia = () => {
    setCurrentMedia((prev) => (prev + 1) % mediaCount)
  }

  const prevMedia = () => {
    setCurrentMedia((prev) => (prev - 1 + mediaCount) % mediaCount)
  }

  // Extract video ID from YouTube URL
  const getYouTubeVideoId = (url: string) => {
    // Handle both youtu.be and youtube.com formats
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/
    const match = url.match(regExp)
    return match && match[2].length === 11 ? match[2] : null
  }

  // Generate YouTube thumbnail URL
  const getYouTubeThumbnail = (url: string) => {
    const videoId = getYouTubeVideoId(url)
    return videoId ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg` : "/placeholder.svg?height=192&width=384"
  }

  // Check if this is the recipe booklet project
  const isRecipeBooklet = title === "Infant Recipe Booklet"

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Card className="overflow-hidden h-full border-fuchsia-200 dark:border-fuchsia-800 hover:shadow-md transition-shadow duration-300">
        <div className="grid md:grid-cols-2 gap-4">
          {hasMedia && (
            <div className="relative aspect-video md:h-full rounded-md overflow-hidden bg-muted">
              {isImage(currentMedia) ? (
                // Display image
                <div className="relative w-full h-full">
                  <Image
                    src={imageLinks[getMediaIndex(currentMedia)].url || "/placeholder.svg"}
                    alt={imageLinks[getMediaIndex(currentMedia)].alt}
                    fill
                    className={`${isRecipeBooklet ? "object-contain p-2" : "object-cover"} hover:scale-105 transition-transform duration-300`}
                  />
                </div>
              ) : (
                // Display video thumbnail with link
                <Link href={videoLinks[currentMedia].url} target="_blank" rel="noopener noreferrer">
                  <div className="relative w-full h-full">
                    <Image
                      src={videoLinks[currentMedia].thumbnail || getYouTubeThumbnail(videoLinks[currentMedia].url)}
                      alt={`${title} video ${currentMedia + 1}`}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                      <ExternalLink className="w-12 h-12 text-white" />
                    </div>
                  </div>
                </Link>
              )}

              {mediaCount > 1 && (
                <>
                  <Button
                    variant="outline"
                    size="icon"
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-black/80 border-fuchsia-200 dark:border-fuchsia-800 hover:bg-fuchsia-100 dark:hover:bg-fuchsia-950"
                    onClick={prevMedia}
                  >
                    <ChevronLeft className="h-4 w-4" />
                    <span className="sr-only">Previous</span>
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-black/80 border-fuchsia-200 dark:border-fuchsia-800 hover:bg-fuchsia-100 dark:hover:bg-fuchsia-950"
                    onClick={nextMedia}
                  >
                    <ChevronRight className="h-4 w-4" />
                    <span className="sr-only">Next</span>
                  </Button>
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
                    {Array.from({ length: mediaCount }).map((_, i) => (
                      <button
                        key={i}
                        className={`w-2 h-2 rounded-full ${
                          i === currentMedia ? "bg-fuchsia-600 dark:bg-fuchsia-400" : "bg-white/60 dark:bg-gray-600"
                        }`}
                        onClick={() => setCurrentMedia(i)}
                        aria-label={`Go to item ${i + 1}`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          )}
          <div className={`p-6 ${hasMedia ? "md:pr-6 md:pl-0" : ""} flex flex-col`}>
            <CardTitle className="text-xl font-bold text-fuchsia-600 dark:text-fuchsia-400 mb-2">{title}</CardTitle>
            <CardDescription className="text-base mb-4">{description}</CardDescription>
            <div className="bg-fuchsia-50 dark:bg-fuchsia-900/20 p-3 rounded-md mt-auto">
              <p className="font-medium text-fuchsia-800 dark:text-fuchsia-300">Results:</p>
              <p className="text-muted-foreground">{results}</p>
            </div>

            {note && (
              <Alert className="mt-4 bg-amber-50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-800">
                <AlertCircle className="h-4 w-4 text-amber-600 dark:text-amber-400" />
                <AlertDescription className="text-amber-700 dark:text-amber-300 text-sm">{note}</AlertDescription>
              </Alert>
            )}
          </div>
        </div>
      </Card>
    </motion.div>
  )
}
