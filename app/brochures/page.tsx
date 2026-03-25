import type { Metadata } from "next";
import { BrochureCard } from "@/components/brochure-card";
import { SectionReveal } from "@/components/section-reveal";
import { brochures } from "@/lib/site-data";
import { buttonSecondary, containerClass } from "@/lib/ui";

export const metadata: Metadata = {
  title: "Brochures",
  description:
    "Open the S&S Group company profile and product brochures directly from the website."
};

export default function BrochuresPage() {
  return (
    <main>
      <section className="relative isolate overflow-hidden px-4 pb-16 pt-10 sm:px-6 lg:px-8">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/assets/backgrounds/hero-energy.svg')" }}
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,7,12,0.2),rgba(4,7,12,0.64)_24%,rgba(4,7,12,0.94)_100%)]" />
        </div>

        <div className={`${containerClass} relative max-w-4xl pt-12`}>
          <SectionReveal>
            <span className="text-xs font-semibold uppercase tracking-[0.34em] text-[var(--electric-blue)]">
              Brochure Library
            </span>
            <h1 className="font-display mt-4 text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
              The uploaded brochures stay visible and easy to open from one place.
            </h1>
            <p className="mt-6 text-base leading-8 text-[var(--text-secondary)] sm:text-lg">
              Clients can review the company profile, electrical panel brochures,
              and EV-related PDFs directly from this page. If they want a
              technical discussion instead of a download, the footer keeps the
              direct contact details in one consistent place.
            </p>

            <div className="mt-8">
              <a className={buttonSecondary} href="#site-footer-contact">
                Footer contact details
              </a>
            </div>
          </SectionReveal>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className={containerClass}>
          <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
            {brochures.map((brochure) => (
              <SectionReveal key={brochure.slug}>
                <BrochureCard brochure={brochure} />
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
