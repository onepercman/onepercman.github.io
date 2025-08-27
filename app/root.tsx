import { QueryClientProvider } from "@tanstack/react-query"
import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router"
import { queryClient } from "~/shared/config/react-query-config"
import "~/shared/styles/app.css"
import type { Route } from "./+types/root"
import { Loader } from "./shared/components/loader"
import { ThemeProvider } from "./shared/components/theme-provider"

export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap",
  },

  // Favicon and icons
  { rel: "icon", href: "/favicon.ico", sizes: "32x32" },
  {
    rel: "icon",
    href: "/images/icon-192x192.png",
    type: "image/png",
    sizes: "192x192",
  },
  { rel: "apple-touch-icon", href: "/images/icon-192x192.png" },

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

export function HydrateFallback() {
  return <Loader />
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
