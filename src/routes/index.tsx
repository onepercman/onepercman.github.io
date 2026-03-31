"use client"

import { createFileRoute } from "@tanstack/react-router"
import { useTheme } from "next-themes"
import {
	AboutSection,
	aboutData,
	contactData,
	Footer,
	HeroSection,
	heroData,
	Navigation,
	OtherSection,
	otherItems,
	ProjectsSection,
	projects,
} from "~/modules/portfolio"

export const Route = createFileRoute("/")({
	component: RouteComponent,
})

function RouteComponent() {
	const { theme, setTheme } = useTheme()

	const toggleTheme = () => {
		setTheme(theme === "dark" ? "light" : "dark")
	}

	return (
		<>
			<Navigation
				theme={(theme as "light" | "dark") || "dark"}
				onThemeToggle={toggleTheme}
			/>
			<main>
				<HeroSection
					name={heroData.name}
					nickname={heroData.nickname}
					headline={heroData.headline}
					tagline={heroData.tagline}
					location={heroData.location}
					experience={heroData.experience}
				/>
				<AboutSection about={aboutData} contact={contactData} />
				<ProjectsSection projects={projects} />
				<OtherSection items={otherItems} />
			</main>
			<Footer />
		</>
	)
}
