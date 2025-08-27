import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { cn } from "~/shared/utils"

interface TypewriterTitleProps {
  titles: string[]
  className?: string
  typingSpeed?: number
  deletingSpeed?: number
  pauseDuration?: number
  showCursor?: boolean
}

export function TypewriterTitle({
  titles,
  className,
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseDuration = 2000,
  showCursor = true,
}: TypewriterTitleProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    if (titles.length === 0) return

    const currentTitle = titles[currentIndex]

    const timeout = setTimeout(
      () => {
        if (isPaused) {
          setIsPaused(false)
          setIsDeleting(true)
          return
        }

        if (isDeleting) {
          setCurrentText(currentTitle.substring(0, currentText.length - 1))

          if (currentText === "") {
            setIsDeleting(false)
            setCurrentIndex((prev) => (prev + 1) % titles.length)
          }
        } else {
          setCurrentText(currentTitle.substring(0, currentText.length + 1))

          if (currentText === currentTitle) {
            if (titles.length > 1) {
              setIsPaused(true)
            }
          }
        }
      },
      isPaused ? pauseDuration : isDeleting ? deletingSpeed : typingSpeed
    )

    return () => clearTimeout(timeout)
  }, [
    currentText,
    isDeleting,
    isPaused,
    currentIndex,
    titles,
    typingSpeed,
    deletingSpeed,
    pauseDuration,
  ])

  return (
    <div className={cn("relative inline-block", className)}>
      <span className="relative">
        {currentText}
        {showCursor && (
          <motion.span
            animate={{ opacity: [0, 1] }}
            transition={{
              duration: 0.8,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
            className="inline-block ml-1 text-primary"
          >
            |
          </motion.span>
        )}
      </span>

      {/* Background highlight effect */}
      <motion.div
        className="absolute inset-0 bg-primary/10 rounded-lg -z-10"
        initial={{ scaleX: 0, originX: 0 }}
        animate={{
          scaleX: currentText.length > 0 ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      />
    </div>
  )
}
