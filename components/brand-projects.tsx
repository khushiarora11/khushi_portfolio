"use client"

import { motion } from "framer-motion"
import { ProjectCard } from "@/components/project-card"
import { SubProjectCard } from "@/components/sub-project-card"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CarouselPostsGrid } from "@/components/carousel-posts-grid"
import { VideoProjectCard } from "@/components/video-project-card"
import { InstagramProjectCard } from "@/components/instagram-project-card"
import { InstagramReelsMarquee } from "@/components/instagram-reels-marquee"
import { LinkedInPostCard } from "@/components/linkedin-post-card"
import { Instagram, Linkedin } from 'lucide-react'
import Link from "next/link"

interface SubProject {
  title: string
  description: string
  imageLinks: { url: string; alt: string }[]
}

interface CarouselPost {
  title: string
  description: string
  imageUrl: string
}

interface LinkedInPost {
  title: string
  caption: string
  date: string
  likes: number
  comments: number
  imageUrl: string
  postUrl: string
  category?: string
}

interface Project {
  title: string
  description: string
  results: string
  videoLinks?: { url: string; thumbnail?: string }[]
  imageLinks?: { url: string; alt: string }[]
  subProjects?: SubProject[]
  customContent?: string
  note?: string
  videoUrl?: string
  videoPage?: string
  youtubeEmbedId?: string
  instagramLink?: string
  thumbnailUrl?: string
  instagramReels?: { url: string; thumbnail: string; title?: string }[]
}

interface InstagramLink {
  url: string
  label?: string
}

interface BrandProjectsProps {
  brandName: string
  brandDescription: string
  projects: Project[]
  index: number
  carouselPosts?: CarouselPost[]
  tfpCarouselPosts?: CarouselPost[]
  sacsCarouselPosts?: CarouselPost[]
  instagramLinks?: InstagramLink[]
  linkedInLink?: string
  linkedInPosts?: LinkedInPost[]
}

