"use client"

import { ExternalLink } from "lucide-react"
import { cn, useScrollFadeIn, useScrollStagger } from "~/shared/utils"
import type { Project } from "../portfolio-types"

interface ProjectsSectionProps {
	projects: Project[]
}

export function ProjectsSection({ projects }: ProjectsSectionProps) {
	const headerRef = useScrollFadeIn({ duration: 1 })
	const projectsRef = useScrollStagger({ stagger: 0.2, duration: 0.8 })

	return (
		<section
			id="projects"
			className="section py-24 md:py-32"
			style={{ scrollMarginTop: "120px" }}
		>
			{/* Header */}
			<div
				ref={headerRef as React.RefObject<HTMLDivElement>}
				className="mb-24 text-center sm:mb-28 md:mb-32"
			>
				<span className="font-bold text-base uppercase tracking-widest">
					Portfolio
				</span>
				<h2 className="mt-4 text-pretty px-2 font-bold text-3xl tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
					Featured{" "}
					<span className="animate-gradient bg-linear-to-r from-primary via-pink-500 to-violet-500 bg-clip-text text-transparent">
						Projects
					</span>
				</h2>
				<p className="mx-auto mt-8 max-w-3xl text-pretty px-2 font-light text-base text-muted-fg leading-relaxed sm:text-xl md:text-2xl">
					A curated selection of projects that made me confident in building
					software.
				</p>
			</div>

			{/* Projects Grid */}
			<div
				ref={projectsRef as React.RefObject<HTMLDivElement>}
				className="mx-auto grid max-w-5xl grid-cols-1 gap-16 px-4 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:px-8"
			>
				{projects.map((project, index) => (
					<article key={project.id} className="group flex h-full flex-col">
						{/* Header */}
						<header className="mb-4 shrink-0">
							<div className="mb-2 flex items-center gap-3">
								<span className="font-mono text-muted-fg text-xs uppercase tracking-wider">
									{String(index + 1).padStart(2, "0")}
								</span>
								<span className="h-px w-6 bg-border" />
								<span className="max-w-[min(100%,11rem)] truncate font-mono text-[10px] text-muted-fg uppercase tracking-wider sm:max-w-none sm:text-xs">
									{project.category}
								</span>
							</div>
							<div className="flex flex-col gap-2 min-[380px]:flex-row min-[380px]:items-center min-[380px]:justify-between min-[380px]:gap-4">
								<h3 className="line-clamp-2 min-w-0 flex-1 font-bold text-base text-fg tracking-tight sm:text-lg md:text-2xl lg:text-2xl min-[380px]:line-clamp-1">
									{project.title}
								</h3>
								{/* <div className="flex shrink-0 items-center gap-2 self-start opacity-100 transition-opacity duration-300 xl:opacity-0 xl:group-hover:opacity-100 min-[380px]:self-auto">
									<a
										href={project.link}
										target="_blank"
										rel="noopener noreferrer"
										className={cn(
											"group/btn relative inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 font-semibold text-[10px] md:text-xs",
											"bg-gradient-to-r from-red-600 via-rose-600 to-pink-600 text-white",
											"overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-red-500/50",
										)}
										aria-label="Star on GitHub"
									>
										<span className="absolute inset-0 bg-gradient-to-r from-red-500 via-rose-500 to-pink-500 opacity-0 transition-opacity duration-300 group-hover/btn:opacity-100" />
										<Github
											className="relative z-10 h-3 w-3"
											aria-hidden="true"
										/>
										<span className="relative z-10 hidden sm:inline">Star</span>
										<span className="relative z-10 sm:hidden">Star</span>
									</a>
								</div> */}
							</div>
						</header>

						{/* Preview */}
						<div
							className={cn(
								"relative flex aspect-[6/5] w-full flex-col justify-between p-1 md:p-1.5",
								"rounded-[28px] border border-white/20 bg-[#161616] shadow-2xl ring-1 ring-white/10 md:rounded-[32px]",
								"transition-all duration-500 ease-out",
								"group-hover:border-white/30 group-hover:shadow-[0_20px_60px_-10px_rgba(239,68,68,0.3)] group-hover:ring-white/20",
								"group-hover:-translate-y-2 group-hover:scale-[1.02]",
							)}
						>
							<div className="relative flex h-full w-full flex-col justify-between overflow-hidden rounded-3xl bg-transparent md:rounded-[28px]">
								{/* Gradient Background */}
								<div
									className="absolute inset-0"
									style={{
										background: `linear-gradient(to bottom right, ${project.gradientFrom}, ${project.gradientTo})`,
									}}
								/>

								{/* Description */}
								<div className="relative z-10 shrink-0 px-4 pt-5 md:px-8 md:pt-8">
									<p className="line-clamp-3 max-w-2xl text-pretty font-medium text-[11px] text-white/90 drop-shadow-sm sm:text-xs md:line-clamp-4">
										{project.description}
									</p>
								</div>

								{/* Screenshot Container */}
								<div className="relative z-10 min-h-[45%] w-full flex-1">
									{project.layout === "desktop" ? (
										<DesktopLayout image={project.image} />
									) : (
										<MobileLayout
											mainImage={project.image}
											screenshots={project.screenshots || []}
										/>
									)}
								</div>
							</div>
						</div>

						{/* Tags */}
						<footer className="mt-4 flex shrink-0 flex-wrap gap-2">
							{project.tags.map((tag) => (
								<span
									key={tag}
									className="rounded-full border border-border bg-muted px-2.5 py-1 font-bold text-[9px] text-muted-fg uppercase tracking-wider md:text-[10px]"
								>
									{tag}
								</span>
							))}
						</footer>
					</article>
				))}
			</div>

			{/* GitHub Link */}
			<div className="mt-16 text-center">
				<a
					href="https://github.com/onepercman"
					target="_blank"
					rel="noopener noreferrer"
					className="group mx-auto inline-flex max-w-[min(100%,22rem)] items-center gap-2 text-pretty px-2 text-center font-semibold text-muted-fg text-sm transition-colors hover:text-fg sm:max-w-none sm:gap-3 sm:text-lg"
				>
					<span>Explore all projects on GitHub</span>
					<ExternalLink
						className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
						aria-hidden="true"
					/>
				</a>
			</div>
		</section>
	)
}

