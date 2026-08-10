import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Safisha Nchi Ltd. — Kisumu's leading waste management and recycling company. Founded by Norah Gakii Nyagah in 2022, we empower informal waste pickers, operate 8 community buy-back centres, and have diverted 360+ tonnes of waste from landfills.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Safisha Nchi | Waste Management & Recycling, Kisumu Kenya",
    description:
      "Safisha Nchi was founded in 2022 by CEO Norah Gakii Nyagah. We operate 8 community buy-back centres in Kisumu, supporting 150+ informal waste pickers and recovering 360+ tonnes of post-consumer materials.",
    url: "https://www.safishanchi.co.ke/about",
    images: [
      {
        url: "/favicon_io/favicon-512x512.png",
        width: 512,
        height: 512,
        alt: "Safisha Nchi — About Us",
      },
    ],
  },
};

// ─── Person structured data ─────────────────────────────────────────────────
const teamSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Safisha Nchi Leadership Team",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "Person",
        "@id": "https://www.safishanchi.co.ke/about#norah-gakii-nyagah",
        name: "Norah Gakii Nyagah",
        givenName: "Norah",
        familyName: "Nyagah",
        additionalName: "Gakii",
        jobTitle: "CEO & Founder",
        description:
          "Norah Gakii Nyagah is the CEO and Founder of Safisha Nchi Ltd., a waste management and recycling company based in Kisumu, Kenya. She founded the company in 2022 with a mission to transform waste into opportunity by creating green jobs and empowering informal waste pickers, particularly women and youth.",
        image: "https://www.safishanchi.co.ke/assets/NorahNyagah.png",
        worksFor: {
          "@type": "Organization",
          name: "Safisha Nchi Ltd.",
          url: "https://www.safishanchi.co.ke/",
        },
        nationality: "Kenyan",
        knowsAbout: [
          "Waste Management",
          "Circular Economy",
          "Women Empowerment",
          "Environmental Sustainability",
          "NEMA Compliance",
        ],
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "Person",
        "@id": "https://www.safishanchi.co.ke/about#david-nilsen",
        name: "David Nilsen",
        givenName: "David",
        familyName: "Nilsen",
        jobTitle: "Co-Founder",
        description:
          "David Nilsen is the Co-Founder of Safisha Nchi Ltd., contributing strategic direction and partnership development to Kenya's growing circular economy.",
        image: "https://www.safishanchi.co.ke/assets/DavidNelson.png",
        worksFor: {
          "@type": "Organization",
          name: "Safisha Nchi Ltd.",
          url: "https://www.safishanchi.co.ke/",
        },
        knowsAbout: ["Circular Economy", "Waste Management", "Business Strategy"],
      },
    },
    {
      "@type": "ListItem",
      position: 3,
      item: {
        "@type": "Person",
        "@id": "https://www.safishanchi.co.ke/about#violet-awinja",
        name: "Violet Awinja",
        givenName: "Violet",
        familyName: "Awinja",
        jobTitle: "Operations Manager",
        description:
          "Violet Awinja is the Operations Manager at Safisha Nchi Ltd., overseeing daily operations across the company's 8 community buy-back centres and central processing hub in Kisumu, Kenya.",
        image: "https://www.safishanchi.co.ke/assets/VioletAwinja.png",
        worksFor: {
          "@type": "Organization",
          name: "Safisha Nchi Ltd.",
          url: "https://www.safishanchi.co.ke/",
        },
        knowsAbout: [
          "Waste Collection Operations",
          "Community Engagement",
          "Recycling Logistics",
        ],
      },
    },
  ],
};

const aboutPageSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": "https://www.safishanchi.co.ke/about#webpage",
  name: "About Safisha Nchi",
  url: "https://www.safishanchi.co.ke/about",
  description:
    "Learn about Safisha Nchi Ltd., Kisumu's leading waste management and recycling company. Founded in 2022 by Norah Gakii Nyagah, the company empowers informal waste pickers and builds Kenya's circular economy.",
  isPartOf: {
    "@id": "https://www.safishanchi.co.ke/#organization",
  },
  about: {
    "@id": "https://www.safishanchi.co.ke/#organization",
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(teamSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }}
      />
      {children}
    </>
  );
}
