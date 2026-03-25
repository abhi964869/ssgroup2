import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SiteMapSection } from "@/components/site-map-section";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body"
});

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
  weight: ["400", "500", "600", "700"]
});

export const metadata: Metadata = {
  title: {
    default: "S&S Group | Industrial Panels, EV Infrastructure & Brochure Library",
    template: "%s | S&S Group"
  },
  description:
    "Multi-page premium website for S&S Group showcasing LT panels, APFCR panels, starter panels, EV charging systems, brochures, company details, and direct contact access.",
  metadataBase: new URL("https://www.amcssgroup.com"),
  icons: {
    icon: "/assets/logo/ss-group-logo.svg",
    shortcut: "/assets/logo/ss-group-logo.svg",
    apple: "/assets/logo/ss-group-logo.svg"
  },
  openGraph: {
    images: ["/assets/logo/ss-group-logo.svg"]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${poppins.variable} bg-[var(--bg-base)] text-[var(--text-primary)] antialiased`}
      >
        <div className="relative min-h-screen overflow-x-hidden">
          <SiteHeader />
          {children}
          <SiteMapSection />
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
