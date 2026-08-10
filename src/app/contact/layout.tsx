import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Safisha Nchi Ltd. in Kisumu, Kenya. Contact us for waste collection contracts, recycling consultations, community partnerships, NEMA compliance advisory, or investor discussions. Call +254 727 107 994 or email info@safishanchi.com.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Safisha Nchi | Waste Management & Recycling, Kisumu Kenya",
    description:
      "Reach Safisha Nchi for waste collection contracts, recycling consultations, NEMA compliance advisory, and community partnerships. +254 727 107 994 | info@safishanchi.com",
    url: "https://www.safishanchi.co.ke/contact",
    images: [
      {
        url: "/favicon_io/favicon-512x512.png",
        width: 512,
        height: 512,
        alt: "Contact Safisha Nchi",
      },
    ],
  },
};

const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": "https://www.safishanchi.co.ke/contact#webpage",
  name: "Contact Safisha Nchi",
  url: "https://www.safishanchi.co.ke/contact",
  description:
    "Contact Safisha Nchi Ltd. for waste collection contracts, recycling consultations, NEMA compliance advisory, investor and partnership discussions. Based in Kisumu, Kenya.",
  isPartOf: { "@id": "https://www.safishanchi.co.ke/#organization" },
  mainEntity: {
    "@type": "Organization",
    "@id": "https://www.safishanchi.co.ke/#organization",
    name: "Safisha Nchi Ltd.",
    telephone: "+254727107994",
    email: "info@safishanchi.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kisumu",
      addressRegion: "Kisumu County",
      postalCode: "40100",
      addressCountry: "KE",
    },
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />
      {children}
    </>
  );
}
