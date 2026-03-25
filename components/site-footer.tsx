import Link from "next/link";
import { BrandLogo } from "@/components/brand-logo";
import { company, primaryNav, productNav } from "@/lib/site-data";
import { containerClass } from "@/lib/ui";

export function SiteFooter() {
  return (
    <footer
      id="site-footer"
      className="border-t border-white/8 bg-black/50 px-4 py-10 sm:px-6 lg:px-8"
    >
      <div className={`${containerClass} grid gap-8 lg:grid-cols-[1.1fr_0.75fr_1fr]`}>
        <div>
          <BrandLogo compact />
          <p className="mt-5 max-w-md text-sm leading-7 text-[var(--text-muted)]">
            S&S Group delivers low-tension distribution panels, power factor
            correction systems, starter panels, EV charging infrastructure
            enclosures, and brochure-backed project communication for industrial
            and clean-energy deployments.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--text-secondary)]">
            Pages
          </h3>
          <div className="mt-4 grid gap-3 text-sm text-white/80">
            {primaryNav.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--text-secondary)]">
            Product Links
          </h3>
          <div className="mt-4 grid gap-3 text-sm text-white/80 sm:grid-cols-2">
            {productNav.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </div>

          <div
            id="site-footer-contact"
            className="mt-6 flex scroll-mt-28 flex-wrap gap-3 text-sm text-white/80"
          >
            {company.phones.map((phone) => (
              <a key={phone.href} href={phone.href}>
                {phone.display}
              </a>
            ))}
            <a href={`mailto:${company.email}`}>{company.email}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
