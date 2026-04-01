import {
	createRootRoute,
	HeadContent,
	Outlet,
	Scripts,
} from "@tanstack/react-router"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { AnimatedBackground } from "~/shared/components/animated-background"
import { ThemeProvider } from "~/shared/providers/theme-provider"
import appCss from "../styles.css?url"

export const Route = createRootRoute({
	head: () => {
		return {
			meta: [
				{
					charSet: "utf-8",
				},
				{
					name: "viewport",
					content: "width=device-width, initial-scale=1",
				},
				{
					title: "onepercman | Fullstack Developer",
				},
				{
					name: "description",
					content:
						"Trung Tran Duy (onepercman) - Fullstack Developer with 5+ years building complex frontend systems across enterprise, consumer, and fintech products. Expert in React, TypeScript, Next.js, Node.js, Flutter, and Go.",
				},
				{
					name: "keywords",
					content:
						"onepercman, Trung Tran Duy, Fullstack Developer, Frontend Lead, React Developer, TypeScript, Next.js, Node.js, Flutter, Dart, Go-lang, Fintech, Frontend Architecture, Performance Optimization, TailwindCSS, Zustand, Redux, Hanoi, Vietnam",
				},
				{ name: "author", content: "onepercman (Trung Tran Duy)" },
				{ name: "robots", content: "index, follow" },
				{ name: "language", content: "en" },
				{ name: "revisit-after", content: "7 days" },

				// Open Graph / Facebook
				{ property: "og:type", content: "website" },
				{ property: "og:url", content: "https://onepercman.github.io" },
				{
					property: "og:title",
					content:
						"onepercman | Fullstack Developer - React, TypeScript, Node.js",
				},
				{
					property: "og:description",
					content:
						"Fullstack Developer with 5+ years building complex frontend systems across enterprise, consumer, and fintech products. Expert in React, TypeScript, Next.js, Node.js, Flutter, and Go-lang. Based in Hanoi, Vietnam.",
				},
				{
					property: "og:image",
					content: "/thumbnail.png",
				},
				{ property: "og:image:width", content: "1200" },
				{ property: "og:image:height", content: "630" },
				{ property: "og:site_name", content: "onepercman Portfolio" },
				{ property: "og:locale", content: "en_US" },

				// Twitter
				{ name: "twitter:card", content: "summary_large_image" },
				{ name: "twitter:url", content: "https://onepercman.github.io" },
				{
					name: "twitter:title",
					content:
						"onepercman | Fullstack Developer - React, TypeScript, Node.js",
				},
				{
					name: "twitter:description",
					content:
						"Fullstack Developer building complex systems with React, TypeScript, Node.js, and more. Based in Hanoi, Vietnam.",
				},
				{
					name: "twitter:image",
					content: "/thumbnail.png",
				},
				{ name: "twitter:site", content: "@onepercman" },
				{ name: "twitter:creator", content: "@onepercman" },

				// Additional SEO
				{ name: "theme-color", content: "#ef4444" },
				{ name: "msapplication-TileColor", content: "#ef4444" },
				{ name: "apple-mobile-web-app-capable", content: "yes" },
				{ name: "apple-mobile-web-app-status-bar-style", content: "default" },
				{ name: "apple-mobile-web-app-title", content: "onepercman" },
				{ name: "mobile-web-app-capable", content: "yes" },

				// Schema.org structured data
				{
					"script:ld+json": {
						"@context": "https://schema.org",
						"@type": "Person",
						name: "Trung Tran Duy",
						alternateName: "onepercman",
						description:
							"Fullstack Developer with 5+ years of experience building complex frontend systems across enterprise, consumer, and fintech products",
						url: "https://onepercman.github.io",
						image: "/thumbnail.png",
						email: "onepercman@gmail.com",
						sameAs: [
							"https://github.com/onepercman",
							"https://linkedin.com/in/onepercman",
							"https://t.me/onepercman",
						],
						jobTitle: "Fullstack Developer",
						worksFor: {
							"@type": "Organization",
							name: "Freelance",
						},
						knowsAbout: [
							"React",
							"TypeScript",
							"Next.js",
							"Node.js",
							"Frontend Architecture",
							"Performance Optimization",
							"TailwindCSS",
							"Zustand",
							"Redux",
							"Flutter",
							"Dart",
							"Go",
							"Real-time Systems",
							"Fintech",
							"Wagmi",
							"Ethers.js",
							"Smart Contracts",
						],
						address: {
							"@type": "PostalAddress",
							addressLocality: "Hanoi",
							addressCountry: "VN",
						},
					},
				},
			],
			links: [
				{
					rel: "stylesheet",
					href: appCss,
				},
				{
					rel: "canonical",
					href: "https://onepercman.github.io",
				},
				{ rel: "preconnect", href: "https://fonts.googleapis.com" },
				{
					rel: "preconnect",
					href: "https://fonts.gstatic.com",
					crossOrigin: "anonymous",
				},
				{
					rel: "stylesheet",
					href: "https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap",
				},
				{
					rel: "stylesheet",
					href: "https://fonts.googleapis.com/css2?family=Changa+One:ital@0;1&display=swap",
				},

				// Favicon and icons
				{ rel: "icon", href: "/favicon.ico", sizes: "48x48" },
				{
					rel: "icon",
					href: "/icon-96x96.png",
					type: "image/png",
					sizes: "96x96",
				},
				{
					rel: "apple-touch-icon",
					href: "/apple-touch-icon.png",
					sizes: "180x180",
				},
				{
					rel: "icon",
					href: "/favicon-16x16.png",
					type: "image/png",
					sizes: "16x16",
				},
				{
					rel: "icon",
					href: "/favicon-32x32.png",
					type: "image/png",
					sizes: "32x32",
				},

				// Manifest for PWA
				{ rel: "manifest", href: "/manifest.json" },

				// DNS prefetch for external services
				{ rel: "dns-prefetch", href: "https://fonts.googleapis.com" },
				{ rel: "dns-prefetch", href: "https://fonts.gstatic.com" },
			],
		}
	},

	shellComponent: RootDocument,
})

function RootDocument() {
	return (
		<html lang="en">
			<head>
				<HeadContent />
			</head>
			<body>
				<ThemeProvider>
					<RootContent />
				</ThemeProvider>
				<Scripts />
			</body>
		</html>
	)
}

function RootContent() {
	const { theme } = useTheme()
	const [mounted, setMounted] = useState(false)

	// Only render after mount to avoid hydration mismatch
	useEffect(() => {
		setMounted(true)
	}, [])

	if (!mounted) {
		return (
			<>
				<AnimatedBackground variant="dark" />
				<Outlet />
			</>
		)
	}

	return (
		<>
			<AnimatedBackground variant={(theme as "light" | "dark") || "dark"} />
			<Outlet />
		</>
	)
}
