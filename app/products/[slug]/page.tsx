import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ComingSoonBadge } from "@/components/coming-soon-badge";
import { ArrowOutIcon } from "@/components/site-icons";
import { ProductCard } from "@/components/product-card";
import { SectionReveal } from "@/components/section-reveal";
import { getProductBySlug, products } from "@/lib/site-data";
import { buttonPrimary, buttonSecondary, containerClass } from "@/lib/ui";

type ProductPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title: "Product"
    };
  }

  return {
    title: product.title,
    description: product.description
  };
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = products.filter((item) => item.slug !== product.slug).slice(0, 2);

  return (
    <main>
      <section className="relative isolate overflow-hidden px-4 pb-16 pt-10 sm:px-6 lg:px-8">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${product.imageSrc}')` }}
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,5,8,0.2),rgba(3,5,8,0.62)_22%,rgba(3,5,8,0.95)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(67,186,255,0.18),transparent_28%)]" />
        </div>

        <div className={`${containerClass} relative grid gap-8 pt-12 lg:grid-cols-[1.02fr_0.98fr] lg:items-center`}>
          <SectionReveal>
            <div className="max-w-3xl">
              <Link
                className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80"
                href="/products"
              >
                Back to products
              </Link>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <span className="text-xs font-semibold uppercase tracking-[0.34em] text-[var(--electric-blue)]">
                  {product.eyebrow}
                </span>
                {product.comingSoon ? <ComingSoonBadge /> : null}
              </div>

              <h1 className="font-display mt-4 text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
                {product.title}
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--text-secondary)] sm:text-lg">
                {product.description}
              </p>
              <p className="mt-5 max-w-3xl text-base leading-8 text-[var(--text-muted)]">
                {product.longDescription}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  className={buttonPrimary}
                  href={product.brochureHref}
                  rel="noreferrer"
                  target="_blank"
                >
                  {product.brochureLabel}
                  <ArrowOutIcon />
                </a>
                <a
                  className={buttonSecondary}
                  href="#site-footer-contact"
                >
                  Footer contact details
                </a>
              </div>

              <div className="mt-10 grid gap-3 sm:grid-cols-3">
                {product.stats.map((stat) => (
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
              <div className="relative aspect-[16/11] overflow-hidden rounded-[1.6rem]">
                <Image
                  alt={product.title}
                  className="h-full w-full object-cover"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 44vw"
                  src={product.imageSrc}
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,9,13,0.08),rgba(6,9,13,0.5))]" />
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className={containerClass}>
          <SectionReveal className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-[0.34em] text-[var(--electric-blue)]">
              Product breakdown
            </span>
            <h2 className="font-display mt-4 text-3xl font-semibold text-white sm:text-4xl">
              Suitable detail for clients who want to understand the work before they call.
            </h2>
          </SectionReveal>

          <div className="mt-10 grid gap-4 lg:grid-cols-2">
            {product.detailSections.map((section, index) => (
              <SectionReveal key={section.heading} delay={index * 0.08}>
                <article className="section-frame h-full rounded-[1.8rem] p-4">
                  <div className="glass-panel h-full rounded-[1.35rem] p-6">
                    <div className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-[var(--electric-blue)]">
                      {section.heading}
                    </div>
                    <p className="mt-4 text-sm leading-7 text-[var(--text-secondary)] sm:text-base">
                      {section.body}
                    </p>
                  </div>
                </article>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden py-20 sm:py-24">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${product.backgroundSrc}')` }}
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,7,12,0.92),rgba(4,7,12,0.76),rgba(4,7,12,0.92))]" />
        </div>

        <div className={`${containerClass} relative grid gap-8 lg:grid-cols-[1fr_1fr]`}>
          <SectionReveal>
            <div className="section-frame rounded-[2rem] p-3">
              <div className="glass-panel rounded-[1.6rem] p-6 sm:p-7">
                <span className="text-xs font-semibold uppercase tracking-[0.34em] text-[var(--electric-blue)]">
                  Key highlights
                </span>
                <div className="mt-6 space-y-3">
                  {product.highlights.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 rounded-2xl border border-white/8 bg-white/5 px-4 py-3"
                    >
                      <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[var(--ev-green)] shadow-[0_0_16px_rgba(53,209,138,0.65)]" />
                      <p className="text-sm leading-7 text-[var(--text-secondary)]">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </SectionReveal>

          <SectionReveal delay={0.12}>
            <div className="section-frame rounded-[2rem] p-3">
              <div className="glass-panel rounded-[1.6rem] p-6 sm:p-7">
                <span className="text-xs font-semibold uppercase tracking-[0.34em] text-[var(--electric-blue)]">
                  Best-fit applications
                </span>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {product.applications.map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-white/8 bg-white/5 px-4 py-4 text-sm leading-7 text-[var(--text-secondary)]"
                    >
                      {item}
                    </div>
                  ))}
                </div>

                <div className="mt-8 rounded-[1.4rem] border border-white/8 bg-white/5 p-4">
                  <div className="text-[0.72rem] uppercase tracking-[0.28em] text-[var(--text-muted)]">
                    Brochure summary
                  </div>
                  <p className="mt-3 text-sm leading-7 text-[var(--text-secondary)]">
                    {product.brochureSummary}
                  </p>
                </div>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className={containerClass}>
          <SectionReveal className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-[0.34em] text-[var(--electric-blue)]">
              Related products
            </span>
            <h2 className="font-display mt-4 text-3xl font-semibold text-white sm:text-4xl">
              Explore the rest of the routed portfolio.
            </h2>
          </SectionReveal>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {relatedProducts.map((item) => (
              <SectionReveal key={item.slug}>
                <ProductCard product={item} />
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
