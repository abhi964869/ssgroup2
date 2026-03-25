import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowOutIcon } from "@/components/site-icons";
import { SectionReveal } from "@/components/section-reveal";
import {
  company,
  deliveryStages,
  industrySegments,
  overviewPoints,
  servicePillars
} from "@/lib/site-data";
import { buttonPrimary, buttonSecondary, containerClass } from "@/lib/ui";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn how S&S Group approaches electrical panels, EV infrastructure, project communication, and delivery from Noida."
};

export default function AboutPage() {
  return (
    <main>
      <section className="relative isolate overflow-hidden px-4 pb-16 pt-10 sm:px-6 lg:px-8">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/assets/backgrounds/about-foundry.svg')" }}
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,7,12,0.28),rgba(4,7,12,0.64)_24%,rgba(4,7,12,0.94)_100%)]" />
        </div>

        <div className={`${containerClass} relative grid gap-8 pt-12 lg:grid-cols-[1fr_0.95fr] lg:items-center`}>
          <SectionReveal>
            <div className="max-w-3xl">
              <span className="text-xs font-semibold uppercase tracking-[0.34em] text-[var(--electric-blue)]">
                About S&S Group
              </span>
              <h1 className="font-display mt-4 text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
                A clearer company story for clients evaluating industrial and EV projects.
              </h1>
              <p className="mt-6 text-base leading-8 text-[var(--text-secondary)] sm:text-lg">
                S&S Group operates from {company.location} and focuses on
                electrical panels, system integration, EV-ready infrastructure,
                and project communication that makes technical work easier to
                understand. This page gives visitors enough detail to grasp what
                the company builds and how it delivers.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a className={buttonPrimary} href={company.profileBrochureHref} rel="noreferrer" target="_blank">
                  Company profile
                  <ArrowOutIcon />
                </a>
                <Link className={buttonSecondary} href="/contact">
                  Contact the team
                </Link>
              </div>

              <div className="mt-10 grid gap-3 sm:grid-cols-4">
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
            <div className="section-frame rounded-[2rem] p-3">
              <div className="relative aspect-[16/10] overflow-hidden rounded-[1.6rem]">
                <Image
                  alt="S&S Group switchgear portfolio"
                  className="h-full w-full object-cover"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  src="/assets/uploaded/ss_group-02-929x427.jpg"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,9,13,0.1),rgba(6,9,13,0.56))]" />
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className={containerClass}>
          <div className="grid gap-4 lg:grid-cols-3">
            {servicePillars.map((pillar, index) => (
              <SectionReveal key={pillar.title} delay={index * 0.08}>
                <article className="section-frame h-full rounded-[1.8rem] p-4">
                  <div className="glass-panel flex h-full flex-col rounded-[1.35rem] p-6">
                    <div className="h-11 w-11 rounded-2xl bg-[linear-gradient(135deg,rgba(28,114,255,0.34),rgba(53,209,138,0.22))]" />
                    <h2 className="font-display mt-5 text-xl font-semibold text-white">
                      {pillar.title}
                    </h2>
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

      <section className="relative isolate overflow-hidden py-20 sm:py-24">
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
              How work moves
            </span>
            <h2 className="font-display mt-4 text-3xl font-semibold text-white sm:text-4xl">
              From requirement capture to project handover.
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

      <section className="py-20 sm:py-24">
        <div className={containerClass}>
          <SectionReveal className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-[0.34em] text-[var(--electric-blue)]">
              Where S&S Group fits
            </span>
            <h2 className="font-display mt-4 text-3xl font-semibold text-white sm:text-4xl">
              Suitable for clients who need electrical clarity, not just equipment names.
            </h2>
          </SectionReveal>

          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {industrySegments.map((segment, index) => (
              <SectionReveal key={segment} delay={index * 0.08}>
                <div className="section-frame h-full rounded-[1.8rem] p-4">
                  <div className="glass-panel flex h-full items-center rounded-[1.35rem] p-6">
                    <p className="text-base leading-8 text-[var(--text-secondary)]">
                      {segment}
                    </p>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
