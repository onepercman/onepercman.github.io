"use client"

import { Download, Github, Linkedin, Mail, Send } from "lucide-react"
import { cn } from "~/shared/utils"
import { contactData, heroData } from "../portfolio-data"

export function Footer() {
	const currentYear = new Date().getFullYear()

	return (
		<footer className="border-white/5 border-t bg-fg/5 py-10 backdrop-blur-sm sm:py-12">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
					{/* Left - Logo & Copyright */}
					<div className="flex items-center gap-3 text-base text-muted-fg">
						<span className="font-bold text-fg text-lg">
							<span className="animate-gradient bg-linear-to-r from-primary via-pink-500 to-violet-500 bg-clip-text text-transparent">
								{heroData.nickname}
							</span>
						</span>
						<span>•</span>
						<span>© {currentYear}</span>
					</div>

					{/* Center - CV Download */}
					<a
						href="/cv.pdf"
						download
						className="group flex items-center gap-2 font-medium text-base text-muted-fg transition-colors hover:text-fg"
					>
						<Download className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
						Download CV
					</a>

					{/* Right - Social Links */}
					<div className="flex items-center gap-5">
						<a
							href={contactData.socials.find((s) => s.name === "GitHub")?.url}
							target="_blank"
							rel="noopener noreferrer"
							className={cn(
								"text-muted-fg transition-colors hover:text-accent",
								"transform duration-200 hover:scale-110",
							)}
							aria-label="GitHub"
						>
							<Github className="h-[22px] w-[22px]" aria-hidden="true" />
						</a>
						<a
							href={contactData.socials.find((s) => s.name === "LinkedIn")?.url}
							target="_blank"
							rel="noopener noreferrer"
							className={cn(
								"text-muted-fg transition-colors hover:text-accent",
								"transform duration-200 hover:scale-110",
							)}
							aria-label="LinkedIn"
						>
							<Linkedin className="h-[22px] w-[22px]" aria-hidden="true" />
						</a>
						<a
							href={contactData.socials.find((s) => s.name === "Telegram")?.url}
							target="_blank"
							rel="noopener noreferrer"
							className={cn(
								"text-muted-fg transition-colors hover:text-accent",
								"transform duration-200 hover:scale-110",
							)}
							aria-label="Telegram"
						>
							<Send className="h-[22px] w-[22px]" aria-hidden="true" />
						</a>
						<a
							href={`mailto:${contactData.email}`}
							className={cn(
								"text-muted-fg transition-colors hover:text-accent",
								"transform duration-200 hover:scale-110",
							)}
							aria-label="Email"
						>
							<Mail className="h-[22px] w-[22px]" aria-hidden="true" />
						</a>
					</div>
				</div>
			</div>
		</footer>
	)
}
