import { ExternalLink, Github, TrendingUp, Users, Zap } from "lucide-react"
import { animate, stagger } from "motion"
import { useEffect, useRef } from "react"
import { Button, Card } from "~/shared/components/ui"
import { useParallax } from "~/shared/hooks/use-parallax"
import { useScrollSection } from "~/shared/hooks/use-scroll-section"
import type { Project } from "./portfolio-types"

interface ProjectsSectionProps {
	projects: Project[]
	featuredCount?: number
}

export function ProjectsSection({
	projects,
	featuredCount = 3,
}: ProjectsSectionProps) {
	const sectionRef = useRef<HTMLElement | null>(null)
	const headerRef = useRef<HTMLDivElement>(null)
	const gridRef = useRef<HTMLDivElement>(null)
	const buttonRef = useRef<HTMLDivElement>(null)

	const { isInView } = useScrollSection(sectionRef, { threshold: 0.1 })
	const hasAnimated = useRef(false)
	const parallaxOffset = useParallax({ speed: 0.2 })

	const featuredProjects = projects
		.filter((project) => project.featured)
		.slice(0, featuredCount)

	useEffect(() => {
		if (!isInView || hasAnimated.current) return
		if (!headerRef.current || !gridRef.current || !buttonRef.current) return

		hasAnimated.current = true

		animate(
			headerRef.current,
			{ opacity: [0, 1], y: [40, 0] },
			{ duration: 0.8, ease: [0.22, 1, 0.36, 1] },
		)

		setTimeout(() => {
			if (!gridRef.current) return
			animate(
				gridRef.current.querySelectorAll("[data-card]"),
				{ opacity: [0, 1], y: [60, 0], scale: [0.95, 1] },
				{ duration: 0.6, delay: stagger(0.1), ease: [0.22, 1, 0.36, 1] },
			)
		}, 400)

		setTimeout(() => {
			if (!buttonRef.current) return
			animate(
				buttonRef.current,
				{ opacity: [0, 1], y: [30, 0] },
				{ duration: 0.6, ease: [0.22, 1, 0.36, 1] },
			)
		}, 600)
	}, [isInView])

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

	const handleCardHover = (e: React.MouseEvent<HTMLDivElement>) => {
		const card = e.currentTarget
		animate(card, { y: -8 }, { duration: 0.3, ease: [0.22, 1, 0.36, 1] })
	}

	const handleCardLeave = (e: React.MouseEvent<HTMLDivElement>) => {
		const card = e.currentTarget
		animate(card, { y: 0 }, { duration: 0.3, ease: [0.22, 1, 0.36, 1] })
	}

	const handleButtonHover = (e: React.MouseEvent<HTMLButtonElement>) => {
		const icon = e.currentTarget.querySelector("[data-icon]")
		if (icon) {
			animate(
				icon,
				{ x: [0, 4, 0] },
				{ duration: 1.5, repeat: Number.POSITIVE_INFINITY },
			)
		}
	}

	return (
		<section
			ref={sectionRef}
			className="bg-linear-to-b from-bg to-muted/30 py-24"
		>
			<div
				className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
				style={{ transform: `translateY(${parallaxOffset}px)` }}
			>
				{/* Section Header */}
				<div ref={headerRef} className="mb-16 text-center opacity-0">
					<h2 className="mb-4 font-bold text-3xl text-fg md:text-4xl lg:text-5xl">
						Featured Projects
					</h2>
					<p className="mx-auto max-w-3xl text-lg text-muted-fg md:text-xl">
						A showcase of my recent work, featuring modern web applications
						built with cutting-edge technologies
					</p>
				</div>

				{/* Projects Grid */}
				<div
					ref={gridRef}
					className="grid grid-cols-1 gap-8 lg:grid-cols-2 xl:grid-cols-3"
				>
					{featuredProjects.map((project) => (
						<article
							key={project.id}
							data-card
							className="opacity-0"
							onMouseEnter={handleCardHover}
							onMouseLeave={handleCardLeave}
						>
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
						</article>
					))}
				</div>

				{/* View All Projects Button */}
				<div ref={buttonRef} className="mt-16 text-center opacity-0">
					<a
						href="https://github.com/onepercman"
						target="_blank"
						rel="noopener noreferrer"
						className="inline-block"
					>
						<Button
							intent="outline"
							size="lg"
							className="group"
							onMouseEnter={handleButtonHover}
						>
							<span className="flex items-center gap-2 text-lg">
								View All Projects
								<ExternalLink data-icon className="h-5 w-5" />
							</span>
						</Button>
					</a>
				</div>
			</div>
		</section>
	)
}
