import { TanStackDevtools } from "@tanstack/react-devtools"
import { createRootRoute, HeadContent, Scripts } from "@tanstack/react-router"
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools"
import { META_DATA, SOCIAL_URLS } from "~/modules/portfolio"
import MainLayout from "~/shared/layouts/main-layout"
import { ThemeProvider } from "~/shared/providers/theme-provider"
import appCss from "../styles.css?url"

export const Route = createRootRoute({
	head: () => {
		const location = META_DATA.location.split(", ")

		return {
			meta: [
				{
					charSet: "utf-8",
				},
				{
					name: "viewport",
					content: "width=device-width, initial-scale=1",
				},
				{ title: META_DATA.siteName },
				{ name: "description", content: META_DATA.description },
				{ name: "keywords", content: META_DATA.keywords },
				{ name: "author", content: META_DATA.author },
				{ name: "robots", content: "index, follow" },
				{ name: "language", content: "en" },
				{ name: "revisit-after", content: "7 days" },

				// Open Graph / Facebook
				{ property: "og:type", content: "website" },
				{ property: "og:url", content: META_DATA.siteUrl },
				{ property: "og:title", content: META_DATA.siteName },
				{ property: "og:description", content: META_DATA.description },
				{ property: "og:image", content: META_DATA.ogImage },
				{ property: "og:image:width", content: "1200" },
				{ property: "og:image:height", content: "630" },
				{ property: "og:site_name", content: "onepercman.com" },
				{ property: "og:locale", content: "en_US" },

				// Twitter
				{ name: "twitter:card", content: "summary_large_image" },
				{ name: "twitter:url", content: META_DATA.siteUrl },
				{ name: "twitter:title", content: META_DATA.siteName },
				{ name: "twitter:description", content: META_DATA.description },
				{ name: "twitter:image", content: META_DATA.ogImage },
				{ name: "twitter:site", content: SOCIAL_URLS.twitterHandle },
				{ name: "twitter:creator", content: SOCIAL_URLS.twitterHandle },

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
						name: META_DATA.author.split(" (")[0], // Extract real name
						alternateName: "onepercman",
						description: META_DATA.description,
						url: META_DATA.siteUrl,
						image: META_DATA.ogImage,
						email: META_DATA.email,
						sameAs: [
							SOCIAL_URLS.github,
							SOCIAL_URLS.linkedin,
							SOCIAL_URLS.twitter,
						],
						jobTitle: META_DATA.title,
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
							addressLocality: location[0] || "Hanoi",
							addressCountry: location[1] || "Vietnam",
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
