"use client"

import { useEffect } from "react"

export default function CVPage() {
  useEffect(() => {
    // Direct download
    window.location.href = "/Khushi_Arora_CV.pdf"
  }, [])

  return (
    <div className="min-h-screen flex items-center justify-center">
      <p>Downloading CV...</p>
    </div>
  )
}
