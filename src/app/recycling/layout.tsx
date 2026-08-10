import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How We Operate — Recycling & Waste Processing",
  description:
    "Explore Safisha Nchi's full waste recycling lifecycle: community collection, aggregation, sorting, processing, and output. We recover PET plastics, HDPE, glass, and paper from 8 hubs across Kisumu, Kenya, producing industrial-grade flakes and bales.",
  alternates: { canonical: "/recycling" },
  openGraph: {
    title: "How We Operate | Safisha Nchi Recycling & Waste Processing, Kisumu",
    description:
      "Safisha Nchi operates 1 main processing hub and 7 mini-hubs across Kisumu. We collect, sort, crush, and bale plastics, glass, and paper — 10+ metric tonnes per week — delivering quality material to industrial buyers.",
    url: "https://www.safishanchi.co.ke/recycling",
    images: [
      {
        url: "/favicon_io/favicon-512x512.png",
        width: 512,
        height: 512,
        alt: "Safisha Nchi Recycling Operations",
      },
    ],
  },
};

// ─── Service structured data ─────────────────────────────────────────────────
const recyclingPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://www.safishanchi.co.ke/recycling#webpage",
  name: "How We Operate — Recycling & Waste Processing | Safisha Nchi",
  url: "https://www.safishanchi.co.ke/recycling",
  description:
    "Safisha Nchi's waste recycling operations: collection from 8 community hubs, aggregation at Kisumu Central Hub, sorting and processing into plastic flakes, glass cullet, and baled paper, and supply to industrial buyers.",
  isPartOf: { "@id": "https://www.safishanchi.co.ke/#organization" },
  about: [
    {
      "@type": "Service",
      name: "Plastics Recycling — PET, HDPE, LDPE, PP",
      provider: { "@id": "https://www.safishanchi.co.ke/#organization" },
      description:
        "Collection and processing of post-consumer PET bottles, HDPE containers, LDPE bags, and PP food packaging. Materials are sorted, washed, shredded, and dried into high-quality plastic flakes and bales supplied to Kenyan and regional manufacturers.",
      serviceType: "Plastics Recovery and Processing",
      areaServed: "Kisumu, Kenya",
      availableChannel: {
        "@type": "ServiceChannel",
        serviceLocation: {
          "@type": "Place",
          name: "Kisumu Central Hub, Kisumu, Kenya",
        },
      },
    },
    {
      "@type": "Service",
      name: "Glass Sorting & Recovery",
      provider: { "@id": "https://www.safishanchi.co.ke/#organization" },
      description:
        "Sorting of all beverage glass grades and colours into cullet for upcycling and bottle return projects across Kisumu and surrounding areas.",
      serviceType: "Glass Recycling",
      areaServed: "Kisumu, Kenya",
    },
    {
      "@type": "Service",
      name: "Paper & Carton Recycling",
      provider: { "@id": "https://www.safishanchi.co.ke/#organization" },
      description:
        "Collection of cardboard packaging, newsprint, Tetra Pak, and various paper grades. Materials are baled and supplied to paper recycling mills.",
      serviceType: "Paper and Carton Recycling",
      areaServed: "Kisumu, Kenya",
    },
    {
      "@type": "Service",
      name: "Community Buy-Back Centre Network",
      provider: { "@id": "https://www.safishanchi.co.ke/#organization" },
      description:
        "8 community buy-back centres — Nyalenda, Manyatta, Kondele, Otonglo, Mamboleo, Obunga, Kasese Landfill, and Kisumu Central Hub — providing transparent weighing and fair cash payment to 150+ informal waste pickers.",
      serviceType: "Community Waste Collection",
      areaServed: "Kisumu County, Kenya",
    },
  ],
};

export default function RecyclingLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(recyclingPageSchema) }}
      />
      {children}
    </>
  );
}
