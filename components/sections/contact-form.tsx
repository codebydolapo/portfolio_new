"use client";

import { ArrowRight, LoaderCircle } from "lucide-react";
import { useActionState } from "react";
import { type ContactField, type ContactState, sendMessage } from "@/app/actions/contact";
import { useToast } from "@/components/ui/toast";
import { cn } from "@/lib/cn";

const initialState: ContactState = { status: "idle" };

const inputClass =
  "w-full rounded-2xl border border-black/10 bg-white/80 px-4 py-3 text-[15px] placeholder:text-ink-muted/70 transition focus:border-accent focus:ring-4 focus:ring-accent/15 focus:outline-none aria-invalid:border-red-500 aria-invalid:focus:ring-red-500/15 dark:border-white/10 dark:bg-white/5";

export function ContactForm() {
  const { toast } = useToast();

  const [state, formAction, pending] = useActionState(async (prev: ContactState, formData: FormData) => {
    const result = await sendMessage(prev, formData);
    if (result.status === "success") toast("Message sent — talk soon!");
    return result;
  }, initialState);

  const fieldProps = (field: ContactField) => {
    const error = state.errors?.[field];
    return {
      id: `contact-${field}`,
      name: field,
      defaultValue: state.values?.[field],
      "aria-invalid": error ? true : undefined,
      "aria-describedby": error ? `contact-${field}-error` : undefined,
    };
  };

  const fieldError = (field: ContactField) =>
    state.errors?.[field] && (
      <p id={`contact-${field}-error`} className="mt-1.5 text-sm text-red-600 dark:text-red-400">
        {state.errors[field]}
      </p>
    );

  return (
    <form action={formAction} noValidate className="surface relative p-6 sm:p-8" aria-labelledby="contact-form-title">
      <h3 id="contact-form-title" className="text-xl font-semibold tracking-tight">
        Send a message
      </h3>

      {/* Honeypot — hidden from people and assistive tech */}
      <div aria-hidden className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label>
          Company
          <input type="text" name="company" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className="mb-1.5 block text-sm font-medium">
            Name
          </label>
          <input {...fieldProps("name")} type="text" autoComplete="name" required placeholder="Jane Appleseed" className={inputClass} />
          {fieldError("name")}
        </div>
        <div>
          <label htmlFor="contact-email" className="mb-1.5 block text-sm font-medium">
            Email
          </label>
          <input {...fieldProps("email")} type="email" autoComplete="email" required placeholder="jane@company.com" className={inputClass} />
          {fieldError("email")}
        </div>
      </div>

      <div className="mt-4">
        <label htmlFor="contact-message" className="mb-1.5 block text-sm font-medium">
          Message
        </label>
        <textarea
          {...fieldProps("message")}
          rows={5}
          required
          placeholder="Tell me about the role or project…"
          className={cn(inputClass, "resize-y")}
        />
        {fieldError("message")}
      </div>

      <div className="mt-6 flex flex-col-reverse items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p
          aria-live="polite"
          className={cn("text-sm", state.status === "error" ? "text-red-600 dark:text-red-400" : "text-ink-muted")}
        >
          {state.message}
        </p>
        <button
          type="submit"
          disabled={pending}
          className="group inline-flex h-11 shrink-0 items-center gap-2 rounded-full bg-accent px-6 text-[15px] font-medium text-white transition hover:bg-accent-hover active:scale-[0.98] disabled:opacity-60"
        >
          {pending ? "Sending…" : "Send message"}
          {pending ? (
            <LoaderCircle aria-hidden className="size-4 animate-spin" />
          ) : (
            <ArrowRight aria-hidden className="size-4 transition-transform group-hover:translate-x-0.5" />
          )}
        </button>
      </div>
    </form>
  );
}
