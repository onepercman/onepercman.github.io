import type { Config } from "@react-router/dev/config"

export default {
  // Disable SSR and enable prerendering for static generation
  ssr: false,
  prerender: true,
} satisfies Config
