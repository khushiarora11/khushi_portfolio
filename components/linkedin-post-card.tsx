"use client"

import { motion } from "framer-motion"
import { ExternalLink, ThumbsUp, MessageCircle } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Image from "next/image"

interface LinkedInPostCardProps {
  title: string
  caption: string
  date: string
  likes: number
  comments: number
  imageUrl: string
  postUrl: string
}

export function LinkedInPostCard({
  title,
  caption,
  date,
  likes,
  comments,
  imageUrl,
  postUrl,
}: LinkedInPostCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Card className="group hover:shadow-lg transition-all duration-300 overflow-hidden h-full flex flex-col">
        <div className="relative aspect-[4/3] overflow-hidden bg-gray-100 dark:bg-gray-800">
          <Image
            src={imageUrl || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <CardContent className="p-4 flex-1 flex flex-col">
          <div className="flex-1">
            <div className="flex items-start justify-between gap-2 mb-2">
              <h3 className="font-semibold text-base line-clamp-2 flex-1">{title}</h3>
              <Badge variant="outline" className="text-xs shrink-0">
                {date}
              </Badge>
            </div>
            <p className="text-xs text-muted-foreground line-clamp-2 mb-3">{caption}</p>
          </div>

          <div className="flex items-center justify-between pt-3 border-t">
            <div className="flex items-center gap-3 text-xs text-muted-foreground">
              <div className="flex items-center gap-1">
                <ThumbsUp className="h-3.5 w-3.5" />
                <span>{likes}</span>
              </div>
              <div className="flex items-center gap-1">
                <MessageCircle className="h-3.5 w-3.5" />
                <span>{comments}</span>
              </div>
            </div>
            <Button asChild variant="ghost" size="sm" className="gap-1 h-8 text-xs">
              <a href={postUrl} target="_blank" rel="noopener noreferrer">
                View Post
                <ExternalLink className="h-3 w-3" />
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
