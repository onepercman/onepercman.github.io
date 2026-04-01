"use client"

import { Calendar, Moon, Sun } from "lucide-react"
import { useEffect, useState } from "react"
import { Tab, TabList, Tabs } from "~/shared/components/ui/tabs"
import { cn } from "~/shared/utils"

const navItems = [
	{ label: "Home", href: "#hero", id: "hero" },
	{ label: "About", href: "#about", id: "about" },
	{ label: "Projects", href: "#projects", id: "projects" },
	{ label: "Other", href: "#other", id: "other" },
]

interface NavigationProps {
	ctaText?: string
	ctaLink?: string
	onThemeToggle?: () => void
	theme?: "light" | "dark"
}

export function Navigation({
	ctaText = "Book a Call",
	ctaLink = "#other",
	onThemeToggle,
	theme = "dark",
}: NavigationProps) {
	const [isMenuOpen, setIsMenuOpen] = useState(false)
	const [activeItem, setActiveItem] = useState("hero")

	// Track scroll position to update active section
	useEffect(() => {
		const handleScrollSpy = () => {
			const sections = navItems.map((item) => ({
				id: item.id,
				label: item.label,
				element: document.getElementById(item.id),
			}))

			// Find the current section based on scroll position
			let currentSection = "hero"
			const scrollPosition = window.scrollY + window.innerHeight / 3

			for (const section of sections) {
				if (section.element) {
					const { top } = section.element.getBoundingClientRect()
					const offsetTop = top + window.scrollY

					if (scrollPosition >= offsetTop) {
						currentSection = section.id
					}
				}
			}

			setActiveItem(currentSection)
		}

		window.addEventListener("scroll", handleScrollSpy)
		handleScrollSpy() // Initial check

		return () => window.removeEventListener("scroll", handleScrollSpy)
	}, [])

	const scrollToSection = (href: string) => {
		const element = document.querySelector(href)
		if (element) {
			element.scrollIntoView({ behavior: "smooth", block: "start" })
		}
		setIsMenuOpen(false)
	}

	const handleScroll = (
		e: React.MouseEvent<HTMLAnchorElement>,
		href: string,
	) => {
		e.preventDefault()
		scrollToSection(href)
	}

	return (
		<header className="fixed top-0 right-0 left-0 z-50 py-6">
			<nav className="mx-auto max-w-[1400px] px-6 md:px-8 lg:px-12">
				{/* Desktop Navigation */}
				<div className="relative hidden items-center justify-center lg:flex">
					{/* Theme Toggle - Left */}
					<div className="absolute left-0">
						<button
							type="button"
							onClick={onThemeToggle}
							className={cn(
								"relative flex h-14 w-14 items-center justify-center rounded-full",
								"transition-transform duration-300 hover:scale-105 active:scale-95",
								"border border-white/10 bg-fg/5 backdrop-blur-xl",
								"shadow-2xl shadow-black/20",
							)}
							aria-label="Toggle theme"
						>
							<div
								className={cn(
									"absolute transition-all duration-300",
									theme === "dark"
										? "rotate-0 scale-100 opacity-100"
										: "-rotate-180 scale-0 opacity-0",
								)}
							>
								<Moon className="h-5 w-5 text-white" />
							</div>
							<div
								className={cn(
									"absolute transition-all duration-300",
									theme === "light"
										? "rotate-0 scale-100 opacity-100"
										: "-rotate-180 scale-0 opacity-0",
								)}
							>
								<Sun className="h-5 w-5 text-amber-500" />
							</div>
						</button>
					</div>

					{/* Center Navigation */}
					<Tabs
						selectedKey={activeItem}
						onSelectionChange={(key) => {
							const item = navItems.find((i) => i.id === String(key))
							if (item) {
								scrollToSection(item.href)
							}
						}}
					>
						<TabList variant="pill" aria-label="Navigation">
							{navItems.map((item) => (
								<Tab key={item.id} id={item.id}>
									{item.label}
								</Tab>
							))}
						</TabList>
					</Tabs>

					{/* CTA Button - Right */}
					<div className="absolute right-0">
						<button
							type="button"
							onClick={() => scrollToSection(ctaLink)}
							className={cn(
								"h-14 rounded-full px-6",
								"border border-white/10 bg-fg/5 backdrop-blur-xl",
								"shadow-black/10 shadow-xl",
								"flex items-center gap-2 font-semibold text-fg text-sm",
								"transition-transform duration-300 hover:scale-105",
							)}
						>
							<Calendar className="h-4 w-4" />
							<span>{ctaText}</span>
						</button>
					</div>
				</div>

				{/* Mobile Navigation */}
				<div className="relative flex items-center justify-center lg:hidden">
					{/* Theme Toggle - Left */}
					<div className="absolute left-0">
						<button
							type="button"
							onClick={onThemeToggle}
							className={cn(
								"relative flex h-14 w-14 items-center justify-center rounded-full",
								"transition-transform duration-300 hover:scale-105 active:scale-95",
								"border border-white/10 bg-fg/5 backdrop-blur-xl",
								"shadow-2xl shadow-black/20",
							)}
							aria-label="Toggle theme"
						>
							<div
								className={cn(
									"absolute transition-all duration-300",
									theme === "dark"
										? "rotate-0 scale-100 opacity-100"
										: "-rotate-180 scale-0 opacity-0",
								)}
							>
								<Moon className="h-5 w-5 text-white" />
							</div>
							<div
								className={cn(
									"absolute transition-all duration-300",
									theme === "light"
										? "rotate-0 scale-100 opacity-100"
										: "-rotate-180 scale-0 opacity-0",
								)}
							>
								<Sun className="h-5 w-5 text-amber-500" />
							</div>
						</button>
					</div>

					{/* Menu Toggle */}
					<button
						type="button"
						onClick={() => setIsMenuOpen(!isMenuOpen)}
						className={cn(
							"rounded-full p-4",
							"border border-white/10 bg-fg/5 backdrop-blur-xl",
							"shadow-black/10 shadow-xl",
						)}
						aria-label="Toggle menu"
					>
						<div className="flex h-4 w-5 flex-col justify-between">
							<span
								className={cn(
									"block h-0.5 w-5 rounded-full bg-fg transition-transform duration-300",
									isMenuOpen && "translate-y-1.5 rotate-45",
								)}
							/>
							<span
								className={cn(
									"block h-0.5 w-5 rounded-full bg-fg transition-opacity duration-300",
									isMenuOpen ? "opacity-0" : "opacity-100",
								)}
							/>
							<span
								className={cn(
									"block h-0.5 w-5 rounded-full bg-fg transition-transform duration-300",
									isMenuOpen && "-translate-y-1.5 -rotate-45",
								)}
							/>
						</div>
					</button>

					{/* CTA Button - Right */}
					<div className="absolute right-0">
						<button
							type="button"
							onClick={() => scrollToSection(ctaLink)}
							className={cn(
								"rounded-full px-4 py-3.5",
								"border border-white/10 bg-fg/5 backdrop-blur-xl",
								"shadow-black/10 shadow-xl",
								"flex items-center gap-2 font-semibold text-fg text-sm",
								"transition-transform duration-300",
							)}
						>
							<Calendar className="h-4 w-4" />
							<span className="sr-only sm:not-sr-only">{ctaText}</span>
						</button>
					</div>
				</div>

				{/* Mobile Menu */}
				<div
					className={cn(
						"overflow-hidden transition-all duration-300 lg:hidden",
						isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
					)}
				>
					<div
						className={cn(
							"mt-4 rounded-2xl p-4",
							"border border-white/10 bg-fg/5 backdrop-blur-xl",
							"shadow-black/10 shadow-xl",
						)}
					>
						<div className="flex flex-col gap-2">
							{navItems.map((item) => (
								<a
									key={item.href}
									href={item.href}
									onClick={(e) => {
										handleScroll(e, item.href)
										setActiveItem(item.label)
									}}
									className={cn(
										"relative rounded-full px-6 py-3 font-semibold text-sm",
										"cursor-pointer text-center transition-colors duration-300",
										activeItem === item.label
											? "bg-accent/10 text-fg opacity-100"
											: "bg-transparent text-muted-fg opacity-80",
									)}
								>
									{item.label}
								</a>
							))}
							<button
								type="button"
								onClick={() => scrollToSection(ctaLink)}
								className={cn(
									"flex items-center justify-center gap-2",
									"mt-2 rounded-full px-6 py-3 font-semibold text-sm",
									"border border-border text-fg",
									"transition-transform duration-300 hover:scale-[1.02]",
								)}
							>
								<Calendar className="h-4 w-4" />
								<span>{ctaText}</span>
							</button>
						</div>
					</div>
				</div>
			</nav>
		</header>
	)
}
