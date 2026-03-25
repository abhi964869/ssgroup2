import Image from "next/image";
import Link from "next/link";
import { ComingSoonBadge } from "@/components/coming-soon-badge";
import { ArrowOutIcon, DocumentIcon } from "@/components/site-icons";
import type { Product } from "@/lib/site-data";
import { buttonPrimary, buttonSecondary } from "@/lib/ui";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="group section-frame relative h-full rounded-[2rem] p-3">
      <div className="relative flex min-h-[420px] flex-col justify-end overflow-hidden rounded-[1.6rem] border border-white/10 sm:min-h-[460px]">
        <div className="absolute inset-0">
          <Image
            alt={product.title}
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            src={product.imageSrc}
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,9,13,0.14),rgba(6,9,13,0.72)_54%,rgba(6,9,13,0.96))]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(67,186,255,0.18),transparent_28%)]" />
        </div>

        {product.comingSoon ? (
          <div className="absolute right-4 top-4 z-10">
            <ComingSoonBadge />
          </div>
        ) : null}

        <div className="relative z-10 p-5 sm:p-7">
          <span className="text-[0.72rem] uppercase tracking-[0.28em] text-[var(--electric-blue)]">
            {product.eyebrow}
          </span>
          <h3 className="font-display mt-3 text-xl font-semibold text-white sm:text-2xl">
            {product.title}
          </h3>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-white/80 sm:text-base">
            {product.description}
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {product.stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-white/8 bg-[rgba(8,11,18,0.5)] p-4 backdrop-blur-md"
              >
                <div className="text-[0.68rem] uppercase tracking-[0.22em] text-[var(--text-muted)]">
                  {stat.label}
                </div>
                <div className="mt-2 text-sm font-medium text-white">{stat.value}</div>
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link className={buttonPrimary} href={`/products/${product.slug}`}>
              View details
              <ArrowOutIcon />
            </Link>
            <a
              className={buttonSecondary}
              href={product.brochureHref}
              rel="noreferrer"
              target="_blank"
            >
              <DocumentIcon />
              <span className="ml-2">Brochure</span>
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
