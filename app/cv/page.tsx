"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Printer as Print, Download } from "lucide-react"
import Link from "next/link"

export default function CVPage() {
  const handlePrint = () => {
    window.print()
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="print:hidden">
        <Navbar />
      </div>

      <div className="container py-8 print:py-0">
        <div className="print:hidden mb-6 flex items-center justify-between">
          <Button asChild variant="outline" size="sm">
            <Link href="/" className="inline-flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" /> Back to Portfolio
            </Link>
          </Button>
          <div className="flex gap-2">
            <Button onClick={handlePrint} variant="outline" className="inline-flex items-center gap-2 bg-transparent">
              <Print className="h-4 w-4" /> Print CV
            </Button>
            <Button onClick={handlePrint} className="inline-flex items-center gap-2">
              <Download className="h-4 w-4" /> Save as PDF
            </Button>
          </div>
        </div>

        <div className="max-w-4xl mx-auto bg-white p-8 print:p-0 print:shadow-none shadow-lg">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">KHUSHI ARORA</h1>
            <div className="text-gray-700 space-y-1">
              <p>Newcastle upon Tyne, UK</p>
              <p>
                +44 7867 476576 | khushii.aroraa11@gmail.com |{" "}
                <a
                  href="https://linkedin.com/in/khushiarora1/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 underline"
                >
                  linkedin.com/in/khushiarora1/
                </a>
              </p>
            </div>
          </div>

          {/* Summary */}
          <section className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 border-b-2 border-gray-400 pb-2 mb-4">SUMMARY</h2>
            <p className="text-gray-700 leading-relaxed text-justify">
              Pursuing an MSc in Digital Marketing from Newcastle University, I have gained practical experience across
              4+ roles in Social Media Marketing, Content Creation, Campaign Management and Community Building. Proven
              track record of capturing brand voice, analyzing performance metrics, and collaborating cross-functionally
              to achieve marketing objectives. Actively seeking opportunities as a Social Media Executive. I have the
              right to work in the UK.
            </p>
          </section>

          {/* Education */}
          <section className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 border-b-2 border-gray-400 pb-2 mb-4">EDUCATION</h2>

            <div className="mb-6">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-bold text-gray-900">Newcastle University</h3>
                  <p className="text-gray-700">MSc Digital Marketing</p>
                </div>
                <div className="text-right text-gray-700">
                  <p>Newcastle upon Tyne, UK</p>
                  <p>Sep. 2024-Present</p>
                </div>
              </div>
              <ul className="text-gray-700 ml-4">
                <li>● Grade: Distinction (Predicted)</li>
                <li>● ECAs: Course Rep, Business Ambassador, International Marketing Ambassador.</li>
              </ul>
            </div>

            <div>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-bold text-gray-900">University of Delhi</h3>
                  <p className="text-gray-700">Bachelor of Arts in Entrepreneurship</p>
                </div>
                <div className="text-right text-gray-700">
                  <p>New Delhi, India</p>
                  <p>June. 2021-2024</p>
                </div>
              </div>
              <ul className="text-gray-700 ml-4">
                <li>● Grade: Upper Second-Class Honours (2:1)</li>
                <li>● ECAs: President, RAQS: The Dramatics Society Of Kalindi College.</li>
              </ul>
            </div>
          </section>

          {/* Work Experience */}
          <section className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 border-b-2 border-gray-400 pb-2 mb-4">WORK EXPERIENCE</h2>

            {/* Newcastle University */}
            <div className="mb-6">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-bold text-gray-900">Newcastle University</h3>
                  <p className="text-gray-700">Social Media Marketing Assistant</p>
                </div>
                <div className="text-right text-gray-700">
                  <p>Newcastle upon Tyne, UK</p>
                  <p>February. 2025 – Present</p>
                </div>
              </div>
              <ul className="text-gray-700 ml-4 space-y-1 text-justify">
                <li>
                  ● Managed and developed brand-consistent social media content across 2+ social media platforms,
                  increasing audience engagement by 40% through strategic use of interactive posts, videos, and stories.
                </li>
                <li>
                  ● Developed and executed innovative campaigns showcasing student work, events, and research, leading
                  to a 35% rise in reach and a 50% boost in post interactions.
                </li>
                <li>
                  ● Conducted data-driven analysis of KPIs to refine content strategy, resulting in a 25% increase in
                  followers and stronger audience engagement for the School of Arts and Cultures.
                </li>
              </ul>
            </div>

            {/* Lorrigo Logistics */}
            <div className="mb-6">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-bold text-gray-900">Lorrigo Logistics & Services</h3>
                  <p className="text-gray-700">Social Media Campaign Associate</p>
                </div>
                <div className="text-right text-gray-700">
                  <p>New Delhi, India</p>
                  <p>March. 2024- May. 2024</p>
                </div>
              </div>
              <ul className="text-gray-700 ml-4 space-y-1 text-justify">
                <li>
                  ● Designed and executed multi-platform social media campaigns in collaboration with external agencies,
                  increasing brand awareness by 40% and expanding follower base to 10,000+ through targeted content and
                  influencer partnerships.
                </li>
                <li>
                  ● Crafted compelling copy for social media posts, blogs, and marketing materials, ensuring brand
                  consistency and enhancing audience engagement.
                </li>
              </ul>
            </div>

            {/* The First Parents */}
            <div className="mb-6">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-bold text-gray-900">The First Parents</h3>
                  <p className="text-gray-700">Marketing Executive</p>
                </div>
                <div className="text-right text-gray-700">
                  <p>New Delhi, India</p>
                  <p>Dec. 2023- March. 2024</p>
                </div>
              </div>
              <ul className="text-gray-700 ml-4 space-y-1 text-justify">
                <li>
                  ● Developed and executed social media campaigns, increasing engagement by 30% and achieving over
                  15,000 views through consistent updates and audience-driven content strategies.
                </li>
                <li>
                  ● Optimised website content for SEO, improving search engine rankings and driving a 20% increase in
                  organic traffic, while ensuring seamless integration with social media campaigns for enhanced
                  visibility.
                </li>
              </ul>
            </div>

            {/* TravClan */}
            <div className="mb-6">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-bold text-gray-900">TravClan</h3>
                  <p className="text-gray-700">Social Media Marketing Executive</p>
                </div>
                <div className="text-right text-gray-700">
                  <p>New Delhi, India</p>
                  <p>May. 2023- August. 2024</p>
                </div>
              </div>
              <ul className="text-gray-700 ml-4 space-y-1 text-justify">
                <li>
                  ● Developed lifestyle and travel-focused content for 4+ social media platforms, driving a 30% increase
                  in engagement and a 20% boost in followers by optimising content and analysing performance metrics for
                  regional and international campaigns.
                </li>
                <li>
                  ● Collaborated with cross-functional teams to develop and execute integrated marketing campaigns to
                  ensure consistent brand messaging across all marketing channels.
                </li>
                <li>
                  ● Supported website management and email marketing campaigns, resulting in a 25% increase in website
                  traffic and a 15% growth in open email rates, enhancing overall digital presence.
                </li>
              </ul>
            </div>

            {/* AestheticGenz */}
            <div className="mb-6">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-bold text-gray-900">AestheticGenz</h3>
                  <p className="text-gray-700">Founder & Social Media Marketing Executive</p>
                </div>
                <div className="text-right text-gray-700">
                  <p>New Delhi, India</p>
                  <p>Nov. 2021- Nov. 2023</p>
                </div>
              </div>
              <ul className="text-gray-700 ml-4 space-y-1 text-justify">
                <li>
                  ● Created and implemented a content calendar for fashion-focused social media campaigns aligning with
                  seasonal trends, product launches, and campaign goals, maximizing audience impact, resulting in a 50%
                  increase in website traffic.
                </li>
                <li>
                  ● Managed end-to-end content creation, including copywriting, graphic design using Adobe Creative
                  Cloud (Photoshop & Adobe Premiere Pro), and video editing to enhance audience engagement and brand
                  storytelling.
                </li>
                <li>
                  ● Implemented community engagement tactics, responding to queries and fostering a loyal online
                  customer base.
                </li>
              </ul>
            </div>
          </section>

          {/* Skills & Languages */}
          <section className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 border-b-2 border-gray-400 pb-2 mb-4">SKILLS & LANGUAGES</h2>
            <div className="space-y-3">
              <p className="text-gray-700 text-justify">
                <span className="font-bold">Skills:</span> Social Media Management & Strategy, Content Creation & Video
                Editing (Canva, Figma, Adobe Creative Suite & CapCut), Copywriting, Social Media Analytics & KPI
                Tracking, SEO & Website Management (Google Analytics, Google Analytics 4, Looker Studio, SEMrush),
                Campaign Management, Cross-functional Collaboration, CRM & Email Marketing (Hubspot, Mailchimp), Event
                Management.
              </p>
              <p className="text-gray-700">
                <span className="font-bold">Languages:</span> English (Fluent) & Hindi (Native).
              </p>
            </div>
          </section>
        </div>
      </div>

      <div className="print:hidden">
        <Footer />
      </div>
    </div>
  )
}
