"use client"

import { type FormEvent, useState } from "react"
import { SectionContainer, SectionHeader } from "@/components/ui/fixed-section-container"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"
import { Check, Send, Mail, Phone, MapPin, Linkedin } from "lucide-react"

export default function Contact() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    })

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      const form = e.target as HTMLFormElement
      form.reset()
    }, 3000)
  }

  return (
    <SectionContainer id="contact" className="relative">
      <ScrollReveal>
        <SectionHeader
          title="Get In Touch"
          subtitle="I'd love to hear from you! Whether you have a question, proposal, or just want to say hello, feel free to reach out."
        />
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        <ScrollReveal>
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Contact Information</h3>
            <p className="text-muted-foreground">
              I'm open to freelance opportunities, collaborations, and remote positions. If you're interested in working
              together, please don't hesitate to contact me through the form or directly via email.
            </p>

            <div className="space-y-4 mt-6">
              <div className="flex items-start gap-4">
                <Mail className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a
                    href="mailto:Khushii.Aroraall@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Khushii.Aroraall@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <a href="tel:+447867476576" className="text-muted-foreground hover:text-primary transition-colors">
                    +44 (0) 7867476576
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <h4 className="font-medium">Location</h4>
                  <p className="text-muted-foreground">Newcastle upon Tyne, United Kingdom</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Linkedin className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <h4 className="font-medium">LinkedIn</h4>
                  <a
                    href="https://www.linkedin.com/in/khushiarora1/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    linkedin.com/in/khushiarora1/
                  </a>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <form onSubmit={handleSubmit} className="space-y-6 bg-card rounded-lg border p-6 shadow-sm">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Name
                </label>
                <Input id="name" name="name" placeholder="Your name" required disabled={isSubmitting || isSubmitted} />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Your email"
                  required
                  disabled={isSubmitting || isSubmitted}
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
                placeholder="What's this about?"
                required
                disabled={isSubmitting || isSubmitted}
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                placeholder="Your message"
                rows={5}
                required
                disabled={isSubmitting || isSubmitted}
              />
            </div>

            <Button type="submit" className="w-full" disabled={isSubmitting || isSubmitted}>
              {isSubmitting ? (
                <>Sending...</>
              ) : isSubmitted ? (
                <>
                  <Check className="mr-2 h-4 w-4" /> Message Sent
                </>
              ) : (
                <>
                  <Send className="mr-2 h-4 w-4" /> Send Message
                </>
              )}
            </Button>
          </form>
        </ScrollReveal>
      </div>
    </SectionContainer>
  )
}

