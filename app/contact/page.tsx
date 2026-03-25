import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/contact-form";
import { SectionReveal } from "@/components/section-reveal";
import { buttonPrimary, buttonSecondary, containerClass } from "@/lib/ui";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Send a contact message to S&S Group using the website form and keep the direct contact details in the footer."
};

export default function ContactPage() {
  return (
    <main>
      <section className="relative isolate overflow-hidden px-4 pb-16 pt-10 sm:px-6 lg:px-8">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/assets/backgrounds/contact-radar.svg')" }}
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,7,12,0.18),rgba(4,7,12,0.62)_24%,rgba(4,7,12,0.94)_100%)]" />
        </div>

        <div className={`${containerClass} relative grid gap-8 pt-12 lg:grid-cols-[0.94fr_1.06fr] lg:items-start`}>
          <SectionReveal>
            <div className="max-w-3xl">
              <span className="text-xs font-semibold uppercase tracking-[0.34em] text-[var(--electric-blue)]">
                Contact S&S Group
              </span>
              <h1 className="font-display mt-4 text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
                Send your inquiry through the website and keep the direct contact details in the footer.
              </h1>
              <p className="mt-6 text-base leading-8 text-[var(--text-secondary)] sm:text-lg">
                This page is designed to help visitors act quickly. They can
                send a message from the form, then refer to the footer whenever
                they need the phone numbers or email address.
              </p>

              <div className="mt-8 grid gap-4">
                <div className="section-frame rounded-[1.6rem] p-3">
                  <div className="glass-panel rounded-[1.2rem] p-5">
                    <div className="text-[0.72rem] uppercase tracking-[0.28em] text-[var(--text-muted)]">
                      Best way to start
                    </div>
                    <p className="mt-3 text-sm leading-7 text-[var(--text-muted)]">
                      Use the form to share your name, phone number, email
                      address, and message in one structured contact request.
                    </p>
                  </div>
                </div>

                <div className="section-frame rounded-[1.6rem] p-3">
                  <div className="glass-panel rounded-[1.2rem] p-5">
                    <div className="text-[0.72rem] uppercase tracking-[0.28em] text-[var(--text-muted)]">
                      Direct contact details
                    </div>
                    <p className="mt-3 text-sm leading-7 text-[var(--text-muted)]">
                      The phone numbers and email address stay in the footer on
                      every page so visitors always find them in the same place.
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  <a className={buttonPrimary} href="#site-footer-contact">
                    Footer contact details
                  </a>
                  <Link className={buttonSecondary} href="/brochures">
                    Need brochures
                  </Link>
                </div>
              </div>
            </div>
          </SectionReveal>

          <SectionReveal delay={0.12}>
            <ContactForm />
          </SectionReveal>
        </div>
      </section>
    </main>
  );
}
