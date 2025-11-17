import { createFileRoute } from "@tanstack/react-router"
import { animate } from "motion"
import { useEffect, useRef } from "react"
import {
	ContactSection,
	HeroSection,
	ProjectsSection,
	usePortfolio,
} from "~/modules/portfolio"
import { Footer } from "~/shared/components/footer"
import { ScrollProgress } from "~/shared/components/scroll-progress"

export const Route = createFileRoute("/")({
	component: RouteComponent,
})

function RouteComponent() {
	const { data } = usePortfolio()
	const containerRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		if (!containerRef.current) return

		animate(
			containerRef.current,
			{ opacity: [0, 1] },
			{ duration: 0.5, ease: [0.22, 1, 0.36, 1] },
		)
	}, [])

	return (
		<>
			<ScrollProgress />
			<div ref={containerRef} className="opacity-0">
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

				{/* Footer */}
				<Footer />
			</div>
		</>
	)
}
