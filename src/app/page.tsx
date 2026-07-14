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
import { SITE_META, CONTACT_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Printing Press in Ogba, Ikeja, Lagos | ESTOB Prints",
  description: SITE_META.description,
  alternates: {
    canonical: SITE_META.url,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "PrintingService",
  name: "ESTOB Prints",
  image: `${SITE_META.url}/og-image.jpg`,
  url: SITE_META.url,
  telephone: CONTACT_INFO.phone,
  email: CONTACT_INFO.email,
  priceRange: "$$",
  description: SITE_META.description,

  address: {
    "@type": "PostalAddress",
    streetAddress: "1 Akinwale Street, Off Yaya Abatan",
    addressLocality: "Ogba",
    addressRegion: "Lagos",
    postalCode: "",
    addressCountry: "NG",
  },

  geo: {
    "@type": "GeoCoordinates",
    latitude: "",
    longitude: "",
  },

  areaServed: [
    "Ogba",
    "Ikeja",
    "Agege",
    "Ojodu",
    "Berger",
    "Maryland",
    "Magodo",
    "Lagos",
    "Nigeria",
  ],

  sameAs: [
    CONTACT_INFO.social.instagram,
    CONTACT_INFO.social.facebook,
  ],

  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Printing & Branding Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Premium Printing",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Business Card Printing",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Banner Printing",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Large Format Printing",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Corporate Branding",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Packaging Printing",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Promotional Materials",
        },
      },
    ],
  },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
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
