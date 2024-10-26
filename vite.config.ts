import react from "@vitejs/plugin-react-swc"
import { defineConfig } from "vite"
import sitemap from "vite-plugin-sitemap"
import { default as viteTsConfigPaths } from "vite-tsconfig-paths"

export default defineConfig(({ mode }) => ({
  plugins: [
    react({ tsDecorators: true }),
    sitemap({ hostname: "https://onepercman.com" }),
    viteTsConfigPaths(),
  ],
  server: { host: true, port: 3000 },
}))
