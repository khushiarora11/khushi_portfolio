"use client"

import type React from "react"
import { cn } from "@/lib/utils"

interface SectionContainerProps {
  id?: string
  className?: string
  children: React.ReactNode
}

export function SectionContainer({ id, className, children }: SectionContainerProps) {
  return (
    <section id={id} className={cn("py-16 md:py-24", className)}>
      <div className="container mx-auto px-4">{children}</div>
    </section>
  )
}

interface SectionHeaderProps {
  title: string
  subtitle?: string
  align?: "left" | "center" | "right"
}

export function SectionHeader({ title, subtitle, align = "center" }: SectionHeaderProps) {
  const alignClass = align === "left" ? "text-left" : align === "right" ? "text-right" : "text-center"

  return (
    <div className={cn("mb-12", alignClass)}>
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{title}</h2>
      {subtitle && <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>}
    </div>
  )
}

