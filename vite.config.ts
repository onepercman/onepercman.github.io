import tailwindcss from "@tailwindcss/vite"
import { devtools } from "@tanstack/devtools-vite"
import { tanstackStart } from "@tanstack/react-start/plugin/vite"
import viteReact from "@vitejs/plugin-react-swc"
import { defineConfig } from "vite"
import viteTsConfigPaths from "vite-tsconfig-paths"

const config = defineConfig({
	plugins: [
		tanstackStart({
			prerender: {
				enabled: true,
				crawlLinks: true,
				autoSubfolderIndex: true,
				concurrency: 10,
				// Filter out static assets to prevent corruption
				filter: ({ path }) => {
					const staticAssetPatterns = [
						"/projects/images/",
						"/projects/thumbnail/",
						"/images/",
						"/logo/",
						"/files/",
					]
					const imageExtensions = [
						".png",
						".jpg",
						".jpeg",
						".gif",
						".svg",
						".webp",
						".ico",
						".pdf",
					]

					// Exclude paths that start with static asset patterns
					if (staticAssetPatterns.some((pattern) => path.startsWith(pattern))) {
						return false
					}

					// Exclude paths with image/file extensions
					if (imageExtensions.some((ext) => path.endsWith(ext))) {
						return false
					}

					return true
				},
			},
		}),
		// nitro(),
		viteReact(),
		viteTsConfigPaths(),
		devtools(),
		tailwindcss(),
	],
})

export default config
