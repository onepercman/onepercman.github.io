import { animate, stagger } from "motion"
import { useEffect, useRef, useState } from "react"
import { cn } from "../utils"

interface AnimatedTitleProps {
	titles: string[]
	className?: string
	interval?: number
}

export function AnimatedTitle({
	titles,
	className,
	interval = 3000,
}: AnimatedTitleProps) {
	const [currentIndex, setCurrentIndex] = useState(0)
	const containerRef = useRef<HTMLDivElement>(null)
	const textRef = useRef<HTMLDivElement>(null)
	const glowRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		if (titles.length <= 1) return

		const timer = setInterval(() => {
			setCurrentIndex((prev) => (prev + 1) % titles.length)
		}, interval)

		return () => clearInterval(timer)
	}, [titles.length, interval])

	useEffect(() => {
		if (!textRef.current || !glowRef.current) return

		const chars = textRef.current.querySelectorAll("[data-char]")

		animate(
			glowRef.current,
			{ opacity: [0, 1], scale: [0.8, 1] },
			{ duration: 0.8, ease: "easeOut" },
		)

		setTimeout(() => {
			animate(
				chars,
				{ opacity: [0, 1], y: [50, 0], rotateY: [-90, 0] },
				{ duration: 0.6, delay: stagger(0.03), ease: [0.16, 1, 0.3, 1] },
			)
		}, 200)
	}, [currentIndex])

	const currentTitle = titles[currentIndex] || titles[0]

	const handleDotClick = (index: number) => {
		setCurrentIndex(index)
	}

	const handleDotHover = (e: React.MouseEvent<HTMLButtonElement>) => {
		animate(e.currentTarget, { scale: 1.2 }, { duration: 0.2 })
	}

	const handleDotLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
		const button = e.currentTarget
		const isActive = button.getAttribute("data-active") === "true"
		animate(button, { scale: isActive ? 1.25 : 1 }, { duration: 0.2 })
	}

	return (
		<div ref={containerRef} className={cn("relative inline-block", className)}>
			<div className="relative" style={{ perspective: "1000px" }}>
				{/* Background glow effect */}
				<div
					ref={glowRef}
					className="absolute inset-0 rounded-lg bg-primary/20 opacity-0 blur-xl"
				/>

				{/* Text with character animation */}
				<div ref={textRef} className="relative flex flex-wrap justify-center">
					{currentTitle.split("").map((char, index) => (
						<span
							key={`${currentIndex}-${index}`}
							data-char
							className={cn(
								"inline-block opacity-0",
								char === " " && "w-2",
								"transition-colors duration-300 hover:text-primary",
							)}
							style={{
								transformStyle: "preserve-3d",
								display: "inline-block",
							}}
						>
							{char === " " ? "\u00A0" : char}
						</span>
					))}
				</div>
			</div>

			{/* Progress indicator dots */}
			{titles.length > 1 && (
				<div className="mt-4 flex justify-center space-x-2">
					{titles.map((_, index) => (
						<button
							key={index}
							onClick={() => handleDotClick(index)}
							onMouseEnter={handleDotHover}
							onMouseLeave={handleDotLeave}
							data-active={index === currentIndex}
							className={cn(
								"h-2 w-2 rounded-full transition-all duration-300",
								index === currentIndex
									? "scale-125 bg-primary"
									: "bg-muted-fg/30 hover:bg-muted-fg/60",
							)}
							type="button"
							aria-label={`Switch to ${titles[index]}`}
						/>
					))}
				</div>
			)}
		</div>
	)
}
