import type { Metadata } from "next";
import PrintingPressOgbaClient from "./PrintingPressOgbaClient";

export const metadata: Metadata = {
  title: "Printing Press in Ogba, Ikeja",
  description: "ESTOB Prints is a trusted printing press in Ogba, Ikeja, Lagos with 25+ years experience. Walk-in consultations welcome, Mon-Sat 8am-6pm.",
  openGraph: {
    title: "Printing Press in Ogba, Ikeja | ESTOB Prints",
    description: "ESTOB Prints is a trusted printing press in Ogba, Ikeja, Lagos with 25+ years experience. Walk-in consultations welcome, Mon-Sat 8am-6pm.",
  },
};

export default function PrintingPressOgbaPage() {
  return <PrintingPressOgbaClient />;
}
