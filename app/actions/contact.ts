"use server";

export type ContactField = "name" | "email" | "message";

export interface ContactState {
  status: "idle" | "success" | "error";
  message?: string;
  errors?: Partial<Record<ContactField, string>>;
  /** Echoed back on error so the form can restore what the user typed. */
  values?: Record<ContactField, string>;
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function sendMessage(_prev: ContactState, formData: FormData): Promise<ContactState> {
  // Honeypot: real users never see or fill this field.
  if (formData.get("company")) return { status: "success", message: "Thanks — message received." };

  const values = {
    name: String(formData.get("name") ?? "").trim(),
    email: String(formData.get("email") ?? "").trim(),
    message: String(formData.get("message") ?? "").trim(),
  };

  const errors: ContactState["errors"] = {};
  if (values.name.length < 2) errors.name = "Please enter your name.";
  else if (values.name.length > 100) errors.name = "That name is a little long.";
  if (!EMAIL_PATTERN.test(values.email)) errors.email = "Please enter a valid email address.";
  if (values.message.length < 10) errors.message = "Tell me a bit more — at least 10 characters.";
  else if (values.message.length > 5000) errors.message = "Please keep it under 5,000 characters.";

  if (Object.keys(errors).length > 0) {
    return { status: "error", message: "Please fix the highlighted fields.", errors, values };
  }

  // TODO: deliver the message — e.g. Resend, Postmark, or a webhook to Slack.
  // await resend.emails.send({ from, to: site.email, replyTo: values.email, subject, text: values.message });

  return { status: "success", message: "Thanks! I'll get back to you within 48 hours." };
}
