import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useRef } from "react"

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
	gsap.registerPlugin(ScrollTrigger)
}

interface ScrollAnimationOptions {
	delay?: number
	stagger?: number
	duration?: number
	ease?: string
	start?: string
	end?: string
	scrub?: boolean
}

/**
 * Hook for fade-in + slide-up animation on scroll
 */
export function useScrollFadeIn(options: ScrollAnimationOptions = {}) {
	const ref = useRef<HTMLElement>(null)

	useGSAP(
		() => {
			if (!ref.current) return

			// Check for reduced motion preference
			const prefersReducedMotion = window.matchMedia(
				"(prefers-reduced-motion: reduce)",
			).matches

			if (prefersReducedMotion) {
				// Skip animations if user prefers reduced motion
				gsap.set(ref.current, { opacity: 1, y: 0 })
				return
			}

			const {
				delay = 0,
				duration = 0.8,
				ease = "power3.out",
				start = "top 85%",
			} = options

			// Set initial state
			gsap.set(ref.current, {
				opacity: 0,
				y: 40,
			})

			// Animate on scroll
			gsap.to(ref.current, {
				opacity: 1,
				y: 0,
				duration,
				delay,
				ease,
				scrollTrigger: {
					trigger: ref.current,
					start,
					once: true,
				},
			})
		},
		{ scope: ref, dependencies: [options] },
	)

	return ref
}

/**
 * Hook for staggered animations on children elements
 */
export function useScrollStagger(options: ScrollAnimationOptions = {}) {
	const ref = useRef<HTMLElement>(null)

	useGSAP(
		() => {
			if (!ref.current) return

			const prefersReducedMotion = window.matchMedia(
				"(prefers-reduced-motion: reduce)",
			).matches

			if (prefersReducedMotion) {
				const children = ref.current.children
				gsap.set(children, { opacity: 1, y: 0 })
				return
			}

			const {
				stagger = 0.1,
				duration = 0.6,
				ease = "power2.out",
				start = "top 85%",
			} = options

			const children = ref.current.children

			// Set initial state
			gsap.set(children, {
				opacity: 0,
				y: 30,
			})

			// Animate on scroll with stagger
			gsap.to(children, {
				opacity: 1,
				y: 0,
				duration,
				stagger,
				ease,
				scrollTrigger: {
					trigger: ref.current,
					start,
					once: true,
				},
			})
		},
		{ scope: ref, dependencies: [options] },
	)

	return ref
}

/**
 * Hook for parallax effect on scroll
 */
export function useScrollParallax(speed = 0.5) {
	const ref = useRef<HTMLElement>(null)

	useGSAP(
		() => {
			if (!ref.current) return

			const prefersReducedMotion = window.matchMedia(
				"(prefers-reduced-motion: reduce)",
			).matches

			if (prefersReducedMotion) return

			gsap.to(ref.current, {
				y: () => -ScrollTrigger.maxScroll(window) * speed,
				ease: "none",
				scrollTrigger: {
					trigger: document.body,
					start: "top top",
					end: "bottom bottom",
					scrub: true,
				},
			})
		},
		{ scope: ref, dependencies: [speed] },
	)

	return ref
}

/**
 * Hook for reveal animation on scroll - fade in once when entering viewport
 * Perfect for modern scroll-based reveals
 */
export function useScrollReveal(options: ScrollAnimationOptions = {}) {
	const ref = useRef<HTMLElement>(null)

	useGSAP(
		() => {
			if (!ref.current) return

			const prefersReducedMotion = window.matchMedia(
				"(prefers-reduced-motion: reduce)",
			).matches

			if (prefersReducedMotion) {
				gsap.set(ref.current, { opacity: 1, y: 0 })
				return
			}

			const {
				delay = 0,
				duration = 0.5,
				ease = "power2.out",
				start = "top 85%",
			} = options

			// Set initial state
			gsap.set(ref.current, {
				opacity: 0,
				y: 30,
			})

			// Animate on scroll - only once
			gsap.to(ref.current, {
				opacity: 1,
				y: 0,
				duration,
				delay,
				ease,
				scrollTrigger: {
					trigger: ref.current,
					start,
					once: true,
				},
			})
		},
		{ scope: ref, dependencies: [options] },
	)

	return ref
}

/**
 * Hook for creating GSAP timeline animations on scroll
 * Perfect for complex multi-step animations - runs only once
 */
export function useScrollTimeline(
	animationFn: (tl: gsap.core.Timeline, element: HTMLElement) => void,
	options: ScrollAnimationOptions = {},
) {
	const ref = useRef<HTMLElement>(null)

	useGSAP(
		() => {
			if (!ref.current) return

			const prefersReducedMotion = window.matchMedia(
				"(prefers-reduced-motion: reduce)",
			).matches

			if (prefersReducedMotion) return

			const { start = "top 80%", scrub = false } = options

			// Create timeline with once: true
			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: ref.current,
					start,
					scrub,
					once: true,
				},
			})

			// Execute custom animation function
			animationFn(tl, ref.current)
		},
		{ scope: ref, dependencies: [animationFn, options] },
	)

	return ref
}
