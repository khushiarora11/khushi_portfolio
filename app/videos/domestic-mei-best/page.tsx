"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Instagram } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function DomesticMeiBestVideoPage() {
  const instagramLink = "https://www.instagram.com/reel/Crsm8VSLWjd/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="

  return (
    <div className="min-h-screen bg-gradient-to-br from-fuchsia-50 via-purple-50 to-violet-50 dark:from-fuchsia-950 dark:via-purple-950 dark:to-violet-950">
      <Navbar />
      <div className="container py-20">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6 flex items-center">
            <Button asChild variant="outline" size="sm" className="mr-4">
              <Link href="/#projects" className="inline-flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" /> Back to Projects
              </Link>
            </Button>
            <h1 className="text-3xl font-bold">Domestic Mei Best Campaign</h1>
          </div>

          <div className="max-w-[500px] mx-auto">
            <Link
              href={instagramLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block relative aspect-[9/16] w-full rounded-lg overflow-hidden shadow-xl group"
            >
              <Image
                src="/images/domestic-mei-best-thumbnail.png"
                alt="Domestic Mei Best Campaign"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Instagram className="w-16 h-16 text-white mb-3" />
                <span className="text-white text-xl font-medium">View on Instagram</span>
              </div>
            </Link>

            <div className="mt-4 text-center">
              <Button asChild size="lg">
                <Link
                  href={instagramLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  <Instagram className="h-5 w-5" /> View on Instagram
                </Link>
              </Button>
            </div>
          </div>

          <div className="mt-8 bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold text-fuchsia-600 dark:text-fuchsia-400 mb-4">About This Project</h2>
            <p className="mb-4">
              Developed and executed the "Domestic Mei Best" campaign to promote seamless domestic travel solutions,
              creating engaging video content to showcase the benefits of local travel experiences.
            </p>
            <div className="bg-fuchsia-50 dark:bg-fuchsia-900/20 p-3 rounded-md">
              <p className="font-medium text-fuchsia-800 dark:text-fuchsia-300">Results:</p>
              <p>
                Drove a 15% increase in customer engagement and enhanced brand visibility by 20%, strengthening
                TravClan's position in the domestic travel market.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
