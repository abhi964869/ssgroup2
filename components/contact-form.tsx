"use client";

import { useState } from "react";
import { buttonPrimary, buttonSecondary } from "@/lib/ui";

type ContactFormState = {
  name: string;
  phone: string;
  email: string;
  message: string;
};

type FormErrors = Partial<Record<keyof ContactFormState, string>>;
type SubmitStatus = "idle" | "success" | "error";

const initialContactForm: ContactFormState = {
  name: "",
  phone: "",
  email: "",
  message: ""
};

const CONTACT_API_URL = "/api/contact";

const getPhoneDigits = (value: string) => value.replace(/\D/g, "");
const hasValidPhoneCharacters = (value: string) => /^[+]?[0-9()\s-]+$/.test(value);

const validateContactForm = (form: ContactFormState): FormErrors => {
  const errors: FormErrors = {};

  if (!form.name.trim()) {
    errors.name = "Name is required.";
  }

  if (!form.phone.trim()) {
    errors.phone = "Phone number is required.";
  } else {
    const phoneLength = getPhoneDigits(form.phone).length;

    if (!hasValidPhoneCharacters(form.phone.trim()) || phoneLength < 10 || phoneLength > 15) {
      errors.phone = "Phone number must contain 10 to 15 digits.";
    }
  }

  if (!form.email.trim()) {
    errors.email = "Email is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }

  if (!form.message.trim()) {
    errors.message = "Message is required.";
  }

  return errors;
};

export function ContactForm() {
  const [form, setForm] = useState<ContactFormState>(initialContactForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>("idle");

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    const field = name as keyof ContactFormState;

    setForm((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
    setSubmitMessage("");
    setSubmitStatus("idle");
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const trimmedForm = {
      name: form.name.trim(),
      phone: form.phone.trim(),
      email: form.email.trim(),
      message: form.message.trim()
    };
    const nextErrors = validateContactForm(trimmedForm);

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setSubmitMessage("Please fix the highlighted fields and try again.");
      setSubmitStatus("error");
      return;
    }

    setForm(trimmedForm);
    setErrors({});
    setSubmitMessage("");
    setSubmitStatus("idle");
    setIsSubmitting(true);

    try {
      const response = await fetch(CONTACT_API_URL, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(trimmedForm)
      });

      const contentType = response.headers.get("content-type");
      const result = (contentType?.includes("application/json")
        ? await response.json()
        : {}) as {
        success?: boolean;
        message?: string;
        errors?: FormErrors;
      };

      if (!response.ok || result.success !== true) {
        setErrors(result.errors ?? {});
        setSubmitMessage(result.message ?? "We could not submit your inquiry right now.");
        setSubmitStatus("error");
        return;
      }

      setForm(initialContactForm);
      setSubmitMessage(result.message ?? "Inquiry submitted successfully.");
      setSubmitStatus("success");
    } catch {
      setErrors({});
      setSubmitMessage("Could not submit your inquiry right now. Please try again.");
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="section-frame rounded-[2rem] p-3">
      <div className="glass-panel rounded-[1.6rem] p-5 sm:p-7">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <div className="text-[0.72rem] uppercase tracking-[0.28em] text-[var(--text-muted)]">
              Contact us
            </div>
            <h3 className="font-display mt-3 text-2xl font-semibold text-white">
              Send us a message
            </h3>
          </div>
          <a className={buttonSecondary} href="/brochures">
            Browse brochures
          </a>
        </div>

        <form className="mt-8 grid gap-4 sm:grid-cols-2" noValidate onSubmit={handleSubmit}>
          <div>
            <label className="mb-2 block text-sm text-white/78" htmlFor="name">
              Name
            </label>
            <input
              className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3.5 text-white outline-none placeholder:text-white/32 focus:border-[rgba(67,186,255,0.42)]"
              id="name"
              name="name"
              onChange={handleChange}
              placeholder="Your name"
              required
              type="text"
              value={form.name}
            />
            {errors.name ? <p className="mt-2 text-sm text-rose-300">{errors.name}</p> : null}
          </div>

          <div>
            <label className="mb-2 block text-sm text-white/78" htmlFor="phone">
              Phone number
            </label>
            <input
              className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3.5 text-white outline-none placeholder:text-white/32 focus:border-[rgba(67,186,255,0.42)]"
              id="phone"
              inputMode="tel"
              name="phone"
              onChange={handleChange}
              placeholder="+91 98765 43210"
              required
              type="tel"
              value={form.phone}
            />
            {errors.phone ? <p className="mt-2 text-sm text-rose-300">{errors.phone}</p> : null}
          </div>

          <div>
            <label className="mb-2 block text-sm text-white/78" htmlFor="email">
              Email
            </label>
            <input
              className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3.5 text-white outline-none placeholder:text-white/32 focus:border-[rgba(67,186,255,0.42)]"
              id="email"
              name="email"
              onChange={handleChange}
              placeholder="name@company.com"
              required
              type="email"
              value={form.email}
            />
            {errors.email ? <p className="mt-2 text-sm text-rose-300">{errors.email}</p> : null}
          </div>

          <div className="sm:col-span-2">
            <label className="mb-2 block text-sm text-white/78" htmlFor="message">
              Message
            </label>
            <textarea
              className="min-h-[170px] w-full rounded-[1.5rem] border border-white/10 bg-black/30 px-4 py-3.5 text-white outline-none placeholder:text-white/32 focus:border-[rgba(67,186,255,0.42)]"
              id="message"
              name="message"
              onChange={handleChange}
              placeholder="Tell us how we can help you."
              required
              value={form.message}
            />
            {errors.message ? (
              <p className="mt-2 text-sm text-rose-300">{errors.message}</p>
            ) : null}
          </div>

          <div className="sm:col-span-2 flex flex-col items-stretch gap-3 pt-2 sm:flex-row sm:flex-wrap sm:items-center">
            <button
              className={`${buttonPrimary} disabled:translate-y-0 disabled:opacity-70 disabled:shadow-none`}
              disabled={isSubmitting}
              type="submit"
            >
              {isSubmitting ? "Sending inquiry..." : "Send inquiry"}
            </button>
            <a className={buttonSecondary} href="#site-footer-contact">
              Footer contact details
            </a>
          </div>

          {submitMessage ? (
            <p
              className={`sm:col-span-2 text-sm ${
                submitStatus === "success" ? "text-emerald-300" : "text-rose-300"
              }`}
            >
              {submitMessage}
            </p>
          ) : null}
        </form>
      </div>
    </div>
  );
}
