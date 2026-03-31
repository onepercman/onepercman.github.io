"use client"

import { Download, Github, Linkedin, Mail, Phone, Send } from "lucide-react"
import { cn } from "~/shared/utils"
import type { ContactInfo } from "../portfolio-types"

interface ContactWidgetProps {
	contact: ContactInfo
}

const iconMap = {
	github: Github,
	linkedin: Linkedin,
	send: Send,
	mail: Mail,
}

export function ContactWidget({ contact }: ContactWidgetProps) {
	return (
		<div className="group relative col-span-1 row-span-1 flex h-full w-full flex-col overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-bg to-muted/20 p-4 backdrop-blur-md md:col-start-1 md:row-start-2 md:p-5">
			{/* Header */}
			<div className="mb-4 md:mb-5">
				<h3 className="mb-1.5 font-bold text-fg text-xs">Contact</h3>
				<div className="h-0.5 w-8 rounded-full bg-red-500/50" />
			</div>

			{/* Contact Info Section */}
			<div className="mb-4 flex flex-col gap-2 md:mb-5">
				{/* Email */}
				<a
					href={`mailto:${contact.email}`}
					className="group/email flex items-center gap-2 rounded-lg border border-border/50 bg-muted/20 p-2.5 transition-all hover:scale-[1.02] hover:border-primary hover:bg-primary/5 md:gap-3 md:p-3"
				>
					<div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 md:h-9 md:w-9">
						<Mail className="h-3.5 w-3.5 text-primary md:h-4 md:w-4" />
					</div>
					<div className="min-w-0 flex-1">
						<p className="mb-0.5 text-[9px] text-muted-fg uppercase tracking-wider opacity-70">
							Email
						</p>
						<p className="truncate font-medium text-[10px] text-fg">
							{contact.email}
						</p>
					</div>
				</a>

				{/* Phone */}
				<a
					href="tel:+84889388820"
					className="group/phone flex items-center gap-2 rounded-lg border border-border/50 bg-muted/20 p-2.5 transition-all hover:scale-[1.02] hover:border-primary hover:bg-primary/5 md:gap-3 md:p-3"
				>
					<div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 md:h-9 md:w-9">
						<Phone className="h-3.5 w-3.5 text-primary md:h-4 md:w-4" />
					</div>
					<div className="min-w-0 flex-1">
						<p className="mb-0.5 text-[9px] text-muted-fg uppercase tracking-wider opacity-70">
							Phone
						</p>
						<p className="font-medium text-[10px] text-fg">+84 88 938 8820</p>
					</div>
				</a>
			</div>

			{/* Social Links */}
			<div className="mb-4 flex flex-col gap-2 md:mb-5">
				<p className="text-[9px] text-muted-fg uppercase tracking-wider opacity-70">
					Social
				</p>
				<div className="flex gap-2">
					{contact.socials.map((social) => {
						const Icon = iconMap[social.icon as keyof typeof iconMap] || Mail
						return (
							<a
								key={social.name}
								href={social.url}
								target="_blank"
								rel="noopener noreferrer"
								className="flex h-10 w-10 items-center justify-center rounded-lg border border-border/50 bg-muted/20 transition-all hover:scale-110 hover:border-primary hover:bg-primary/5 md:h-12 md:w-12"
								title={social.name}
							>
								<Icon className="h-4 w-4 text-primary md:h-5 md:w-5" />
							</a>
						)
					})}
				</div>
			</div>

			{/* Spacer */}
			<div className="flex-1" />

			{/* CV Download */}
			<a
				href="/cv.pdf"
				download
				className={cn(
					"group/cv flex items-center justify-center gap-2 rounded-lg border px-4 py-3 text-center font-medium text-[10px] transition-all md:py-4",
					"border-primary bg-primary/10 text-fg",
					"hover:scale-105 hover:bg-primary hover:text-primary-fg",
					"active:scale-95",
				)}
			>
				<Download className="h-4 w-4 transition-transform group-hover/cv:translate-y-0.5" />
				Download CV
			</a>
		</div>
	)
}
