import { type RefObject, useEffect, useState } from "react"

interface ScrollSectionOptions {
	threshold?: number
	rootMargin?: string
}

export function useScrollSection(
	ref: RefObject<HTMLElement | null>,
	options: ScrollSectionOptions = {},
) {
	const { threshold = 0, rootMargin = "0px" } = options
	const [isInView, setIsInView] = useState(false)
	const [progress, setProgress] = useState(0)

	useEffect(() => {
		if (typeof window === "undefined" || !ref.current) return

		const element = ref.current

		const observer = new IntersectionObserver(
			([entry]) => {
				setIsInView(entry.isIntersecting)
			},
			{ threshold, rootMargin },
		)

		const handleScroll = () => {
			const rect = element.getBoundingClientRect()
			const windowHeight = window.innerHeight
			const elementHeight = rect.height

			const start = rect.top + elementHeight
			const end = rect.top - windowHeight

			if (start <= windowHeight && end <= 0) {
				const scrolled = windowHeight - rect.top
				const total = windowHeight + elementHeight
				const sectionProgress = Math.min(Math.max(scrolled / total, 0), 1)
				setProgress(sectionProgress)
			}
		}

		observer.observe(element)
		handleScroll()
		window.addEventListener("scroll", handleScroll, { passive: true })

		return () => {
			observer.disconnect()
			window.removeEventListener("scroll", handleScroll)
		}
	}, [ref, threshold, rootMargin])

	return { isInView, progress }
}
