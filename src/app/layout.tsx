import type { Metadata, Viewport } from "next";
import { headers } from "next/headers";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

// ─── Structured data (JSON-LD) ──────────────────────────────────────────────
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://www.safishanchi.co.ke/#organization",
  name: "Safisha Nchi Ltd.",
  alternateName: "Safisha Nchi",
  url: "https://www.safishanchi.co.ke/",
  logo: {
    "@type": "ImageObject",
    url: "https://www.safishanchi.co.ke/favicon_io/favicon-512x512.png",
    width: 512,
    height: 512,
  },
  description:
    "Safisha Nchi is a professional waste management and recycling company based in Kisumu, Kenya. We collect, sort, and process plastics, glass, and paper into industrial-grade materials, empowering informal waste pickers and building Kenya's circular economy.",
  foundingDate: "2022",
  founder: {
    "@type": "Person",
    name: "Norah Gakii Nyagah",
    jobTitle: "CEO & Founder",
    url: "https://www.safishanchi.co.ke/about",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Kisumu",
    addressRegion: "Nyanza",
    addressCountry: "KE",
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+254-727-107-994",
      contactType: "customer service",
      availableLanguage: ["English", "Swahili"],
    },
    {
      "@type": "ContactPoint",
      email: "info@safishanchi.com",
      contactType: "customer service",
    },
  ],
  areaServed: {
    "@type": "Place",
    name: "Kisumu, Kenya",
  },
  knowsAbout: [
    "Waste Management",
    "Plastic Recycling",
    "Glass Recycling",
    "Paper Recycling",
    "Circular Economy",
    "Waste Picker Empowerment",
    "NEMA Compliance",
    "Extended Producer Responsibility (EPR)",
    "Green Jobs",
    "Environmental Consulting",
  ],
  memberOf: [
    {
      "@type": "Organization",
      name: "Kenya Industrial Waste Accelerator Network (KIWAN)",
    },
  ],
  hasCredential: [
    {
      "@type": "EducationalOccupationalCredential",
      name: "NEMA Certified Waste Handler",
      credentialCategory: "Environmental Certification",
    },
  ],
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "RecyclingCenter"],
  "@id": "https://www.safishanchi.co.ke/#localbusiness",
  name: "Safisha Nchi Ltd.",
  image: "https://www.safishanchi.co.ke/favicon_io/favicon-512x512.png",
  url: "https://www.safishanchi.co.ke/",
  telephone: "+254727107994",
  email: "info@safishanchi.com",
  description:
    "Safisha Nchi is Kisumu's leading recycling and waste management company. We operate 8 community buy-back centres and a central processing hub, recovering plastics, glass, and paper from households and businesses across the Kisumu region.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Kisumu Central Hub",
    addressLocality: "Kisumu",
    addressRegion: "Kisumu County",
    postalCode: "40100",
    addressCountry: "KE",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -0.1022,
    longitude: 34.7617,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "17:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "08:00",
      closes: "13:00",
    },
  ],
  priceRange: "$$",
  currenciesAccepted: "KES",
  paymentAccepted: "Cash, Mobile Money",
  serviceArea: {
    "@type": "GeoCircle",
    geoMidpoint: {
      "@type": "GeoCoordinates",
      latitude: -0.1022,
      longitude: 34.7617,
    },
    geoRadius: "50000",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Waste Management Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Plastic Recycling",
          description:
            "Collection and processing of PET bottles, HDPE, LDPE, and PP plastics into high-quality flakes and bales for industrial buyers.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Glass Sorting & Recovery",
          description:
            "Sorting of beverage glass and all colour grades into cullet for upcycling and bottle return projects.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Paper & Carton Recycling",
          description:
            "Collection of cardboard, newsprint, Tetra Pak, and various paper grades, baled for recycling mills.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Waste Management Consultation",
          description:
            "NEMA compliance gap analysis, on-site waste audits, custom collection schedules, and ESG reporting support for businesses, institutions, and county authorities.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Community Buy-Back Centres",
          description:
            "8 community-based buy-back centres providing transparent weighing, fair pricing, and immediate cash payments to informal waste pickers.",
        },
      },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: "#0a3d2b",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.safishanchi.co.ke/"),
  alternates: {
    canonical: "/",
  },
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
    "Norah Gakii Nyagah",
    "kenya waste management",
    "women in waste management",
    "kenya recycling company",
    "recycling in kisumu",
    "waste management in kenya",
    "plastic recycling in kenya ",
    "waste pickers empowerment",
    "youth and women empowerment",
    "circular economy Kisumu",
    "sustainable waste management",
    "waste management Kisumu",
    "plastic recycling ",
    "marginalised groups in waste management"
  ],
  openGraph: {
    title: "Safisha Nchi | Waste Management & Recycling Company in Kenya",
    description:
      "Safisha Nchi is a professional Waste Management and Recycling Company in Kenya, transforming waste into resources under the leadership of CEO & Founder Norah Gakii Nyagah.",
    type: "website",
    url: "https://www.safishanchi.co.ke/",
    siteName: "Safisha Nchi",
    images: [
      {
        url: "/favicon_io/favicon-512x512.png",
        width: 512,
        height: 512,
        alt: "Safisha Nchi — Waste Management & Recycling Company in Kenya",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Safisha Nchi | Waste Management & Recycling Company in Kenya",
    description:
      "Safisha Nchi is a professional Waste Management and Recycling Company in Kenya, transforming waste into resources under the leadership of CEO & Founder Norah Gakii Nyagah.",
    images: ["/favicon_io/favicon-512x512.png"],
  },
  manifest: "/favicon_io/site.webmanifest",
  icons: {
    icon: [
      // Largest first — desktop browsers on HiDPI pick the biggest available size
      { url: "/favicon_io/favicon-512x512.png",  sizes: "512x512", type: "image/png" },
      { url: "/favicon_io/favicon-192x192.png",  sizes: "192x192", type: "image/png" },
      { url: "/favicon_io/favicon-16x16.png",    sizes: "16x16",   type: "image/png" },
    ],
    // Apple touch icon — iOS / Safari homescreen (180 × 180)
    apple: [
      { url: "/favicon_io/favicon-180x180.png", sizes: "180x180", type: "image/png" },
    ],
    // Desktop shortcut / taskbar icon (Windows Start, macOS Dock)
    shortcut: "/favicon_io/favicon-192x192.png",
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
        {/* JSON-LD structured data — parsed by Google, Bing, and AI crawlers */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        {!isMaintenanceMode && <Navbar />}
        <main>{children}</main>
        {!isMaintenanceMode && <Footer />}
      </body>
    </html>
  );
}
