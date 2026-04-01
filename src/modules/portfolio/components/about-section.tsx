"use client"

import gsap from "gsap"
import {
	Briefcase,
	Code2,
	Download,
	Globe,
	GraduationCap,
	Mail,
	MapPin,
	Sparkles,
	TrendingUp,
} from "lucide-react"
import { useEffect, useRef } from "react"
import { useScrollStagger } from "~/shared/utils"
import type { AboutInfo, ContactInfo } from "../portfolio-types"

interface AboutSectionProps {
	about: AboutInfo
	contact: ContactInfo
}

export function AboutSection({ about, contact }: AboutSectionProps) {
	const imageRef = useRef<HTMLDivElement>(null)
	const gridRef = useScrollStagger({
		stagger: 0.04,
		duration: 0.4,
		start: "top 75%",
	})
	const experienceRef = useRef<HTMLDivElement>(null)
	const educationRef = useRef<HTMLDivElement>(null)
	const projectsRef = useRef<HTMLDivElement>(null)
	const techStackRef = useRef<HTMLDivElement>(null)

	const animatedName = (about.title || "YOUR NAME").split(" ")

	// Use GSAP for smooth mouse tracking without re-renders
	const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
		if (!imageRef.current) return
		const rect = imageRef.current.getBoundingClientRect()
		const x = (e.clientX - rect.left - rect.width / 2) / rect.width
		const y = (e.clientY - rect.top - rect.height / 2) / rect.height

		// Use GSAP to animate - no state updates, no re-renders
		const images = imageRef.current.querySelectorAll("img")
		images.forEach((img) => {
			gsap.to(img, {
				x: x * 15,
				y: y * 15,
				duration: 0.3,
				ease: "power2.out",
			})
		})
	}

	const handleMouseLeave = () => {
		if (!imageRef.current) return
		const images = imageRef.current.querySelectorAll("img")
		images.forEach((img) => {
			gsap.to(img, {
				x: 0,
				y: 0,
				duration: 0.5,
				ease: "power2.out",
			})
		})
	}

	// Auto-cycle animations for cards - pause on hover, click to toggle
	useEffect(() => {
		const cards = [
			{ ref: experienceRef, duration: 3 },
			{ ref: educationRef, duration: 3 },
			{ ref: projectsRef, duration: 3 },
			{ ref: techStackRef, duration: 3 },
		]

		const timelines: gsap.core.Timeline[] = []
		const cleanup: (() => void)[] = []

		cards.forEach(({ ref, duration }) => {
			if (!ref.current) return

			const content = ref.current.querySelector(".slide-content")
			if (!content) return

			const tl = gsap.timeline({ repeat: -1, repeatDelay: duration })

			tl.to(content, {
				y: "-50%",
				duration: 0.6,
				ease: "power2.inOut",
				delay: duration,
			}).to(content, {
				y: "0%",
				duration: 0.6,
				ease: "power2.inOut",
				delay: duration,
			})

			// Pause on hover
			const handleMouseEnter = () => tl.pause()
			const handleMouseLeave = () => tl.resume()

			// Click to toggle content immediately
			const handleClick = () => {
				const currentY = gsap.getProperty(content, "y")
				const targetY = currentY === "0%" || currentY === 0 ? "-50%" : "0%"

				// Stop timeline temporarily
				tl.pause()

				// Animate to opposite state
				gsap.to(content, {
					y: targetY,
					duration: 0.4,
					ease: "power2.inOut",
					onComplete: () => {
						// Resume timeline from new position
						tl.resume()
					},
				})
			}

			ref.current.addEventListener("mouseenter", handleMouseEnter)
			ref.current.addEventListener("mouseleave", handleMouseLeave)
			ref.current.addEventListener("click", handleClick)

			timelines.push(tl)
			cleanup.push(() => {
				ref.current?.removeEventListener("mouseenter", handleMouseEnter)
				ref.current?.removeEventListener("mouseleave", handleMouseLeave)
				ref.current?.removeEventListener("click", handleClick)
			})
		})

		return () => {
			for (const tl of timelines) {
				tl.kill()
			}
			for (const fn of cleanup) {
				fn()
			}
		}
	}, [])

	return (
		<section
			id="about"
			className="mx-auto max-w-4xl px-4 pt-0 pb-32"
			style={{ scrollMarginTop: "120px" }}
		>
			<div
				ref={gridRef as React.RefObject<HTMLDivElement>}
				className="grid auto-rows-[110px] grid-cols-4 gap-2 md:auto-rows-[120px] md:grid-cols-8 md:gap-2.5"
			>
				{/* Row 1-2: Name + Portrait + Bio */}
				{/* Name Card */}
				<div className="group relative col-span-2 row-span-2 overflow-hidden rounded-3xl border border-border bg-linear-to-br from-bg to-muted/20 p-4 backdrop-blur-md md:col-span-2 md:row-span-2">
					<div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center">
						<div className="h-full w-full scale-110 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.2)_0%,transparent_70%)] mix-blend-overlay blur-3xl will-change-transform" />
					</div>
					<div className="relative z-10 flex h-full w-full flex-col items-start justify-between">
						<div className="flex w-full flex-col">
							{animatedName.map((word, wordIndex) => (
								<div
									key={wordIndex}
									className="flex justify-start bg-linear-to-b from-fg to-muted-fg bg-clip-text font-black text-transparent text-xl leading-[1.1] tracking-tighter drop-shadow-sm md:text-2xl dark:drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]"
								>
									{word.split("").map((letter, letterIndex) => (
										<div key={letterIndex} className="inline-block">
											<span className="inline-block">{letter}</span>
										</div>
									))}
								</div>
							))}
						</div>
						<div className="flex flex-col gap-1">
							<div className="h-px w-8 bg-fg/20" />
							<span className="font-mono text-[8px] text-muted-fg uppercase tracking-[0.15em] opacity-70">
								Fullstack Developer
							</span>
						</div>
					</div>
				</div>

				{/* Portrait Image */}
				<div
					ref={imageRef}
					onMouseMove={handleMouseMove}
					onMouseLeave={handleMouseLeave}
					className="group/portrait relative col-span-2 row-span-2 overflow-hidden rounded-3xl border border-border md:col-span-2 md:row-span-3"
				>
					<img
						alt="Avatar"
						src={about.images?.[0] || about.image}
						className="absolute inset-0 h-full w-full scale-110 object-cover transition-opacity duration-500 group-hover/portrait:opacity-0"
					/>
					{about.images?.[1] && (
						<img
							alt="Portrait"
							src={about.images[1]}
							className="absolute inset-0 h-full w-full scale-110 object-cover opacity-0 transition-opacity duration-500 group-hover/portrait:opacity-100"
						/>
					)}
				</div>

				{/* About Bio */}
				<div className="group relative col-span-4 row-span-2 overflow-hidden rounded-3xl border border-border bg-linear-to-br from-bg to-muted/20 p-4 backdrop-blur-md transition-all hover:shadow-lg hover:shadow-primary/5 md:col-span-4 md:row-span-2">
					<div className="flex h-full flex-col justify-between">
						<div className="mb-2 flex items-center gap-1.5">
							<Sparkles className="h-3 w-3 text-primary" />
							<h3 className="font-bold text-[9px] text-fg uppercase tracking-wide opacity-70">
								About
							</h3>
						</div>
						<div className="space-y-2">
							<p className="text-[10px] text-fg leading-relaxed md:text-[11px]">
								Solo developer with 5+ years building{" "}
								<strong className="text-primary">
									production-ready applications
								</strong>{" "}
								across enterprise, fintech, and blockchain domains. Specialized
								in modern web architecture, real-time systems, and developer
								tooling.
							</p>
							<p className="hidden text-[10px] text-muted-fg leading-relaxed opacity-80 md:block">
								Currently exploring{" "}
								<strong className="text-primary">AI-assisted workflows</strong>,
								building analytics platforms, and designing component libraries.
								Also a music producer experimenting with creative tech.
							</p>
						</div>
						<div className="mt-2 flex flex-wrap gap-1">
							<span className="rounded-full bg-primary/10 px-2 py-0.5 text-[8px] text-primary">
								5+ years
							</span>
							<span className="rounded-full bg-muted/30 px-2 py-0.5 text-[8px] text-muted-fg">
								AI Research
							</span>
							<span className="rounded-full bg-muted/30 px-2 py-0.5 text-[8px] text-muted-fg">
								Fullstack
							</span>
							<span className="rounded-full bg-muted/30 px-2 py-0.5 text-[8px] text-muted-fg">
								DevTools
							</span>
						</div>
					</div>
				</div>

				{/* Row 3: Experience + Education + Current Focus */}
				{/* Experience - Auto Slide */}
				<div
					ref={experienceRef}
					className="group relative col-span-2 row-span-1 cursor-pointer overflow-hidden rounded-3xl border border-border bg-linear-to-br from-bg to-muted/20 p-3 backdrop-blur-md transition-all duration-300 hover:border-primary/50 md:col-span-2 md:row-span-1"
				>
					<div className="relative h-full w-full overflow-hidden">
						{/* Content Container - Auto slides vertically */}
						<div className="slide-content flex h-[200%] flex-col">
							{/* Front View */}
							<div className="flex h-1/2 shrink-0 flex-col justify-between">
								<div className="flex items-center gap-1.5">
									<Briefcase className="h-2.5 w-2.5 text-primary" />
									<h3 className="font-bold text-[9px] text-fg uppercase tracking-wide opacity-70">
										Experience
									</h3>
								</div>
								<div className="space-y-0.5">
									<span className="block font-semibold text-[10px] text-fg">
										Frontend Lead · Solo Builder
									</span>
									<p className="text-[8px] text-muted-fg leading-tight opacity-70">
										Auto-cycling...
									</p>
								</div>
							</div>
							{/* Details View */}
							<div className="flex h-1/2 shrink-0 flex-col justify-between">
								<h3 className="font-bold text-[9px] text-primary uppercase tracking-wide">
									Experience Details
								</h3>
								<div className="space-y-1">
									<div>
										<p className="font-semibold text-[9px] text-fg">
											Moonlab (2022-2023)
										</p>
										<p className="text-[8px] text-muted-fg opacity-70">
											Frontend Lead · Mentored team
										</p>
									</div>
									<div>
										<p className="font-semibold text-[9px] text-fg">
											Teracom (2020-2022)
										</p>
										<p className="text-[8px] text-muted-fg opacity-70">
											Junior → Mid · Enterprise apps
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Education - Auto Slide */}
				<div
					ref={educationRef}
					className="group relative col-span-2 row-span-1 cursor-pointer overflow-hidden rounded-3xl border border-border bg-linear-to-br from-bg to-muted/20 p-3 backdrop-blur-md transition-all duration-300 hover:border-primary/50 md:col-span-2 md:row-span-1"
				>
					<div className="relative h-full w-full overflow-hidden">
						<div className="slide-content flex h-[200%] flex-col">
							{/* Front View */}
							<div className="flex h-1/2 shrink-0 flex-col justify-between">
								<div className="flex items-center gap-1.5">
									<GraduationCap className="h-2.5 w-2.5 text-primary" />
									<h3 className="font-bold text-[9px] text-fg uppercase tracking-wide opacity-70">
										Education
									</h3>
								</div>
								<div className="space-y-0.5">
									<span className="block font-semibold text-[10px] text-fg leading-tight">
										Software Engineering
									</span>
									<p className="text-[8px] text-muted-fg leading-tight opacity-70">
										Auto-cycling...
									</p>
								</div>
							</div>
							{/* Details View */}
							<div className="flex h-1/2 shrink-0 flex-col justify-between">
								<h3 className="font-bold text-[9px] text-primary uppercase tracking-wide">
									Education Details
								</h3>
								<div className="space-y-1">
									<p className="font-semibold text-[9px] text-fg">
										Academy of Cryptography Techniques
									</p>
									<p className="text-[8px] text-muted-fg opacity-70">
										Bachelor · Software Engineering
									</p>
									<p className="text-[8px] text-muted-fg opacity-70">
										2017-2022 · Hanoi, Vietnam
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Current Focus - AI (Highlighted) */}
				<div className="group relative col-span-4 row-span-1 overflow-hidden rounded-3xl border border-primary/50 bg-linear-to-br from-primary/5 to-bg p-3 backdrop-blur-md transition-all hover:border-primary hover:shadow-lg hover:shadow-primary/10 md:col-span-2 md:row-span-1">
					<div className="flex h-full flex-col justify-between">
						<div className="flex items-center gap-1.5">
							<TrendingUp className="h-2.5 w-2.5 text-primary" />
							<h3 className="font-bold text-[9px] text-primary uppercase tracking-wide">
								Current Focus
							</h3>
						</div>
						<div className="space-y-0.5">
							<p className="font-semibold text-[10px] text-fg leading-tight">
								AI & Automation
							</p>
							<p className="text-[8px] text-muted-fg leading-tight opacity-70">
								AI workflows · Developer tooling
							</p>
						</div>
					</div>
				</div>

				{/* Projects - Auto Slide */}
				<div
					ref={projectsRef}
					className="group relative col-span-4 row-span-1 cursor-pointer overflow-hidden rounded-3xl border border-border bg-linear-to-br from-bg to-muted/20 p-3 backdrop-blur-md transition-all duration-300 hover:border-primary/50 md:col-span-2 md:row-span-1"
				>
					<div className="relative h-full w-full overflow-hidden">
						<div className="slide-content flex h-[200%] flex-col">
							{/* Front View */}
							<div className="flex h-1/2 shrink-0 flex-col justify-between">
								<h3 className="font-bold text-[9px] text-fg uppercase tracking-wide opacity-70">
									Projects
								</h3>
								<div className="space-y-0.5">
									<p className="font-semibold text-[10px] text-fg leading-tight">
										Analytics · UI Libraries
									</p>
									<p className="text-[8px] text-muted-fg leading-tight opacity-70">
										Auto-cycling...
									</p>
								</div>
							</div>
							{/* Details View */}
							<div className="flex h-1/2 shrink-0 flex-col justify-between">
								<h3 className="font-bold text-[9px] text-primary uppercase tracking-wide">
									Recent Projects
								</h3>
								<div className="space-y-0.5">
									<p className="text-[8px] text-fg">
										• Token analytics (Solana)
									</p>
									<p className="text-[8px] text-fg">
										• Component libraries + Storybook
									</p>
									<p className="text-[8px] text-fg">• AI workflow research</p>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Row 4-5: Tech Stack (Combined) */}
				{/* Tech Stack - Auto Slide */}
				<div
					ref={techStackRef}
					className="group relative col-span-4 row-span-2 cursor-pointer overflow-hidden rounded-3xl border border-border bg-linear-to-br from-bg to-muted/20 p-4 backdrop-blur-md transition-all duration-300 hover:border-primary/50 md:col-span-6 md:row-span-1"
				>
					<div className="relative h-full w-full overflow-hidden">
						<div className="slide-content flex h-[200%] flex-col">
							{/* Front View */}
							<div className="flex h-1/2 shrink-0 flex-col justify-between gap-3 md:flex-row md:items-center">
								{/* Frontend */}
								<div className="flex flex-1 flex-col gap-2">
									<div className="flex items-center gap-1.5">
										<Code2 className="h-2.5 w-2.5 text-primary" />
										<h3 className="font-bold text-[9px] text-fg uppercase tracking-wide opacity-70">
											Frontend
										</h3>
									</div>
									<div className="flex flex-wrap gap-1">
										{[
											"React",
											"Next.js",
											"TypeScript",
											"TanStack",
											"TailwindCSS",
											"shadcn/ui",
										].map((tech) => (
											<span
												key={tech}
												className="rounded-lg border border-border/50 bg-muted/20 px-1.5 py-0.5 font-medium text-[8px] text-muted-fg transition-all hover:border-primary hover:text-primary"
											>
												{tech}
											</span>
										))}
									</div>
								</div>

								{/* Divider */}
								<div className="hidden h-12 w-px bg-border/50 md:block" />

								{/* Backend */}
								<div className="flex flex-1 flex-col gap-2">
									<div className="flex items-center gap-1.5">
										<Code2 className="h-2.5 w-2.5 text-primary" />
										<h3 className="font-bold text-[9px] text-fg uppercase tracking-wide opacity-70">
											Backend
										</h3>
									</div>
									<div className="flex flex-wrap gap-1">
										{["Node.js", "NestJS", "Hono", "MongoDB", "Postgres"].map(
											(tech) => (
												<span
													key={tech}
													className="rounded-lg border border-border/50 bg-muted/20 px-1.5 py-0.5 font-medium text-[8px] text-muted-fg transition-all hover:border-primary hover:text-primary"
												>
													{tech}
												</span>
											),
										)}
									</div>
								</div>
							</div>
							{/* Details View */}
							<div className="flex h-1/2 shrink-0 flex-col justify-between gap-2">
								<h3 className="font-bold text-[9px] text-primary uppercase tracking-wide">
									Full Tech Stack
								</h3>
								<div className="grid grid-cols-2 gap-2 text-[8px] md:grid-cols-3">
									<div>
										<p className="mb-1 font-semibold text-fg">Frontend</p>
										<p className="text-muted-fg opacity-70">
											React · Next.js · TypeScript · TanStack Router · React
											Query · TailwindCSS · shadcn/ui
										</p>
									</div>
									<div>
										<p className="mb-1 font-semibold text-fg">Backend</p>
										<p className="text-muted-fg opacity-70">
											Node.js · NestJS · Hono · Express · REST · GraphQL
										</p>
									</div>
									<div>
										<p className="mb-1 font-semibold text-fg">Data & Tools</p>
										<p className="text-muted-fg opacity-70">
											MongoDB · Postgres · Redis · Docker · Git · VS Code ·
											Polars · PyTorch
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Languages & Interests Combined */}
				<div className="group relative col-span-4 row-span-2 overflow-hidden rounded-3xl border border-border bg-linear-to-br from-bg to-muted/20 p-4 backdrop-blur-md transition-all hover:shadow-lg hover:shadow-primary/5 md:col-span-2 md:row-span-1">
					<div className="flex h-full flex-col justify-between gap-3">
						{/* Languages */}
						<div className="flex flex-col gap-1">
							<div className="flex items-center gap-1.5">
								<Globe className="h-2.5 w-2.5 text-primary" />
								<h3 className="font-bold text-[9px] text-fg uppercase tracking-wide opacity-70">
									Languages
								</h3>
							</div>
							<div className="flex gap-3">
								<p className="text-[9px] text-fg">
									<span className="font-semibold">Vietnamese</span>{" "}
									<span className="text-muted-fg opacity-60">· Native</span>
								</p>
								<p className="text-[9px] text-fg">
									<span className="font-semibold">English</span>{" "}
									<span className="text-muted-fg opacity-60">· Basic</span>
								</p>
							</div>
						</div>

						{/* Interests */}
						<div className="flex flex-col gap-1">
							<h3 className="font-bold text-[9px] text-fg uppercase tracking-wide opacity-70">
								Interests
							</h3>
							<p className="text-[9px] text-muted-fg leading-tight opacity-70">
								Music Production · AI · Creative Tech
							</p>
						</div>
					</div>
				</div>

				{/* Row 5: Location & Contact + Status */}
				{/* Location, Contact & CV Combined */}
				<div className="group relative col-span-2 row-span-1 overflow-hidden rounded-3xl border border-border bg-linear-to-br from-bg to-muted/20 backdrop-blur-md transition-all hover:shadow-lg hover:shadow-primary/5 md:col-span-4 md:row-span-1">
					<div className="flex h-full items-center justify-between gap-3 p-3">
						<div className="flex items-center gap-3">
							<div className="flex items-center gap-1.5">
								<MapPin className="h-2.5 w-2.5 text-primary" />
								<div>
									<p className="font-semibold text-[9px] text-fg">
										Hanoi, Vietnam
									</p>
									<p className="text-[8px] text-muted-fg opacity-70">
										GMT+7 · Remote
									</p>
								</div>
							</div>
						</div>
						<div className="flex items-center gap-2">
							<a
								href={`mailto:${contact.email}`}
								className="flex items-center gap-1 rounded-lg border border-border/50 bg-muted/20 px-2 py-1 transition-all hover:border-primary hover:bg-primary/5"
							>
								<Mail className="h-2.5 w-2.5 text-primary" />
								<span className="hidden text-[8px] text-fg md:inline">
									Email
								</span>
							</a>
							{contact.socials.slice(0, 2).map((social) => (
								<a
									key={social.name}
									href={social.url}
									target="_blank"
									rel="noopener noreferrer"
									className="flex h-7 w-7 items-center justify-center rounded-lg border border-border/50 bg-muted/20 transition-all hover:scale-110 hover:border-primary hover:bg-primary/5"
									title={social.name}
								>
									<span className="text-[8px] text-primary">
										{social.name.charAt(0).toUpperCase()}
									</span>
								</a>
							))}
							<a
								href="/cv.pdf"
								download
								className="flex items-center gap-1 rounded-lg border border-primary bg-primary/10 px-2.5 py-1 transition-all hover:bg-primary hover:text-primary-fg"
							>
								<Download className="h-2.5 w-2.5 text-primary transition-colors group-hover:text-primary-fg" />
								<span className="font-bold text-[8px] text-primary uppercase tracking-wide transition-colors group-hover:text-primary-fg">
									CV
								</span>
							</a>
						</div>
					</div>
				</div>

				{/* Status */}
				<div className="group relative col-span-2 row-span-1 overflow-hidden rounded-3xl border border-border bg-linear-to-br from-bg to-muted/20 p-3 backdrop-blur-md transition-all hover:shadow-green-500/10 hover:shadow-lg md:col-span-2 md:row-span-1">
					<div className="flex h-full flex-col justify-between">
						<h3 className="font-bold text-[9px] text-fg uppercase tracking-wide opacity-70">
							Status
						</h3>
						<div className="flex items-center gap-1.5">
							<span className="relative flex h-1.5 w-1.5">
								<span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
								<span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-green-500" />
							</span>
							<span className="font-medium text-[9px] text-fg">Available</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
