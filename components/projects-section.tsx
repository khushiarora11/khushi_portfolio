"use client"
import { motion } from "framer-motion"
import { BrandProjects } from "@/components/brand-projects"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useState, useEffect } from "react"
import { useMobile } from "@/hooks/use-mobile"

// TravClan carousel posts data
const travClanCarouselPosts = [
  {
    title: "Our Services to 18+ Destinations",
    description: "Highlighting TravClan's expanded service offerings",
    imageUrl: "/images/carousel-post-1.png",
  },
  {
    title: "East or West, Our On-Ground Team",
    description: "Showcasing TravClan's on-ground team excellence",
    imageUrl: "/images/carousel-post-2.png",
  },
  {
    title: "Customer Aapka, Zimmedari Humari",
    description: "Customer-first approach messaging",
    imageUrl: "/images/carousel-post-3.png",
  },
  {
    title: "Choti-choti chizo mein Khushiyan Dhundhna",
    description: "Finding happiness in small things - customer testimonials",
    imageUrl: "/images/carousel-post-4.png",
  },
  {
    title: "Do Not Panic In Case",
    description: "Travel advice series for common situations",
    imageUrl: "/images/carousel-post-5.png",
  },
  {
    title: "Vegetarian Dishes At Your Hotel",
    description: "Solutions for finding vegetarian food while traveling",
    imageUrl: "/images/carousel-post-6.png",
  },
  {
    title: "Driver Is Late At Pickup Point",
    description: "Information about transfer policies and what to expect",
    imageUrl: "/images/carousel-post-7.png",
  },
  {
    title: "Hotel Asks For Security Deposit",
    description: "Explaining common hotel security deposit practices",
    imageUrl: "/images/carousel-post-8.png",
  },
]

// The First Parents carousel posts data
const tfpCarouselPosts = [
  {
    title: "Pregnancy Diet Chart",
    description: "Comprehensive trimester-wise nutrition guide",
    imageUrl: "/images/tfp-carousel-4.png",
  },
  {
    title: "First Trimester Diet Chart",
    description: "Nutritional guide for the first trimester of pregnancy",
    imageUrl: "/images/tfp-carousel-7.png",
  },
  {
    title: "Second Trimester Diet Chart",
    description: "Nutritional guide for the second trimester of pregnancy",
    imageUrl: "/images/tfp-carousel-1.png",
  },
  {
    title: "Third Trimester Diet Chart",
    description: "Nutritional guide for the third trimester of pregnancy",
    imageUrl: "/images/tfp-carousel-5.png",
  },
  {
    title: "Vaginal Discharge During Pregnancy",
    description: "Educational content about normal vs abnormal discharge",
    imageUrl: "/images/tfp-carousel-3.png",
  },
  {
    title: "Normal Discharge During Pregnancy",
    description: "Reassuring information about leukorrhea during pregnancy",
    imageUrl: "/images/tfp-carousel-6.png",
  },
  {
    title: "Signs of Abnormal Discharge",
    description: "Health information about warning signs during pregnancy",
    imageUrl: "/images/tfp-carousel-2.png",
  },
]

