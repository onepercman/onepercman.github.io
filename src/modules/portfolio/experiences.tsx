import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"
import { useRef } from "react"
import SectionTitle from "~/shared/components/section-title"
import { MY_EXPERIENCE } from "~/shared/constants/data"

gsap.registerPlugin(useGSAP, ScrollTrigger)

const Experiences = () => {
	const containerRef = useRef<HTMLDivElement>(null)

	useGSAP(
		() => {
			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: containerRef.current,
					start: "top 60%",
					end: "bottom 50%",
					toggleActions: "restart none none reverse",
					scrub: 1,
				},
			})

			tl.from(".experience-item", {
				y: 50,
				opacity: 0,
				stagger: 0.3,
			})
		},
		{ scope: containerRef },
	)

	useGSAP(
		() => {
			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: containerRef.current,
					start: "bottom 50%",
					end: "bottom 20%",
					scrub: 1,
				},
			})

			tl.to(containerRef.current, {
				y: -150,
				opacity: 0,
			})
		},
		{ scope: containerRef },
	)

	return (
		<section className="py-section" id="my-experience">
			<div className="container" ref={containerRef}>
				<SectionTitle title="My Experience" />

				<div className="grid gap-14">
					{MY_EXPERIENCE.map((item) => (
						<div key={item.title} className="experience-item">
							<p className="w-fit border-fg/50 text-2xl text-fg/80">
								{item.company}
							</p>
							<p className="mb-2.5 font-changa-one text-5xl leading-none">
								{item.title}
							</p>
							<p className="text-lg text-muted-fg">{item.duration}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default Experiences
