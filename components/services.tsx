"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { BarChart, PenTool, TrendingUp, Users, MessageCircle, Camera } from "lucide-react"

const services = [
  {
    icon: <PenTool className="h-10 w-10" />,
    title: "Content Creation",
    description:
      "Crafting engaging and shareable content tailored to your brand voice and audience preferences across multiple platforms.",
    color: "from-pink-500 to-purple-500",
  },
  {
    icon: <TrendingUp className="h-10 w-10" />,
    title: "Social Media Strategy",
    description:
      "Developing comprehensive strategies to grow your social presence, increase engagement, and achieve your business objectives.",
    color: "from-purple-500 to-indigo-500",
  },
  {
    icon: <Users className="h-10 w-10" />,
    title: "Community Management",
    description:
      "Building and nurturing online communities around your brand, fostering meaningful connections with your audience.",
    color: "from-indigo-500 to-blue-500",
  },
  {
    icon: <BarChart className="h-10 w-10" />,
    title: "Analytics & Reporting",
    description:
      "Tracking performance metrics and providing actionable insights to continuously improve your social media presence.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: <Camera className="h-10 w-10" />,
    title: "Visual Content",
    description:
      "Creating eye-catching graphics, photos, and videos that capture attention and convey your brand message effectively.",
    color: "from-cyan-500 to-teal-500",
  },
]

export default function Services() {
  return (
    <section id="services" className="py-16 md:py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">My Services</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            I offer a comprehensive range of social media and digital marketing services to help your brand thrive in
            the digital landscape.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-md transition-shadow overflow-hidden group">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${service.color} w-fit mb-4 text-white`}>
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground flex-grow">{service.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

