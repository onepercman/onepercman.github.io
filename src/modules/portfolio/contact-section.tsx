import { AlertCircle, CheckCircle, Mail, Phone, Send, X } from "lucide-react"
import { animate, stagger } from "motion"
import { useEffect, useRef, useState } from "react"
import { Controller, useForm } from "react-hook-form"
import { Button, Card, Form, TextField } from "~/shared/components/ui"
import { useScrollSection } from "~/shared/hooks/use-scroll-section"
import { submitContactForm } from "./contact-service"
import type { Profile } from "./portfolio-types"

interface ContactSectionProps {
	profile: Profile
	formspreeFormId: string
}

interface ContactFormData {
	name: string
	email: string
	subject: string
	message: string
}

export function ContactSection({
	profile,
	formspreeFormId,
}: ContactSectionProps) {
	const [status, setStatus] = useState<
		"idle" | "sending" | "success" | "error"
	>("idle")

	const { control, handleSubmit, reset } = useForm<ContactFormData>({
		defaultValues: {
			name: "",
			email: "",
			subject: "",
			message: "",
		},
	})

	const [error, setError] = useState<string | null>(null)
	const isLoading = status === "sending"

	const sectionRef = useRef<HTMLElement | null>(null)
	const headerRef = useRef<HTMLDivElement>(null)
	const contentRef = useRef<HTMLDivElement>(null)

	const { isInView } = useScrollSection(sectionRef, { threshold: 0.1 })
	const hasAnimated = useRef(false)

	useEffect(() => {
		if (!isInView || hasAnimated.current) return
		if (!headerRef.current || !contentRef.current) return

		hasAnimated.current = true

		const items = contentRef.current.querySelectorAll("[data-animate]")

		animate(
			headerRef.current,
			{ opacity: [0, 1], y: [40, 0] },
			{ duration: 0.8, ease: [0.22, 1, 0.36, 1] },
		)

		setTimeout(() => {
			animate(
				items,
				{ opacity: [0, 1], y: [50, 0] },
				{ duration: 0.6, delay: stagger(0.15), ease: [0.22, 1, 0.36, 1] },
			)
		}, 400)
	}, [isInView])

	const onSubmit = async (data: ContactFormData) => {
		setStatus("sending")
		setError(null)

		try {
			const result = await submitContactForm(data, formspreeFormId)

			if (result.success) {
				setStatus("success")

				setTimeout(() => {
					reset()
					setStatus("idle")
				}, 3000)
			} else {
				setStatus("error")
				setError("Failed to send message. Please try again.")

				setTimeout(() => {
					setStatus("idle")
					setError(null)
				}, 3000)
			}
		} catch (error) {
			console.error("Contact form error:", error)
			setStatus("error")
			setError("Failed to send message. Please try again.")

			setTimeout(() => {
				setStatus("idle")
				setError(null)
			}, 3000)
		}
	}

	const handleContactHover = (e: React.MouseEvent<HTMLAnchorElement>) => {
		animate(
			e.currentTarget,
			{ x: 8 },
			{ duration: 0.3, ease: [0.22, 1, 0.36, 1] },
		)
	}

	const handleContactLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
		animate(
			e.currentTarget,
			{ x: 0 },
			{ duration: 0.3, ease: [0.22, 1, 0.36, 1] },
		)
	}

	return (
		<section
			ref={sectionRef}
			id="contact"
			className="bg-linear-to-b from-muted/30 to-bg py-24"
		>
			<div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
				{/* Section Header */}
				<div ref={headerRef} className="mb-16 text-center opacity-0">
					<h2 className="mb-4 font-bold text-3xl text-fg md:text-4xl lg:text-5xl">
						Let's Work Together
					</h2>
					<p className="mx-auto max-w-3xl text-lg text-muted-fg md:text-xl">
						Have a project in mind or just want to chat? I'd love to hear from
						you.
					</p>
				</div>

				<div
					ref={contentRef}
					className="grid grid-cols-1 items-stretch gap-12 lg:grid-cols-2"
				>
					{/* Contact Info */}
					<div data-animate className="space-y-8 opacity-0">
						<div className="h-full rounded-2xl border border-border/50 bg-muted/30 p-8">
							<h3 className="mb-6 font-semibold text-2xl text-fg">
								Get In Touch
							</h3>
							<p className="mb-8 text-muted-fg leading-relaxed">
								I'm always interested in new opportunities and exciting
								projects. Whether you're a startup looking to build something
								amazing or an established company wanting to improve your
								digital presence, let's discuss how we can work together.
							</p>

							{/* Contact Methods */}
							<div className="space-y-4">
								{/* Phone */}
								{profile.phone && (
									<a
										href={`tel:${profile.phone}`}
										className="group flex items-center gap-4 rounded-lg border border-border bg-muted/50 p-4 transition-all duration-300 hover:border-primary hover:bg-primary/5"
										onMouseEnter={handleContactHover}
										onMouseLeave={handleContactLeave}
									>
										<div className="flex h-12 w-12 items-center justify-center rounded-full bg-success/10 transition-colors group-hover:bg-success/20">
											<Phone className="h-6 w-6 text-success" />
										</div>
										<div>
											<p className="font-semibold text-fg">Phone</p>
											<p className="text-muted-fg">{profile.phone}</p>
										</div>
									</a>
								)}

								{/* Email */}
								<a
									href={`mailto:${profile.links.email}`}
									className="group flex items-center gap-4 rounded-lg border border-border bg-muted/50 p-4 transition-all duration-300 hover:border-primary hover:bg-primary/5"
									onMouseEnter={handleContactHover}
									onMouseLeave={handleContactLeave}
								>
									<div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 transition-colors group-hover:bg-primary/20">
										<Mail className="h-6 w-6 text-primary" />
									</div>
									<div>
										<p className="font-semibold text-fg">Email</p>
										<p className="text-muted-fg">{profile.links.email}</p>
									</div>
								</a>

								{/* Location */}
								<div className="flex items-center gap-4 rounded-lg border border-border bg-muted/50 p-4 transition-all duration-300">
									<div className="flex h-12 w-12 items-center justify-center rounded-full bg-chart-1/10">
										<span className="text-2xl">📍</span>
									</div>
									<div>
										<p className="font-semibold text-fg">Location</p>
										<p className="text-muted-fg">{profile.location}</p>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* Contact Form */}
					<div data-animate className="opacity-0">
						<Card className="border-2 border-border/50 p-8">
							<Form
								onSubmit={handleSubmit(onSubmit)}
								className="space-y-6"
								validationBehavior="aria"
							>
								{error && (
									<div className="flex items-center gap-2 rounded-xl border border-danger/50 bg-linear-to-r from-danger-subtle to-danger-subtle px-4 py-3 text-danger text-sm">
										<X className="size-4" />
										<span>{error}</span>
									</div>
								)}

								<div className="space-y-4">
									<div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
										<Controller
											name="name"
											control={control}
											rules={{
												required: "Name is required",
												minLength: {
													value: 2,
													message: "Name must be at least 2 characters",
												},
											}}
											render={({ field, fieldState }) => (
												<TextField
													label="Name"
													placeholder="Your name"
													className="w-full"
													value={field.value}
													onChange={field.onChange}
													onBlur={field.onBlur}
													name={field.name}
													isRequired
													isInvalid={!!fieldState.error}
													errorMessage={fieldState.error?.message}
												/>
											)}
										/>

										<Controller
											name="email"
											control={control}
											rules={{
												required: "Email is required",
												pattern: {
													value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
													message: "Invalid email address",
												},
											}}
											render={({ field, fieldState }) => (
												<TextField
													label="Email"
													type="email"
													autoComplete="email"
													placeholder="your.email@example.com"
													className="w-full"
													value={field.value}
													onChange={field.onChange}
													onBlur={field.onBlur}
													name={field.name}
													isRequired
													isInvalid={!!fieldState.error}
													errorMessage={fieldState.error?.message}
												/>
											)}
										/>
									</div>

									<Controller
										name="subject"
										control={control}
										rules={{
											required: "Subject is required",
											minLength: {
												value: 5,
												message: "Subject must be at least 5 characters",
											},
										}}
										render={({ field, fieldState }) => (
											<TextField
												label="Subject"
												placeholder="Project inquiry"
												className="w-full"
												value={field.value}
												onChange={field.onChange}
												onBlur={field.onBlur}
												name={field.name}
												isRequired
												isInvalid={!!fieldState.error}
												errorMessage={fieldState.error?.message}
											/>
										)}
									/>

									<Controller
										name="message"
										control={control}
										rules={{
											required: "Message is required",
											minLength: {
												value: 10,
												message: "Message must be at least 10 characters",
											},
										}}
										render={({ field, fieldState }) => (
											<div className="space-y-2">
												<label className="font-medium text-fg text-sm">
													Message *
												</label>
												<textarea
													placeholder="Tell me about your project..."
													className="resize-vertical min-h-[120px] w-full rounded-md border border-input bg-bg px-3 py-2 text-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-ring"
													value={field.value}
													onChange={field.onChange}
													onBlur={field.onBlur}
													name={field.name}
													required
													rows={5}
												/>
												{fieldState.error && (
													<p className="text-danger text-sm">
														{fieldState.error?.message}
													</p>
												)}
											</div>
										)}
									/>
								</div>

								<div className="relative">
									<Button
										type="submit"
										size="lg"
										intent="primary"
										className="w-full font-semibold transition-transform hover:scale-[1.02] active:scale-[0.98]"
										isPending={isLoading}
									>
										{isLoading ? (
											<div className="flex items-center gap-2">
												<div className="size-4 animate-spin rounded-full border-2 border-white/30 border-t-white"></div>
												<span>Sending...</span>
											</div>
										) : status === "success" ? (
											<div className="flex items-center gap-2">
												<CheckCircle className="h-5 w-5" />
												<span>Message Sent!</span>
											</div>
										) : status === "error" ? (
											<div className="flex items-center gap-2">
												<AlertCircle className="h-5 w-5" />
												<span>Try again</span>
											</div>
										) : (
											<div className="flex items-center gap-2">
												<Send className="h-5 w-5" />
												<span>Send Message</span>
												<span>→</span>
											</div>
										)}
									</Button>
								</div>
							</Form>
						</Card>
					</div>
				</div>
			</div>
		</section>
	)
}
