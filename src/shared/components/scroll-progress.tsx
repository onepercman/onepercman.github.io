import { animate } from "motion"
import { useEffect, useRef } from "react"
import { useScrollProgress } from "../hooks/use-scroll-progress"

export function ScrollProgress() {
	const progress = useScrollProgress()
	const ref = useRef<HTMLDivElement>(null)

	useEffect(() => {
		if (!ref.current) return

		animate(
			ref.current,
			{ scaleX: progress },
			{ duration: 0.1, ease: [0.22, 1, 0.36, 1] },
		)
	}, [progress])

	return (
		<div className="fixed top-0 left-0 z-50 h-1 w-full bg-muted/20">
			<div
				ref={ref}
				className="h-full origin-left bg-linear-to-r from-primary via-chart-1 to-primary"
				style={{ transformOrigin: "0% 50%" }}
			/>
		</div>
	)
}
