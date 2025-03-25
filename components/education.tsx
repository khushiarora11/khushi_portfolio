"use client"

import { ScrollReveal, StaggeredContainer, StaggerItem } from "@/components/ui/scroll-reveal"
import { SectionContainer, SectionHeader } from "@/components/ui/fixed-section-container"
import { GraduationCap, Calendar, MapPin, Award, Users } from "lucide-react"

export default function Education() {
  const education = [
    {
      school: "Newcastle University",
      degree: "MSc Digital Marketing",
      location: "Newcastle upon Tyne, UK",
      period: "2023 - 2024",
      grade: "Expected: Distinction",
      activities: [
        "Social Media Content Creator for the University",
        "Active member of the Marketing Society",
        "Participated in international student cultural exchange programs",
        "Research focus on Social Media Strategy and Content Marketing",
      ],
    },
    {
      school: "University of Delhi",
      degree: "B.Com (Hons)",
      location: "New Delhi, India",
      period: "2019 - 2022",
      grade: "First Class Honours (8.5 CGPA)",
      activities: [
        "Head of Marketing at the Department Student Council",
        "Organized and led multiple college events and workshops",
        "Won first place in inter-college marketing competitions",
        "Member of the college debate team",
      ],
    },
  ]

  return (
    <SectionContainer id="education" className="relative">
      <ScrollReveal>
        <SectionHeader
          title="Education"
          subtitle="My academic journey that has shaped my knowledge and skills in digital marketing and business."
        />
      </ScrollReveal>

      <div className="max-w-3xl mx-auto mt-12 space-y-12">
        {education.map((edu, index) => (
          <ScrollReveal
            key={index}
            className="relative pl-8 md:pl-0 md:grid md:grid-cols-12 md:gap-8"
            delay={index * 0.2}
          >
            {/* Timeline element (mobile) */}
            <div className="absolute top-0 left-0 md:hidden">
              <div className="h-full w-0.5 bg-border"></div>
              <div className="absolute top-1.5 -left-1.5 h-4 w-4 rounded-full border-2 border-background bg-primary"></div>
            </div>

            {/* Timeline element (desktop) */}
            <div className="hidden md:flex md:col-span-3 text-right">
              <div className="mr-8 mt-1 relative">
                <div className="h-4 w-4 rounded-full bg-primary ml-auto"></div>
                <div className="absolute top-4 right-2 h-full w-0.5 bg-border"></div>
              </div>
              <div>
                <div className="font-medium text-lg">{edu.period}</div>
                <div className="flex items-center justify-end gap-1 text-sm text-muted-foreground mt-1">
                  <MapPin className="h-4 w-4" />
                  <span>{edu.location}</span>
                </div>
              </div>
            </div>

            <div className="md:col-span-9">
              <div className="bg-card border rounded-lg p-6 shadow-sm">
                <div>
                  <h3 className="text-xl font-semibold flex items-center gap-2">
                    <GraduationCap className="h-5 w-5 text-primary" />
                    {edu.school}
                  </h3>
                  <div className="text-lg text-primary mt-1">{edu.degree}</div>

                  {/* Mobile only period and location */}
                  <div className="md:hidden space-y-1 mt-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{edu.period}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      <span>{edu.location}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-1 mt-3 text-sm font-medium">
                    <Award className="h-4 w-4 text-primary" />
                    <span>{edu.grade}</span>
                  </div>
                </div>

                <div className="mt-4">
                  <div className="flex items-center gap-2 font-medium text-sm mb-3">
                    <Users className="h-4 w-4 text-primary" />
                    <span>Activities & Achievements</span>
                  </div>
                  <StaggeredContainer className="space-y-2 pl-5">
                    {edu.activities.map((activity, idx) => (
                      <StaggerItem key={idx} className="relative">
                        <div className="absolute -left-5 top-1.5 h-1.5 w-1.5 rounded-full bg-primary"></div>
                        <p className="text-sm text-muted-foreground">{activity}</p>
                      </StaggerItem>
                    ))}
                  </StaggeredContainer>
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </SectionContainer>
  )
}