export function BrandProjects({
  brandName,
  brandDescription,
  projects,
  index,
  carouselPosts,
  tfpCarouselPosts,
  sacsCarouselPosts,
  instagramLinks,
  linkedInLink,
  linkedInPosts,
}: BrandProjectsProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="mb-12"
    >
      <Card className="border-fuchsia-200 dark:border-fuchsia-800 overflow-hidden">
        <CardHeader className="bg-gradient-to-r from-fuchsia-100 to-violet-100 dark:from-fuchsia-900/30 dark:to-violet-900/30">
          <CardTitle className="text-2xl font-bold text-fuchsia-600 dark:text-fuchsia-400">{brandName}</CardTitle>
          <CardDescription className="text-base">{brandDescription}</CardDescription>
          <div className="flex items-center gap-4 flex-wrap pt-2">
            {instagramLinks && instagramLinks.length > 0 && (
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-sm text-muted-foreground">
                  {brandName === "TravClan"
                    ? "Worked on two accounts:"
                    : brandName === "Newcastle University"
                      ? "Follow us on Instagram:"
                      : "Instagram:"}
                </span>
                <div className="flex gap-2 items-center">
                  {instagramLinks.map((link, idx) => (
                    <Link
                      key={idx}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-fuchsia-600 dark:text-fuchsia-400 hover:text-fuchsia-700 dark:hover:text-fuchsia-300 transition-colors"
                      title={link.label || "Instagram"}
                    >
                      <Instagram className="h-5 w-5" />
                      <span className="text-sm font-medium">{link.label}</span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
            {linkedInLink && (
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">LinkedIn:</span>
                <Link
                  href={linkedInLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-fuchsia-600 dark:text-fuchsia-400 hover:text-fuchsia-700 dark:hover:text-fuchsia-300 transition-colors"
                  title="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="text-sm font-medium">TravClan</span>
                </Link>
              </div>
            )}
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <div className="grid grid-cols-1 gap-6">
            {projects.map((project, idx) => (
              <div key={idx}>
                {project.customContent === "linkedin-posts" && linkedInPosts ? (
                  <Card className="overflow-hidden h-full border-fuchsia-200 dark:border-fuchsia-800 hover:shadow-md transition-shadow duration-300">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-xl font-bold text-fuchsia-600 dark:text-fuchsia-400">
                        {project.title}
                      </CardTitle>
                      <CardDescription className="text-base">{project.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="bg-fuchsia-50 dark:bg-fuchsia-900/20 p-3 rounded-md mb-6">
                        <p className="font-medium text-fuchsia-800 dark:text-fuchsia-300">Results:</p>
                        <p className="text-muted-foreground">{project.results}</p>
                      </div>

                      <div className="space-y-8">
                        {/* Team Promotions Section */}
                        {linkedInPosts.some(post => post.category === 'promotions') && (
                          <div>
                            <h4 className="text-lg font-semibold text-fuchsia-600 dark:text-fuchsia-400 mb-4 flex items-center gap-2">
                              <span className="h-1 w-8 bg-fuchsia-600 dark:bg-fuchsia-400 rounded"></span>
                              Team Promotions
                            </h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                              {linkedInPosts
                                .filter(post => post.category === 'promotions')
                                .map((post, postIdx) => (
                                  <LinkedInPostCard key={postIdx} {...post} />
                                ))}
                            </div>
                          </div>
                        )}

                        {/* Trips & Events Section */}
                        {linkedInPosts.some(post => post.category === 'trips') && (
                          <div>
                            <h4 className="text-lg font-semibold text-fuchsia-600 dark:text-fuchsia-400 mb-4 flex items-center gap-2">
                              <span className="h-1 w-8 bg-fuchsia-600 dark:bg-fuchsia-400 rounded"></span>
                              Trips & Events
                            </h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                              {linkedInPosts
                                .filter(post => post.category === 'trips')
                                .map((post, postIdx) => (
                                  <LinkedInPostCard key={postIdx} {...post} />
                                ))}
                            </div>
                          </div>
                        )}

                        {/* Campaigns & Celebrations Section */}
                        {linkedInPosts.some(post => post.category === 'campaigns') && (
                          <div>
                            <h4 className="text-lg font-semibold text-fuchsia-600 dark:text-fuchsia-400 mb-4 flex items-center gap-2">
                              <span className="h-1 w-8 bg-fuchsia-600 dark:bg-fuchsia-400 rounded"></span>
                              Campaigns & Celebrations
                            </h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                              {linkedInPosts
                                .filter(post => post.category === 'campaigns')
                                .map((post, postIdx) => (
                                  <LinkedInPostCard key={postIdx} {...post} />
                                ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ) : project.customContent === "sacs-carousel-posts" && sacsCarouselPosts ? (
                  <Card className="overflow-hidden h-full border-fuchsia-200 dark:border-fuchsia-800 hover:shadow-md transition-shadow duration-300">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-xl font-bold text-fuchsia-600 dark:text-fuchsia-400">
                        {project.title}
                      </CardTitle>
                      <CardDescription className="text-base">{project.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="bg-fuchsia-50 dark:bg-fuchsia-900/20 p-3 rounded-md mb-6">
                        <p className="font-medium text-fuchsia-800 dark:text-fuchsia-300">Results:</p>
                        <p className="text-muted-foreground">{project.results}</p>
                      </div>

                      <CarouselPostsGrid posts={sacsCarouselPosts} />
                    </CardContent>
                  </Card>
                ) : project.instagramReels ? (
                  <div className="space-y-6">
                    <div className="text-center">
                      <h3 className="text-2xl font-bold text-fuchsia-600 dark:text-fuchsia-400 mb-2">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground mb-4 max-w-3xl mx-auto">{project.description}</p>
                      <div className="bg-fuchsia-50 dark:bg-fuchsia-900/20 p-4 rounded-md inline-block">
                        <p className="font-medium text-fuchsia-800 dark:text-fuchsia-300 mb-1">Results:</p>
                        <p className="text-muted-foreground">{project.results}</p>
                      </div>
                    </div>
                    <InstagramReelsMarquee reels={project.instagramReels} />
                  </div>
                ) : project.customContent === "carousel-posts" && carouselPosts ? (
                  <Card className="overflow-hidden h-full border-fuchsia-200 dark:border-fuchsia-800 hover:shadow-md transition-shadow duration-300">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-xl font-bold text-fuchsia-600 dark:text-fuchsia-400">
                        {project.title}
                      </CardTitle>
                      <CardDescription className="text-base">{project.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="bg-fuchsia-50 dark:bg-fuchsia-900/20 p-3 rounded-md mb-6">
                        <p className="font-medium text-fuchsia-800 dark:text-fuchsia-300">Results:</p>
                        <p className="text-muted-foreground">{project.results}</p>
                      </div>

                      <CarouselPostsGrid
                        title="Social Media Carousel Posts"
                        description="A collection of carousel posts designed for TravClan's social media platforms to educate and engage travel agents about services and features."
                        posts={carouselPosts}
                      />
                    </CardContent>
                  </Card>
                ) : project.customContent === "tfp-carousel-posts" && tfpCarouselPosts ? (
                  <Card className="overflow-hidden h-full border-fuchsia-200 dark:border-fuchsia-800 hover:shadow-md transition-shadow duration-300">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-xl font-bold text-fuchsia-600 dark:text-fuchsia-400">
                        {project.title}
                      </CardTitle>
                      <CardDescription className="text-base">{project.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="bg-fuchsia-50 dark:bg-fuchsia-900/20 p-3 rounded-md mb-6">
                        <p className="font-medium text-fuchsia-800 dark:text-fuchsia-300">Results:</p>
                        <p className="text-muted-foreground">{project.results}</p>
                      </div>

                      <CarouselPostsGrid
                        title="Pregnancy Health & Nutrition Guides"
                        description="Educational carousel posts designed to provide expectant mothers with valuable information about pregnancy health, nutrition, and wellness."
                        posts={tfpCarouselPosts}
                      />
                    </CardContent>
                  </Card>
                ) : project.instagramLink ? (
                  <InstagramProjectCard
                    title={project.title}
                    company={brandName}
                    description={project.description}
                    results={project.results}
                    instagramLink={project.instagramLink}
                    thumbnailUrl={project.thumbnailUrl}
                    index={idx}
                  />
                ) : project.videoUrl ? (
                  <VideoProjectCard
                    title={project.title}
                    company={brandName}
                    description={project.description}
                    results={project.results}
                    videoUrl={project.videoUrl}
                    youtubeEmbedId={project.youtubeEmbedId}
                    index={idx}
                  />
                ) : project.subProjects ? (
                  <div className="space-y-6">
                    <div className="bg-gradient-to-r from-fuchsia-50 to-violet-50 dark:from-fuchsia-900/20 dark:to-violet-900/20 p-6 rounded-lg">
                      <h3 className="text-xl font-bold text-fuchsia-600 dark:text-fuchsia-400 mb-2">{project.title}</h3>
                      <p className="text-muted-foreground mb-4">{project.description}</p>
                      <div className="bg-fuchsia-100 dark:bg-fuchsia-900/30 p-3 rounded-md">
                        <p className="font-medium text-fuchsia-800 dark:text-fuchsia-300">Results:</p>
                        <p className="text-muted-foreground">{project.results}</p>
                      </div>
                    </div>

                    {project.subProjects.map((subProject, subIdx) => (
                      <SubProjectCard
                        key={subIdx}
                        title={subProject.title}
                        description={subProject.description}
                        imageLinks={subProject.imageLinks}
                        index={subIdx}
                      />
                    ))}
                  </div>
                ) : (
                  <ProjectCard
                    title={project.title}
                    company={brandName}
                    description={project.description}
                    results={project.results}
                    videoLinks={project.videoLinks}
                    imageLinks={project.imageLinks}
                    note={project.note}
                    index={idx}
                  />
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
