"use client"

import Link from "next/link"
import Image from "next/image"
import { Instagram } from "lucide-react"
import { motion } from "framer-motion"

interface InstagramReel {
  url: string
  thumbnail: string
  title?: string
}

interface InstagramReelsMarqueeProps {
  reels: InstagramReel[]
}

export function InstagramReelsMarquee({ reels }: InstagramReelsMarqueeProps) {
  // Duplicate reels for seamless infinite scroll
  const duplicatedReels = [...reels, ...reels, ...reels]

  return (
    <div className="w-full overflow-hidden py-8">
      <div className="relative">
        {/* Gradient overlays for fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white dark:from-gray-950 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white dark:from-gray-950 to-transparent z-10 pointer-events-none" />

        {/* Scrolling container */}
        <motion.div
          className="flex gap-4"
          animate={{
            x: [0, -100 * reels.length],
          }}
          transition={{
            x: {
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
        >
          {duplicatedReels.map((reel, index) => (
            <Link
              key={index}
              href={reel.url}
              target="_blank"
              rel="noopener noreferrer"
              className="relative flex-shrink-0 group"
            >
              <div className="relative w-64 aspect-[9/16] rounded-lg overflow-hidden shadow-lg transition-transform duration-300 group-hover:scale-105">
                <Image
                  src={reel.thumbnail || "/placeholder.svg"}
                  alt={reel.title || `Instagram Reel ${(index % reels.length) + 1}`}
                  fill
                  className="object-cover"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Instagram className="w-12 h-12 text-white mb-2" />
                  <span className="text-white text-sm font-medium">View on Instagram</span>
                </div>
              </div>
            </Link>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
