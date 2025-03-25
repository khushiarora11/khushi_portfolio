"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

export default function SocialProof() {
  const brands = [
    { name: "Brand 1", logo: "/placeholder.svg?height=80&width=150" },
    { name: "Brand 2", logo: "/placeholder.svg?height=80&width=150" },
    { name: "Brand 3", logo: "/placeholder.svg?height=80&width=150" },
    { name: "Brand 4", logo: "/placeholder.svg?height=80&width=150" },
    { name: "Brand 5", logo: "/placeholder.svg?height=80&width=150" },
    { name: "Brand 6", logo: "/placeholder.svg?height=80&width=150" },
  ]

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <Badge className="mb-4">Trusted By</Badge>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Brands I've Worked With</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I've had the privilege of working with these amazing brands to enhance their social media presence
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {brands.map((brand, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex justify-center"
            >
              <div className="relative h-16 w-32 grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100">
                <Image src={brand.logo || "/placeholder.svg"} alt={brand.name} fill className="object-contain" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

