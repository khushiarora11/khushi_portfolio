"use client"

import { motion } from "framer-motion"
import { ExternalLink, Play, Heart, MessageCircle, Eye } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"

interface InstagramReelCardProps {
  title: string
  views: string
  likes: string
  comments: number
  thumbnailUrl: string
  reelUrl: string
}

export function InstagramReelCard({
  title,
  views,
  likes,
  comments,
  thumbnailUrl,
  reelUrl,
}: InstagramReelCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Card className="group hover:shadow-lg transition-all duration-300 overflow-hidden h-full flex flex-col">
        <div className="relative aspect-[9/16] overflow-hidden bg-gray-100 dark:bg-gray-800">
          <Image
            src={thumbnailUrl || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors">
            <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center">
              <Play className="h-8 w-8 text-gray-900 fill-gray-900 ml-1" />
            </div>
          </div>
        </div>
        <CardContent className="p-4 flex-1 flex flex-col">
          <div className="flex-1">
            <h3 className="font-semibold text-sm line-clamp-2 mb-3">{title}</h3>
          </div>

          <div className="space-y-2 mb-3">
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Eye className="h-3.5 w-3.5" />
              <span className="font-medium">{views} views</span>
            </div>
            <div className="flex items-center gap-3 text-xs text-muted-foreground">
              <div className="flex items-center gap-1">
                <Heart className="h-3.5 w-3.5" />
                <span>{likes}</span>
              </div>
              <div className="flex items-center gap-1">
                <MessageCircle className="h-3.5 w-3.5" />
                <span>{comments}</span>
              </div>
            </div>
          </div>

          <Button asChild variant="ghost" size="sm" className="gap-1 h-8 text-xs w-full">
            <a href={reelUrl} target="_blank" rel="noopener noreferrer">
              Watch on Instagram
              <ExternalLink className="h-3 w-3" />
            </a>
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  )
}
