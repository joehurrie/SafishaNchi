import type { Metadata, Viewport } from "next";
import { headers } from "next/headers";
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
  metadataBase: new URL("https://safishanchi.com"),
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
    siteName: "Safisha Nchi",
  },
  twitter: {
    card: "summary_large_image",
    title: "Safisha Nchi | Waste Management & Recycling Company in Kenya",
    description:
      "Safisha Nchi is a professional Waste Management and Recycling Company in Kenya, transforming waste into high-value resources like pellets for manufacturing.",
  },
  icons: {
    icon: "/assets/logo.png",
    apple: "/assets/logo.png",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headersList = await headers();
  const isMaintenanceMode = headersList.get("x-maintenance-mode") === "true";

  return (
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth">
      <body suppressHydrationWarning>
        {!isMaintenanceMode && <Navbar />}
        <main>{children}</main>
        {!isMaintenanceMode && <Footer />}
      </body>
    </html>
  );
}
