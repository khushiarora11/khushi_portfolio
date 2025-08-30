"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, MapPin, Phone, Linkedin } from "lucide-react"
import { useState } from "react"
import { toast } from "@/hooks/use-toast"
import Link from "next/link"

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    })

    setIsSubmitting(false)
    e.currentTarget.reset()
  }

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-950">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-block px-3 py-1 rounded-full bg-fuchsia-100 dark:bg-fuchsia-900/30 text-fuchsia-800 dark:text-fuchsia-300 text-sm font-medium mb-2">
            Contact Me
          </div>
          <h2 className="text-3xl font-bold tracking-tight mb-4 bg-gradient-to-r from-fuchsia-600 to-violet-600 dark:from-fuchsia-400 dark:to-violet-400 text-transparent bg-clip-text">
            Get In Touch
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to discuss potential opportunities? Feel free to reach out!
          </p>
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card className="border-fuchsia-200 dark:border-fuchsia-800 h-full">
              <CardContent className="p-6 space-y-6">
                <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-fuchsia-100 dark:bg-fuchsia-900/30 p-3 rounded-full">
                      <Mail className="h-5 w-5 text-fuchsia-600 dark:text-fuchsia-400" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <Link
                        href="mailto:khushii.aroraa11@gmail.com"
                        className="font-medium hover:text-fuchsia-600 dark:hover:text-fuchsia-400 transition-colors"
                      >
                        khushii.aroraa11@gmail.com
                      </Link>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-fuchsia-100 dark:bg-fuchsia-900/30 p-3 rounded-full">
                      <Phone className="h-5 w-5 text-fuchsia-600 dark:text-fuchsia-400" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Phone</p>
                      <Link
                        href="tel:+447867476576"
                        className="font-medium hover:text-fuchsia-600 dark:hover:text-fuchsia-400 transition-colors"
                      >
                        +44 7867 476576
                      </Link>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-fuchsia-100 dark:bg-fuchsia-900/30 p-3 rounded-full">
                      <Linkedin className="h-5 w-5 text-fuchsia-600 dark:text-fuchsia-400" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">LinkedIn</p>
                      <Link
                        href="https://linkedin.com/in/khushiarora1/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium hover:text-fuchsia-600 dark:hover:text-fuchsia-400 transition-colors"
                      >
                        linkedin.com/in/khushiarora1/
                      </Link>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-fuchsia-100 dark:bg-fuchsia-900/30 p-3 rounded-full">
                      <MapPin className="h-5 w-5 text-fuchsia-600 dark:text-fuchsia-400" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Location</p>
                      <p className="font-medium">Newcastle upon Tyne, UK</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card className="border-fuchsia-200 dark:border-fuchsia-800">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Send Me a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        required
                        placeholder="Your name"
                        className="border-fuchsia-200 dark:border-fuchsia-800 focus-visible:ring-fuchsia-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="Your email"
                        className="border-fuchsia-200 dark:border-fuchsia-800 focus-visible:ring-fuchsia-500"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      required
                      placeholder="Subject"
                      className="border-fuchsia-200 dark:border-fuchsia-800 focus-visible:ring-fuchsia-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      placeholder="Your message"
                      rows={5}
                      className="border-fuchsia-200 dark:border-fuchsia-800 focus-visible:ring-fuchsia-500"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-fuchsia-600 to-violet-600 hover:from-fuchsia-700 hover:to-violet-700 dark:from-fuchsia-500 dark:to-violet-500 dark:hover:from-fuchsia-600 dark:hover:to-violet-600"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
