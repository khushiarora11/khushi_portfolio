"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { useState } from "react"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

interface CarouselPost {
  title: string
  description: string
  imageUrl: string
}

interface CarouselPostsGridProps {
  title: string
  description: string
  posts: CarouselPost[]
}

export function CarouselPostsGrid({ title, description, posts }: CarouselPostsGridProps) {
  const [selectedPost, setSelectedPost] = useState<CarouselPost | null>(null)

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-fuchsia-600 dark:text-fuchsia-400 mb-2">{title}</h3>
        <p className="text-muted-foreground max-w-3xl mx-auto">{description}</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-4">
        {posts.map((post, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            viewport={{ once: true }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className="cursor-pointer"
          >
            <Dialog>
              <DialogTrigger asChild>
                <Card className="overflow-hidden border-fuchsia-200 dark:border-fuchsia-800 hover:shadow-md transition-shadow duration-300">
                  <div className="relative aspect-square">
                    <Image src={post.imageUrl || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                  </div>
                </Card>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md md:max-w-lg p-0 overflow-hidden">
                <div className="relative aspect-square w-full">
                  <Image src={post.imageUrl || "/placeholder.svg"} alt={post.title} fill className="object-contain" />
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-2 right-2 rounded-full bg-black/20 hover:bg-black/40 text-white"
                    onClick={() => document.querySelector('[data-state="open"] button[data-state="closed"]')?.click()}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