const brandProjectsData = [
  {
    id: "newcastle-university",
    brandName: "Newcastle University",
    brandDescription: "A world-class research-intensive university located in Newcastle upon Tyne, UK.",
    projects: [
      {
        title: "Carabao Cup Score Predictions",
        description:
          "Planned, executed, and delivered a Carabao Cup score predictions video from concept to completion, engaging football fans and promoting university sports culture.",
        results:
          "Achieved over 6K views—20% higher than the average engagement, increasing visibility and student participation in university sports events.",
        instagramLink: "https://www.instagram.com/reel/DHP1O9iomRt/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
        thumbnailUrl: "/images/carabao-cup-thumbnail.png",
      },
    ],
  },
  {
    id: "travclan",
    brandName: "TravClan",
    brandDescription: "A B2B travel tech platform that empowers travel agents with technology and marketing solutions.",
    projects: [
      {
        title: "Social Media Carousel Posts",
        description:
          "Designed and created a series of engaging social media carousel posts for TravClan's digital platforms, focusing on service offerings, customer support, and destination expertise.",
        results:
          "The carousel posts achieved a 45% higher engagement rate compared to standard posts, with increased shares and saves. The consistent branding and informative content helped establish TravClan as an authority in the travel space.",
        customContent: "carousel-posts",
      },
      {
        title: "The Great Himachal Festival",
        description:
          "Led the execution of The Great Himachal Festival, a multi-platform social media campaign designed to promote Himachal Pradesh as a top travel destination for B2B clients.",
        results:
          "The campaign resulted in a 40% increase in engagement, a 35% rise in reach, and a 25% boost in inquiries from B2B clients. The campaign's success was further reflected in a 20% growth in followers across platforms.",
        videoLinks: [
          { url: "https://www.youtube.com/watch?v=v7TrOcf1RnI" },
          { url: "https://www.youtube.com/watch?v=F6a6dB20baQ" },
          { url: "https://www.youtube.com/watch?v=yjITvHvuVNc" },
          { url: "https://www.youtube.com/watch?v=AO9tqdg-pmc" },
        ],
      },
      {
        title: "Domestic Mei Best Campaign",
        description:
          'Developed and executed the "Domestic Mei Best" campaign to promote seamless domestic travel solutions, creating engaging video content to showcase the benefits of local travel experiences.',
        results:
          "Drove a 15% increase in customer engagement and enhanced brand visibility by 20%, strengthening TravClan's position in the domestic travel market.",
        instagramLink: "https://www.instagram.com/reel/Crsm8VSLWjd/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
        thumbnailUrl: "/images/domestic-mei-best-thumbnail.png",
      },
      {
        title: "#SeekhoThailandwithTravClan",
        description:
          "Developed and executed the 'Seekho Thailand' campaign for TravClan, providing strategic insights and video-driven content to help B2B clients effectively promote Thailand as a travel destination.",
        results:
          "The campaign resulted in a 30% increase in engagement, a 20% growth in inquiries from B2B clients, and a 15% rise in followers across platforms, including Instagram, Facebook, and YouTube.",
        videoLinks: [
          { url: "https://www.youtube.com/watch?v=E4-F1YmAaSQ" },
          { url: "https://www.youtube.com/watch?v=zE2OumEcF40" },
        ],
      },
    ],
  },
  {
    id: "the-first-parents",
    brandName: "The First Parents",
    brandDescription: "A parenting platform providing resources and support for new parents.",
    projects: [
      {
        title: "Pregnancy Health & Nutrition Carousel Posts",
        description:
          "Created a series of educational carousel posts for expectant mothers, covering trimester-specific nutrition guides and important health information during pregnancy.",
        results:
          "These educational posts increased engagement by 50% and established The First Parents as a trusted source of pregnancy information, driving website traffic and newsletter sign-ups.",
        customContent: "tfp-carousel-posts",
      },
      {
        title: "Infant Recipe Booklet",
        description:
          "Led the development of a comprehensive 100-page infant recipe booklet, combining product design and content creation to provide parents with a valuable resource for their child's nutritional journey.",
        results:
          "Created a comprehensive resource for new parents that became a flagship product for The First Parents, enhancing brand authority in the parenting space and driving website traffic and engagement.",
        subProjects: [
          {
            title: "Product Design",
            description:
              "Designed the layout, visual elements, and overall aesthetic of the recipe booklet, creating a cohesive and user-friendly product that aligned with The First Parents brand identity.",
            imageLinks: [
              {
                url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-03-25%20at%204.26.32%20AM-wWE08moEYehU5MKwnbUvdzuSITWFu4.png",
                alt: "Recipe booklet cover showing 'Let's Cook! 100 Recipe Booklet by TheFirstParents'",
              },
              {
                url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-03-25%20at%204.27.21%20AM.png-P3q69lnuw0KriyV1qHODGK6xiY3PgS.jpeg",
                alt: "Inside pages showing infant nutrition guidelines",
              },
              {
                url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-03-25%20at%204.27.57%20AM.png-VXjekFAJTqsQgadAOXCt3zRbQZ41Vq.jpeg",
                alt: "Recipe pages for egg-based dishes for infants",
              },
              {
                url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-03-25%20at%204.27.00%20AM-2L8RXBib4zaUwdD99xDz5cS8LlwI1H.png",
                alt: "Recipe pages for fruit purees for 6+ month babies",
              },
              {
                url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-03-25%20at%204.28.17%20AM.png-y4WmrqjfzX56mf6TFLsVvaZRrl3Qmc.jpeg",
                alt: "Recipe booklet cover with 'cooking is love' text and pot illustration",
              },
            ],
          },
          {
            title: "Content Creation",
            description:
              "Created engaging promotional content and marketing materials to showcase the recipe booklet, highlighting its benefits and features to drive interest and sales.",
            imageLinks: [
              {
                url: "/images/recipe-booklet-promo3.jpeg",
                alt: "Marketing image showing the recipe booklet with benefits: age-appropriate recipes, nutritionally balanced meals, quick & easy to make, and helps introduce new flavors & textures",
              },
              {
                url: "/images/recipe-booklet-promo1.jpeg",
                alt: "Promotional image for the Home Remedies section of the recipe booklet",
              },
              {
                url: "/images/recipe-booklet-promo2.jpeg",
                alt: "Promotional image showing the transition from purees to finger foods with a papaya banana puree recipe",
              },
            ],
          },
        ],
      },
    ],
  },
]

