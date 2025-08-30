"use client"
import Link from "next/link"
import { ModeToggle } from "@/components/mode-toggle"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Menu } from "lucide-react"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { useMobile } from "@/hooks/use-mobile"
import { usePathname } from "next/navigation"

export function Navbar() {
  const isMobile = useMobile()
  const pathname = usePathname()
  const isHomePage = pathname === "/"

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-white/80 dark:bg-gray-950/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-gray-950/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="font-bold text-xl text-fuchsia-600 dark:text-fuchsia-400">
          Khushi Arora
        </Link>
        {isMobile ? (
          <MobileNav isHomePage={isHomePage} />
        ) : (
          <div className="flex items-center gap-6">
            <NavigationMenu>
              <NavigationMenuList>
                {isHomePage ? (
                  <>
                    <NavigationMenuItem>
                      <Link href="#about" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>About</NavigationMenuLink>
                      </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <Link href="#skills" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>Skills</NavigationMenuLink>
                      </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <Link href="#contact" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>Contact</NavigationMenuLink>
                      </Link>
                    </NavigationMenuItem>
                  </>
                ) : null}
                <NavigationMenuItem>
                  <Link href="/experience" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>Experience</NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/projects" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>Projects</NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/education" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>Education</NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <ModeToggle />
          </div>
        )}
      </div>
    </header>
  )
}

function MobileNav({ isHomePage }: { isHomePage: boolean }) {
  return (
    <div className="flex items-center gap-2">
      <ModeToggle />
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Navigation</SheetTitle>
          </SheetHeader>
          <nav className="flex flex-col gap-4 mt-4">
            {isHomePage && (
              <>
                <Link
                  href="#about"
                  className="text-foreground hover:text-fuchsia-600 dark:hover:text-fuchsia-400 transition-colors"
                >
                  About
                </Link>
                <Link
                  href="#skills"
                  className="text-foreground hover:text-fuchsia-600 dark:hover:text-fuchsia-400 transition-colors"
                >
                  Skills
                </Link>
                <Link
                  href="#contact"
                  className="text-foreground hover:text-fuchsia-600 dark:hover:text-fuchsia-400 transition-colors"
                >
                  Contact
                </Link>
              </>
            )}
            <Link
              href="/experience"
              className="text-foreground hover:text-fuchsia-600 dark:hover:text-fuchsia-400 transition-colors"
            >
              Experience
            </Link>
            <Link
              href="/projects"
              className="text-foreground hover:text-fuchsia-600 dark:hover:text-fuchsia-400 transition-colors"
            >
              Projects
            </Link>
            <Link
              href="/education"
              className="text-foreground hover:text-fuchsia-600 dark:hover:text-fuchsia-400 transition-colors"
            >
              Education
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  )
}
