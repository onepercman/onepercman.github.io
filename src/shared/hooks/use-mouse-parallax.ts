import { useEffect, useState } from "react"

interface MouseParallaxOptions {
	strength?: number
	invert?: boolean
}

export function useMouseParallax(options: MouseParallaxOptions = {}) {
	const { strength = 20, invert = false } = options
	const [position, setPosition] = useState({ x: 0, y: 0 })

	useEffect(() => {
		if (typeof window === "undefined") return

		const handleMouseMove = (e: MouseEvent) => {
			const x = (e.clientX / window.innerWidth - 0.5) * strength
			const y = (e.clientY / window.innerHeight - 0.5) * strength

			setPosition({
				x: invert ? -x : x,
				y: invert ? -y : y,
			})
		}

		window.addEventListener("mousemove", handleMouseMove, { passive: true })

		return () => window.removeEventListener("mousemove", handleMouseMove)
	}, [strength, invert])

	return position
}
