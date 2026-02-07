"use client"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"
import React from "react"

gsap.registerPlugin(ScrollTrigger, useGSAP)

const AboutMe = () => {
	const container = React.useRef<HTMLDivElement>(null)

	useGSAP(
		() => {
			const tl = gsap.timeline({
				scrollTrigger: {
					id: "about-me-in",
					trigger: container.current,
					start: "top 70%",
					end: "bottom bottom",
					scrub: 0.5,
				},
			})

			tl.from(".slide-up-and-fade", {
				y: 150,
				opacity: 0,
				stagger: 0.05,
			})
		},
		{ scope: container },
	)

	useGSAP(
		() => {
			const tl = gsap.timeline({
				scrollTrigger: {
					id: "about-me-out",
					trigger: container.current,
					start: "bottom 50%",
					end: "bottom 10%",
					scrub: 0.5,
				},
			})

			tl.to(".slide-up-and-fade", {
				y: -150,
				opacity: 0,
				stagger: 0.02,
			})
		},
		{ scope: container },
	)

	return (
		<section className="pb-section" id="about-me">
			<div className="container" ref={container}>
				<h2 className="slide-up-and-fade mb-20 font-thin text-4xl md:text-6xl">
					I focus on building scalable frontend architectures and delivering
					production systems that handle real-world complexity at scale.
				</h2>

				<p className="slide-up-and-fade border-b pb-3 text-muted-fg">
					This is me.
				</p>

				<div className="mt-9 grid gap-8 md:grid-cols-12">
					<div className="md:col-span-5">
						<p className="slide-up-and-fade text-5xl">Hi, I&apos;m Trung.</p>
					</div>
					<div className="md:col-span-7">
						<div className="max-w-[450px] text-lg text-muted-fg">
							<p className="slide-up-and-fade">
								I&apos;m a Senior Frontend Engineer with extensive experience in
								building complex systems across enterprise, consumer, and Web3
								products. I specialize in frontend architecture, data-intensive
								interfaces, and real-time systems.
							</p>
							<p className="slide-up-and-fade mt-3">
								My expertise spans from zero-to-one product development to
								scaling production systems under performance constraints. I have
								led frontend teams, mentored engineers, and delivered
								high-impact projects in fintech, DeFi, AI platforms, and
								metaverse applications.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default AboutMe
