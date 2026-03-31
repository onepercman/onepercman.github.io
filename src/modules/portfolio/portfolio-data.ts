import type {
	AboutInfo,
	ContactInfo,
	Experience,
	OtherItem,
	Project,
} from "./portfolio-types"

export const heroData = {
	name: "Trung Tran Duy",
	nickname: "onepercman",
	headline: "Fullstack Developer",
	tagline: "Less complexity, more impact",
	location: "Hanoi, Vietnam",
	experience: "5+ years",
	intro:
		"Senior Frontend Engineer with 5+ years of experience building complex frontend systems across enterprise, consumer, and fintech products. Strong background in frontend architecture, data-heavy interfaces, real-time systems, and zero-to-one product development.",
}

export const projects: Project[] = [
	{
		id: "1",
		title: "Fitness Rewards Platform",
		description:
			"Gamified fitness platform integrating NFC-enabled physical shoes with digital rewards. Achieved 7,413 digital collectibles sold in 30 minutes, 15,000+ downloads in 6 days, and ranked Top #2 on Google Play Vietnam. Note: Project name anonymized for confidentiality.",
		image:
			"https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&h=1000&fit=crop&q=80",
		category: "Fintech / Gamification",
		year: "2022",
		role: "Frontend Lead",
		tags: ["React", "TypeScript", "Wagmi", "Ethers.js", "Real-time"],
		link: "#",
		gradientFrom: "rgba(16, 185, 129, 0.9)",
		gradientTo: "rgba(5, 150, 105, 0.9)",
		layout: "desktop",
	},
	{
		id: "2",
		title: "Derivatives Trading Platform",
		description:
			"High-leverage orderbook-based trading platform supporting up to x1000 leverage. Built real-time price charts (BTC, ETH), orderbook and trade updates, accurate PnL/ROI calculations, and prediction-market module. Note: Project name anonymized for confidentiality.",
		image:
			"https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1600&h=1000&fit=crop&q=80",
		category: "Fintech / Trading",
		year: "2023-2024",
		role: "Frontend Lead",
		tags: ["React", "TypeScript", "WebSocket", "Real-time", "Wagmi"],
		link: "#",
		gradientFrom: "rgba(249, 115, 22, 0.9)",
		gradientTo: "rgba(234, 179, 8, 0.9)",
		layout: "desktop",
	},
	{
		id: "3",
		title: "Metaverse Experience Platform",
		description:
			"Immersive 3D virtual world platform built with Three.js and react-three-fiber. Canvas-based rendering architecture focused on balancing visual richness with performance at scale. Note: Project name anonymized for confidentiality.",
		image:
			"https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=1600&h=1000&fit=crop&q=80",
		category: "3D Web / Experience",
		year: "2022-2023",
		role: "Frontend Lead",
		tags: ["React", "Three.js", "react-three-fiber", "WebGL", "3D"],
		link: "#",
		gradientFrom: "rgba(168, 85, 247, 0.9)",
		gradientTo: "rgba(236, 72, 153, 0.9)",
		layout: "desktop",
	},
	{
		id: "4",
		title: "AI Agent Creation Platform",
		description:
			"SaaS platform enabling users to create, configure, and share AI agents. Solo frontend development featuring agent configuration flows, subscription management, and token-based features. UX optimized for non-technical users. Note: Project name anonymized for confidentiality.",
		image:
			"https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1600&h=1000&fit=crop&q=80",
		category: "AI / SaaS",
		year: "2024",
		role: "Solo Frontend",
		tags: ["React", "TypeScript", "Next.js", "AI", "SaaS"],
		link: "#",
		gradientFrom: "rgba(59, 130, 246, 0.9)",
		gradientTo: "rgba(6, 182, 212, 0.9)",
		layout: "desktop",
	},
	{
		id: "5",
		title: "Premarket & OTC Trading Platform",
		description:
			"P2P trading platform with escrow-based smart contracts for premarket and OTC transactions. Focused on transparency, risk visibility, and clear transaction flows for decentralized trading. Note: Project name anonymized for confidentiality.",
		image:
			"https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=1600&h=1000&fit=crop&q=80",
		category: "Fintech / Trading",
		year: "2024",
		role: "Frontend Engineer",
		tags: ["React", "TypeScript", "Ethers.js", "Wagmi", "Smart Contracts"],
		link: "#",
		gradientFrom: "rgba(6, 182, 212, 0.9)",
		gradientTo: "rgba(14, 165, 233, 0.9)",
		layout: "desktop",
	},
	{
		id: "6",
		title: "Hardware Integration Platform",
		description:
			"DePIN (Decentralized Physical Infrastructure) product integrating IoT hardware devices with software systems. Translated complex hardware states and system data into intuitive user experiences. Built complete web app, marketing site, and landing pages. Note: Project name anonymized for confidentiality.",
		image:
			"https://images.unsplash.com/photo-1518770660439-4636190af475?w=1600&h=1000&fit=crop&q=80",
		category: "IoT / Hardware",
		year: "2024",
		role: "Solo Frontend",
		tags: ["React", "TypeScript", "IoT", "Hardware Integration", "Solidity"],
		link: "#",
		gradientFrom: "rgba(236, 72, 153, 0.9)",
		gradientTo: "rgba(219, 39, 119, 0.9)",
		layout: "desktop",
	},
]

