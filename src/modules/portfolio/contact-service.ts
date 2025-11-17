// Contact form service using Formspree
export interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}

export const submitContactForm = async (
  data: ContactFormData,
  formspreeFormId: string
): Promise<{ success: boolean; message: string }> => {
  try {
    const response = await fetch(`https://formspree.io/f/${formspreeFormId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        subject: data.subject,
        message: data.message,
        // Add additional metadata
        _subject: data.subject,
        _replyto: data.email,
      }),
    })

    if (response.ok) {
      return {
        success: true,
        message:
          "Your message has been sent successfully! I'll get back to you soon.",
      }
    } else {
      const errorData = await response.json()
      throw new Error(errorData.error || "Failed to send message")
    }
  } catch (error) {
    console.error("Contact form error:", error)
    return {
      success: false,
      message:
        error instanceof Error
          ? error.message
          : "Failed to send message. Please try again or contact me directly.",
    }
  }
}
