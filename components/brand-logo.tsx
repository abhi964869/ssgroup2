import Image from "next/image";

type BrandLogoProps = {
  compact?: boolean;
};

export function BrandLogo({ compact = false }: BrandLogoProps) {
  const width = compact ? 132 : 188;
  const height = compact ? 56 : 84;

  return (
    <div
      aria-label="S&S Group"
      className={`inline-flex bg-white ${
        compact
          ? "rounded-[0.9rem] px-2.5 py-1.5 shadow-[0_14px_30px_rgba(0,0,0,0.16)]"
          : "rounded-[1rem] px-3 py-2 shadow-[0_16px_36px_rgba(0,0,0,0.18)]"
      }`}
    >
      <Image
        alt="S&S Group logo"
        className="block h-auto max-w-full w-auto"
        height={height}
        priority
        sizes={compact ? "(max-width: 640px) 112px, 132px" : "(max-width: 640px) 156px, 188px"}
        src="/assets/logo/ss-group-logo.svg"
        width={width}
      />
    </div>
  );
}
