import { GENERAL_INFO } from "../constants/data"

const StickyEmail = () => {
	return (
		<div className="fixed bottom-32 left-0 block max-xl:hidden">
			<a
				href={`mailto:${GENERAL_INFO.email}`}
				className="!bg-bottom hover:!bg-center px-3 text-muted-fg tracking-[1px] transition-all hover:text-fg"
				style={{
					// background:
					//     'linear-gradient(to bottom, hsl(var(--muted-fg)) 0% 33.33%, hsl(var(--primary)) 33.33% 66.66%, hsl(var(--muted-fg)) 66.66% 100%)',
					// backgroundSize: '100% 300%',

					// backgroundClip: 'text',
					// color: 'transparent',

					textOrientation: "mixed",
					writingMode: "vertical-rl",
				}}
			>
				{GENERAL_INFO.email}
			</a>
		</div>
	)
}

export default StickyEmail
