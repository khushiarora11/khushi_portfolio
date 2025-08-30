"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Instagram } from "lucide-react"
import Link from "next/link"

export default function VideoDownloadPage() {
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
            <h1 className="text-3xl font-bold">Social Media Content</h1>
          </div>

          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
            <p className="mb-6">
              All videos are now available on Instagram. Please click the links below to view them:
            </p>

            <div className="space-y-6">
              <div className="border p-4 rounded-lg">
                <h2 className="text-xl font-bold text-fuchsia-600 dark:text-fuchsia-400 mb-2">
                  Carabao Cup Score Predictions
                </h2>
                <p className="text-muted-foreground mb-4">Newcastle University's football fan engagement video.</p>
                <Button asChild>
                  <Link
                    href="https://www.instagram.com/reel/DHP1O9iomRt/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2"
                  >
                    <Instagram className="h-4 w-4" /> View on Instagram
                  </Link>
                </Button>
              </div>

              <div className="border p-4 rounded-lg">
                <h2 className="text-xl font-bold text-fuchsia-600 dark:text-fuchsia-400 mb-2">
                  Domestic Mei Best Campaign
                </h2>
                <p className="text-muted-foreground mb-4">
                  TravClan's campaign promoting seamless domestic travel solutions.
                </p>
                <Button asChild>
                  <Link
                    href="https://www.instagram.com/reel/Crsm8VSLWjd/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2"
                  >
                    <Instagram className="h-4 w-4" /> View on Instagram
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
