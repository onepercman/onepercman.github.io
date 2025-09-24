import { motion } from "framer-motion"
import { AlertCircle, CheckCircle, Mail, Phone, Send, X } from "lucide-react"
import { useState } from "react"
import { Controller, useForm } from "react-hook-form"
import { Button, Card, Form, TextField } from "~/shared/components/ui"
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

  const onSubmit = async (data: ContactFormData) => {
    setStatus("sending")
    setError(null)

    try {
      const result = await submitContactForm(data, formspreeFormId)

      if (result.success) {
        setStatus("success")

        // Reset form after success
        setTimeout(() => {
          reset()
          setStatus("idle")
        }, 3000)
      } else {
        setStatus("error")
        setError("Failed to send message. Please try again.")

        // Reset error state after 3 seconds
        setTimeout(() => {
          setStatus("idle")
          setError(null)
        }, 3000)
      }
    } catch (error) {
      console.error("Contact form error:", error)
      setStatus("error")
      setError("Failed to send message. Please try again.")

      // Reset error state after 3 seconds
      setTimeout(() => {
        setStatus("idle")
        setError(null)
      }, 3000)
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  }

  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-b from-muted/30 to-bg"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-fg mb-4">
              Let's Work Together
            </h2>
            <p className="text-lg md:text-xl text-muted-fg max-w-3xl mx-auto">
              Have a project in mind or just want to chat? I'd love to hear from
              you.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
            {/* Contact Info */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="bg-muted/30 p-8 rounded-2xl border border-border/50 h-full">
                <h3 className="text-2xl font-semibold text-fg mb-6">
                  Get In Touch
                </h3>
                <p className="text-muted-fg mb-8 leading-relaxed">
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
                      className="flex items-center gap-4 p-4 rounded-lg bg-muted/50 border border-border hover:border-primary hover:bg-primary/5 hover:translate-x-2 transition-all duration-300 group"
                    >
                      <div className="w-12 h-12 rounded-full bg-success/10 flex items-center justify-center group-hover:bg-success/20 transition-colors">
                        <Phone className="w-6 h-6 text-success" />
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
                    className="flex items-center gap-4 p-4 rounded-lg bg-muted/50 border border-border hover:border-primary hover:bg-primary/5 hover:translate-x-2 transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-fg">Email</p>
                      <p className="text-muted-fg">{profile.links.email}</p>
                    </div>
                  </a>

                  {/* Location */}
                  <div className="flex items-center gap-4 p-4 rounded-lg bg-muted/50 border border-border hover:translate-x-2 transition-all duration-300">
                    <div className="w-12 h-12 rounded-full bg-chart-1/10 flex items-center justify-center">
                      <span className="text-2xl">📍</span>
                    </div>
                    <div>
                      <p className="font-semibold text-fg">Location</p>
                      <p className="text-muted-fg">{profile.location}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <Card className="p-8 border-2 border-border/50">
                <Form
                  onSubmit={handleSubmit(onSubmit)}
                  className="space-y-6"
                  validationBehavior="aria"
                >
                  {error && (
                    <div className="bg-gradient-to-r from-danger-subtle to-danger-subtle border border-danger/50 text-danger px-4 py-3 rounded-xl text-sm flex items-center gap-2">
                      <X className="size-4" />
                      <span>{error}</span>
                    </div>
                  )}

                  <div className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                          <label className="text-sm font-medium text-fg">
                            Message *
                          </label>
                          <textarea
                            placeholder="Tell me about your project..."
                            className="w-full min-h-[120px] px-3 py-2 text-sm bg-bg border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent resize-vertical"
                            value={field.value}
                            onChange={field.onChange}
                            onBlur={field.onBlur}
                            name={field.name}
                            required
                            rows={5}
                          />
                          {fieldState.error && (
                            <p className="text-sm text-danger">
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
                          <div className="size-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                          <span>Sending...</span>
                        </div>
                      ) : status === "success" ? (
                        <div className="flex items-center gap-2">
                          <CheckCircle className="w-5 h-5" />
                          <span>Message Sent!</span>
                        </div>
                      ) : status === "error" ? (
                        <div className="flex items-center gap-2">
                          <AlertCircle className="w-5 h-5" />
                          <span>Try again</span>
                        </div>
                      ) : (
                        <div className="flex items-center gap-2">
                          <Send className="w-5 h-5" />
                          <span>Send Message</span>
                          <span>→</span>
                        </div>
                      )}
                    </Button>
                  </div>
                </Form>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
