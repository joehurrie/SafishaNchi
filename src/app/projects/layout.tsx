import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Projects",
  description:
    "Explore Safisha Nchi's community and environmental projects across Kisumu, Kenya — from plastic recovery campaigns and buy-back centre expansions to waste picker training programmes and circular economy pilots.",
  alternates: { canonical: "/projects" },
  openGraph: {
    title: "Our Projects | Safisha Nchi — Waste Management & Recycling Kenya",
    description:
      "Discover Safisha Nchi's impact projects: plastic recovery, community buy-back centres, waste picker empowerment, and environmental clean-up drives across Kisumu, Kenya.",
    url: "https://www.safishanchi.co.ke/projects",
    images: [
      {
        url: "/favicon_io/favicon-512x512.png",
        width: 512,
        height: 512,
        alt: "Safisha Nchi Projects",
      },
    ],
  },
};

const projectsPageSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": "https://www.safishanchi.co.ke/projects#webpage",
  name: "Our Projects | Safisha Nchi",
  url: "https://www.safishanchi.co.ke/projects",
  description:
    "A showcase of Safisha Nchi's community and environmental projects, including plastic recovery drives, buy-back centre expansions, waste picker training, and circular economy initiatives across Kisumu, Kenya.",
  isPartOf: { "@id": "https://www.safishanchi.co.ke/#organization" },
};

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectsPageSchema) }}
      />
      {children}
    </>
  );
}
