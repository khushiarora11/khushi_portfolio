"use client"

import { useState } from "react"
import { SectionContainer, SectionHeader } from "@/components/ui/fixed-section-container"
import { ScrollReveal, StaggeredContainer, StaggerItem } from "@/components/ui/scroll-reveal"
import { Calendar, MapPin } from "lucide-react"

export default function Experience() {
  const experiences = [
    {
      title: "Social Media Content Creator",
      company: "Newcastle University",
      location: "Newcastle upon Tyne, UK",
      period: "Sept 2023 - Present",
      description: [
        "Planned, executed, and delivered a Carabao Cup score predictions video from concept to completion, achieving over 6K views - 20% higher than the average engagement.",
        "Created carousel posts to promote Creative Careers 2025, including specialized content for music, sports journalism, and arts & culture venues.",
        "Collaborated with cross-functional teams to produce consistent, high-quality content across multiple platforms.",
      ],
      skills: ["Video Production", "Social Media Management", "Campaign Planning", "Content Strategy", "Analytics"],
    },
    {
      title: "Marketing & Content Executive",
      company: "Lorrigo Logistics & Services",
      location: "New Delhi, India",
      period: "Aug 2022 - Mar 2023",
      description: [
        "Developed and executed the #ShipItShaanse campaign, encouraging customers to ship their products with pride and trust, resulting in a 40% increase in brand awareness.",
        "Managed content creation for website and social media platforms, helping expand the follower base by 10,000+.",
        "Collaborated with the development team to optimize the website for SEO, improving organic traffic by 35%.",
      ],
      skills: [
        "Campaign Development",
        "Website Management",
        "SEO Optimization",
        "Social Media Marketing",
        "Content Creation",
      ],
    },
    {
      title: "Marketing Intern",
      company: "The First Parents",
      location: "Remote",
      period: "Feb 2023 - May 2023",
      description: [
        "Designed a 100-page infant recipe booklet, carefully researching various food products, recipe books, and doctor-recommended foods for infants.",
        "Created and curated engaging content for social media, focusing on educational posts and product promotion.",
        "Hosted giveaways that generated significant engagement, with one collaboration boosting followers by 120 within 6 days.",
      ],
      skills: ["Content Design", "Social Media Strategy", "Community Management", "Graphic Design", "Research"],
    },
    {
      title: "Social Media Marketing Intern",
      company: "TravClan",
      location: "New Delhi, India",
      period: "Feb 2022 - Aug 2022",
      description: [
        "Designed and executed multi-platform social media campaigns in collaboration with external agencies, increasing brand awareness by 40%.",
        "Developed the 'Seekho Thailand' campaign, providing strategic insights and video-driven content for B2B clients, resulting in a 30% increase in engagement.",
        "Led the execution of The Great Himachal Festival, a multi-platform campaign that achieved a 40% increase in engagement and 35% rise in reach.",
        "Crafted compelling copy for social media posts, blogs, and marketing materials, ensuring brand consistency and enhancing audience engagement.",
        "Received the 'Shining Star of the Month' award for exceptional execution of tasks and consistent dedication.",
      ],
      skills: [
        "Campaign Management",
        "Video Content Strategy",
        "B2B Marketing",
        "Copywriting",
        "Social Media Analytics",
      ],
    },
    {
      title: "Social Media & Content Specialist",
      company: "AestheticGenz",
      location: "New Delhi, India",
      period: "Dec 2021 - Feb 2022",
      description: [
        "Designed and launched fashion products, and managed product catalog on the website, ensuring seamless user experience and easy navigation.",
        "Developed and executed social media campaigns across platforms, driving a 50% increase in website traffic.",
        "Planned and organized photoshoots to create engaging, on-brand content that resonated with target audiences.",
      ],
      skills: ["Product Design", "E-commerce", "Website Management", "Content Creation", "Brand Development"],
    },
  ]

  const [activeIndex, setActiveIndex] = useState(0)
  const activeExperience = experiences[activeIndex]

  return (
    <SectionContainer id="experience" className="relative">
      <ScrollReveal>
        <SectionHeader
          title="Work Experience"
          subtitle="My professional journey in digital marketing and content creation across various industries."
        />
      </ScrollReveal>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-12">
        {/* Timeline navigation */}
        <div className="lg:col-span-4">
          <ScrollReveal className="bg-card rounded-lg border shadow-sm overflow-hidden">
            <div className="p-1">
              {experiences.map((experience, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-full text-left p-4 transition-colors rounded-md ${
                    activeIndex === index ? "bg-primary text-primary-foreground" : "hover:bg-muted"
                  }`}
                >
                  <div className="font-medium">{experience.title}</div>
                  <div
                    className={`text-sm ${
                      activeIndex === index ? "text-primary-foreground/80" : "text-muted-foreground"
                    }`}
                  >
                    {experience.company}
                  </div>
                  <div
                    className={`text-xs mt-1 flex items-center gap-1 ${
                      activeIndex === index ? "text-primary-foreground/70" : "text-muted-foreground"
                    }`}
                  >
                    <Calendar className="h-3 w-3" />
                    {experience.period}
                  </div>
                </button>
              ))}
            </div>
          </ScrollReveal>
        </div>

        {/* Experience details */}
        <div className="lg:col-span-8">
          <ScrollReveal className="bg-card rounded-lg border shadow-sm p-6">
            <div className="flex flex-col md:flex-row md:items-start justify-between mb-4">
              <div>
                <h3 className="text-xl font-semibold">{activeExperience.title}</h3>
                <div className="text-lg text-primary mt-1">{activeExperience.company}</div>
              </div>
              <div className="mt-2 md:mt-0 text-sm text-muted-foreground space-y-1">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>{activeExperience.period}</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  <span>{activeExperience.location}</span>
                </div>
              </div>
            </div>

            <StaggeredContainer className="space-y-4 mt-6">
              {activeExperience.description.map((item, index) => (
                <StaggerItem key={index} className="flex gap-3">
                  <div className="flex-shrink-0 mt-1">
                    <div className="h-4 w-4 rounded-full bg-primary flex items-center justify-center">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary-foreground"></div>
                    </div>
                  </div>
                  <p className="text-muted-foreground">{item}</p>
                </StaggerItem>
              ))}
            </StaggeredContainer>

            <div className="mt-8">
              <div className="text-sm font-medium mb-3">Skills & Technologies</div>
              <div className="flex flex-wrap gap-2">
                {activeExperience.skills.map((skill, index) => (
                  <span key={index} className="text-xs bg-muted rounded-full px-3 py-1 text-muted-foreground">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </SectionContainer>
  )
}

