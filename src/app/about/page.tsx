import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About Us",
  description: "ESTOB Prints has 25+ years delivering premium printing and branding solutions for businesses across Lagos, Nigeria.",
  openGraph: {
    title: "About Us | ESTOB Prints",
    description: "ESTOB Prints has 25+ years delivering premium printing and branding solutions for businesses across Lagos, Nigeria.",
  },
};

export default function AboutPage() {
  return <AboutClient />;
}
