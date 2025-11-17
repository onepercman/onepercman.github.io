import { animate } from "motion"
import type { ReactNode } from "react"
import { useEffect, useRef } from "react"
import { useScrollSection } from "../hooks/use-scroll-section"
import { cn } from "../utils"

interface RevealSectionProps {
	children: ReactNode
	className?: string
	delay?: number
	duration?: number
}

export function RevealSection({
	children,
	className,
	delay = 0,
	duration = 0.8,
}: RevealSectionProps) {
	const ref = useRef<HTMLDivElement | null>(null)
	const { isInView } = useScrollSection(ref, { threshold: 0.2 })
	const hasAnimated = useRef(false)

	useEffect(() => {
		if (!ref.current || !isInView || hasAnimated.current) return

		hasAnimated.current = true

		setTimeout(() => {
			if (!ref.current) return
			animate(
				ref.current,
				{ opacity: [0, 1], y: [60, 0] },
				{ duration, ease: [0.22, 1, 0.36, 1] },
			)
		}, delay * 1000)
	}, [isInView, delay, duration])

	return (
		<div ref={ref} className={cn("opacity-0", className)}>
			{children}
		</div>
	)
}
