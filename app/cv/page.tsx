"use client"

import { useEffect } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Download } from "lucide-react"
import Link from "next/link"

export default function CVPage() {
  useEffect(() => {
    // Redirect to HTML CV
    window.location.href = "/cv.html"
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-fuchsia-50 via-purple-50 to-violet-50 dark:from-fuchsia-950 dark:via-purple-950 dark:to-violet-950">
      <Navbar />
      <div className="container py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl font-bold mb-6">Loading CV...</h1>
          <p className="text-muted-foreground mb-8">
            If you are not automatically redirected to the CV, please click the link below.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="outline">
              <Link href="/" className="inline-flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" /> Back to Portfolio
              </Link>
            </Button>
            <Button asChild>
              <Link
                href="/cv.html"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                <Download className="h-4 w-4" /> View CV
              </Link>
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
