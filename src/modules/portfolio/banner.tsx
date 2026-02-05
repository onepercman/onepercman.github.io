import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"
import React from "react"
import ArrowAnimation from "~/shared/components/arrow-animation"
import { Button } from "~/shared/components/ui"
import { GENERAL_INFO } from "~/shared/constants/data"

gsap.registerPlugin(ScrollTrigger, useGSAP)

const Banner = () => {
	const containerRef = React.useRef<HTMLDivElement>(null)

	// move the content a little up on scroll
	useGSAP(
		() => {
			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: containerRef.current,
					start: "bottom 70%",
					end: "bottom 10%",
					scrub: 1,
				},
			})

			tl.fromTo(
				".slide-up-and-fade",
				{ y: 0 },
				{ y: -150, opacity: 0, stagger: 0.02 },
			)
		},
		{ scope: containerRef },
	)

	return (
		<section className="relative overflow-hidden" id="banner">
			<ArrowAnimation />
			<div
				className="container flex h-[100svh] min-h-[530px] items-center justify-between max-md:flex-col max-md:pb-10"
				ref={containerRef}
			>
				<div className="max-w-[544px] flex-col items-start justify-center max-md:flex max-md:grow">
					<h1 className="banner-title slide-up-and-fade font-anton text-6xl leading-[.95] sm:text-[80px]">
						<span className="text-primary">FRONTEND</span>
						<br /> <span className="ml-4">DEVELOPER</span>
					</h1>
					<p className="banner-description slide-up-and-fade mt-6 text-lg text-muted-foreground">
						Hi! I&apos;m{" "}
						<span className="font-medium text-foreground">Tajmirul</span>. A
						creative Frontend Developer with 3+ years of experience in building
						high-performance, scalable, and responsive web solutions.
					</p>
					<a
						target="_blank"
						rel="noopener noreferrer"
						href={GENERAL_INFO.upworkProfile}
					>
						<Button
							intent="primary"
							className="banner-button slide-up-and-fade mt-9"
						>
							Hire Me
						</Button>
					</a>
				</div>

				<div className="right-[4%] bottom-[10%] flex gap-4 text-center md:absolute md:flex-col md:gap-8 md:text-right">
					<div className="slide-up-and-fade">
						<h5 className="mb-1.5 font-anton text-3xl text-primary sm:text-4xl">
							3+
						</h5>
						<p className="text-muted-foreground">Years of Experience</p>
					</div>
					<div className="slide-up-and-fade">
						<h5 className="mb-1.5 font-anton text-3xl text-primary sm:text-4xl">
							7+
						</h5>
						<p className="text-muted-foreground">Completed Projects</p>
					</div>
					<div className="slide-up-and-fade">
						<h5 className="mb-1.5 font-anton text-3xl text-primary sm:text-4xl">
							10K+
						</h5>
						<p className="text-muted-foreground">Hours Worked</p>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Banner
