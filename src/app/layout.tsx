import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const viewport: Viewport = {
  themeColor: "#0a3d2b",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export const metadata: Metadata = {
  title: {
    default: "Safisha Nchi | Waste Management & Recycling Company in Kenya",
    template: "%s | Safisha Nchi",
  },
  description:
    "Safisha Nchi is a professional Waste Management and Recycling Company in Kenya, transforming waste into high-value resources like pellets for manufacturing.",
  keywords: [
    "waste management Kenya",
    "recycling Kisumu",
    "value-added processing",
    "circular economy",
    "plastic recovery Kenya",
    "green jobs",
  ],
  openGraph: {
    title: "Safisha Nchi | Waste Management & Recycling Company in Kenya",
    description:
      "Safisha Nchi is a professional Waste Management and Recycling Company in Kenya, transforming waste into high-value resources like pellets for manufacturing.",
    type: "website",
    url: "https://safishanchi.com",
  },
  icons: {
    icon: "/assets/logo.png",
    apple: "/assets/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
