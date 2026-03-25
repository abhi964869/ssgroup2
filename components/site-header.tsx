"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MailIcon, PhoneIcon } from "@/components/site-icons";
import { company, primaryNav, productNav } from "@/lib/site-data";
import { containerClass, pillActive, pillBase } from "@/lib/ui";

function isPrimaryActive(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }

  if (href === "/products") {
    return pathname === "/products" || pathname.startsWith("/products/");
  }

  return pathname === href;
}

export function SiteHeader() {
  const pathname = usePathname() ?? "";
  const showProductNav =
    pathname === "/products" || pathname.startsWith("/products/");
  const mobileNav = showProductNav
    ? [
        ...primaryNav.map((item) => ({
          ...item,
          active: isPrimaryActive(pathname, item.href)
        })),
        ...productNav.map((item) => ({
          ...item,
          active: pathname === item.href
        }))
      ]
    : primaryNav.map((item) => ({
        ...item,
        active: isPrimaryActive(pathname, item.href)
      }));
  const primaryPhone = company.phones[0];
  const emailHref = `mailto:${company.email}?subject=${encodeURIComponent(
    "Website inquiry for S&S Group"
  )}`;

  return (
    <header className="sticky top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4 lg:px-8">
      <div className={containerClass}>
        <div className="glass-panel rounded-[1.45rem] border border-white/10 bg-[linear-gradient(135deg,rgba(10,14,21,0.94),rgba(10,14,21,0.78))] px-3 py-3 shadow-[0_20px_55px_rgba(0,0,0,0.34)] sm:rounded-[1.9rem] sm:px-4 sm:py-4">
          <div className="flex items-center gap-3">
            <Link className="min-w-0 flex-1 lg:flex-none" href="/" aria-label="S&S Group home">
              <div className="inline-flex max-w-full items-center gap-3 rounded-[1.15rem] border border-white/10 bg-white/[0.04] px-2.5 py-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
                <div className="flex h-10 w-[4.7rem] shrink-0 items-center justify-center rounded-[0.9rem] bg-white shadow-[0_12px_28px_rgba(0,0,0,0.18)] sm:h-11 sm:w-[5.1rem]">
                  <Image
                    alt="S&S Group logo"
                    className="h-auto w-[3.85rem] max-w-full sm:w-[4.2rem]"
                    height={40}
                    priority
                    sizes="(max-width: 640px) 62px, 68px"
                    src="/assets/logo/ss-group-logo.svg"
                    width={94}
                  />
                </div>

                <div className="min-w-0">
                  <div className="font-display text-[0.98rem] font-semibold leading-none text-white sm:text-[1.05rem]">
                    {company.name}
                  </div>
                  <div className="mt-1 truncate text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-[var(--text-muted)] sm:text-[0.68rem]">
                    Industrial Panels + EV Systems
                  </div>
                </div>
              </div>
            </Link>

            <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-center lg:gap-2">
              {primaryNav.map((item) => (
                <Link
                  key={item.href}
                  aria-current={isPrimaryActive(pathname, item.href) ? "page" : undefined}
                  className={`${pillBase} min-w-fit ${
                    isPrimaryActive(pathname, item.href) ? pillActive : ""
                  }`}
                  href={item.href}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="hidden lg:flex lg:items-center lg:gap-2">
              <a
                className={`${pillBase} gap-2 text-white/84`}
                href={primaryPhone.href}
              >
                <PhoneIcon />
                {primaryPhone.display}
              </a>
              <a
                className="inline-flex min-h-10 items-center justify-center rounded-full border border-[rgba(67,186,255,0.28)] bg-[rgba(67,186,255,0.12)] px-4 py-2 text-sm font-medium text-white shadow-[0_12px_30px_rgba(20,119,255,0.14)] hover:-translate-y-0.5 hover:border-[rgba(67,186,255,0.45)] hover:bg-[rgba(67,186,255,0.18)]"
                href={emailHref}
              >
                <MailIcon className="h-4 w-4" />
                <span className="ml-2">Talk to us</span>
              </a>
            </div>
          </div>

          <div className="mt-3 border-t border-white/8 pt-3">
            <nav aria-label="Site navigation" className="lg:hidden">
              <div className="hide-scrollbar -mx-1 flex gap-2 overflow-x-auto px-1 pb-1">
                {mobileNav.map((item) => (
                  <Link
                    key={item.href}
                    aria-current={item.active ? "page" : undefined}
                    className={`${pillBase} ${item.active ? pillActive : ""}`}
                    href={item.href}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </nav>

            {showProductNav ? (
              <nav aria-label="Product navigation" className="hidden lg:block">
                <div className="hide-scrollbar -mx-1 flex gap-2 overflow-x-auto px-1 pb-1">
                  {productNav.map((item) => (
                    <Link
                      key={item.href}
                      aria-current={pathname === item.href ? "page" : undefined}
                      className={`${pillBase} ${pathname === item.href ? pillActive : ""}`}
                      href={item.href}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </nav>
            ) : null}
          </div>
        </div>
      </div>
    </header>
  );
}
