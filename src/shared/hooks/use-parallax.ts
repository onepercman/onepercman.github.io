import { useEffect, useState } from "react"

interface ParallaxOptions {
	speed?: number
	reverse?: boolean
}

export function useParallax(options: ParallaxOptions = {}) {
	const { speed = 0.5, reverse = false } = options
	const [offset, setOffset] = useState(0)

	useEffect(() => {
		if (typeof window === "undefined") return

		const handleScroll = () => {
			const scrollY = window.scrollY
			const parallaxOffset = scrollY * speed * (reverse ? -1 : 1)
			setOffset(parallaxOffset)
		}

		handleScroll()
		window.addEventListener("scroll", handleScroll, { passive: true })

		return () => window.removeEventListener("scroll", handleScroll)
	}, [speed, reverse])

	return offset
}
