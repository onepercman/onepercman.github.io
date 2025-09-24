import { motion } from "framer-motion"
import { ExternalLink, Github, TrendingUp, Users, Zap } from "lucide-react"
import { Button, Card } from "~/shared/components/ui"
import type { Project } from "./portfolio-types"

interface ProjectsSectionProps {
  projects: Project[]
  featuredCount?: number
}

export function ProjectsSection({
  projects,
  featuredCount = 3,
}: ProjectsSectionProps) {
  const featuredProjects = projects
    .filter((project) => project.featured)
    .slice(0, featuredCount)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  }

  const getMetricIcon = (key: string) => {
    switch (key) {
      case "users":
        return Users
      case "performance":
        return Zap
      case "uptime":
      case "satisfaction":
      case "adoption":
      case "efficiency":
        return TrendingUp
      default:
        return TrendingUp
    }
  }

  return (
    <section className="py-24 bg-gradient-to-b from-bg to-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-fg mb-4">
            Featured Projects
          </h2>
          <p className="text-lg md:text-xl text-muted-fg max-w-3xl mx-auto">
            A showcase of my recent work, featuring modern web applications
            built with cutting-edge technologies
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {featuredProjects.map((project) => (
            <motion.div key={project.id} variants={cardVariants}>
              <Card className="group h-full border-2 border-border/50 hover:border-primary/50 transition-all duration-500 bg-bg hover:shadow-2xl hover:shadow-primary/10">
                {/* Project Content */}
                <div className="p-6">
                  {/* Header with title and links */}
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-semibold text-fg group-hover:text-primary transition-colors flex-1">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-2 ml-4">
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="View code"
                        className="inline-block"
                      >
                        <Button
                          size="sq-sm"
                          intent="plain"
                          className="h-8 w-8 p-0 hover:bg-muted"
                        >
                          <Github className="w-4 h-4" />
                        </Button>
                      </a>
                      {project.links.demo !== "#" && (
                        <a
                          href={project.links.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="View demo"
                          className="inline-block"
                        >
                          <Button
                            size="sq-sm"
                            intent="plain"
                            className="h-8 w-8 p-0 hover:bg-muted"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </Button>
                        </a>
                      )}
                    </div>
                  </div>

                  <p className="text-muted-fg mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-medium bg-muted text-muted-fg rounded-full border border-border/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Metrics */}
                  {project.metrics && (
                    <div className="border-t border-border/50 pt-4">
                      <div className="grid grid-cols-2 gap-4">
                        {Object.entries(project.metrics)
                          .slice(0, 4)
                          .map(([key, value]) => {
                            const Icon = getMetricIcon(key)
                            return (
                              <div
                                key={key}
                                className="flex items-center gap-2"
                              >
                                <Icon className="w-4 h-4 text-primary" />
                                <div>
                                  <p className="text-sm font-semibold text-fg">
                                    {value}
                                  </p>
                                  <p className="text-xs text-muted-fg capitalize">
                                    {key}
                                  </p>
                                </div>
                              </div>
                            )
                          })}
                      </div>
                    </div>
                  )}
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Projects Button */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <a
            href="https://github.com/onepercman"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <Button intent="outline" size="lg" className="group">
              <span className="flex items-center gap-2 text-lg">
                View All Projects
                <motion.div
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ExternalLink className="w-5 h-5" />
                </motion.div>
              </span>
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
