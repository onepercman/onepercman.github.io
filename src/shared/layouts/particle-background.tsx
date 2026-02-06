import { useEffect, useRef } from "react"
import * as THREE from "three"

const ParticleBackground = () => {
	const canvasRef = useRef<HTMLCanvasElement>(null)
	const mouseRef = useRef({ x: 0, y: 0 })

	useEffect(() => {
		if (typeof window === "undefined" || !canvasRef.current) return

		const canvas = canvasRef.current

		// Renderer
		const renderer = new THREE.WebGLRenderer({
			canvas,
			alpha: true,
		})
		renderer.setSize(window.innerWidth, window.innerHeight)
		renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

		// Scene + Camera
		const scene = new THREE.Scene()
		const camera = new THREE.PerspectiveCamera(
			75,
			window.innerWidth / window.innerHeight,
			0.1,
			100,
		)
		camera.position.set(0, 0, 2)

		// Texture Loader
		const loader = new THREE.TextureLoader()

		// Particles
		const particlesGeo = new THREE.BufferGeometry()
		const particlesMat = new THREE.PointsMaterial({
			size: 0.01,
			map: loader.load("/assets/sparkler.png"),
			transparent: true,
			color: 0xffffff,
		})

		const particlesCount = 2500
		const posArray = new Float32Array(particlesCount * 3)
		for (let i = 0; i < particlesCount * 3; i++) {
			posArray[i] = (Math.random() - 0.5) * 5 * Math.random()
		}
		particlesGeo.setAttribute(
			"position",
			new THREE.BufferAttribute(posArray, 3),
		)

		const particlesMesh = new THREE.Points(particlesGeo, particlesMat)
		scene.add(particlesMesh)

		// Mouse tracking
		const handleMouseMove = (event: MouseEvent) => {
			mouseRef.current.x = event.clientX
			mouseRef.current.y = event.clientY
		}
		document.addEventListener("mousemove", handleMouseMove)

		// Animation
		const clock = new THREE.Clock()
		let animationId: number

		const tick = () => {
			const elapsedTime = clock.getElapsedTime()

			// Update objects
			particlesMesh.rotation.y = -0.1 * elapsedTime

			if (mouseRef.current.x > 0) {
				particlesMesh.rotation.x = -mouseRef.current.y * elapsedTime * 0.00008
				particlesMesh.rotation.y = mouseRef.current.x * elapsedTime * 0.00008
			}

			// Render
			renderer.render(scene, camera)

			// Call tick again on the next frame
			animationId = window.requestAnimationFrame(tick)
		}

		tick()

		// Handle resize
		const handleResize = () => {
			camera.aspect = window.innerWidth / window.innerHeight
			camera.updateProjectionMatrix()
			renderer.setSize(window.innerWidth, window.innerHeight)
			renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
		}
		window.addEventListener("resize", handleResize)

		// Cleanup
		return () => {
			window.cancelAnimationFrame(animationId)
			window.removeEventListener("resize", handleResize)
			document.removeEventListener("mousemove", handleMouseMove)
			renderer.dispose()
			particlesGeo.dispose()
			particlesMat.dispose()
		}
	}, [])

	return (
		<canvas ref={canvasRef} className="pointer-events-none fixed inset-0 z-0" />
	)
}

export default ParticleBackground
