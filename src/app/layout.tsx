// FILE: src/app/layout.tsx
import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppFloat from "@/components/layout/WhatsAppFloat";
import { SITE_META } from "@/lib/constants";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_META.url),
  title: {
    default: `${SITE_META.name} | ${SITE_META.tagline}`,
    template: `%s | ${SITE_META.name}`,
  },
  description: SITE_META.description,
  keywords: SITE_META.keywords,
  authors: [{ name: SITE_META.name }],
  creator: SITE_META.name,
  publisher: SITE_META.name,
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: SITE_META.url,
    siteName: SITE_META.name,
    title: `${SITE_META.name} | ${SITE_META.tagline}`,
    description: SITE_META.description,
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: SITE_META.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_META.name} | ${SITE_META.tagline}`,
    description: SITE_META.description,
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#C41A1A",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-NG" className="scroll-smooth">
      <body className="antialiased bg-white text-estob-charcoal overflow-x-hidden">
        <Navbar />
        <main id="main-content" role="main">
          {children}
        </main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
