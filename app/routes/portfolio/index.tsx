import { motion } from "framer-motion"
import {
  ContactSection,
  HeroSection,
  ProjectsSection,
  usePortfolio,
} from "~/modules/portfolio"
import { Spinner } from "~/shared/components/ui"

export default function PortfolioPage() {
  const { data, isLoading, error } = usePortfolio()

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center"
        >
          <Spinner className="w-8 h-8 mb-4 text-primary" />
          <p className="text-muted-foreground">Loading portfolio...</p>
        </motion.div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <div className="text-6xl mb-4">⚠️</div>
          <h2 className="text-2xl font-semibold text-foreground mb-2">
            Something went wrong
          </h2>
          <p className="text-muted-foreground">{error}</p>
        </motion.div>
      </div>
    )
  }

  if (!data) {
    return null
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <section id="hero">
        <HeroSection profile={data.profile} />
      </section>

      {/* Projects Section */}
      <section id="projects">
        <ProjectsSection
          projects={data.projects}
          featuredCount={data.config.featuredProjectsCount}
        />
      </section>

      {/* Contact Section */}
      {data.config.showContact && (
        <ContactSection 
          profile={data.profile} 
          formspreeFormId={data.config.formspreeFormId}
        />
      )}
    </motion.div>
  )
}