export function ProjectsSection() {
  const [activeTab, setActiveTab] = useState(brandProjectsData[0].id)
  const isMobile = useMobile()

  // Handle tab overflow on mobile
  const [tabsOverflow, setTabsOverflow] = useState(false)

  useEffect(() => {
    const checkOverflow = () => {
      const tabsList = document.querySelector(".tabs-list")
      if (tabsList) {
        setTabsOverflow(tabsList.scrollWidth > tabsList.clientWidth)
      }
    }

    checkOverflow()
    window.addEventListener("resize", checkOverflow)
    return () => window.removeEventListener("resize", checkOverflow)
  }, [])

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-950">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-block px-3 py-1 rounded-full bg-fuchsia-100 dark:bg-fuchsia-900/30 text-fuchsia-800 dark:text-fuchsia-300 text-sm font-medium mb-2">
            Projects
          </div>
          <h2 className="text-3xl font-bold tracking-tight mb-4 bg-gradient-to-r from-fuchsia-600 to-violet-600 dark:from-fuchsia-400 dark:to-violet-400 text-transparent bg-clip-text">
            My Work
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A showcase of my digital marketing projects and campaigns.
          </p>
        </motion.div>

        <Tabs defaultValue={brandProjectsData[0].id} value={activeTab} onValueChange={setActiveTab}>
          <div className="relative">
            <TabsList className="tabs-list w-full justify-start mb-8 overflow-x-auto pb-2">
              {brandProjectsData.map((brand) => (
                <TabsTrigger key={brand.id} value={brand.id} className="text-base py-2 px-4 whitespace-nowrap">
                  {brand.brandName}
                </TabsTrigger>
              ))}
            </TabsList>
            {tabsOverflow && (
              <div className="absolute right-0 top-0 h-full w-12 bg-gradient-to-l from-white dark:from-gray-950 to-transparent pointer-events-none" />
            )}
          </div>

          {brandProjectsData.map((brand) => (
            <TabsContent key={brand.id} value={brand.id} className="mt-0">
              <BrandProjects
                {...brand}
                index={0}
                carouselPosts={brand.id === "travclan" ? travClanCarouselPosts : undefined}
                tfpCarouselPosts={brand.id === "the-first-parents" ? tfpCarouselPosts : undefined}
              />
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}
