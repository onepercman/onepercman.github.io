"use client"

import type { LucideIcon } from "lucide-react"
import { Code, ExternalLink, Linkedin, Mail } from "lucide-react"
import { cn } from "~/shared/utils"
import type { OtherItem } from "../portfolio-types"

const iconMap: Record<string, LucideIcon> = {
	code: Code,
	linkedin: Linkedin,
	mail: Mail,
}

interface OtherSectionProps {
	items: OtherItem[]
}

export function OtherSection({ items }: OtherSectionProps) {
	return (
		<section
			id="other"
			className="relative overflow-hidden pt-0 pb-24 sm:pb-32 md:pb-40"
			style={{ scrollMarginTop: "120px" }}
		>
			<div className="section">
				<div className="mb-16 text-center">
					<h2 className="mb-4 text-pretty px-2 font-bold text-3xl sm:text-5xl md:text-6xl">
						Get in{" "}
						<span className="animate-gradient bg-linear-to-r from-primary via-pink-500 to-violet-500 bg-clip-text text-transparent">
							Touch
						</span>
					</h2>
					<p className="mx-auto max-w-2xl text-pretty px-3 text-base text-muted-fg sm:text-lg md:text-xl">
						Connect with me across platforms or send a message
					</p>
				</div>

				<div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 px-4 sm:grid-cols-3">
					{items.map((item) => {
						const Icon = iconMap[item.icon] || Code
						const isExternal = item.isExternal || item.href.startsWith("http")

						return (
							<a
								key={item.id}
								href={item.href}
								target={isExternal ? "_blank" : undefined}
								rel={isExternal ? "noopener noreferrer" : undefined}
								className={cn(
									"group glass-card relative rounded-3xl p-6 sm:p-8",
									"cursor-pointer overflow-hidden transition-all duration-300 hover:scale-105",
								)}
							>
								<div
									className={cn(
										"absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity duration-300 group-hover:opacity-10",
										item.gradientFrom,
										item.gradientTo,
									)}
								/>

								<div className="relative z-10 flex flex-col items-center gap-4 text-center">
									<div
										className={cn(
											"h-16 w-16 rounded-2xl bg-gradient-to-br p-0.5 transition-transform duration-300 group-hover:scale-110",
											item.gradientFrom,
											item.gradientTo,
										)}
									>
										<div className="flex h-full w-full items-center justify-center rounded-[14px] bg-bg">
											<Icon
												className="h-8 w-8"
												style={{ color: "var(--fg)" }}
												aria-hidden="true"
											/>
										</div>
									</div>

									<div>
										<h3
											className={cn(
												"mb-2 font-bold text-xl transition-colors sm:text-2xl",
												"text-pretty bg-gradient-to-br bg-clip-text px-1 text-transparent",
												item.gradientFrom,
												item.gradientTo,
											)}
										>
											{item.title}
										</h3>
										<p className="text-pretty px-1 text-muted-fg text-xs sm:text-sm">
											{item.description}
										</p>
									</div>

									<div
										className={cn(
											"mt-2 flex items-center gap-1 font-semibold text-sm transition-transform duration-300 group-hover:translate-x-2",
											"bg-gradient-to-br bg-clip-text text-transparent",
											item.gradientFrom,
											item.gradientTo,
										)}
									>
										<span>Connect</span>
										{isExternal ? (
											<ExternalLink className="h-4 w-4" aria-hidden="true" />
										) : (
											<span>→</span>
										)}
									</div>
								</div>
							</a>
						)
					})}
				</div>
			</div>
		</section>
	)
}
