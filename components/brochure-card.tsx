import Image from "next/image";
import { ArrowOutIcon, DocumentIcon } from "@/components/site-icons";
import { type Brochure } from "@/lib/site-data";
import { buttonPrimary, buttonSecondary } from "@/lib/ui";

type BrochureCardProps = {
  brochure: Brochure;
};

export function BrochureCard({ brochure }: BrochureCardProps) {
  return (
    <article className="section-frame h-full rounded-[2rem] p-3">
      <div className="glass-panel flex h-full flex-col overflow-hidden rounded-[1.6rem]">
        <div className="relative aspect-[16/9] overflow-hidden border-b border-white/10">
          <Image
            alt={brochure.title}
            className="h-full w-full object-cover"
            fill
            sizes="(max-width: 1024px) 100vw, 33vw"
            src={brochure.imageSrc}
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,9,13,0.08),rgba(6,9,13,0.62))]" />
        </div>

        <div className="flex h-full flex-col p-5 sm:p-6">
          <div className="text-[0.72rem] uppercase tracking-[0.28em] text-[var(--electric-blue)]">
            {brochure.category}
          </div>
          <h3 className="font-display mt-3 text-xl font-semibold text-white sm:text-2xl">
            {brochure.title}
          </h3>
          <p className="mt-4 flex-1 text-sm leading-7 text-[var(--text-secondary)] sm:text-base">
            {brochure.description}
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a className={buttonPrimary} href={brochure.href} rel="noreferrer" target="_blank">
              <DocumentIcon />
              <span className="ml-2">Open brochure</span>
              <ArrowOutIcon />
            </a>
            <a className={buttonSecondary} href="#site-footer-contact">
              Footer contact details
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
