import type { ProjectData } from "./ProjectModal";

export interface ProjectItem extends ProjectData {
  tag: string;
  metrics: { val: string; lbl: string }[];
}

export const projectsData: ProjectItem[] = [
  {
    id: "waste-pickers",
    tag: "Social Impact",
    title: "Waste Pickers Initiative",
    image: "/assets/wastepickers2.jpg",
    overview:
      "Directly empowering 150+ informal collectors — paying transparent prices, distributing PPE, and funding preschool education for their families.",
    stakeholders: ["Safisha Nchi Training Wing", "Health Partners", "Local Community Leadership"],
    impact: [
      { label: "Collectors Supported", value: "150+" },
      { label: "PPE Distributed", value: "To All" },
    ],
    story:
      "Informal waste pickers are the backbone of recycling in Kenya. This initiative provides them with high-visibility PPE, health and safety training, and financial literacy workshops, elevating their crucial environmental work into dignified, safe livelihoods.",
    metrics: [
      { val: "150+", lbl: "Collectors Supported" },
      { val: "PPE", lbl: "Supplied to All" },
    ],
  },
  {
    id: "kisumu-hub",
    tag: "Value Addition",
    title: "Kisumu Central Hub",
    image: "/assets/operations.png",
    overview:
      "Our flagship sorting, crushing, and baling facility — the backbone of our circular materials supply chain in the Lake Victoria region.",
    stakeholders: ["County Government of Kisumu", "NEMA", "Industrial Partners"],
    impact: [
      { label: "Weekly Throughput", value: "3–5T" },
      { label: "Processing Site", value: "1 Main" },
    ],
    story:
      "Established to solve the critical bottleneck in waste aggregation, the Kisumu Hub serves as the central node for 7 satellite centers. It features industrial balers and sorting lines, creating a direct link between informal collectors and large-scale manufacturing.",
    metrics: [
      { val: "3–5T", lbl: "Weekly Throughput" },
      { val: "1 Main", lbl: "Processing Site" },
    ],
  },
  {
    id: "nyalenda-bbc",
    tag: "Community Hub",
    title: "Nyalenda Buy-Back Centre",
    image: "/assets/buyback1.jpeg",
    overview:
      "A community-embedded centre operating in one of Kisumu's most densely populated settlements, keeping plastic and glass out of the natural environment.",
    stakeholders: ["Nyalenda Community Leadership", "Women's Groups"],
    impact: [
      { label: "Waste Diverted", value: "120T+" },
      { label: "Operations", value: "Daily" },
    ],
    story:
      "By placing the buy-back center directly within the community, we've eliminated transport costs for local collectors. This facility empowers women and youth by offering fair, transparent pricing and immediate payment for sorted materials.",
    metrics: [
      { val: "120T+", lbl: "Waste Diverted" },
      { val: "Daily", lbl: "Operations" },
    ],
  },
  {
    id: "kiwan-network",
    tag: "Policy & Networks",
    title: "KIWAN Waste Network",
    image: "/assets/cleanup.jpg",
    overview:
      "Our membership in the Kisumu County Waste Actors Network — enabling collaborative infrastructure, shared advocacy, and NEMA Act compliance across the county.",
    stakeholders: ["Regional Logistics Partners", "Municipal Councils", "NEMA"],
    impact: [
      { label: "Network Scale", value: "County" },
      { label: "Compliant", value: "NEMA" },
    ],
    story:
      "The Kisumu Waste Actors Network (KIWAN) integration has allowed us to standardise pricing and collection methodologies across the region. This project scales our impact, bringing structured recycling infrastructure to underserved municipalities.",
    metrics: [
      { val: "County", lbl: "Network Scale" },
      { val: "NEMA", lbl: "Compliant" },
    ],
  },
];
