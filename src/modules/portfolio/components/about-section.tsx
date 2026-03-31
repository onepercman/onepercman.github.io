"use client"

import { useRef, useState } from "react"
import { cn, useScrollStagger } from "~/shared/utils"
import type { AboutInfo, ContactInfo } from "../portfolio-types"
import { ContactWidget } from "./contact-widget"

interface AboutSectionProps {
	about: AboutInfo
	contact: ContactInfo
}

export function AboutSection({ about, contact }: AboutSectionProps) {
	const [hoveredCard, setHoveredCard] = useState<string | null>(null)
	const [imagePosition, setImagePosition] = useState({ x: 0, y: 0 })
	const imageRef = useRef<HTMLDivElement>(null)
	const gridRef = useScrollStagger({ stagger: 0.15, duration: 0.8 })

	const animatedName = (about.title || "YOUR NAME").split(" ")

	const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
		if (!imageRef.current) return
		const rect = imageRef.current.getBoundingClientRect()
		const x = (e.clientX - rect.left - rect.width / 2) / rect.width
		const y = (e.clientY - rect.top - rect.height / 2) / rect.height
		setImagePosition({ x: x * 15, y: y * 15 })
	}

	const handleMouseLeave = () => {
		setImagePosition({ x: 0, y: 0 })
	}

	return (
		<section
			id="about"
			className="mx-auto max-w-5xl px-4 pt-0 pb-32"
			style={{ scrollMarginTop: "120px" }}
		>
			<div
				ref={gridRef as React.RefObject<HTMLDivElement>}
				className="grid grid-cols-2 gap-3 md:grid-cols-3 md:grid-rows-[9rem_auto_9rem_auto]"
			>
				{/* Name Card - Mobile */}
				<div className="group relative col-span-1 row-span-1 h-full w-full overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-bg to-muted/20 p-6 md:hidden">
					<div className="relative z-10 flex h-full w-full flex-col items-center justify-center gap-1 text-center">
						<div className="flex w-full flex-col items-center pb-2">
							{animatedName.map((word, wordIndex) => (
								<div
									key={wordIndex}
									className="flex justify-center font-black text-3xl text-fg leading-[1.1] tracking-tighter"
								>
									{word.split("").map((letter, letterIndex) => (
										<div key={letterIndex} className="inline-block">
											<span className="inline-block">{letter}</span>
										</div>
									))}
								</div>
							))}
						</div>
						<div className="flex flex-col items-center gap-2">
							<div className="h-px w-12 bg-fg/20" />
							<span className="font-mono text-[10px] text-muted-fg uppercase tracking-[0.2em] opacity-80">
								Fullstack Developer
							</span>
						</div>
					</div>
				</div>

				{/* Name Card - Desktop */}
				<div className="group relative col-span-1 row-span-1 hidden h-full w-full overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-bg to-muted/20 p-7 backdrop-blur-md md:col-start-1 md:row-start-1 md:flex">
					<div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center">
						<div className="h-full w-full scale-110 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.2)_0%,transparent_70%)] mix-blend-overlay blur-3xl will-change-transform" />
					</div>
					<div className="relative z-10 flex h-full w-full flex-col items-center justify-center gap-1 text-center">
						<div className="flex w-full flex-col items-center pb-2">
							{animatedName.map((word, wordIndex) => (
								<div
									key={wordIndex}
									className="flex justify-center bg-gradient-to-b from-fg to-muted-fg bg-clip-text font-black text-4xl text-transparent leading-[1.1] tracking-tighter drop-shadow-sm dark:drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]"
								>
									{word.split("").map((letter, letterIndex) => (
										<div key={letterIndex} className="inline-block">
											<span className="inline-block">{letter}</span>
										</div>
									))}
								</div>
							))}
						</div>
						<div className="flex flex-col items-center gap-2">
							<div className="h-px w-12 bg-fg/20" />
							<span className="font-mono text-[10px] text-muted-fg uppercase tracking-[0.2em] opacity-80">
								Fullstack Developer
							</span>
						</div>
					</div>
				</div>

				{/* Portrait Image - Mobile */}
				<div
					ref={imageRef}
					onMouseMove={handleMouseMove}
					onMouseLeave={handleMouseLeave}
					className="group/portrait relative col-span-1 row-span-1 aspect-square w-full overflow-hidden rounded-2xl border border-border md:hidden"
				>
					<img
						alt="Avatar"
						src={about.images?.[0] || about.image}
						className="absolute inset-0 h-full w-full object-cover transition-all duration-500 group-hover/portrait:opacity-0"
						style={{
							transform: `translate(${imagePosition.x}px, ${imagePosition.y}px) scale(1.1)`,
						}}
					/>
					{about.images?.[1] && (
						<img
							alt="Portrait"
							src={about.images[1]}
							className="absolute inset-0 h-full w-full object-cover opacity-0 transition-all duration-500 group-hover/portrait:opacity-100"
							style={{
								transform: `translate(${imagePosition.x}px, ${imagePosition.y}px) scale(1.1)`,
							}}
						/>
					)}
				</div>

				{/* Education/Experience Cards */}
				<div className="group relative col-span-2 row-span-1 h-32 w-full overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-bg to-muted/20 backdrop-blur-md md:col-span-2 md:col-start-2 md:row-start-1 md:h-full">
					{/* Hover hint - Desktop only */}
					<div className="pointer-events-none absolute top-4 right-0 left-0 z-30 hidden justify-center transition-opacity delay-100 duration-300 group-hover:opacity-0 md:flex">
						<span className="rounded-full border border-red-500/10 bg-bg/50 px-3 py-1 font-medium text-[8px] text-red-400/50 uppercase tracking-[0.2em] backdrop-blur-sm dark:text-red-400/50">
							Hover to read more
						</span>
					</div>

					{/* Dot pattern */}
					<div className="pointer-events-none absolute inset-0 opacity-[0.03]">
						<div
							className="absolute inset-0"
							style={{
								backgroundImage:
									"radial-gradient(circle, var(--foreground) 0.5px, transparent 0.5px)",
								backgroundSize: "24px 24px",
							}}
						/>
					</div>

					{/* Stacked cards */}
					<div className="relative z-10 flex h-full w-full items-end justify-center overflow-hidden rounded-2xl px-2">
						{/* Teracom - Left */}
						<div
							className={cn(
								"z-10 -mr-6 h-44 w-1/3 rounded-t-xl border border-fg/10 border-b-0 bg-bg p-3 pr-6 md:p-4",
								"flex flex-col justify-start shadow-[0_-5px_30px_rgba(0,0,0,0.3)]",
								"hover:border-red-500/50 hover:shadow-[0_-5px_35px_rgba(239,68,68,0.5)]",
								"group/card relative overflow-hidden transition-colors duration-200",
							)}
							style={{ transform: "translateY(var(--y-side, 60px))" }}
							onMouseEnter={() => setHoveredCard("teracom")}
							onMouseLeave={() => setHoveredCard(null)}
						>
							<div
								className={cn(
									"absolute top-0 right-1/4 left-1/4 h-px bg-gradient-to-r from-transparent via-red-500/50 to-transparent",
									"opacity-100 transition-opacity duration-300 md:opacity-0 md:group-hover/card:opacity-100",
								)}
							/>
							<div className="relative z-10 mt-1">
								<span className="block font-bold text-[10px] text-fg uppercase leading-tight opacity-90">
									Teracom
								</span>
								<span className="mt-1.5 block hyphens-auto text-pretty text-[8px] text-muted-fg leading-tight opacity-70 sm:text-[9px] md:hidden">
									First professional role. Migrated legacy systems to Next.js +
									TypeScript.
								</span>
								<span
									className={cn(
										"mt-2 hidden text-[10px] text-muted-fg leading-snug md:block",
										"opacity-50 transition-all duration-300 group-hover/card:opacity-100",
										hoveredCard !== "teracom" && "line-clamp-3",
									)}
								>
									Started as intern, promoted to Junior. Worked on digital
									transformation for government and enterprises. Migrated legacy
									systems to Next.js + TypeScript with SSR.
								</span>
							</div>
						</div>

						{/* Education - Center */}
						<div
							className={cn(
								"z-20 h-48 w-2/5 rounded-t-xl border border-fg/10 border-b-0 bg-bg p-3 md:p-5",
								"flex flex-col justify-start shadow-[0_-5px_30px_rgba(0,0,0,0.3)]",
								"hover:border-red-500/50 hover:shadow-[0_-5px_35px_rgba(239,68,68,0.5)]",
								"group/card relative overflow-hidden transition-colors duration-200",
							)}
							style={{ transform: "translateY(var(--y-mid, 70px))" }}
							onMouseEnter={() => setHoveredCard("education")}
							onMouseLeave={() => setHoveredCard(null)}
						>
							<div
								className={cn(
									"absolute top-0 right-1/4 left-1/4 h-px bg-gradient-to-r from-transparent via-red-500/50 to-transparent",
									"opacity-100 transition-opacity duration-300 md:opacity-0 md:group-hover/card:opacity-100",
								)}
							/>
							<div className="relative z-10 mt-2 text-center">
								<span className="mb-1 block font-black text-[12px] text-fg uppercase leading-none tracking-tight">
									Education
								</span>
								<span className="mt-1.5 block hyphens-auto text-pretty text-[8px] text-muted-fg leading-tight opacity-70 sm:text-[9px] md:hidden">
									Software Engineering at Academy of Cryptography Techniques,
									Vietnam (2017-2022).
								</span>
								<span
									className={cn(
										"mt-2 hidden text-[10px] text-muted-fg leading-snug md:block",
										"opacity-50 transition-all duration-300 group-hover/card:opacity-100",
										hoveredCard !== "education" && "line-clamp-4",
									)}
								>
									Bachelor of Software Engineering from Academy of Cryptography
									Techniques (2017-2022). Strong foundation in software
									architecture, algorithms, and system design.
								</span>
							</div>
						</div>

						{/* Leadership - Right */}
						<div
							className={cn(
								"z-10 -ml-6 h-44 w-1/3 rounded-t-xl border border-fg/10 border-b-0 bg-bg p-3 pl-6 md:p-4",
								"flex flex-col justify-start text-right shadow-[0_-5px_30px_rgba(0,0,0,0.3)]",
								"hover:border-red-500/50 hover:shadow-[0_-5px_35px_rgba(239,68,68,0.5)]",
								"group/card relative overflow-hidden transition-colors duration-200",
							)}
							style={{ transform: "translateY(var(--y-side, 60px))" }}
							onMouseEnter={() => setHoveredCard("leadership")}
							onMouseLeave={() => setHoveredCard(null)}
						>
							<div
								className={cn(
									"absolute top-0 right-1/4 left-1/4 h-px bg-gradient-to-r from-transparent via-red-500/50 to-transparent",
									"opacity-100 transition-opacity duration-300 md:opacity-0 md:group-hover/card:opacity-100",
								)}
							/>
							<div className="relative z-10 mt-1">
								<span className="block font-bold text-[10px] text-fg uppercase leading-tight opacity-90">
									Leadership
								</span>
								<span className="mt-1.5 block hyphens-auto text-pretty text-[8px] text-muted-fg leading-tight opacity-70 sm:text-[9px] md:hidden">
									First Frontend Lead role at Moonlab. Mentored 2 interns to
									full-time engineers.
								</span>
								<span
									className={cn(
										"mt-2 hidden text-[10px] text-muted-fg leading-snug md:block",
										"opacity-50 transition-all duration-300 group-hover/card:opacity-100",
										hoveredCard !== "leadership" && "line-clamp-3",
									)}
								>
									First Frontend Lead role at Moonlab (2022-2023). Established
									coding standards, development workflow, and mentored 2 interns
									who became full-time engineers.
								</span>
							</div>
						</div>
					</div>
				</div>

				{/* Portrait - Desktop */}
				<div
					ref={imageRef}
					onMouseMove={handleMouseMove}
					onMouseLeave={handleMouseLeave}
					className="group/portrait relative col-span-1 row-span-1 hidden aspect-square w-full overflow-hidden rounded-2xl border border-border md:col-start-2 md:row-start-2 md:block"
				>
					<img
						alt="Avatar"
						src={about.images?.[0] || about.image}
						className="absolute inset-0 h-full w-full object-cover transition-all duration-500 group-hover/portrait:opacity-0"
						style={{
							transform: `translate(${imagePosition.x}px, ${imagePosition.y}px) scale(1.1)`,
						}}
					/>
					{about.images?.[1] && (
						<img
							alt="Portrait"
							src={about.images[1]}
							className="absolute inset-0 h-full w-full object-cover opacity-0 transition-all duration-500 group-hover/portrait:opacity-100"
							style={{
								transform: `translate(${imagePosition.x}px, ${imagePosition.y}px) scale(1.1)`,
							}}
						/>
					)}
				</div>

				{/* Craft Card with bottom section */}
				<div className="group col-span-1 row-span-2 flex h-full w-full flex-col justify-between overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-bg to-muted/20 backdrop-blur-sm transition-all duration-200 hover:shadow-lg hover:shadow-red-500/10 md:col-start-3 md:row-start-2">
					<div className="flex flex-col gap-2 p-3 pb-0 md:p-3.5">
						<div>
							<h3 className="mb-1 font-bold text-fg text-xs">Craft</h3>
							<div className="h-0.5 w-8 rounded-full bg-red-500/50" />
						</div>
						<div className="space-y-1.5">
							<p className="text-[10px] text-muted-fg leading-tight">
								Building <strong>complex frontend systems</strong> and{" "}
								<strong>scalable architectures</strong>.
							</p>
							<p className="hidden text-[10px] text-muted-fg leading-tight md:block">
								Specialized in real-time systems, data-intensive interfaces, and
								zero-to-one product development.
							</p>
						</div>
					</div>

					{/* Tech stack ribbon */}
					<div className="relative my-auto w-full border-border/50 border-y bg-border/30 py-2">
						<div className="absolute top-0 bottom-0 left-0 z-10 w-6 bg-gradient-to-r from-bg to-transparent" />
						<div className="absolute top-0 right-0 bottom-0 z-10 w-6 bg-gradient-to-l from-bg to-transparent" />
						<div className="flex select-none overflow-hidden">
							<div className="flex animate-scroll items-center gap-5 whitespace-nowrap pr-5">
								{[
									"React",
									"Next.js",
									"TypeScript",
									"Node.js",
									"Flutter",
									"Dart",
									"Go",
									"TailwindCSS",
								].map((tech) => (
									<div
										key={tech}
										className="flex items-center gap-1.5 opacity-80 transition-opacity group-hover:opacity-100"
									>
										<span className="font-medium font-mono text-[9px] text-muted-fg uppercase tracking-wide">
											{tech}
										</span>
									</div>
								))}
							</div>
						</div>
					</div>

					{/* Bottom section */}
					<div className="p-3 pt-0 md:p-3.5">
						<p className="hyphens-auto text-pretty text-[8px] text-muted-fg leading-tight sm:text-[9px] md:hidden">
							Delivering production-ready systems under scale and performance
							constraints.
						</p>
						<p className="hidden text-[10px] text-muted-fg leading-tight md:block">
							Experienced in technical leadership, mentoring engineers, and
							delivering impactful products.
						</p>
						<div className="mt-2 flex items-center gap-2">
							<span className="relative flex h-2 w-2">
								<span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
								<span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
							</span>
							<span className="max-w-full text-pretty text-center font-medium text-[8px] text-fg leading-tight opacity-80 sm:text-[9px]">
								Open to collaboration & freelance
							</span>
						</div>
					</div>
				</div>

				{/* Location/Map Card */}
				<div className="group relative col-span-1 row-span-1 aspect-square h-full w-full overflow-hidden rounded-2xl border border-border bg-bg backdrop-blur-sm transition-all duration-200 hover:shadow-lg hover:shadow-red-500/10 md:col-start-2 md:row-start-3">
					<div className="absolute inset-0 z-0">
						<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(239,68,68,0.1)_0%,transparent_70%)]" />
						<div className="h-full w-full opacity-20 mix-blend-luminosity">
							<svg
								className="h-full w-full"
								viewBox="0 0 200 200"
								xmlns="http://www.w3.org/2000/svg"
							>
								<defs>
									<pattern
										id="grid"
										width="20"
										height="20"
										patternUnits="userSpaceOnUse"
									>
										<path
											d="M 20 0 L 0 0 0 20"
											fill="none"
											stroke="currentColor"
											strokeWidth="0.5"
											opacity="0.3"
										/>
									</pattern>
								</defs>
								<rect width="200" height="200" fill="url(#grid)" />
								<circle cx="100" cy="100" r="3" fill="var(--primary)" />
								<circle
									cx="100"
									cy="100"
									r="15"
									fill="none"
									stroke="var(--primary)"
									strokeWidth="1"
									opacity="0.3"
								/>
								<circle
									cx="100"
									cy="100"
									r="25"
									fill="none"
									stroke="var(--primary)"
									strokeWidth="0.5"
									opacity="0.2"
								/>
							</svg>
						</div>
					</div>
					<div className="absolute inset-0 z-10 flex flex-col items-center justify-center p-4">
						<div className="text-center">
							<p className="mb-1 font-bold text-fg text-xs">Location</p>
							<p className="text-[10px] text-muted-fg">Hanoi, Vietnam</p>
							<p className="mt-1 text-[9px] text-muted-fg opacity-70">
								Available for remote work
							</p>
						</div>
					</div>
				</div>

				{/* Contact Widget - Mobile: col-span-2, Desktop: col-start-1 row-start-2 row-span-3 (fills to bottom) */}
				<div className="col-span-2 h-full min-h-0 md:col-span-1 md:col-start-1 md:row-span-3 md:row-start-2">
					<ContactWidget contact={contact} />
				</div>
			</div>

			<style>{`
				@keyframes scroll {
					0% { transform: translateX(0); }
					100% { transform: translateX(-50%); }
				}
				.animate-scroll {
					animation: scroll 20s linear infinite;
				}
			`}</style>
		</section>
	)
}
