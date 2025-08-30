import Link from "next/link"
import { Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t py-12 bg-gradient-to-br from-fuchsia-50 via-purple-50 to-violet-50 dark:from-fuchsia-950 dark:via-purple-950 dark:to-violet-950 border-fuchsia-100 dark:border-fuchsia-900">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold text-fuchsia-600 dark:text-fuchsia-400">Khushi Arora</h3>
            <p className="text-muted-foreground mt-1">Digital Marketing Specialist</p>
          </div>
          <div className="flex items-center space-x-4">
            <Link
              href="https://linkedin.com/in/khushiarora1/"
              className="text-muted-foreground hover:text-fuchsia-600 dark:hover:text-fuchsia-400 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </div>
        </div>
        <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-fuchsia-600 dark:hover:text-fuchsia-400 transition-colors">
            Home
          </Link>
          <Link href="/experience" className="hover:text-fuchsia-600 dark:hover:text-fuchsia-400 transition-colors">
            Experience
          </Link>
          <Link href="/projects" className="hover:text-fuchsia-600 dark:hover:text-fuchsia-400 transition-colors">
            Projects
          </Link>
          <Link href="/education" className="hover:text-fuchsia-600 dark:hover:text-fuchsia-400 transition-colors">
            Education
          </Link>
        </div>
        <div className="mt-4 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Khushi Arora. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
