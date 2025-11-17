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
		<section className="bg-linear-to-b from-bg to-muted/30 py-24">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				{/* Section Header */}
				<motion.div
					className="mb-16 text-center"
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}
				>
					<h2 className="mb-4 font-bold text-3xl text-fg md:text-4xl lg:text-5xl">
						Featured Projects
					</h2>
					<p className="mx-auto max-w-3xl text-lg text-muted-fg md:text-xl">
						A showcase of my recent work, featuring modern web applications
						built with cutting-edge technologies
					</p>
				</motion.div>

				{/* Projects Grid */}
				<motion.div
					className="grid grid-cols-1 gap-8 lg:grid-cols-2 xl:grid-cols-3"
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
				>
					{featuredProjects.map((project) => (
						<motion.div key={project.id} variants={cardVariants}>
							<Card className="group h-full border-2 border-border/50 bg-bg transition-all duration-500 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10">
								{/* Project Content */}
								<div className="p-6">
									{/* Header with title and links */}
									<div className="mb-4 flex items-start justify-between">
										<h3 className="flex-1 font-semibold text-fg text-xl transition-colors group-hover:text-primary">
											{project.title}
										</h3>
										<div className="ml-4 flex items-center gap-2">
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
													<Github className="h-4 w-4" />
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
														<ExternalLink className="h-4 w-4" />
													</Button>
												</a>
											)}
										</div>
									</div>

									<p className="mb-4 text-muted-fg leading-relaxed">
										{project.description}
									</p>

									{/* Technologies */}
									<div className="mb-4 flex flex-wrap gap-2">
										{project.technologies.map((tech) => (
											<span
												key={tech}
												className="rounded-full border border-border/50 bg-muted px-3 py-1 font-medium text-muted-fg text-xs"
											>
												{tech}
											</span>
										))}
									</div>

									{/* Metrics */}
									{project.metrics && (
										<div className="border-border/50 border-t pt-4">
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
																<Icon className="h-4 w-4 text-primary" />
																<div>
																	<p className="font-semibold text-fg text-sm">
																		{value}
																	</p>
																	<p className="text-muted-fg text-xs capitalize">
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
					className="mt-16 text-center"
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
									<ExternalLink className="h-5 w-5" />
								</motion.div>
							</span>
						</Button>
					</a>
				</motion.div>
			</div>
		</section>
	)
}
