import { QueryClientProvider } from "@tanstack/react-query"
import type { MetaFunction } from "react-router"
import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router"
import { queryClient } from "~/shared/config/react-query-config"
import { META_DATA, SOCIAL_URLS } from "~/shared/constants/portfolio-constants"
import "~/shared/styles/app.css"
import type { Route } from "./+types/root"
import { ThemeProvider } from "./shared/components/theme-provider"

export const meta: MetaFunction = () => {
  const location = META_DATA.location.split(", ")

  return [
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
        sameAs: [SOCIAL_URLS.github, SOCIAL_URLS.linkedin, SOCIAL_URLS.twitter],
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
  ]
}

export const links: Route.LinksFunction = () => [
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
]

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                function getThemePreference() {
                  if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
                    return localStorage.getItem('theme')
                  }
                  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
                }
                const theme = getThemePreference()
                document.documentElement.classList.toggle('dark', theme === 'dark')
              })()
            `,
          }}
        />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}

export default function App() {
  return (
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <Outlet />
      </QueryClientProvider>
    </ThemeProvider>
  )
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!"
  let details = "An unexpected error occurred."
  let stack: string | undefined

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error"
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    const { message: errorMessage, stack: errorStack } = error
    details = errorMessage
    stack = errorStack
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  )
}
