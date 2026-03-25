import Link from "next/link";
import { buttonPrimary, buttonSecondary, containerClass } from "@/lib/ui";

export default function NotFound() {
  return (
    <main className="px-4 py-24 sm:px-6 lg:px-8">
      <div className={`${containerClass} section-frame rounded-[2rem] p-3`}>
        <div className="glass-panel rounded-[1.6rem] px-6 py-12 text-center sm:px-8 sm:py-16">
          <div className="text-xs font-semibold uppercase tracking-[0.34em] text-[var(--electric-blue)]">
            Page not found
          </div>
          <h1 className="font-display mt-4 text-4xl font-semibold text-white">
            This route is not part of the S&S Group website.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[var(--text-secondary)]">
            Use the home page, product library, brochures page, or contact page
            to continue browsing the site.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link className={buttonPrimary} href="/">
              Go home
            </Link>
            <Link className={buttonSecondary} href="/products">
              Browse products
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
