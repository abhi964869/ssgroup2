import Image from "next/image";
import Link from "next/link";
import { BrochureCard } from "@/components/brochure-card";
import { ProductCard } from "@/components/product-card";
import { SectionReveal } from "@/components/section-reveal";
import {
  brochures,
  company,
  deliveryStages,
  overviewPoints,
  products,
  servicePillars
} from "@/lib/site-data";
import { buttonPrimary, buttonSecondary, containerClass } from "@/lib/ui";

export function HomePage() {
  return (
    <main>
      <section className="relative isolate overflow-hidden px-4 pb-16 pt-6 sm:px-6 sm:pb-20 sm:pt-10 lg:px-8">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/assets/backgrounds/hero-energy.svg')" }}
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,5,8,0.18),rgba(3,5,8,0.62)_24%,rgba(3,5,8,0.94)_100%)]" />
        </div>

        <div className={`${containerClass} relative grid gap-8 pt-6 sm:pt-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-end lg:pt-20`}>
          <SectionReveal>
            <div className="max-w-3xl">
              <div className="inline-flex max-w-full items-center gap-3 rounded-full border border-[rgba(67,186,255,0.26)] bg-[rgba(67,186,255,0.08)] px-4 py-2 text-[0.66rem] font-semibold uppercase tracking-[0.18em] text-[var(--electric-blue)] shadow-[0_10px_24px_rgba(10,64,140,0.12)] sm:text-[0.75rem] sm:tracking-[0.28em]">
                Premium electrical execution by S&S Group
              </div>

              <h1 className="font-display mt-6 max-w-[12ch] text-[1.95rem] font-semibold leading-[1.04] tracking-[-0.04em] text-white sm:max-w-none sm:text-5xl lg:text-7xl">
                Home for the panels, chargers, brochures, and project details
                behind S&S Group&apos;s industrial work.
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--text-secondary)] sm:text-lg">
                This multi-page website opens on the home page, then guides
                visitors through your company story, product portfolio, brochure
                library, and contact flow with clearer detail, stronger copy,
                and direct access to every product family.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Link className={buttonPrimary} href="/products">
                  Explore products
                </Link>
                <Link className={buttonSecondary} href="/brochures">
                  View brochures
                </Link>
                <a className={buttonSecondary} href="#site-footer-contact">
                  Footer contact details
                </a>
              </div>

              <div className="mt-10 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                {company.heroStats.map((stat) => (
                  <div
                    key={stat.label}
                    className="glass-panel card-glow rounded-2xl p-4"
                  >
                    <div className="text-[0.7rem] uppercase tracking-[0.24em] text-[var(--text-muted)]">
                      {stat.label}
                    </div>
                    <div className="mt-2 text-sm font-medium text-white sm:text-base">
                      {stat.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </SectionReveal>

          <SectionReveal delay={0.12}>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="section-frame rounded-[2rem] p-3 sm:col-span-2">
                <div className="relative aspect-[16/10] overflow-hidden rounded-[1.55rem]">
                  <Image
                    alt="S&S Group fast EV charger"
                    className="h-full w-full object-cover"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    src="/assets/user-supplied/fixed-fast-ev-charger.jpeg"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,9,13,0.12),rgba(6,9,13,0.52))]" />
                </div>
              </div>

              <div className="section-frame rounded-[2rem] p-3">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[1.55rem]">
                  <Image
                    alt="S&S Group LT panel"
                    className="h-full w-full object-cover"
                    fill
                    sizes="(max-width: 1024px) 100vw, 21vw"
                    src="/assets/user-supplied/lt-panel.jpeg"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,9,13,0.1),rgba(6,9,13,0.58))]" />
                </div>
              </div>

              <div className="section-frame rounded-[2rem] p-3">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[1.55rem]">
                  <Image
                    alt="S&S Group EV Swift system"
                    className="h-full w-full object-cover"
                    fill
                    sizes="(max-width: 1024px) 100vw, 21vw"
                    src="/assets/user-supplied/ev-swift-system.jpeg"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,9,13,0.1),rgba(6,9,13,0.58))]" />
                </div>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      <section className="relative isolate overflow-hidden py-16 sm:py-24">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/assets/backgrounds/about-foundry.svg')" }}
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,7,12,0.88),rgba(4,7,12,0.76),rgba(4,7,12,0.92))]" />
        </div>

        <div className={`${containerClass} relative`}>
          <SectionReveal className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-[0.34em] text-[var(--electric-blue)]">
              What the company does
            </span>
            <h2 className="font-display mt-4 text-3xl font-semibold text-white sm:text-4xl">
              Clear enough for first-time visitors, technical enough for real
              project conversations.
            </h2>
            <p className="mt-5 text-base leading-8 text-[var(--text-secondary)]">
              S&S Group works across panel manufacturing, power quality support,
              EV-ready distribution, and brochure-driven project communication.
              The site copy stays rooted in your uploaded PDFs, then upgrades the
              language into something sharper and easier for clients to read.
            </p>
          </SectionReveal>

          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {servicePillars.map((pillar, index) => (
              <SectionReveal key={pillar.title} delay={index * 0.08}>
                <article className="section-frame h-full rounded-[1.8rem] p-4">
                  <div className="glass-panel flex h-full flex-col rounded-[1.35rem] p-6">
                    <div className="h-11 w-11 rounded-2xl bg-[linear-gradient(135deg,rgba(28,114,255,0.34),rgba(53,209,138,0.22))]" />
                    <h3 className="font-display mt-5 text-xl font-semibold text-white">
                      {pillar.title}
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-[var(--text-secondary)]">
                      {pillar.text}
                    </p>
                  </div>
                </article>
              </SectionReveal>
            ))}
          </div>

          <div className="mt-8 grid gap-3 lg:grid-cols-3">
            {overviewPoints.map((point, index) => (
              <SectionReveal key={point} delay={index * 0.08}>
                <div className="rounded-[1.4rem] border border-white/8 bg-white/5 px-4 py-4">
                  <p className="text-sm leading-7 text-[var(--text-secondary)]">{point}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden py-16 sm:py-24">
        <div className={`${containerClass} relative`}>
          <SectionReveal className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-[0.34em] text-[var(--electric-blue)]">
              Product Portfolio
            </span>
            <h2 className="font-display mt-4 text-3xl font-semibold text-white sm:text-4xl">
              Every major product line is now linked as its own page.
            </h2>
            <p className="mt-5 text-base leading-8 text-[var(--text-secondary)]">
              From LT and APFCR panels to EV charging infrastructure, each item
              has a dedicated page with readable explanations, brochure access,
              and direct routes from the top navigation bar.
            </p>
          </SectionReveal>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {products.map((product) => (
              <SectionReveal key={product.slug}>
                <ProductCard product={product} />
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden py-16 sm:py-24">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/assets/backgrounds/swift-busbar.svg')" }}
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,7,12,0.9),rgba(4,7,12,0.74),rgba(4,7,12,0.92))]" />
        </div>

        <div className={`${containerClass} relative`}>
          <SectionReveal className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-[0.34em] text-[var(--electric-blue)]">
              Delivery Workflow
            </span>
            <h2 className="font-display mt-4 text-3xl font-semibold text-white sm:text-4xl">
              A company story clients can understand from first discussion to handover.
            </h2>
          </SectionReveal>

          <div className="mt-10 grid gap-4 lg:grid-cols-4">
            {deliveryStages.map((stage, index) => (
              <SectionReveal key={stage.title} delay={index * 0.08}>
                <article className="section-frame h-full rounded-[1.8rem] p-4">
                  <div className="glass-panel flex h-full flex-col rounded-[1.35rem] p-6">
                    <div className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-[var(--electric-blue)]">
                      Step {index + 1}
                    </div>
                    <h3 className="font-display mt-4 text-xl font-semibold text-white">
                      {stage.title}
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-[var(--text-secondary)]">
                      {stage.text}
                    </p>
                  </div>
                </article>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden py-16 sm:py-24">
        <div className={`${containerClass} relative`}>
          <SectionReveal className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-3xl">
              <span className="text-xs font-semibold uppercase tracking-[0.34em] text-[var(--electric-blue)]">
                Brochure Library
              </span>
              <h2 className="font-display mt-4 text-3xl font-semibold text-white sm:text-4xl">
                Keep the brochures visible while the full website grows.
              </h2>
              <p className="mt-5 text-base leading-8 text-[var(--text-secondary)]">
                Visitors can open the company profile and individual product PDFs
                directly from the site, then switch to detail pages when they
                want a cleaner explanation of the same offer.
              </p>
            </div>

            <Link className={buttonSecondary} href="/brochures">
              See all brochures
            </Link>
          </SectionReveal>

          <div className="mt-10 grid gap-6 lg:grid-cols-2 xl:grid-cols-4">
            {brochures.slice(0, 4).map((brochure) => (
              <SectionReveal key={brochure.slug}>
                <BrochureCard brochure={brochure} />
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-12 sm:px-6 lg:px-8">
        <div className={`${containerClass} section-frame rounded-[2rem] p-3`}>
          <div className="glass-panel rounded-[1.6rem] px-5 py-7 sm:px-8 sm:py-10">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-3xl">
                <div className="text-xs font-semibold uppercase tracking-[0.34em] text-[var(--electric-blue)]">
                  Ready to talk
                </div>
                <h2 className="font-display mt-4 text-3xl font-semibold text-white">
                  Move from reading to a real project discussion.
                </h2>
                <p className="mt-4 text-base leading-8 text-[var(--text-secondary)]">
                  Use the routed contact page for the validated form, or jump to
                  the footer for direct contact details.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Link className={buttonPrimary} href="/contact">
                  Contact page
                </Link>
                <a className={buttonSecondary} href="#site-footer-contact">
                  Footer contact details
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
