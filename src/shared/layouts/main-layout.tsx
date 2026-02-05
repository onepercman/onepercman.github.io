import { ReactLenis } from "lenis/react"
import type { PropsWithChildren } from "react"
import CustomCursor from "./custom-cursor"
import Navbar from "./navbar"
import ParticleBackground from "./particle-background"
import Preloader from "./preloader"
import ScrollProgressIndicator from "./scroll-progress-indicator"
import StickyEmail from "./sticky-email"

export default function MainLayout({ children }: PropsWithChildren) {
	return (
		<ReactLenis
			root
			options={{
				lerp: 0.1,
				duration: 1.4,
			}}
		>
			<Navbar />
			<main>{children}</main>

			<CustomCursor />
			<Preloader />
			<ScrollProgressIndicator />
			<ParticleBackground />
			<StickyEmail />
		</ReactLenis>
	)
}
