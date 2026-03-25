import { MapPinIcon } from "@/components/site-icons";
import { company } from "@/lib/site-data";
import { buttonPrimary, buttonSecondary, containerClass } from "@/lib/ui";

export function SiteMapSection() {
  return (
    <section className="relative isolate overflow-hidden py-16 sm:py-20">
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/assets/backgrounds/contact-radar.svg')" }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,6,10,0.9),rgba(4,6,10,0.7),rgba(4,6,10,0.94))]" />
      </div>

      <div className={`${containerClass} relative`}>
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="section-frame rounded-[2rem] p-3">
            <div className="glass-panel flex h-full flex-col rounded-[1.6rem] p-6 sm:p-8">
              <span className="text-xs font-semibold uppercase tracking-[0.34em] text-[var(--electric-blue)]">
                Location & Access
              </span>
              <h2 className="font-display mt-4 text-3xl font-semibold text-white sm:text-4xl">
                Visit the operating base and keep direct contact details in the footer.
              </h2>
              <p className="mt-5 text-base leading-8 text-[var(--text-secondary)]">
                S&S Group operates from {company.location}, supporting low-voltage
                panel manufacturing, EV charging readiness, documentation, and
                project discussions from concept to commissioning.
              </p>

              <div className="mt-8 space-y-4">
                <div className="rounded-[1.4rem] border border-white/8 bg-white/5 p-4">
                  <div className="flex items-center gap-2 text-[0.72rem] uppercase tracking-[0.28em] text-[var(--text-muted)]">
                    <MapPinIcon />
                    Operating base
                  </div>
                  <p className="mt-3 text-base text-white">{company.location}</p>
                </div>

                <div className="rounded-[1.4rem] border border-white/8 bg-white/5 p-4">
                  <div className="text-[0.72rem] uppercase tracking-[0.28em] text-[var(--text-muted)]">
                    Contact details
                  </div>
                  <p className="mt-3 text-base leading-7 text-[var(--text-secondary)]">
                    Phone numbers and the email address are listed once in the
                    footer so visitors find them in the same place across the site.
                  </p>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a className={buttonPrimary} href="#site-footer-contact">
                  Footer contact details
                </a>
                <a className={buttonSecondary} href="/contact">
                  Contact page
                </a>
              </div>
            </div>
          </div>

          <div className="section-frame rounded-[2rem] p-3">
            <div className="glass-panel overflow-hidden rounded-[1.6rem]">
              <iframe
                allowFullScreen
                className="h-[360px] w-full border-0 sm:h-[420px] lg:h-[100%] lg:min-h-[520px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src={company.mapEmbedSrc}
                title="S&S Group location map"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
