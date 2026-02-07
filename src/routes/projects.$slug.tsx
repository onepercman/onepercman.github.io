import { useGSAP } from "@gsap/react"
import { createFileRoute, notFound } from "@tanstack/react-router"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"
import parse from "html-react-parser"
import { ArrowLeft, ExternalLink, Github } from "lucide-react"
import { useRef } from "react"
import ArrowAnimation from "~/shared/components/arrow-animation"
import TransitionLink from "~/shared/components/transition-link"
import { PROJECTS } from "~/shared/constants/data"

gsap.registerPlugin(useGSAP, ScrollTrigger)

export const Route = createFileRoute("/projects/$slug")({
	loader: ({ params }) => {
		const project = PROJECTS.find((p) => p.slug === params.slug)
		if (!project) {
			throw notFound()
		}
		return { project }
	},
	head: ({ loaderData }) => {
		if (!loaderData) return { meta: [] }

		const { project } = loaderData
		const siteUrl = "https://onepercman.com"
		const projectUrl = `${siteUrl}/projects/${project.slug}`

		// Extract plain text from HTML description
		const plainDescription = project.description
			.replace(/<br\s*\/?>/gi, " ")
			.replace(/<[^>]+>/g, "")
			.replace(/\s+/g, " ")
			.trim()
			.substring(0, 160)

		return {
			meta: [
				{ title: `${project.title} | Trung Tran Duy - Frontend Engineer` },
				{ name: "description", content: plainDescription },
				{
					name: "keywords",
					content: `${project.title}, ${project.techStack.join(", ")}, frontend development, web development, onepercman`,
				},
				{ name: "author", content: "Trung Tran Duy (onepercman)" },

				// Open Graph
				{ property: "og:type", content: "article" },
				{ property: "og:url", content: projectUrl },
				{ property: "og:title", content: project.title },
				{ property: "og:description", content: plainDescription },
				{ property: "og:image", content: `${siteUrl}${project.thumbnail}` },
				{ property: "og:image:width", content: "1200" },
				{ property: "og:image:height", content: "630" },
				{ property: "og:site_name", content: "onepercman.com" },
				{
					property: "article:published_time",
					content: `${project.year}-01-01`,
				},
				{ property: "article:author", content: "Trung Tran Duy" },
				{
					property: "article:tag",
					content: project.techStack.join(", "),
				},

				// Twitter
				{ name: "twitter:card", content: "summary_large_image" },
				{ name: "twitter:url", content: projectUrl },
				{ name: "twitter:title", content: project.title },
				{ name: "twitter:description", content: plainDescription },
				{ name: "twitter:image", content: `${siteUrl}${project.thumbnail}` },
				{ name: "twitter:creator", content: "@onepercman" },

				// Additional meta
				{ name: "robots", content: "index, follow" },
				{ name: "language", content: "en" },

				// Schema.org structured data for Project
				{
					"script:ld+json": {
						"@context": "https://schema.org",
						"@type": "CreativeWork",
						name: project.title,
						description: plainDescription,
						url: projectUrl,
						image: `${siteUrl}${project.thumbnail}`,
						datePublished: `${project.year}-01-01`,
						author: {
							"@type": "Person",
							name: "Trung Tran Duy",
							alternateName: "onepercman",
							url: siteUrl,
						},
						creator: {
							"@type": "Person",
							name: "Trung Tran Duy",
						},
						keywords: project.techStack.join(", "),
						...(project.liveUrl && {
							workExample: {
								"@type": "WebSite",
								url: project.liveUrl,
							},
						}),
						...(project.sourceCode && {
							codeRepository: project.sourceCode,
						}),
					},
				},

				// BreadcrumbList schema
				{
					"script:ld+json": {
						"@context": "https://schema.org",
						"@type": "BreadcrumbList",
						itemListElement: [
							{
								"@type": "ListItem",
								position: 1,
								name: "Home",
								item: siteUrl,
							},
							{
								"@type": "ListItem",
								position: 2,
								name: "Projects",
								item: `${siteUrl}/#projects`,
							},
							{
								"@type": "ListItem",
								position: 3,
								name: project.title,
								item: projectUrl,
							},
						],
					},
				},
			],
			links: [
				{ rel: "canonical", href: projectUrl },
				...(project.liveUrl
					? [{ rel: "alternate", href: project.liveUrl }]
					: []),
			],
		}
	},
	staticData: () => {
		return PROJECTS.map((project) => ({ slug: project.slug }))
	},
	component: RouteComponent,
})

