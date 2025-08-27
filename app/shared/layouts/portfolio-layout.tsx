import { motion, useMotionValueEvent, useScroll } from "framer-motion"
import { ArrowUp } from "lucide-react"
import { useRef, useState } from "react"
import { ThemeToggle } from "../components/theme-toggle"
import { Button } from "../components/ui"
import { cn } from "../utils"

interface PortfolioLayoutProps {
  children: React.ReactNode
}

export function PortfolioLayout({ children }: PortfolioLayoutProps) {
  const [isHeaderVisible, setIsHeaderVisible] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)
  const { scrollY } = useScroll()
  const containerRef = useRef<HTMLDivElement>(null)

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsHeaderVisible(latest > 100)
    setShowScrollTop(latest > 400)
  })

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const navItems = [
    { id: "hero", label: "Home" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ]

  return (
    <div ref={containerRef} className="relative">
      {/* Floating Header */}
      <motion.header
        initial={{ opacity: 0, y: -100 }}
        animate={{
          opacity: isHeaderVisible ? 1 : 0,
          y: isHeaderVisible ? 0 : -100,
        }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "fixed top-6 left-1/2 transform -translate-x-1/2 z-50 pointer-events-none",
          isHeaderVisible && "pointer-events-auto"
        )}
      >
        <div className="glass-card rounded-full px-8 py-4 shadow-2xl">
          <nav className="flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-sm font-semibold text-muted-foreground hover:text-foreground animate-apple focus-apple relative overflow-hidden group"
              >
                <span className="relative z-10">{item.label}</span>
                <div className="absolute inset-0 bg-accent rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 ease-out" />
              </button>
            ))}
            <div className="w-px h-8 bg-border/50" />
            <ThemeToggle />
          </nav>
        </div>
      </motion.header>

      {/* Main Content */}
      <main className="relative">{children}</main>

      {/* Scroll to Top Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{
          opacity: showScrollTop ? 1 : 0,
          scale: showScrollTop ? 1 : 0.8,
        }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "fixed bottom-8 right-8 z-40 pointer-events-none",
          showScrollTop && "pointer-events-auto"
        )}
      >
        <Button
          onClick={scrollToTop}
          size="icon"
          className="w-14 h-14 rounded-full btn-apple text-primary-foreground shadow-2xl hover:shadow-3xl animate-apple focus-apple group"
        >
          <ArrowUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform duration-300" />
        </Button>
      </motion.div>

      {/* Background Elements - Subtle Apple-inspired gradients */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        {/* Subtle red accent orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/8 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-primary/6 rounded-full blur-3xl"
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.4, 0.2, 0.4],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
        {/* Center ambient light */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-primary/4 via-transparent to-transparent rounded-full blur-2xl" />
      </div>
    </div>
  )
}
