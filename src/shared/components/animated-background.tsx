"use client"

import { useEffect, useState } from "react"
import { cn } from "~/shared/utils"

interface AnimatedBackgroundProps {
	variant?: "dark" | "light"
}

export function AnimatedBackground({
	variant = "dark",
}: AnimatedBackgroundProps) {
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

	useEffect(() => {
		const handleMouseMove = (e: MouseEvent) => {
			setMousePosition({ x: e.clientX, y: e.clientY })
		}

		window.addEventListener("mousemove", handleMouseMove)
		return () => window.removeEventListener("mousemove", handleMouseMove)
	}, [])

	return (
		<div
			className={cn(
				"pointer-events-none fixed inset-0 -z-50 h-full w-full",
				"transition-colors duration-500 ease-in-out",
			)}
			style={
				{
					backgroundColor:
						variant === "dark" ? "rgb(5, 5, 8)" : "rgb(255, 255, 255)",
					"--mouse-x": `${mousePosition.x}px`,
					"--mouse-y": `${mousePosition.y}px`,
				} as React.CSSProperties
			}
		>
			{/* Light mode gradient */}
			<div
				className={cn(
					"absolute inset-0 transition-opacity duration-700 ease-in-out",
					variant === "light" ? "opacity-100" : "opacity-0",
				)}
				style={{
					background:
						"radial-gradient(circle at 0% 0%, rgba(239, 68, 68, 0.15), transparent 50%), radial-gradient(circle at 100% 0%, rgba(156, 163, 175, 0.15), transparent 50%), radial-gradient(circle at 20% 80%, rgba(220, 38, 38, 0.15), transparent 50%)",
				}}
			/>

			{/* Dark mode gradient */}
			<div
				className={cn(
					"absolute inset-0 transition-opacity duration-700 ease-in-out",
					variant === "dark" ? "opacity-100" : "opacity-0",
				)}
				style={{
					background:
						"radial-gradient(circle at 0% 0%, oklch(0.55 0.22 25 / 0.3), oklch(0.15 0.02 0 / 0.2) 40%, transparent 60%), radial-gradient(circle at 100% 0%, oklch(0.2 0.05 0 / 0.2), transparent 50%), radial-gradient(circle at 50% 100%, oklch(0.55 0.22 25 / 0.25), oklch(0.15 0.02 0 / 0.15) 40%, transparent 60%)",
				}}
			/>

			{/* Grid pattern */}
			<div
				className="absolute inset-0"
				style={{
					backgroundImage:
						"radial-gradient(rgb(255, 255, 255) 1px, transparent 1px)",
					backgroundSize: "32px 32px",
					opacity: 0.05,
				}}
			/>

			{/* Mouse glow effect */}
			<div
				className="absolute inset-0 transition-opacity duration-500"
				style={{
					background:
						"radial-gradient(circle, oklch(0.55 0.22 25 / 0.2), transparent 50%)",
					maskImage: `radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 0%), black, transparent)`,
					WebkitMaskImage: `radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 0%), black, transparent)`,
				}}
			/>

			{/* Enhanced grid on mouse position */}
			<div
				className="absolute inset-0 transition-opacity duration-500"
				style={{
					backgroundImage:
						"radial-gradient(rgb(255, 255, 255) 1px, transparent 1px)",
					backgroundSize: "32px 32px",
					opacity: 0.4,
					maskImage: `radial-gradient(400px circle at var(--mouse-x, 50%) var(--mouse-y, 0%), black, transparent)`,
					WebkitMaskImage: `radial-gradient(400px circle at var(--mouse-x, 50%) var(--mouse-y, 0%), black, transparent)`,
				}}
			/>

			{/* Vignette effect */}
			<div
				className="pointer-events-none absolute inset-0"
				style={{
					background: `radial-gradient(circle, transparent 40%, ${variant === "dark" ? "rgb(10, 10, 15)" : "rgb(255, 255, 255)"} 100%)`,
					opacity: 0.6,
				}}
			/>
		</div>
	)
}
