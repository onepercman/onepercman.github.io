import { TanStackDevtools } from "@tanstack/react-devtools"
import { createRootRoute, HeadContent, Scripts } from "@tanstack/react-router"
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools"
import MainLayout from "~/shared/layouts/main-layout"
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
				{ title: "onepercman - Frontend Engineer & Web3 Enthusiast" },
				{
					name: "description",
					content:
						"Frontend Engineer with a zen approach to crafting efficient web and Web3 applications. Passionate about clean code, optimal performance, and seamless user experiences.",
				},
				{
					name: "keywords",
					content:
						"Frontend Engineer, Web3 Developer, React, TypeScript, TailwindCSS, Blockchain, DeFi, onepercman, onepercman",
				},
				{ name: "author", content: "Trung Tran Duy (onepercman)" },
				{ name: "robots", content: "index, follow" },
				{ name: "language", content: "en" },
				{ name: "revisit-after", content: "7 days" },

				// Open Graph / Facebook
				{ property: "og:type", content: "website" },
				{ property: "og:url", content: "https://onepercman.com" },
				{
					property: "og:title",
					content: "onepercman - Frontend Engineer & Web3 Enthusiast",
				},
				{
					property: "og:description",
					content:
						"Frontend Engineer with a zen approach to crafting efficient web and Web3 applications. Passionate about clean code, optimal performance, and seamless user experiences.",
				},
				{
					property: "og:image",
					content: "https://onepercman.com/images/og-image.png",
				},
				{ property: "og:image:width", content: "1200" },
				{ property: "og:image:height", content: "630" },
				{ property: "og:site_name", content: "onepercman.com" },
				{ property: "og:locale", content: "en_US" },

				// Twitter
				{ name: "twitter:card", content: "summary_large_image" },
				{ name: "twitter:url", content: "https://onepercman.com" },
				{
					name: "twitter:title",
					content: "onepercman - Frontend Engineer & Web3 Enthusiast",
				},
				{
					name: "twitter:description",
					content:
						"Frontend Engineer with a zen approach to crafting efficient web and Web3 applications. Passionate about clean code, optimal performance, and seamless user experiences.",
				},
				{
					name: "twitter:image",
					content: "https://onepercman.com/images/og-image.png",
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

				// Verification
				{
					name: "google-site-verification",
					content: "your-google-verification-code",
				},

				// Schema.org structured data
				{
					"script:ld+json": {
						"@context": "https://schema.org",
						"@type": "Person",
						name: "Trung Tran Duy",
						alternateName: "onepercman",
						description:
							"Frontend Engineer with a zen approach to crafting efficient web and Web3 applications. Passionate about clean code, optimal performance, and seamless user experiences.",
						url: "https://onepercman.com",
						image: "https://onepercman.com/images/og-image.png",
						email: "onepercman@gmail.com",
						sameAs: [
							"https://github.com/onepercman",
							"https://linkedin.com/in/onepercman",
							"https://twitter.com/onepercman",
						],
						jobTitle: "Frontend Engineer",
						worksFor: {
							"@type": "Organization",
							name: "Freelancer",
						},
						knowsAbout: [
							"Frontend Development",
							"Web3 Development",
							"React",
							"TypeScript",
							"TailwindCSS",
							"Blockchain",
							"DeFi",
						],
						address: {
							"@type": "PostalAddress",
							addressLocality: "Hanoi",
							addressCountry: "Vietnam",
						},
					},
				},
			],
			links: [
				{
					rel: "stylesheet",
					href: appCss,
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
				{ rel: "icon", href: "/images/favicon.ico", sizes: "48x48" },
				{ rel: "icon", href: "/images/favicon.svg", type: "image/svg+xml" },
				{
					rel: "icon",
					href: "/images/icon-96x96.png",
					type: "image/png",
					sizes: "96x96",
				},
				{
					rel: "apple-touch-icon",
					href: "/images/apple-touch-icon.png",
					sizes: "180x180",
				},
				{
					rel: "icon",
					href: "/images/icon-192x192.png",
					type: "image/png",
					sizes: "192x192",
				},
				{
					rel: "icon",
					href: "/images/icon-512x512.png",
					type: "image/png",
					sizes: "512x512",
				},

				// Manifest for PWA
				{ rel: "manifest", href: "/manifest.json" },

				// DNS prefetch for external services
				{ rel: "dns-prefetch", href: "https://formspree.io" },
				{ rel: "dns-prefetch", href: "https://fonts.googleapis.com" },
				{ rel: "dns-prefetch", href: "https://fonts.gstatic.com" },
			],
		}
	},

	shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<head>
				<HeadContent />
			</head>
			<body>
				<ThemeProvider>
					<MainLayout>{children}</MainLayout>
				</ThemeProvider>

				<TanStackDevtools
					config={{
						position: "bottom-right",
					}}
					plugins={[
						{
							name: "Tanstack Router",
							render: <TanStackRouterDevtoolsPanel />,
						},
					]}
				/>
				<Scripts />
			</body>
		</html>
	)
}
