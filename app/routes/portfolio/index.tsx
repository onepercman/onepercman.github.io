import { motion } from "framer-motion"
import type { MetaFunction } from "react-router"
import {
  ContactSection,
  HeroSection,
  ProjectsSection,
  usePortfolio,
} from "~/modules/portfolio"
import { Spinner } from "~/shared/components/ui"
import { META_DATA, SOCIAL_URLS } from "~/shared/constants/portfolio-constants"

export const meta: MetaFunction = () => {
  const location = META_DATA.location.split(", ")

  return [
    { title: META_DATA.siteName },
    { name: "description", content: META_DATA.description },
    { name: "keywords", content: META_DATA.keywords },
    { name: "author", content: META_DATA.author },
    { name: "robots", content: "index, follow" },
    { name: "language", content: "en" },
    { name: "revisit-after", content: "7 days" },

    // Open Graph / Facebook
    { property: "og:type", content: "website" },
    { property: "og:url", content: META_DATA.siteUrl },
    { property: "og:title", content: META_DATA.siteName },
    { property: "og:description", content: META_DATA.description },
    { property: "og:image", content: META_DATA.ogImage },
    { property: "og:image:width", content: "1200" },
    { property: "og:image:height", content: "630" },
    { property: "og:site_name", content: "onepercman.com" },
    { property: "og:locale", content: "en_US" },

    // Twitter
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:url", content: META_DATA.siteUrl },
    { name: "twitter:title", content: META_DATA.siteName },
    { name: "twitter:description", content: META_DATA.description },
    { name: "twitter:image", content: META_DATA.ogImage },
    { name: "twitter:site", content: SOCIAL_URLS.twitterHandle },
    { name: "twitter:creator", content: SOCIAL_URLS.twitterHandle },

    // Additional SEO
    { name: "theme-color", content: "#ef4444" },
    { name: "msapplication-TileColor", content: "#ef4444" },
    { name: "apple-mobile-web-app-capable", content: "yes" },
    { name: "apple-mobile-web-app-status-bar-style", content: "default" },
    { name: "apple-mobile-web-app-title", content: "onepercman" },
    { name: "mobile-web-app-capable", content: "yes" },

    // Verification
    {
      name: "google-site-verification",
      content: "your-google-verification-code",
    },

    // Schema.org structured data
    {
      "script:ld+json": {
        "@context": "https://schema.org",
        "@type": "Person",
        name: META_DATA.author.split(" (")[0], // Extract real name
        alternateName: "onepercman",
        description: META_DATA.description,
        url: META_DATA.siteUrl,
        image: META_DATA.ogImage,
        email: META_DATA.email,
        sameAs: [SOCIAL_URLS.github, SOCIAL_URLS.linkedin, SOCIAL_URLS.twitter],
        jobTitle: META_DATA.title,
        worksFor: {
          "@type": "Organization",
          name: "Freelancer",
        },
        knowsAbout: [
          "Frontend Development",
          "Web3 Development",
          "React",
          "TypeScript",
          "TailwindCSS",
          "Blockchain",
          "DeFi",
        ],
        address: {
          "@type": "PostalAddress",
          addressLocality: location[0] || "Hanoi",
          addressCountry: location[1] || "Vietnam",
        },
      },
    },
  ]
}

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
