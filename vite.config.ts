import tailwindcss from "@tailwindcss/vite"
import { devtools } from "@tanstack/devtools-vite"
import { tanstackStart } from "@tanstack/react-start/plugin/vite"
import viteReact from "@vitejs/plugin-react-swc"
import { defineConfig } from "vite"
import viteTsConfigPaths from "vite-tsconfig-paths"

const config = defineConfig({
	plugins: [
		tanstackStart({ spa: { enabled: true, prerender: { enabled: true } } }),
		// nitro(),
		viteReact(),
		viteTsConfigPaths(),
		devtools(),
		tailwindcss(),
	],
})

export default config
