import type { Metadata } from "next";
import PrintingPressOgbaClient from "./PrintingPressOgbaClient";

export const metadata: Metadata = {
  title: "Printing Press in Ogba, Ikeja",
  description: "ESTOB Prints is a trusted printing press in Ogba, Ikeja, Lagos with 25+ years experience. Walk-in consultations welcome, Mon-Sat 8am-6pm.",
  alternates: {
    canonical: "/printing-press-ogba",
  },
  openGraph: {
    title: "Printing Press in Ogba, Ikeja | ESTOB Prints",
    description: "ESTOB Prints is a trusted printing press in Ogba, Ikeja, Lagos with 25+ years experience. Walk-in consultations welcome, Mon-Sat 8am-6pm.",
    url: "/printing-press-ogba",
    type: "website",
    siteName: "ESTOB Prints",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "ESTOB Prints - Printing Press in Ogba, Ikeja" }],
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Where exactly is ESTOB Prints located in Ogba?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our main office is at 1 Akinwale Street, Off Yaya Abatan, Ogba, Ikeja, Lagos, close to Isalu Hospitals and the Ogba Sunday Market on Wempco Road.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need an appointment to visit?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No appointment needed. Walk-in consultations are welcome during our opening hours, Monday to Saturday, 8am to 6pm.",
      },
    },
    {
      "@type": "Question",
      name: "What printing services are available at the Ogba branch?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our Ogba location handles the full range of services: business cards, banners, branded merchandise, corporate branding, promotional materials, and offset paper supply.",
      },
    },
    {
      "@type": "Question",
      name: "How long has ESTOB Prints been operating in Ogba?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ESTOB Prints has served businesses, churches, and organizations in Ogba and across Lagos for over 25 years.",
      },
    },
  ],
};

export default function PrintingPressOgbaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <PrintingPressOgbaClient />
    </>
  );
}
