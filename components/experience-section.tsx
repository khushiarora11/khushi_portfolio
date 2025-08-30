"use client"

import { motion } from "framer-motion"
import { ExperienceCard } from "@/components/experience-card"

const experiences = [
  {
    title: "Social Media Marketing Assistant",
    company: "Newcastle University",
    location: "Newcastle upon Tyne, UK",
    period: "February 2025 - Present",
    description: [
      "Managed and developed brand-consistent social media content across 2+ social media platforms, increasing audience engagement by 40% through strategic use of interactive posts, videos, and stories.",
      "Implemented analytics-based content optimization strategies showcasing student work, events, and research, leading to a 35% rise in reach and a 50% boost in post interactions.",
      "Conducted data-driven analysis of KPIs to refine content strategy, resulting in a 25% increase in followers and stronger audience engagement for the School of Arts and Cultures.",
      "Collaborated with internal stakeholders to ensure aligned messaging and achievement of marketing objectives.",
    ],
  },
  {
    title: "Social Media Campaign Associate",
    company: "Lorrigo Logistics & Services",
    location: "New Delhi, India",
    period: "March 2024 - May 2024",
    description: [
      "Designed and executed multi-platform social media campaigns in collaboration with external agencies, increasing brand awareness by 40% and expanding follower base to 10,000+ through targeted content and influencer partnerships.",
      "Developed strategic influencer partnerships to expand market reach and leveraged analytics to optimize campaign performance.",
    ],
  },
  {
    title: "Marketing Executive",
    company: "The First Parents",
    location: "New Delhi, India",
    period: "December 2023 - March 2024",
    description: [
      "Developed and executed social media campaigns, increasing engagement by 30% and achieving over 15,000 views through consistent updates and audience-driven content strategies.",
      "Optimised website content for SEO, improving search engine rankings and driving a 20% increase in organic traffic, while ensuring seamless integration with social media campaigns for enhanced visibility.",
    ],
  },
  {
    title: "Social Media Marketing Executive",
    company: "TravClan",
    location: "New Delhi, India",
    period: "May 2023 - August 2024",
    description: [
      "Developed lifestyle and travel-focused content for 4+ social media platforms, driving a 30% increase in engagement and a 20% boost in followers by optimising content and analysing performance metrics for regional and international campaigns.",
      "Utilized CRM systems to track campaign performance and optimize marketing strategies.",
      "Supported website management and email marketing campaigns, resulting in a 25% increase in website traffic and a 15% growth in open email rates, enhancing overall digital presence.",
    ],
  },
  {
    title: "Founder & Social Media Marketing Executive",
    company: "AestheticGenz",
    location: "New Delhi, India",
    period: "November 2021 - November 2023",
    description: [
      "Created and implemented a content calendar for fashion-focused social media campaigns aligning with seasonal trends, product launches, and marketing campaigns, maximizing audience impact, resulting in a 50% increase in website traffic.",
      "Created and analyzed performance metrics to optimize campaign ROI.",
      "Implemented community engagement tactics, responding to queries and fostering a loyal online customer base.",
    ],
  },
]

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="py-20 bg-gradient-to-br from-fuchsia-50 via-purple-50 to-violet-50 dark:from-fuchsia-950 dark:via-purple-950 dark:to-violet-950"
    >
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-block px-3 py-1 rounded-full bg-fuchsia-100 dark:bg-fuchsia-900/30 text-fuchsia-800 dark:text-fuchsia-300 text-sm font-medium mb-2">
            Work Experience
          </div>
          <h2 className="text-3xl font-bold tracking-tight mb-4 bg-gradient-to-r from-fuchsia-600 to-violet-600 dark:from-fuchsia-400 dark:to-violet-400 text-transparent bg-clip-text">
            My Professional Journey
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Over 4+ years of experience in digital marketing, social media management, and content creation.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 gap-6">
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} {...experience} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
