import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"
import { FileText } from "lucide-react"
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
		<section className="container relative overflow-hidden" id="banner">
			<ArrowAnimation />
			<div
				className="container flex h-[100svh] min-h-[530px] items-center justify-between max-md:flex-col max-md:pb-10"
				ref={containerRef}
			>
				<div className="max-w-[544px] flex-col items-start justify-center max-md:flex max-md:grow">
					<h1 className="banner-title slide-up-and-fade font-changa-one text-6xl leading-[.95] sm:text-[80px]">
						<span className="text-primary">FRONTEND</span>
						<br /> <span className="ml-4">ENGINEER</span>
					</h1>
					<p className="banner-description slide-up-and-fade mt-6 text-lg text-muted-fg">
						Hi! I&apos;m{" "}
						<span className="font-medium text-fg">{GENERAL_INFO.name}</span>{" "}
						(aka <span className="text-primary">{GENERAL_INFO.nickname}</span>).
						A Senior Frontend Engineer with 4+ years of experience building
						complex frontend systems across enterprise, consumer, and Web3
						products.
					</p>
					<div className="mt-9 flex flex-wrap items-center gap-4">
						<a
							href={`mailto:${GENERAL_INFO.email}?subject=${encodeURIComponent(GENERAL_INFO.emailSubject)}&body=${encodeURIComponent(GENERAL_INFO.emailBody)}`}
						>
							<Button
								intent="primary"
								className="banner-button slide-up-and-fade"
							>
								Contact Me
							</Button>
						</a>
						<a href="/files/cv.pdf" target="_blank" rel="noopener noreferrer">
							<Button
								intent="secondary"
								className="banner-button slide-up-and-fade group"
							>
								<FileText className="mr-2 h-5 w-5 transition-transform group-hover:rotate-3 group-hover:scale-110" />
								View CV
							</Button>
						</a>
					</div>
				</div>

				<div className="right-[4%] bottom-[10%] flex gap-4 text-center md:absolute md:flex-col md:gap-8 md:text-right">
					<div className="slide-up-and-fade">
						<h5 className="mb-1.5 font-changa-one text-3xl text-primary sm:text-4xl">
							4+
						</h5>
						<p className="text-muted-fg">Years of Experience</p>
					</div>
					<div className="slide-up-and-fade">
						<h5 className="mb-1.5 font-changa-one text-3xl text-primary sm:text-4xl">
							300+
						</h5>
						<p className="text-muted-fg">Completed Projects</p>
					</div>
					<div className="slide-up-and-fade">
						<h5 className="mb-1.5 font-changa-one text-3xl text-primary sm:text-4xl">
							12K+
						</h5>
						<p className="text-muted-fg">Hours Worked</p>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Banner
