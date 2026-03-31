"use client"

import { Download, Github, Linkedin, Mail, Send } from "lucide-react"
import { cn, useScrollFadeIn, useScrollStagger } from "~/shared/utils"
import type { ContactInfo } from "../portfolio-types"

interface ContactSectionProps {
	contact: ContactInfo
}

const iconMap = {
	github: Github,
	linkedin: Linkedin,
	send: Send,
	mail: Mail,
}

export function ContactSection({ contact }: ContactSectionProps) {
	const headerRef = useScrollFadeIn({ duration: 1 })
	const cardsRef = useScrollStagger({ stagger: 0.15, duration: 0.7 })

	return (
		<section
			id="contact"
			className={cn("relative px-4 py-24 sm:py-32")}
			style={{ scrollMarginTop: "80px" }}
		>
			<div className="mx-auto max-w-7xl">
				{/* Section header */}
				<div
					ref={headerRef as React.RefObject<HTMLDivElement>}
					className="mb-16 text-center"
				>
					<h2 className="mb-4 font-bold text-4xl text-fg tracking-tight sm:text-5xl md:text-6xl">
						Get In Touch
					</h2>
					<p className="mx-auto max-w-2xl text-lg text-muted-fg">
						Feel free to reach out for collaborations, freelance opportunities,
						or just a friendly chat.
					</p>
				</div>

				{/* Contact grid */}
				<div
					ref={cardsRef as React.RefObject<HTMLDivElement>}
					className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-2 lg:grid-cols-3"
				>
					{/* Email card */}
					<a
						href={`mailto:${contact.email}`}
						className={cn(
							"group relative overflow-hidden rounded-2xl border border-border bg-muted/30 p-6 backdrop-blur-sm transition-all duration-300",
							"hover:scale-105 hover:border-primary hover:bg-primary/5 hover:shadow-lg hover:shadow-primary/10",
						)}
					>
						<div className="relative z-10">
							<div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
								<Mail className="h-6 w-6 text-primary" />
							</div>
							<h3 className="mb-2 font-semibold text-fg text-lg">Email</h3>
							<p className="break-all text-muted-fg text-sm">{contact.email}</p>
						</div>
						{/* Hover gradient effect */}
						<div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
							<div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-pink-500/5 to-transparent" />
						</div>
					</a>

					{/* Social links */}
					{contact.socials.map((social) => {
						const Icon = iconMap[social.icon as keyof typeof iconMap] || Mail
						return (
							<a
								key={social.name}
								href={social.url}
								target="_blank"
								rel="noopener noreferrer"
								className={cn(
									"group relative overflow-hidden rounded-2xl border border-border bg-muted/30 p-6 backdrop-blur-sm transition-all duration-300",
									"hover:scale-105 hover:border-primary hover:bg-primary/5 hover:shadow-lg hover:shadow-primary/10",
								)}
							>
								<div className="relative z-10">
									<div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
										<Icon className="h-6 w-6 text-primary" />
									</div>
									<h3 className="mb-2 font-semibold text-fg text-lg">
										{social.name}
									</h3>
									<p className="text-muted-fg text-sm">@onepercman</p>
								</div>
								{/* Hover gradient effect */}
								<div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
									<div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-pink-500/5 to-transparent" />
								</div>
							</a>
						)
					})}
				</div>

				{/* CV Download CTA */}
				<div className="mt-12 text-center">
					<a
						href="/cv.pdf"
						download
						className={cn(
							"group inline-flex items-center gap-2 rounded-full border px-8 py-4 font-medium text-sm transition-all duration-300",
							"border-primary bg-primary/10 text-fg backdrop-blur-sm",
							"hover:scale-105 hover:bg-primary hover:text-primary-fg hover:shadow-lg hover:shadow-primary/20",
							"active:scale-95",
						)}
					>
						<Download className="h-5 w-5 transition-transform duration-300 group-hover:translate-y-0.5" />
						Download My CV
					</a>
				</div>
			</div>
		</section>
	)
}