function DesktopLayout({ image }: { image: string }) {
	return (
		<div className="absolute right-0 bottom-0 left-0 flex h-full w-full items-end justify-center">
			<div className="absolute -bottom-2 w-[80%] origin-bottom transition-all duration-500 ease-out group-hover:-translate-y-2 group-hover:scale-105 md:w-[85%]">
				<div className="relative flex aspect-[16/10] flex-col overflow-hidden rounded-t-lg border-white/10 border-x border-t bg-neutral-900 shadow-2xl transition-all duration-500 group-hover:border-white/30 group-hover:shadow-[0_20px_40px_-10px_rgba(255,255,255,0.2)] md:rounded-t-xl">
					{/* Window Header */}
					<div className="z-20 flex h-4 shrink-0 items-center gap-1 border-white/5 border-b bg-neutral-800/90 px-2 transition-colors duration-500 group-hover:bg-neutral-800 md:h-6 md:gap-1.5 md:px-3">
						<div className="h-1.5 w-1.5 rounded-full bg-[#FF5F57] transition-transform duration-300 group-hover:scale-110 md:h-2 md:w-2" />
						<div className="h-1.5 w-1.5 rounded-full bg-[#FEBC2E] transition-transform duration-300 group-hover:scale-110 md:h-2 md:w-2" />
						<div className="h-1.5 w-1.5 rounded-full bg-[#28C840] transition-transform duration-300 group-hover:scale-110 md:h-2 md:w-2" />
					</div>
					{/* Screenshot */}
					<div className="relative w-full flex-1 overflow-hidden bg-neutral-900">
						<img
							alt="App screenshot"
							src={image}
							className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

function MobileLayout({
	mainImage,
	screenshots,
}: {
	mainImage: string
	screenshots: string[]
}) {
	return (
		<div className="absolute right-0 bottom-0 left-0 flex h-full w-full items-end justify-center">
			<div className="relative h-full w-full max-w-[70%] md:max-w-[80%] lg:max-w-[75%]">
				{/* Left phone */}
				{screenshots[0] && (
					<div className="absolute -bottom-16 left-0 z-10 w-[38%] origin-bottom transition-all duration-500 ease-out group-hover:-translate-y-3 group-hover:rotate-[-2deg] group-hover:scale-105 md:-bottom-24 md:left-4 lg:-bottom-28">
						<div className="relative aspect-[9/19] overflow-hidden rounded-t-2xl border-neutral-800 border-x-2 border-t-2 bg-black shadow-2xl transition-all duration-500 group-hover:border-neutral-700 group-hover:shadow-[0_15px_30px_-5px_rgba(255,255,255,0.15)] md:rounded-t-3xl md:border-x-4 md:border-t-4">
							<img
								alt="Screen 2"
								src={screenshots[0]}
								className="absolute inset-0 h-full w-full object-cover object-top opacity-60 transition-all duration-500 group-hover:opacity-80"
							/>
						</div>
					</div>
				)}

				{/* Right phone */}
				{screenshots[1] && (
					<div className="absolute right-0 -bottom-16 z-10 w-[38%] origin-bottom transition-all duration-500 ease-out group-hover:-translate-y-3 group-hover:rotate-[2deg] group-hover:scale-105 md:right-4 md:-bottom-24 lg:-bottom-28">
						<div className="relative aspect-[9/19] overflow-hidden rounded-t-2xl border-neutral-800 border-x-2 border-t-2 bg-black shadow-2xl transition-all duration-500 group-hover:border-neutral-700 group-hover:shadow-[0_15px_30px_-5px_rgba(255,255,255,0.15)] md:rounded-t-3xl md:border-x-4 md:border-t-4">
							<img
								alt="Screen 3"
								src={screenshots[1]}
								className="absolute inset-0 h-full w-full object-cover object-top opacity-60 transition-all duration-500 group-hover:opacity-80"
							/>
						</div>
					</div>
				)}

				{/* Center phone (main) */}
				<div className="absolute -bottom-16 left-1/2 z-20 w-[48%] origin-bottom -translate-x-1/2 transition-all duration-500 ease-out group-hover:-translate-y-4 group-hover:scale-110 md:-bottom-24 lg:-bottom-28">
					<div className="relative aspect-[9/19] overflow-hidden rounded-t-2xl border-neutral-900 border-x-4 border-t-4 bg-neutral-900 shadow-2xl ring-1 ring-white/10 transition-all duration-500 group-hover:border-neutral-800 group-hover:shadow-[0_20px_50px_-5px_rgba(255,255,255,0.25)] group-hover:ring-white/20 md:rounded-t-3xl md:border-x-6 md:border-t-6">
						{/* Notch */}
						<div className="absolute top-0 left-1/2 z-30 h-3 w-[35%] -translate-x-1/2 rounded-b-lg bg-black md:h-5 md:rounded-b-xl" />
						<img
							alt="Main screen"
							src={mainImage}
							className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
						/>
					</div>
				</div>
			</div>
		</div>
	)
}
