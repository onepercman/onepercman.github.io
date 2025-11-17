import { createFileRoute } from "@tanstack/react-router"
import { motion } from "framer-motion"
import {
	ContactSection,
	HeroSection,
	ProjectsSection,
	usePortfolio,
} from "~/modules/portfolio"

export const Route = createFileRoute("/")({
	component: RouteComponent,
})

function RouteComponent() {
	const { data } = usePortfolio()

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
