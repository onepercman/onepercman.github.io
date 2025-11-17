import { ArrowDown, Download, Mail } from "lucide-react"
import { animate, stagger } from "motion"
import { useEffect, useRef, useState } from "react"
import { AnimatedTitle } from "~/shared/components/animated-title"
import { Button } from "~/shared/components/ui"
import { useMouseParallax } from "~/shared/hooks/use-mouse-parallax"
import { useParallax } from "~/shared/hooks/use-parallax"
import { useScrollProgress } from "~/shared/hooks/use-scroll-progress"
import type { Profile } from "./portfolio-types"

interface HeroSectionProps {
	profile: Profile
}

export function HeroSection({ profile }: HeroSectionProps) {
	const containerRef = useRef<HTMLDivElement>(null)
	const scrollIndicatorRef = useRef<HTMLDivElement>(null)
	const avatarRef = useRef<HTMLDivElement>(null)
	const bgLayersRef = useRef<HTMLDivElement>(null)
	const bgOffset = useParallax({ speed: 0.8 })
	const bgOffset2 = useParallax({ speed: 0.6, reverse: true })
	const contentOffset = useParallax({ speed: 0.3 })
	const mousePosition = useMouseParallax({ strength: 15 })
	const mousePosition2 = useMouseParallax({ strength: 25, invert: true })
	const scrollProgress = useScrollProgress()
	const [isLoaded, setIsLoaded] = useState(false)

	const heroOpacity = Math.max(0, 1 - scrollProgress * 3)

	useEffect(() => {
		if (!containerRef.current || !avatarRef.current) return

		setIsLoaded(true)
		const items = containerRef.current.querySelectorAll(
			"[data-animate]:not([data-avatar])",
		)

		// Animate avatar separately first
		animate(
			avatarRef.current,
			{ opacity: [0, 1], y: [80, 0], scale: [0.8, 1] },
			{ duration: 1, ease: [0.22, 1, 0.36, 1] },
		)

		// Then animate other items
		setTimeout(() => {
			animate(
				items,
				{ opacity: [0, 1], y: [60, 0] },
				{ duration: 0.8, delay: stagger(0.12), ease: [0.22, 1, 0.36, 1] },
			)
		}, 400)
	}, [])

	useEffect(() => {
		if (!scrollIndicatorRef.current || !isLoaded) return

		animate(
			scrollIndicatorRef.current,
			{ y: [0, 10, 0] },
			{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
		)
	}, [isLoaded])

	const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
		<svg viewBox="0 0 24 24" fill="currentColor" {...props}>
			<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
		</svg>
	)

	const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
		<svg viewBox="0 0 24 24" fill="currentColor" {...props}>
			<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
		</svg>
	)

	const TwitterIcon = (props: React.SVGProps<SVGSVGElement>) => (
		<svg viewBox="0 0 24 24" fill="currentColor" {...props}>
			<path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
		</svg>
	)

	const handleButtonHover = (e: React.MouseEvent<HTMLButtonElement>) => {
		const button = e.currentTarget
		animate(button, { scale: 1.05 }, { duration: 0.2, ease: "easeOut" })
	}

	const handleButtonLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
		const button = e.currentTarget
		animate(button, { scale: 1 }, { duration: 0.2, ease: "easeOut" })
	}

	const socialLinks = [
		{
			icon: GithubIcon,
			href: `https://github.com/${profile.links.github}`,
			label: "GitHub",
		},
		{
			icon: LinkedinIcon,
			href: `https://linkedin.com/in/${profile.links.linkedin}`,
			label: "LinkedIn",
		},
		{
			icon: TwitterIcon,
			href: `https://twitter.com/${profile.links.twitter}`,
			label: "Twitter",
		},
		{ icon: Mail, href: `mailto:${profile.links.email}`, label: "Email" },
	]

	const handleSocialHover = (e: React.MouseEvent<HTMLAnchorElement>) => {
		const link = e.currentTarget
		animate(link, { scale: 1.1, y: -2 }, { duration: 0.2, ease: "easeOut" })
	}

	const handleSocialLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
		const link = e.currentTarget
		animate(link, { scale: 1, y: 0 }, { duration: 0.2, ease: "easeOut" })
	}

	return (
		<section className="relative flex min-h-screen items-center justify-center overflow-hidden py-16 md:py-20 lg:py-24">
			{/* Background gradient */}
			<div className="absolute inset-0 bg-bg" />

			{/* Animated background elements - Fade on scroll */}
			<div
				ref={bgLayersRef}
				className="absolute inset-0 transition-opacity duration-300"
				style={{ opacity: heroOpacity }}
			>
				{/* Mesh gradient background - Higher quality */}
				<div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,_var(--tw-gradient-stops))] from-primary/8 via-30% via-primary/3 to-60% to-bg" />

				{/* Floating orbs with parallax - Smoother gradients */}
				<div
					className="absolute inset-0 transition-transform duration-300 ease-out will-change-transform"
					style={{
						transform: `translate(${mousePosition.x}px, ${bgOffset + mousePosition.y}px)`,
					}}
				>
					<div
						className="absolute top-[20%] left-[15%] h-[500px] w-[500px] rounded-full opacity-80"
						style={{
							background:
								"radial-gradient(circle, hsl(var(--primary) / 0.15) 0%, hsl(var(--primary) / 0.08) 40%, transparent 70%)",
							filter: "blur(60px)",
						}}
					/>
				</div>
				<div
					className="absolute inset-0 transition-transform duration-500 ease-out will-change-transform"
					style={{
						transform: `translate(${mousePosition2.x}px, ${bgOffset2 + mousePosition2.y}px)`,
					}}
				>
					<div
						className="absolute right-[15%] bottom-[20%] h-[600px] w-[600px] rounded-full opacity-70"
						style={{
							background:
								"radial-gradient(circle, hsl(var(--chart-1) / 0.12) 0%, hsl(var(--chart-1) / 0.06) 40%, transparent 70%)",
							filter: "blur(80px)",
						}}
					/>
				</div>
				<div
					className="absolute inset-0 transition-transform duration-700 ease-out will-change-transform"
					style={{
						transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`,
					}}
				>
					<div
						className="-translate-x-1/2 -translate-y-1/2 absolute top-[50%] left-[50%] h-[700px] w-[700px] rounded-full opacity-60"
						style={{
							background:
								"radial-gradient(circle, hsl(var(--accent) / 0.08) 0%, hsl(var(--accent) / 0.04) 50%, transparent 70%)",
							filter: "blur(100px)",
						}}
					/>
				</div>
			</div>

			{/* Bottom fade gradient to mask parallax cutoff */}
			<div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-32 bg-gradient-to-t from-bg to-transparent" />

			<div
				ref={containerRef}
				className="relative z-10 mx-auto max-w-5xl px-6 text-center sm:px-8 lg:px-12"
				style={{ transform: `translateY(${contentOffset}px)` }}
			>
				{/* Avatar */}
				<div ref={avatarRef} data-avatar className="mb-8 opacity-0">
					<div className="mx-auto h-32 w-32 rounded-full bg-linear-to-br from-primary to-chart-1 p-1 shadow-2xl md:h-40 md:w-40">
						<div className="h-full w-full overflow-hidden rounded-full bg-muted/50">
							{profile.avatar ? (
								<img
									src={profile.avatar}
									alt={profile.name}
									className="h-full w-full rounded-full object-cover transition-transform duration-500 hover:scale-110"
									onError={(e) => {
										const target = e.target as HTMLImageElement
										target.style.display = "none"
										const parent = target.parentElement
										if (parent) {
											parent.innerHTML =
												'<div class="w-full h-full rounded-full flex items-center justify-center text-6xl md:text-7xl bg-muted/50">👨‍💻</div>'
										}
									}}
								/>
							) : (
								<div className="flex h-full w-full items-center justify-center rounded-full text-6xl md:text-7xl">
									👨‍💻
								</div>
							)}
						</div>
					</div>
				</div>

				{/* Name */}
				<div data-animate className="mb-4 opacity-0">
					<h1 className="font-bold text-4xl text-fg md:text-6xl lg:text-7xl">
						{profile.displayName ? (
							<div className="flex flex-wrap items-center justify-center gap-2">
								<span>{profile.displayName.split(" aka ")[0]}</span>
								<span className="font-normal text-2xl text-muted-fg italic md:text-4xl lg:text-5xl">
									aka
								</span>
								<span className="bg-linear-to-r from-primary to-primary/80 bg-clip-text font-bold text-transparent">
									onepercman
								</span>
							</div>
						) : (
							<span>{profile.name}</span>
						)}
					</h1>
				</div>

				{/* Animated Title */}
				<div data-animate className="mb-6 opacity-0">
					{profile.animatedTitles ? (
						<AnimatedTitle
							titles={profile.animatedTitles}
							className="font-semibold text-primary text-xl md:text-2xl lg:text-3xl"
							interval={4000}
						/>
					) : (
						<h2 className="font-semibold text-primary text-xl md:text-2xl lg:text-3xl">
							{profile.title}
						</h2>
					)}
				</div>

				{/* Subtitle with Location */}
				<div data-animate className="mb-8 opacity-0">
					<p className="mx-auto max-w-2xl text-lg text-muted-fg leading-relaxed md:text-xl">
						{profile.subtitle}
					</p>
					<div className="mt-4 flex items-center justify-center gap-2">
						<span className="text-muted-fg/60">📍</span>
						<span className="font-medium text-muted-fg text-sm md:text-base">
							{profile.location}
						</span>
					</div>
				</div>

				{/* Bio */}
				<div data-animate className="mb-12 opacity-0">
					<p className="mx-auto max-w-3xl text-base text-muted-fg leading-relaxed md:text-lg">
						{profile.bio}
					</p>
				</div>

				{/* CTA Buttons */}
				<div data-animate className="mb-16 opacity-0">
					<div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
						<Button
							size="lg"
							className="relative overflow-hidden bg-primary px-8 py-4 font-semibold text-lg text-primary-fg hover:bg-primary/90"
							onClick={() => {
								const contactSection = document.getElementById("contact")
								if (contactSection) {
									contactSection.scrollIntoView({ behavior: "smooth" })
								} else {
									window.location.href = `mailto:${profile.links.email}`
								}
							}}
							onMouseEnter={handleButtonHover}
							onMouseLeave={handleButtonLeave}
						>
							<span className="relative z-10 flex items-center gap-2">
								<Mail className="h-5 w-5" />
								Get in Touch
							</span>
						</Button>

						<a
							href={profile.links.resume}
							target="_blank"
							rel="noopener noreferrer"
							className="inline-block"
						>
							<Button
								intent="outline"
								size="lg"
								className="border-2 px-8 py-4 font-semibold text-lg hover:bg-accent"
								onMouseEnter={handleButtonHover}
								onMouseLeave={handleButtonLeave}
							>
								<span className="flex items-center gap-2">
									<Download className="h-5 w-5" />
									Download CV
								</span>
							</Button>
						</a>
					</div>
				</div>

				{/* Social Links */}
				<div data-animate className="mb-16 opacity-0">
					<div className="flex justify-center gap-6">
						{socialLinks.map(({ icon: Icon, href, label }) => (
							<a
								key={label}
								href={href}
								target="_blank"
								rel="noopener noreferrer"
								className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-muted/50 text-muted-fg transition-colors hover:border-primary hover:text-primary"
								onMouseEnter={handleSocialHover}
								onMouseLeave={handleSocialLeave}
								aria-label={label}
							>
								<Icon className="h-5 w-5" />
							</a>
						))}
					</div>
				</div>

				{/* Scroll indicator */}
				<div
					data-animate
					className="-translate-x-1/2 absolute bottom-8 left-1/2 transform opacity-0"
				>
					<div ref={scrollIndicatorRef} className="text-muted-fg">
						<ArrowDown className="h-6 w-6" />
					</div>
				</div>
			</div>
		</section>
	)
}
