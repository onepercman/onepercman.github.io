"use client"

import { Briefcase, ChevronDown, Download } from "lucide-react"
import { cn, useScrollTimeline } from "~/shared/utils"

interface HeroSectionProps {
	name?: string
	nickname?: string
	headline?: string
	tagline?: string
	location?: string
	experience?: string
}

export function HeroSection({
	name,
	nickname,
	headline,
	tagline,
	location,
	experience,
}: HeroSectionProps) {
	const scrollToProjects = () => {
		const projectsSection = document.getElementById("projects")
		if (projectsSection) {
			projectsSection.scrollIntoView({ behavior: "smooth" })
		}
	}

	// Timeline animation for hero content - fast and smooth
	const heroRef = useScrollTimeline((tl, el) => {
		const avatar = el.querySelector(".hero-avatar")
		const name = el.querySelector(".hero-name")
		const headline = el.querySelector(".hero-headline")
		const tagline = el.querySelector(".hero-tagline")
		const pills = el.querySelector(".hero-pills")
		const cta = el.querySelector(".hero-cta")
		const scroll = el.querySelector(".hero-scroll")

		tl.from(avatar, {
			opacity: 0,
			scale: 0.9,
			duration: 0.5,
			ease: "back.out(1.5)",
		})
			.from(
				name,
				{
					opacity: 0,
					y: 20,
					duration: 0.4,
					ease: "power2.out",
				},
				"-=0.3",
			)
			.from(
				headline,
				{
					opacity: 0,
					y: 15,
					duration: 0.3,
					ease: "power2.out",
				},
				"-=0.2",
			)
			.from(
				tagline,
				{
					opacity: 0,
					y: 15,
					duration: 0.3,
					ease: "power2.out",
				},
				"-=0.15",
			)
			.from(
				pills,
				{
					opacity: 0,
					y: 15,
					duration: 0.3,
					ease: "power2.out",
				},
				"-=0.15",
			)
			.from(
				cta,
				{
					opacity: 0,
					y: 15,
					duration: 0.3,
					ease: "power2.out",
				},
				"-=0.15",
			)
			.from(
				scroll,
				{
					opacity: 0,
					duration: 0.3,
					ease: "power1.out",
				},
				"-=0.1",
			)
	}, {})

	return (
		<section
			ref={heroRef as React.RefObject<HTMLElement>}
			id="hero"
			className={cn(
				"relative flex min-h-screen items-center justify-center px-4",
				"pt-24 pb-32",
			)}
			style={{ scrollMarginTop: "120px" }}
		>
			<div className="relative z-10 mx-auto w-full max-w-4xl text-center">
				{/* Avatar */}
				<div className="hero-avatar mb-8 flex justify-center">
					<div className="relative z-0 flex items-center justify-center">
						{/* Glow effect */}
						<div className="absolute -z-10 h-32 w-32 scale-80 rounded-full bg-primary/20 opacity-30 blur-[40px] sm:h-40 sm:w-40" />

						{/* Avatar container */}
						<div className="relative flex h-32 w-32 items-center justify-center sm:h-40 sm:w-40">
							<div className="flex h-full w-full items-center justify-center overflow-hidden rounded-full border border-primary/30 bg-gradient-to-br from-primary/10 to-primary/5 p-1">
								<img
									src="/avatar.jpeg"
									alt={nickname || name || "Profile"}
									className="size-full rounded-full object-cover"
								/>
							</div>
						</div>
					</div>
				</div>

				{/* Name and title */}
				<div className="hero-name mb-6 space-y-3">
					<h1 className="font-bold text-5xl text-fg tracking-tight sm:text-6xl md:text-7xl">
						<span className="block text-2xl text-muted-fg sm:text-3xl md:text-4xl">
							{name}
						</span>
						<span className="animate-gradient bg-linear-to-r from-primary via-pink-500 to-violet-500 bg-clip-text text-transparent">
							{nickname || "onepercman"}
						</span>
					</h1>
				</div>

				<p className="hero-headline mx-auto mb-6 max-w-2xl font-medium text-fg text-xl sm:text-2xl">
					{headline || "Fullstack Developer"}
				</p>

				{/* Tagline */}
				{tagline && (
					<p className="hero-tagline mb-8 font-light text-lg text-muted-fg sm:text-xl">
						{tagline}
					</p>
				)}

				{/* Info pills */}
				<div className="hero-pills mb-10 flex flex-wrap items-center justify-center gap-3">
					{location && (
						<div className="flex items-center gap-2 rounded-full border border-border bg-muted/30 px-4 py-2 text-muted-fg text-sm backdrop-blur-sm">
							<span>📍</span>
							<span>{location}</span>
						</div>
					)}
					{experience && (
						<div className="flex items-center gap-2 rounded-full border border-border bg-muted/30 px-4 py-2 text-muted-fg text-sm backdrop-blur-sm">
							<Briefcase className="h-4 w-4" />
							<span>{experience} experience</span>
						</div>
					)}
				</div>

				{/* CTA Buttons */}
				<div className="hero-cta flex flex-wrap items-center justify-center gap-4">
					<button
						type="button"
						onClick={scrollToProjects}
						className={cn(
							"group flex items-center gap-2 rounded-full px-6 py-3 font-medium text-sm transition-all duration-300",
							"bg-primary text-primary-fg shadow-lg shadow-primary/20",
							"hover:scale-105 hover:shadow-primary/30 hover:shadow-xl",
							"active:scale-95",
						)}
					>
						View Work
						<ChevronDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
					</button>
					<a
						href="/cv.pdf"
						download
						className={cn(
							"group flex items-center gap-2 rounded-full border px-6 py-3 font-medium text-sm transition-all duration-300",
							"border-border bg-bg/50 text-fg backdrop-blur-sm",
							"hover:scale-105 hover:border-primary hover:bg-primary/10",
							"active:scale-95",
						)}
					>
						<Download className="h-4 w-4" />
						Download CV
					</a>
				</div>

				{/* Scroll indicator */}
				<div className="hero-scroll mt-16 flex justify-center">
					<div className="flex animate-bounce flex-col items-center gap-1 text-muted-fg/50">
						<span className="text-xs">Scroll to explore</span>
						<ChevronDown className="h-4 w-4" />
					</div>
				</div>
			</div>
		</section>
	)
}
