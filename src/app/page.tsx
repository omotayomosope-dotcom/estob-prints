// FILE: src/app/page.tsx
import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import TickerTape from "@/components/sections/TickerTape";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Portfolio from "@/components/sections/Portfolio";
import Clients from "@/components/sections/Clients";
import Testimonials from "@/components/sections/Testimonials";
import ContactCTA from "@/components/sections/ContactCTA";
import { SITE_META } from "@/lib/constants";

export const metadata: Metadata = {
  title: `${SITE_META.name} | Printing Excellence. Branding That Gets You Seen.`,
  description: SITE_META.description,
  alternates: { canonical: SITE_META.url },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "ESTOB Prints",
  description: SITE_META.description,
  url: SITE_META.url,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lagos",
    addressCountry: "NG",
  },
  areaServed: "Lagos, Nigeria",
  serviceType: [
    "Premium Printing",
    "Branding & Corporate Identity",
    "Corporate Merchandise",
    "Large Format Printing",
    "Promotional Materials",
    "Custom Print Solutions",
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <TickerTape />
      <About />
      <Services />
      <WhyChooseUs />
      <Portfolio />
      <Clients />
      <Testimonials />
      <ContactCTA />
    </>
  );
}
