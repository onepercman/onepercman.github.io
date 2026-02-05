import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useRef } from "react"
import TransitionLink from "~/shared/components/transition-link"
import type { Project as IProject } from "~/shared/constants/data"
import { cn } from "~/shared/utils"

interface Props {
	index: number
	project: IProject
	selectedProject: string | null
	onMouseEnter: (_slug: string) => void
}

gsap.registerPlugin(useGSAP)

const Project = ({ index, project, selectedProject, onMouseEnter }: Props) => {
	const externalLinkSVGRef = useRef<SVGSVGElement>(null)

	const { context, contextSafe } = useGSAP(() => {}, {
		scope: externalLinkSVGRef,
		revertOnUpdate: true,
	})

	const handleMouseEnter = contextSafe?.(() => {
		onMouseEnter(project.slug)

		const arrowLine = externalLinkSVGRef.current?.querySelector(
			"#arrow-line",
		) as SVGPathElement
		const arrowCurb = externalLinkSVGRef.current?.querySelector(
			"#arrow-curb",
		) as SVGPathElement
		const box = externalLinkSVGRef.current?.querySelector(
			"#box",
		) as SVGPathElement

		gsap.set(box, {
			opacity: 0,
			strokeDasharray: box?.getTotalLength(),
			strokeDashoffset: box?.getTotalLength(),
		})
		gsap.set(arrowLine, {
			opacity: 0,
			strokeDasharray: arrowLine?.getTotalLength(),
			strokeDashoffset: arrowLine?.getTotalLength(),
		})
		gsap.set(arrowCurb, {
			opacity: 0,
			strokeDasharray: arrowCurb?.getTotalLength(),
			strokeDashoffset: arrowCurb?.getTotalLength(),
		})

		const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 })
		tl.to(externalLinkSVGRef.current, {
			autoAlpha: 1,
		})
			.to(box, {
				opacity: 1,
				strokeDashoffset: 0,
			})
			.to(
				arrowLine,
				{
					opacity: 1,
					strokeDashoffset: 0,
				},
				"<0.2",
			)
			.to(arrowCurb, {
				opacity: 1,
				strokeDashoffset: 0,
			})
			.to(
				externalLinkSVGRef.current,
				{
					autoAlpha: 0,
				},
				"+=1",
			)
	})

	const handleMouseLeave = contextSafe?.(() => {
		context.kill()
	})

	return (
		<TransitionLink
			href={`/projects/${project.slug}`}
			className="project-item group first:!pt-0 md:hover:!opacity-100 py-5 leading-none transition-all last:border-none last:pb-0 md:border-b md:group-hover/projects:opacity-30"
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
		>
			{selectedProject === null && (
				<img
					src={project.thumbnail}
					alt="Project"
					width="300"
					height="200"
					className={cn("mb-6 aspect-[3/2] w-full object-cover object-top")}
					key={project.slug}
					loading="lazy"
				/>
			)}
			<div className="flex gap-2 md:gap-5">
				<div className="font-changa-one text-muted-fg">
					_{(index + 1).toString().padStart(2, "0")}.
				</div>
				<div className="">
					<h4 className="flex gap-4 bg-[length:200%] bg-gradient-to-r bg-right from-[50%] from-primary to-[50%] to-fg bg-clip-text font-changa-one text-4xl text-transparent xs:text-6xl transition-all duration-700 group-hover:bg-left">
						{project.title}
						<span className="text-fg opacity-0 transition-all group-hover:opacity-100">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="36"
								height="36"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
								ref={externalLinkSVGRef}
							>
								<path
									id="box"
									d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
								></path>
								<path id="arrow-line" d="M10 14 21 3"></path>
								<path id="arrow-curb" d="M15 3h6v6"></path>
							</svg>
						</span>
					</h4>
					<div className="mt-2 flex flex-wrap gap-3 text-muted-fg text-xs">
						{project.techStack.slice(0, 3).map((tech, idx, stackArr) => (
							<div className="flex items-center gap-3" key={tech}>
								<span className="">{tech}</span>
								{idx !== stackArr.length - 1 && (
									<span className="inline-block size-2 rounded-full bg-bg/80 backdrop-blur"></span>
								)}
							</div>
						))}
					</div>
				</div>
			</div>
		</TransitionLink>
	)
}

export default Project
