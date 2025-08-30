"use client"

import { Card } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import Link from "next/link"
import { useState, useRef } from "react"

interface VideoProjectCardProps {
  title: string
  company: string
  description: string
  results: string
  videoUrl: string
  youtubeEmbedId?: string
  index: number
}

export function VideoProjectCard({
  title,
  company,
  description,
  results,
  videoUrl,
  youtubeEmbedId,
  index,
}: VideoProjectCardProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const [hasError, setHasError] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const handlePlay = () => {
    setIsPlaying(true)
  }

  const handlePause = () => {
    setIsPlaying(false)
  }

  const handleLoadedData = () => {
    setIsLoaded(true)
  }

  const handleError = () => {
    setHasError(true)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Card className="overflow-hidden h-full border-fuchsia-200 dark:border-fuchsia-800 hover:shadow-md transition-shadow duration-300">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="flex justify-center p-4">
            <div className="w-full max-w-[320px]">
              {youtubeEmbedId ? (
                // YouTube embed
                <div className="relative pb-[177.78%] h-0 rounded-md overflow-hidden">
                  <iframe
                    src={`https://www.youtube.com/embed/${youtubeEmbedId}`}
                    className="absolute top-0 left-0 w-full h-full"
                    title={title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              ) : (
                // Direct video player
                <div className="relative aspect-[9/16] w-full rounded-md overflow-hidden bg-gray-100 dark:bg-gray-800">
                  {hasError ? (
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                      <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Video could not be loaded</p>
                      <Button asChild>
                        <Link
                          href={videoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2"
                        >
                          <ExternalLink className="h-4 w-4" /> Open Video
                        </Link>
                      </Button>
                    </div>
                  ) : (
                    <video
                      ref={videoRef}
                      src={videoUrl}
                      className="w-full h-full object-cover"
                      controls
                      playsInline
                      preload="auto"
                      onPlay={handlePlay}
                      onPause={handlePause}
                      onLoadedData={handleLoadedData}
                      onError={handleError}
                    />
                  )}
                </div>
              )}
              <div className="mt-2 text-center">
                <Button asChild variant="outline" size="sm">
                  <Link href={videoUrl} download className="inline-flex items-center gap-1">
                    <ExternalLink className="h-3 w-3" /> Download Video
                  </Link>
                </Button>
              </div>
            </div>
          </div>
          <div className="p-6 md:pr-6 md:pl-0 flex flex-col">
            <h3 className="text-xl font-bold text-fuchsia-600 dark:text-fuchsia-400 mb-2">{title}</h3>
            <p className="text-muted-foreground mb-4">{description}</p>
            <div className="bg-fuchsia-50 dark:bg-fuchsia-900/20 p-3 rounded-md mt-auto">
              <p className="font-medium text-fuchsia-800 dark:text-fuchsia-300">Results:</p>
              <p className="text-muted-foreground">{results}</p>
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  )
}
