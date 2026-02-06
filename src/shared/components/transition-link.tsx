import { useGSAP } from "@gsap/react"
import { Link, useNavigate, useRouter } from "@tanstack/react-router"
import gsap from "gsap"
import type { ComponentProps } from "react"

interface Props extends ComponentProps<typeof Link> {
	back?: boolean
}

gsap.registerPlugin(useGSAP)

const TransitionLink = ({
	href,
	onClick,
	children,
	back = false,
	...rest
}: Props) => {
	const navigate = useNavigate()
	const router = useRouter()

	const { contextSafe } = useGSAP(() => {})

	const handleLinkClick = contextSafe(
		async (e: React.MouseEvent<HTMLAnchorElement>) => {
			e.preventDefault()

			gsap.set(".page-transition", { yPercent: 100 })
			gsap.set(".page-transition--inner", { yPercent: 100 })

			const tl = gsap.timeline()

			tl.to(".page-transition", {
				yPercent: 0,
				duration: 0.3,
			})

			tl.then(() => {
				if (back) {
					router.history.back()
				} else if (href) {
					navigate({ to: href.toString() })
				} else if (onClick) {
					onClick(e)
				}
			})
		},
	)

	return (
		<Link href={href} {...rest} onClick={handleLinkClick}>
			{children}
		</Link>
	)
}

export default TransitionLink
