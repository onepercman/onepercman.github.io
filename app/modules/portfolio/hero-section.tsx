import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons"
import { motion } from "framer-motion"
import { ArrowDown, Download, Mail } from "lucide-react"
import { AnimatedTitle } from "~/shared/components/animated-title"
import { Button } from "~/shared/components/ui"
import type { Profile } from "./portfolio-types"

interface HeroSectionProps {
  profile: Profile
}

export function HeroSection({ profile }: HeroSectionProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  }

  const socialLinks = [
    {
      icon: GitHubLogoIcon,
      href: `https://github.com/${profile.links.github}`,
      label: "GitHub",
    },
    {
      icon: LinkedInLogoIcon,
      href: `https://linkedin.com/in/${profile.links.linkedin}`,
      label: "LinkedIn",
    },
    {
      icon: TwitterLogoIcon,
      href: `https://twitter.com/${profile.links.twitter}`,
      label: "Twitter",
    },
    { icon: Mail, href: `mailto:${profile.links.email}`, label: "Email" },
  ]

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden py-16 md:py-20 lg:py-24">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/30" />

      {/* Animated background elements */}
      <motion.div
        className="absolute inset-0 opacity-20"
        animate={{
          background: [
            "radial-gradient(600px circle at 0% 0%, rgb(120, 119, 198, 0.3), transparent 50%)",
            "radial-gradient(600px circle at 100% 100%, rgb(120, 119, 198, 0.3), transparent 50%)",
            "radial-gradient(600px circle at 0% 100%, rgb(120, 119, 198, 0.3), transparent 50%)",
            "radial-gradient(600px circle at 100% 0%, rgb(120, 119, 198, 0.3), transparent 50%)",
          ],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <motion.div
        className="relative z-10 text-center max-w-5xl mx-auto px-6 sm:px-8 lg:px-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Avatar */}
        <motion.div variants={itemVariants} className="mb-8">
          <div className="w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full bg-gradient-to-br from-primary to-chart-1 p-1 shadow-2xl">
            <div className="w-full h-full rounded-full overflow-hidden bg-muted/50">
              {profile.avatar ? (
                <img
                  src={profile.avatar}
                  alt={profile.name}
                  className="w-full h-full object-cover rounded-full transition-transform duration-500 hover:scale-110"
                  onError={(e) => {
                    // Fallback to emoji if image fails to load
                    const target = e.target as HTMLImageElement
                    target.style.display = "none"
                    const parent = target.parentElement
                    if (parent) {
                      parent.innerHTML =
                        '<div class="w-full h-full rounded-full flex items-center justify-center text-6xl md:text-7xl bg-muted/50">👨‍💻</div>'
                    }
                  }}
                />
              ) : (
                <div className="w-full h-full rounded-full flex items-center justify-center text-6xl md:text-7xl">
                  👨‍💻
                </div>
              )}
            </div>
          </div>
        </motion.div>

        {/* Name with typewriter effect */}
        <motion.div variants={itemVariants} className="mb-4">
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            {profile.displayName
              ? // Display name with special styling for "aka onepercman"
                profile.displayName.split(" ").map((word, wordIndex) => {
                  if (word === "aka") {
                    return (
                      <span key={wordIndex} className="inline-block">
                        <span className="text-muted-foreground text-2xl md:text-4xl lg:text-5xl font-normal italic mx-2">
                          {word}
                        </span>{" "}
                      </span>
                    )
                  } else if (word === "onepercman") {
                    return (
                      <span key={wordIndex} className="inline-block">
                        <span className="font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                          {word}
                        </span>{" "}
                      </span>
                    )
                  } else {
                    return (
                      <span key={wordIndex} className="inline-block">
                        {word.split("").map((char, charIndex) => (
                          <motion.span
                            key={`${wordIndex}-${charIndex}`}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{
                              duration: 0.1,
                              delay: 0.8 + (wordIndex * 4 + charIndex) * 0.05,
                            }}
                          >
                            {char}
                          </motion.span>
                        ))}{" "}
                      </span>
                    )
                  }
                })
              : // Fallback to regular name animation
                profile.name.split("").map((char, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      duration: 0.1,
                      delay: 0.8 + index * 0.1,
                    }}
                  >
                    {char}
                  </motion.span>
                ))}
          </motion.h1>
        </motion.div>

        {/* Animated Title */}
        <motion.div variants={itemVariants} className="mb-6">
          {profile.animatedTitles ? (
            <AnimatedTitle
              titles={profile.animatedTitles}
              className="text-xl md:text-2xl lg:text-3xl text-primary font-semibold"
              interval={4000}
            />
          ) : (
            <h2 className="text-xl md:text-2xl lg:text-3xl text-primary font-semibold">
              {profile.title}
            </h2>
          )}
        </motion.div>

        {/* Subtitle with Location */}
        <motion.div variants={itemVariants} className="mb-8">
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {profile.subtitle}
          </p>
          <motion.div
            className="flex items-center justify-center gap-2 mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.5 }}
          >
            <span className="text-muted-foreground/60">📍</span>
            <span className="text-sm md:text-base text-muted-foreground font-medium">
              {profile.location}
            </span>
          </motion.div>
        </motion.div>

        {/* Bio */}
        <motion.div variants={itemVariants} className="mb-12">
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {profile.bio}
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div variants={itemVariants} className="mb-16">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="group relative overflow-hidden bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold"
              onClick={() => {
                const contactSection = document.getElementById("contact")
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: "smooth" })
                } else {
                  window.location.href = `mailto:${profile.links.email}`
                }
              }}
            >
              <motion.span
                className="relative z-10 flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="w-5 h-5" />
                Get in Touch
              </motion.span>
              <motion.div
                className="absolute inset-0 bg-primary/20"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.5 }}
              />
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="group px-8 py-4 text-lg font-semibold border-2 hover:bg-accent"
              asChild
            >
              <a
                href={profile.links.resume}
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.span
                  className="flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Download className="w-5 h-5" />
                  Download CV
                </motion.span>
              </a>
            </Button>
          </div>
        </motion.div>

        {/* Social Links */}
        <motion.div variants={itemVariants} className="mb-16">
          <div className="flex justify-center gap-6">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-muted/50 border border-border hover:border-primary flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                aria-label={label}
              >
                <Icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          variants={itemVariants}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="text-muted-foreground"
          >
            <ArrowDown className="w-6 h-6" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
