import { zodResolver } from "@hookform/resolvers/zod"
import { motion } from "framer-motion"
import { AlertCircle, CheckCircle, Mail, Phone, Send } from "lucide-react"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import {
  Button,
  Card,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
} from "~/shared/components/ui"
import { submitContactForm } from "./contact-service"
import type { Profile } from "./portfolio-types"

interface ContactSectionProps {
  profile: Profile
  formspreeFormId: string
}

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "Please enter a valid email address" }),
  subject: z
    .string()
    .min(5, { message: "Subject must be at least 5 characters" }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters" }),
})

type ContactFormData = z.infer<typeof contactFormSchema>

export function ContactSection({ profile, formspreeFormId }: ContactSectionProps) {
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle")

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  })

  const onSubmit = async (data: ContactFormData) => {
    setStatus("sending")

    try {
      const result = await submitContactForm(data, formspreeFormId)

      if (result.success) {
        setStatus("success")

        // Reset form after success
        setTimeout(() => {
          form.reset()
          setStatus("idle")
        }, 3000)
      } else {
        setStatus("error")

        // Reset error state after 3 seconds
        setTimeout(() => {
          setStatus("idle")
        }, 3000)
      }
    } catch (error) {
      console.error("Contact form error:", error)
      setStatus("error")

      // Reset error state after 3 seconds
      setTimeout(() => {
        setStatus("idle")
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
      className="py-24 bg-gradient-to-b from-muted/30 to-background"
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
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Let's Work Together
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Have a project in mind or just want to chat? I'd love to hear from
              you.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Contact Info */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-6">
                  Get In Touch
                </h3>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  I'm always interested in new opportunities and exciting
                  projects. Whether you're a startup looking to build something
                  amazing or an established company wanting to improve your
                  digital presence, let's discuss how we can work together.
                </p>
              </div>

              {/* Contact Methods */}
              <div className="space-y-4">
                {/* Phone */}
                {profile.phone && (
                  <motion.a
                    href={`tel:${profile.phone}`}
                    className="flex items-center gap-4 p-4 rounded-lg bg-muted/50 border border-border hover:border-primary hover:bg-primary/5 transition-all duration-300 group"
                    whileHover={{ x: 8 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="w-12 h-12 rounded-full bg-success/10 flex items-center justify-center group-hover:bg-success/20 transition-colors">
                      <Phone className="w-6 h-6 text-success" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Phone</p>
                      <p className="text-muted-foreground">{profile.phone}</p>
                    </div>
                  </motion.a>
                )}

                {/* Email */}
                <motion.a
                  href={`mailto:${profile.links.email}`}
                  className="flex items-center gap-4 p-4 rounded-lg bg-muted/50 border border-border hover:border-primary hover:bg-primary/5 transition-all duration-300 group"
                  whileHover={{ x: 8 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Email</p>
                    <p className="text-muted-foreground">
                      {profile.links.email}
                    </p>
                  </div>
                </motion.a>

                {/* Location */}
                <motion.div
                  className="flex items-center gap-4 p-4 rounded-lg bg-muted/50 border border-border"
                  whileHover={{ x: 8 }}
                >
                  <div className="w-12 h-12 rounded-full bg-chart-1/10 flex items-center justify-center">
                    <span className="text-2xl">📍</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Location</p>
                    <p className="text-muted-foreground">{profile.location}</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <Card className="p-8 border-2 border-border/50">
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                              <motion.div
                                whileFocus={{ scale: 1.02 }}
                                transition={{ duration: 0.2 }}
                              >
                                <Input
                                  placeholder="Your name"
                                  className="transition-all duration-300 focus:scale-105"
                                  {...field}
                                />
                              </motion.div>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <motion.div
                                whileFocus={{ scale: 1.02 }}
                                transition={{ duration: 0.2 }}
                              >
                                <Input
                                  placeholder="your.email@example.com"
                                  className="transition-all duration-300 focus:scale-105"
                                  {...field}
                                />
                              </motion.div>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Subject</FormLabel>
                          <FormControl>
                            <motion.div
                              whileFocus={{ scale: 1.02 }}
                              transition={{ duration: 0.2 }}
                            >
                              <Input
                                placeholder="Project inquiry"
                                className="transition-all duration-300 focus:scale-105"
                                {...field}
                              />
                            </motion.div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <motion.div
                              whileFocus={{ scale: 1.02 }}
                              transition={{ duration: 0.2 }}
                            >
                              <textarea
                                rows={5}
                                className="w-full px-3 py-2 border border-input rounded-md bg-transparent text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 resize-none"
                                placeholder="Tell me about your project..."
                                {...field}
                              />
                            </motion.div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button
                        type="submit"
                        disabled={status === "sending"}
                        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3 text-lg font-semibold relative overflow-hidden"
                      >
                        <motion.div
                          className="flex items-center justify-center gap-2"
                          animate={
                            status === "sending" ? { opacity: [1, 0.5, 1] } : {}
                          }
                          transition={{
                            duration: 1,
                            repeat: status === "sending" ? Infinity : 0,
                          }}
                        >
                          {status === "idle" && (
                            <>
                              <Send className="w-5 h-5" />
                              Send Message
                            </>
                          )}
                          {status === "sending" && (
                            <>
                              <motion.div
                                animate={{ rotate: 360 }}
                                transition={{
                                  duration: 1,
                                  repeat: Infinity,
                                  ease: "linear",
                                }}
                              >
                                <Send className="w-5 h-5" />
                              </motion.div>
                              Sending...
                            </>
                          )}
                          {status === "success" && (
                            <>
                              <CheckCircle className="w-5 h-5" />
                              Message Sent!
                            </>
                          )}
                          {status === "error" && (
                            <>
                              <AlertCircle className="w-5 h-5" />
                              Failed to send. Try again
                            </>
                          )}
                        </motion.div>

                        {/* Success animation overlay */}
                        <motion.div
                          className="absolute inset-0 bg-success"
                          initial={{ x: "-100%" }}
                          animate={status === "success" ? { x: "100%" } : {}}
                          transition={{ duration: 0.5 }}
                        />
                      </Button>
                    </motion.div>
                  </form>
                </Form>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
