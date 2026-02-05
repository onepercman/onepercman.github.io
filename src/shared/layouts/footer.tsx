export function Footer() {
	const currentYear = new Date().getFullYear()

	return (
		<footer className="relative mt-8 border-border/40 border-t bg-bg/50 py-8 backdrop-blur-sm">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
					<p className="text-center text-muted-fg text-sm sm:text-left">
						© {currentYear} Built with ❤️ using React + TanStack + GSAP
					</p>
					<div className="flex items-center gap-4">
						<a
							href="#hero"
							className="text-muted-fg text-sm transition-colors hover:text-primary"
							onClick={(e) => {
								e.preventDefault()
								window.scrollTo({ top: 0, behavior: "smooth" })
							}}
						>
							Back to top ↑
						</a>
					</div>
				</div>
			</div>
		</footer>
	)
}
