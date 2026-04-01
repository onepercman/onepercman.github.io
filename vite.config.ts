import tailwindcss from "@tailwindcss/vite"
import { tanstackStart } from "@tanstack/react-start/plugin/vite"
import viteReact from "@vitejs/plugin-react-swc"
import { defineConfig } from "vite"
import viteTsConfigPaths from "vite-tsconfig-paths"

import { cloudflare } from "@cloudflare/vite-plugin";

const config = defineConfig({
	plugins: [tanstackStart({
        prerender: {
            enabled: true,
            crawlLinks: true,
            autoSubfolderIndex: true,
            concurrency: 10,
            filter: (args) => {
                // Exclude PDF files from prerendering
                return !args.path.endsWith('.pdf')
            },
        },
    }), viteReact(), viteTsConfigPaths(), tailwindcss(), cloudflare({
        viteEnvironment: {
            name: "ssr"
        }
    })],
})

export default config