import { useEffect, useState } from "react"

export function useScrollProgress() {
	const [scrollProgress, setScrollProgress] = useState(0)

	useEffect(() => {
		if (typeof window === "undefined") return

		const handleScroll = () => {
			const windowHeight = window.innerHeight
			const documentHeight = document.documentElement.scrollHeight
			const scrollTop = window.scrollY

			const totalScroll = documentHeight - windowHeight
			const progress = scrollTop / totalScroll

			setScrollProgress(Math.min(Math.max(progress, 0), 1))
		}

		handleScroll()
		window.addEventListener("scroll", handleScroll, { passive: true })

		return () => window.removeEventListener("scroll", handleScroll)
	}, [])

	return scrollProgress
}
