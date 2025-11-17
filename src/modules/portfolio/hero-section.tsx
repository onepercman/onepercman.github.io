import { motion } from "framer-motion"
import { ArrowDown, Download, Mail } from "lucide-react"
import { AnimatedTitle } from "~/shared/components/animated-title"
import { Button } from "~/shared/components/ui"
import type { Profile } from "./portfolio-types"

interface HeroSectionProps {
	profile: Profile
}

export function HeroSection({ profile }: HeroSectionProps) {
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2,
				delayChildren: 0.3,
			},
		},
	}

	const itemVariants = {
		hidden: { opacity: 0, y: 30 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.8,
			},
		},
	}

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

	return (
		<section className="relative flex min-h-screen items-center justify-center overflow-hidden py-16 md:py-20 lg:py-24">
			{/* Background gradient */}
			<div className="absolute inset-0 bg-linear-to-br from-bg via-bg to-muted/30" />

			{/* Animated background elements */}
			<motion.div
				className="absolute inset-0 opacity-20"
				animate={{
					background: [
						"radial-gradient(600px circle at 0% 0%, rgb(120, 119, 198, 0.3), transparent 50%)",
						"radial-gradient(600px circle at 100% 100%, rgb(120, 119, 198, 0.3), transparent 50%)",
						"radial-gradient(600px circle at 0% 100%, rgb(120, 119, 198, 0.3), transparent 50%)",
						"radial-gradient(600px circle at 100% 0%, rgb(120, 119, 198, 0.3), transparent 50%)",
					],
				}}
				transition={{
					duration: 10,
					repeat: Infinity,
					ease: "linear",
				}}
			/>

			<motion.div
				className="relative z-10 mx-auto max-w-5xl px-6 text-center sm:px-8 lg:px-12"
				variants={containerVariants}
				initial="hidden"
				animate="visible"
			>
				{/* Avatar */}
				<motion.div variants={itemVariants} className="mb-8">
					<div className="mx-auto h-32 w-32 rounded-full bg-linear-to-br from-primary to-chart-1 p-1 shadow-2xl md:h-40 md:w-40">
						<div className="h-full w-full overflow-hidden rounded-full bg-muted/50">
							{profile.avatar ? (
								<img
									src={profile.avatar}
									alt={profile.name}
									className="h-full w-full rounded-full object-cover transition-transform duration-500 hover:scale-110"
									onError={(e) => {
										// Fallback to emoji if image fails to load
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
				</motion.div>

				{/* Name with typewriter effect */}
				<motion.div variants={itemVariants} className="mb-4">
					<h1 className="font-bold text-4xl text-fg md:text-6xl lg:text-7xl">
						{profile.displayName ? (
							<div className="flex flex-wrap items-center justify-center gap-2">
								<motion.span
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ delay: 0.5, duration: 0.8 }}
								>
									{profile.displayName.split(" aka ")[0]}
								</motion.span>
								<motion.span
									className="font-normal text-2xl text-muted-fg italic md:text-4xl lg:text-5xl"
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ delay: 0.8, duration: 0.8 }}
								>
									aka
								</motion.span>
								<motion.span
									className="bg-linear-to-r from-primary to-primary/80 bg-clip-text font-bold text-transparent"
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ delay: 1.1, duration: 0.8 }}
								>
									onepercman
								</motion.span>
							</div>
						) : (
							<motion.span
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.5, duration: 0.8 }}
							>
								{profile.name}
							</motion.span>
						)}
					</h1>
				</motion.div>

				{/* Animated Title */}
				<motion.div variants={itemVariants} className="mb-6">
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
				</motion.div>

				{/* Subtitle with Location */}
				<motion.div variants={itemVariants} className="mb-8">
					<p className="mx-auto max-w-2xl text-lg text-muted-fg leading-relaxed md:text-xl">
						{profile.subtitle}
					</p>
					<motion.div
						className="mt-4 flex items-center justify-center gap-2"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 1.2, duration: 0.5 }}
					>
						<span className="text-muted-fg/60">📍</span>
						<span className="font-medium text-muted-fg text-sm md:text-base">
							{profile.location}
						</span>
					</motion.div>
				</motion.div>

				{/* Bio */}
				<motion.div variants={itemVariants} className="mb-12">
					<p className="mx-auto max-w-3xl text-base text-muted-fg leading-relaxed md:text-lg">
						{profile.bio}
					</p>
				</motion.div>

				{/* CTA Buttons */}
				<motion.div variants={itemVariants} className="mb-16">
					<div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
						<Button
							size="lg"
							className="group relative overflow-hidden bg-primary px-8 py-4 font-semibold text-lg text-primary-fg hover:bg-primary/90"
							onClick={() => {
								const contactSection = document.getElementById("contact")
								if (contactSection) {
									contactSection.scrollIntoView({ behavior: "smooth" })
								} else {
									window.location.href = `mailto:${profile.links.email}`
								}
							}}
						>
							<motion.span
								className="relative z-10 flex items-center gap-2"
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
							>
								<Mail className="h-5 w-5" />
								Get in Touch
							</motion.span>
							<motion.div
								className="absolute inset-0 bg-primary/20"
								initial={{ x: "-100%" }}
								whileHover={{ x: "100%" }}
								transition={{ duration: 0.5 }}
							/>
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
								className="group border-2 px-8 py-4 font-semibold text-lg hover:bg-accent"
							>
								<motion.span
									className="flex items-center gap-2"
									whileHover={{ scale: 1.05 }}
									whileTap={{ scale: 0.95 }}
								>
									<Download className="h-5 w-5" />
									Download CV
								</motion.span>
							</Button>
						</a>
					</div>
				</motion.div>

				{/* Social Links */}
				<motion.div variants={itemVariants} className="mb-16">
					<div className="flex justify-center gap-6">
						{socialLinks.map(({ icon: Icon, href, label }) => (
							<motion.a
								key={label}
								href={href}
								target="_blank"
								rel="noopener noreferrer"
								className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-muted/50 text-muted-fg transition-colors hover:border-primary hover:text-primary"
								whileHover={{ scale: 1.1, y: -2 }}
								whileTap={{ scale: 0.95 }}
								aria-label={label}
							>
								<Icon className="h-5 w-5" />
							</motion.a>
						))}
					</div>
				</motion.div>

				{/* Scroll indicator */}
				<motion.div
					variants={itemVariants}
					className="-translate-x-1/2 absolute bottom-8 left-1/2 transform"
				>
					<motion.div
						animate={{ y: [0, 10, 0] }}
						transition={{
							duration: 2,
							repeat: Infinity,
							ease: "easeInOut",
						}}
						className="text-muted-fg"
					>
						<ArrowDown className="h-6 w-6" />
					</motion.div>
				</motion.div>
			</motion.div>
		</section>
	)
}
