import type { Metadata, Viewport } from "next";
import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";
import { baseOpenGraph, isIndexable, site } from "@/config/site";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import RevealObserver from "@/components/RevealObserver";

const fraunces = Fraunces({
  subsets: ["latin", "latin-ext"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["opsz", "SOFT"],
});

const manrope = Manrope({
  subsets: ["latin", "latin-ext"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `Kahve Makinesi Tamiri ve Teknik Servis | ${site.name}`,
    template: `%s | ${site.name}`,
  },
  description:
    "Ev ve ofis tipi kahve makineleri için profesyonel tamir, bakım, kireç temizliği ve teknik servis. Espresso, otomatik ve kapsüllü makineler için hemen servis talep edin.",
  applicationName: site.legalName,
  formatDetection: { telephone: false },
  openGraph: baseOpenGraph,
  twitter: { card: "summary_large_image" },
  robots: isIndexable
    ? { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } }
    : { index: false, follow: false },
  keywords: [
    "kahve makinesi tamiri",
    "kahve makinesi teknik servis",
    "kahve makinesi bakım servisi",
    "ev tipi kahve makinesi tamiri",
    "ofis tipi kahve makinesi tamiri",
    "espresso makinesi tamiri",
  ],
};

export const viewport: Viewport = {
  themeColor: "#2a1c14",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr" className={`${fraunces.variable} ${manrope.variable}`} suppressHydrationWarning>
      <head>
        <script
          // JS etkinse reveal animasyonlarını aç (JS yoksa içerik görünür kalır)
          dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }}
        />
      </head>
      <body className="min-h-dvh">
        <a
          href="#icerik"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-espresso focus:px-5 focus:py-3 focus:text-cream"
        >
          İçeriğe geç
        </a>
        <Header />
        <main id="icerik">{children}</main>
        <Footer />
        <FloatingWhatsApp />
        <RevealObserver />
      </body>
    </html>
  );
}
