import type { Metadata } from "next";
import PortfolioClient from "./PortfolioClient";

export const metadata: Metadata = {
  title: "Our Portfolio",
  description: "Explore ESTOB Prints portfolio of branding, large format, merchandise, and premium print projects for Lagos businesses.",
  openGraph: {
    title: "Our Portfolio | ESTOB Prints",
    description: "Explore ESTOB Prints portfolio of branding, large format, merchandise, and premium print projects for Lagos businesses.",
  },
};

export default function PortfolioPage() {
  return <PortfolioClient />;
}
