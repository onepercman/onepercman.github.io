import { AnimatePresence, motion } from "framer-motion"
import { useEffect, useState } from "react"
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

	useEffect(() => {
		if (titles.length <= 1) return

		const timer = setInterval(() => {
			setCurrentIndex((prev) => (prev + 1) % titles.length)
		}, interval)

		return () => clearInterval(timer)
	}, [titles.length, interval])

	const currentTitle = titles[currentIndex] || titles[0]

	return (
		<div className={cn("relative inline-block", className)}>
			<AnimatePresence mode="wait">
				<motion.div
					key={currentIndex}
					initial={{ opacity: 0, y: 20, rotateX: -90 }}
					animate={{
						opacity: 1,
						y: 0,
						rotateX: 0,
						transition: {
							duration: 0.8,
							ease: [0.16, 1, 0.3, 1],
							staggerChildren: 0.05,
						},
					}}
					exit={{
						opacity: 0,
						y: -20,
						rotateX: 90,
						transition: {
							duration: 0.6,
							ease: [0.7, 0, 0.84, 0],
						},
					}}
					className="relative"
					style={{ perspective: "1000px" }}
				>
					{/* Background glow effect */}
					<motion.div
						className="absolute inset-0 rounded-lg bg-primary/20 blur-xl"
						initial={{ scale: 0.8, opacity: 0 }}
						animate={{ scale: 1, opacity: 1 }}
						exit={{ scale: 0.8, opacity: 0 }}
						transition={{ duration: 0.8, ease: "easeOut" }}
					/>

					{/* Text with character animation */}
					<div className="relative flex flex-wrap">
						{currentTitle.split("").map((char, index) => (
							<motion.span
								key={`${currentIndex}-${index}`}
								initial={{ opacity: 0, y: 50, rotateY: -90 }}
								animate={{
									opacity: 1,
									y: 0,
									rotateY: 0,
									color: char === " " ? "transparent" : undefined,
								}}
								exit={{ opacity: 0, y: -50, rotateY: 90 }}
								transition={{
									duration: 0.6,
									delay: index * 0.03,
									ease: [0.16, 1, 0.3, 1],
								}}
								className={cn(
									"inline-block",
									char === " " && "w-2",
									"transition-colors duration-300 hover:text-primary",
								)}
								style={{
									transformStyle: "preserve-3d",
									display: char === " " ? "inline-block" : "inline-block",
								}}
							>
								{char === " " ? "\u00A0" : char}
							</motion.span>
						))}
					</div>

					{/* Gradient text effect */}
					<motion.div
						className="absolute inset-0 bg-linear-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent opacity-0"
						animate={{
							opacity: [0, 0.3, 0],
							backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
						}}
						transition={{
							duration: 2,
							repeat: Infinity,
							ease: "linear",
						}}
					>
						{currentTitle}
					</motion.div>
				</motion.div>
			</AnimatePresence>

			{/* Progress indicator dots */}
			{titles.length > 1 && (
				<div className="mt-4 flex justify-center space-x-2">
					{titles.map((_, index) => (
						<motion.button
							key={index}
							onClick={() => setCurrentIndex(index)}
							className={cn(
								"h-2 w-2 rounded-full transition-all duration-300",
								index === currentIndex
									? "scale-125 bg-primary"
									: "bg-muted-fg/30 hover:bg-muted-fg/60",
							)}
							whileHover={{ scale: 1.2 }}
							whileTap={{ scale: 0.9 }}
						>
							{/* Progress bar for current slide */}
							{index === currentIndex && (
								<motion.div
									className="h-full w-full rounded-full bg-primary/50"
									initial={{ scaleX: 0 }}
									animate={{ scaleX: 1 }}
									transition={{ duration: interval / 1000, ease: "linear" }}
								/>
							)}
						</motion.button>
					))}
				</div>
			)}
		</div>
	)
}
