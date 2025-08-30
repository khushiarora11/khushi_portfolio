"use client"

import { Card } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Instagram } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

interface InstagramProjectCardProps {
  title: string
  company: string
  description: string
  results: string
  instagramLink: string
  thumbnailUrl?: string
  index: number
}

export function InstagramProjectCard({
  title,
  company,
  description,
  results,
  instagramLink,
  thumbnailUrl,
  index,
}: InstagramProjectCardProps) {
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
              <Link
                href={instagramLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block relative aspect-[9/16] w-full rounded-md overflow-hidden group"
              >
                <Image
                  src={thumbnailUrl || "/placeholder.svg?height=600&width=300&text=Instagram+Reel"}
                  alt={title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Instagram className="w-12 h-12 text-white mb-2" />
                  <span className="text-white font-medium">View on Instagram</span>
                </div>
              </Link>
              <div className="mt-3 text-center">
                <Button asChild>
                  <Link
                    href={instagramLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2"
                  >
                    <Instagram className="h-4 w-4" /> View on Instagram
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