export const aboutData: AboutInfo = {
	title: "onepercman",
	description: [
		"I'm Trung Tran Duy (aka onepercman), a Fullstack Developer with 5+ years of experience building complex frontend systems across enterprise, consumer, and fintech products.",
		"Strong background in frontend architecture, data-heavy interfaces, real-time systems, and zero-to-one product development. Experienced in technical leadership, mentoring engineers, and delivering production systems under scale and performance constraints.",
		"Core expertise: React, TypeScript, Next.js, Vite, TailwindCSS, Redux, Zustand, Design Systems, and Performance Optimization. Backend experience with Node.js. Also working with Flutter (Dart) and Go-lang for various projects.",
	],
	image: "/avatar.jpeg",
	images: ["/avatar.jpeg", "/portrait.jpeg"],
	highlights: [],
}

export const experiences: Experience[] = [
	{
		id: "1",
		company: "TheVapeLabs",
		role: "Senior Frontend Engineer (Solo)",
		period: "Feb 2024 – Nov 2024",
		description:
			"Owned UI/UX across all products. Built web app, marketing site, and DePIN product integrating physical vape devices with software.",
	},
	{
		id: "2",
		company: "The X Lab",
		role: "Frontend Lead / Senior Frontend Engineer",
		period: "Nov 2023 – Aug 2024",
		description:
			"Led frontend architecture across multiple confidential products including derivatives trading platform (x1000 leverage), AI agent platform, and DeFi premarket/OTC platform.",
	},
	{
		id: "3",
		company: "Moonlab",
		role: "Frontend Lead",
		period: "Apr 2022 – Aug 2023",
		description:
			"First Frontend Lead role. Led Run Together (7,413 NFTs sold in 30min, Top #2 Google Play Vietnam), Mcity metaverse platform, and Animverse GameFi. Established coding standards and mentored 2 interns to full-time engineers.",
	},
	{
		id: "4",
		company: "Teracom",
		role: "Frontend Engineer (Intern → Junior)",
		period: "Jun 2021 – Apr 2022",
		description:
			"Digital transformation projects for government and state-owned enterprises. Migrated legacy systems to Next.js + TypeScript, introduced SSR for improved SEO and performance.",
	},
]

export const contactData: ContactInfo = {
	email: "onepercman@gmail.com",
	socials: [
		{
			name: "GitHub",
			url: "https://github.com/onepercman",
			icon: "github",
		},
		{
			name: "LinkedIn",
			url: "https://linkedin.com/in/onepercman",
			icon: "linkedin",
		},
		{
			name: "Telegram",
			url: "https://t.me/onepercman",
			icon: "send",
		},
	],
}

export const otherItems: OtherItem[] = [
	{
		id: "1",
		title: "GitHub",
		description: "View my open source projects and contributions",
		href: "https://github.com/onepercman",
		icon: "code",
		gradientFrom: "from-violet-500",
		gradientTo: "to-purple-500",
		isExternal: true,
	},
	{
		id: "2",
		title: "LinkedIn",
		description: "Connect with me professionally",
		href: "https://linkedin.com/in/onepercman",
		icon: "linkedin",
		gradientFrom: "from-blue-500",
		gradientTo: "to-cyan-500",
		isExternal: true,
	},
	{
		id: "3",
		title: "Email Me",
		description: "Get in touch for opportunities or collaboration",
		href: "mailto:onepercman@gmail.com",
		icon: "mail",
		gradientFrom: "from-pink-500",
		gradientTo: "to-rose-500",
	},
]
