import type { Metadata } from "next";
import InsightsClient from "./InsightsClient";

export const metadata: Metadata = {
  title: "Insights",
  description: "Printing and branding insights, tips, and guides from ESTOB Prints, Lagos premier printing company.",
  openGraph: {
    title: "Insights | ESTOB Prints",
    description: "Printing and branding insights, tips, and guides from ESTOB Prints, Lagos premier printing company.",
  },
};

export default function InsightsPage() {
  return <InsightsClient />;
}
