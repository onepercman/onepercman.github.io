import { createFileRoute } from "@tanstack/react-router"
import AboutMe from "~/modules/portfolio/about-me"
import Banner from "~/modules/portfolio/banner"
import Experiences from "~/modules/portfolio/experiences"
import ProjectList from "~/modules/portfolio/project-list"
import Skills from "~/modules/portfolio/skills"

export const Route = createFileRoute("/")({
	component: RouteComponent,
})

function RouteComponent() {
	return (
		<div className="flex flex-col gap-32">
			<Banner />
			<AboutMe />
			<Skills />
			<Experiences />
			<ProjectList />
		</div>
	)
}
