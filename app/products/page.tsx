import type { Metadata } from "next";
import Link from "next/link";
import { ProductCard } from "@/components/product-card";
import { SectionReveal } from "@/components/section-reveal";
import { UpcomingProjects } from "@/components/upcoming-projects";
import { products } from "@/lib/site-data";
import { buttonSecondary, containerClass } from "@/lib/ui";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Browse the routed S&S Group product pages for LT panels, APFCR panels, starter panels, EV charging panels, EV Swift systems, and fixed fast EV chargers."
};

const portfolioGroups = [
  {
    title: "Distribution Backbone",
    text: "L.T. panels, feeder coordination, and structured electrical routing give clients a dependable starting point for industrial power distribution."
  },
  {
    title: "Power Quality & Motor Control",
    text: "APFCR and starter solutions help position S&S Group as a practical electrical partner, not only a brochure brand."
  },
  {
    title: "EV-Ready Expansion",
    text: "EV charging panels, EV Swift systems, and fast chargers show the company moving into clean-energy infrastructure with a strong future-facing identity."
  }
] as const;

export default function ProductsPage() {
  return (
    <main>
      <section className="relative isolate overflow-hidden px-4 pb-16 pt-10 sm:px-6 lg:px-8">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/assets/backgrounds/lt-panel-grid.svg')" }}
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,7,12,0.2),rgba(4,7,12,0.64)_24%,rgba(4,7,12,0.94)_100%)]" />
        </div>

        <div className={`${containerClass} relative max-w-4xl pt-12`}>
          <SectionReveal>
            <span className="text-xs font-semibold uppercase tracking-[0.34em] text-[var(--electric-blue)]">
              Product Pages
            </span>
            <h1 className="font-display mt-4 text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
              Browse every S&S Group product through separate linked pages, not one long scroll.
            </h1>
            <p className="mt-6 text-base leading-8 text-[var(--text-secondary)] sm:text-lg">
              Each product now has its own route, direct navbar access, brochure
              button, and a more readable explanation of where it fits in your
              company portfolio. The upcoming EV projects remain below in their
              own separate section, just as requested.
            </p>

            <div className="mt-8">
              <Link className={buttonSecondary} href="/brochures">
                Open brochure library
              </Link>
            </div>
          </SectionReveal>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className={containerClass}>
          <div className="grid gap-4 lg:grid-cols-3">
            {portfolioGroups.map((group, index) => (
              <SectionReveal key={group.title} delay={index * 0.08}>
                <article className="section-frame h-full rounded-[1.8rem] p-4">
                  <div className="glass-panel flex h-full flex-col rounded-[1.35rem] p-6">
                    <div className="h-11 w-11 rounded-2xl bg-[linear-gradient(135deg,rgba(28,114,255,0.34),rgba(53,209,138,0.22))]" />
                    <h2 className="font-display mt-5 text-xl font-semibold text-white">
                      {group.title}
                    </h2>
                    <p className="mt-4 text-sm leading-7 text-[var(--text-secondary)]">
                      {group.text}
                    </p>
                  </div>
                </article>
              </SectionReveal>
            ))}
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {products.map((product) => (
              <SectionReveal key={product.slug}>
                <ProductCard product={product} />
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden py-20 sm:py-24">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/assets/backgrounds/upcoming-orbit.svg')" }}
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,7,12,0.9),rgba(4,7,12,0.68),rgba(4,7,12,0.92))]" />
        </div>

        <div className={`${containerClass} relative`}>
          <SectionReveal className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-[0.34em] text-[var(--electric-blue)]">
              Upcoming Projects
            </span>
            <h2 className="font-display mt-4 text-3xl font-semibold text-white sm:text-4xl">
              Future EV infrastructure stays visible here, but out of the navbar.
            </h2>
            <p className="mt-5 text-base leading-8 text-[var(--text-secondary)]">
              Fast EV Charging Network and Battery Swapping Station are kept in
              this dedicated section only. Clicking either item opens a modal
              with the structured explanation instead of sending users to a new
              placeholder page.
            </p>
          </SectionReveal>

          <UpcomingProjects />
        </div>
      </section>
    </main>
  );
}