function RouteComponent() {
	const { project } = Route.useLoaderData()

	const containerRef = useRef<HTMLDivElement>(null)
	useGSAP(
		() => {
			if (!containerRef.current) return

			gsap.set(".fade-in-later", {
				autoAlpha: 0,
				y: 30,
			})
			const tl = gsap.timeline({
				delay: 0.5,
			})

			tl.to(".fade-in-later", {
				autoAlpha: 1,
				y: 0,
				stagger: 0.1,
			})
		},
		{ scope: containerRef },
	)

	// blur info div and make it smaller on scroll
	useGSAP(
		() => {
			if (window.innerWidth < 992) return

			gsap.to("#info", {
				filter: "blur(3px)",
				autoAlpha: 0,
				scale: 0.9,
				// position: 'sticky',
				scrollTrigger: {
					trigger: "#info",
					start: "bottom bottom",
					end: "bottom top",
					pin: true,
					pinSpacing: false,
					scrub: 0.5,
				},
			})
		},
		{ scope: containerRef },
	)

	// parallax effect on images
	useGSAP(
		() => {
			gsap.utils
				.toArray<HTMLDivElement>("#images > div")
				.forEach((imageDiv, i) => {
					gsap.to(imageDiv, {
						backgroundPosition: `center 0%`,
						ease: "none",
						scrollTrigger: {
							trigger: imageDiv,
							start: () => (i ? "top bottom" : "top 50%"),
							end: "bottom top",
							scrub: true,
							// invalidateOnRefresh: true, // to make it responsive
						},
					})
				})
		},
		{ scope: containerRef },
	)

	return (
		<section className="pt-5 pb-14">
			<div className="container" ref={containerRef}>
				<TransitionLink
					back
					to="/"
					className="group mb-16 inline-flex h-12 items-center gap-2"
				>
					<ArrowLeft className="transition-all duration-300 group-hover:-translate-x-1 group-hover:text-primary" />
					Back
				</TransitionLink>

				<div className="top-0 flex min-h-[calc(100svh-100px)]" id="info">
					<div className="relative w-full">
						<div className="mx-auto mb-10 flex max-w-[635px] items-start gap-6">
							<h1 className="fade-in-later overflow-hidden font-changa-one text-4xl leading-none opacity-0 md:text-[60px]">
								<span className="inline-block">{project.title}</span>
							</h1>

							<div className="fade-in-later flex gap-2 opacity-0">
								{project.sourceCode && (
									<a
										href={project.sourceCode}
										target="_blank"
										rel="noreferrer noopener"
										className="hover:text-primary"
									>
										<Github size={30} />
									</a>
								)}
								{project.liveUrl && (
									<a
										href={project.liveUrl}
										target="_blank"
										rel="noreferrer noopener"
										className="hover:text-primary"
									>
										<ExternalLink size={30} />
									</a>
								)}
							</div>
						</div>

						<div className="mx-auto max-w-[635px] space-y-7 pb-20">
							<div className="fade-in-later">
								<p className="mb-3 font-changa-one text-fg/80">Year</p>

								<div className="text-lg">{project.year}</div>
							</div>
							<div className="fade-in-later">
								<p className="mb-3 font-changa-one text-fore">
									Tech & Technique
								</p>

								<div className="text-lg">{project.techStack.join(", ")}</div>
							</div>
							<div className="fade-in-later">
								<p className="mb-3 font-changa-one text-fore">Description</p>

								<div className="prose-xl markdown-text text-lg">
									{parse(project.description)}
								</div>
							</div>
							{project.role && (
								<div className="fade-in-later">
									<p className="mb-3 font-changa-one text-fore">My Role</p>

									<div className="text-lg">{parse(project.role)}</div>
								</div>
							)}
						</div>

						<ArrowAnimation />
					</div>
				</div>

				<div
					className="fade-in-later relative mx-auto flex max-w-[800px] flex-col gap-2"
					id="images"
				>
					{project.images.map((image) => (
						<div
							key={image}
							className="group relative aspect-[750/400] w-full bg-background-light"
							style={{
								backgroundImage: `url(${image})`,
								backgroundSize: "cover",
								backgroundPosition: "center 50%",
								backgroundRepeat: "no-repeat",
							}}
						>
							<a
								href={image}
								target="_blank"
								className="absolute top-4 right-4 inline-flex size-12 items-center justify-center bg-background/70 text-fg opacity-0 transition-all hover:bg-primary hover:text-primary-foreground group-hover:opacity-100"
							>
								<ExternalLink />
							</a>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
