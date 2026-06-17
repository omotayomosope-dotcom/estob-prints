import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Contact ESTOB Prints in Ogba, Ikeja for premium printing, branding, and corporate merchandise solutions in Lagos, Nigeria.",
  openGraph: {
    title: "Contact Us | ESTOB Prints",
    description: "Contact ESTOB Prints in Ogba, Ikeja for premium printing, branding, and corporate merchandise solutions in Lagos, Nigeria.",
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
