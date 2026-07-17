import type { ProjectData } from "./ProjectModal";

export interface ProjectItem extends ProjectData {
  tag: string;
  metrics: { val: string; lbl: string }[];
}

export const projectsData: ProjectItem[] = [
  {
    id: "kisumu-project",
    tag: "Completed Project",
    title: "The Kisumu Operational Facility (2022–2024)",
    image: "/assets/bales1.jpeg",
    overview:
      "The Kisumu Project was Safisha Nchi’s foundational proof-of-concept operation. Over a three-year period, the company deployed a targeted operational facility in Kisumu to establish a robust, localized waste collection, buy-back, and processing ecosystem. This direct intervention yielded concrete, field-verified results across both environmental and socioeconomic metrics, proving the viability of the company's decentralized model.",
    stakeholders: ["County Government of Kisumu", "NEMA", "Local Communities", "Independent Waste Pickers"],
    impact: [
      { label: "Plastics Diverted", value: "360T+" },
      { label: "CO2 Avoided", value: "270T" },
    ],
    story:
      "Material Recovery Capacity: Safisha Nchi's Kisumu facility successfully collected, processed, and sold over 360 tonnes of recyclable plastic, specifically targeting high-density and low-density polymers. \n\nEnvironmental Impact: Through direct intervention and continuous operations, the company helped raise Kisumu's citywide recycling rate from a baseline of just 4% up to 10%. Furthermore, by displacing virgin manufacturing requirements, the project successfully avoided over 270 tonnes of CO2 emissions. \n\nCommunity Empowerment: The project served as a major socioeconomic driver, creating 40 direct, stable local jobs within the processing facility itself. Beyond the facility walls, Safisha Nchi empowered over 150 independent waste pickers by integrating them into a formal supply chain, equipping them with essential training, protective gear (PPE), and reliable direct payments.",
    metrics: [
      { val: "360T+", lbl: "Recyclables" },
      { val: "270T", lbl: "CO2 Avoided" },
    ],
  },
  {
    id: "chiga-bbc",
    tag: "Active Operations",
    title: "The Chiga Buy-Back Centre",
    image: "/assets/buyback1.jpeg",
    overview:
      "The Safisha Nchi Chiga Buy-Back Centre operates as a localized, community-embedded waste recovery hub situated in Kisumu. Designed to bridge the gap between informal waste generation and industrial recycling, this facility acts as a critical aggregation point where collectors can exchange recovered materials for fair, transparent compensation. By anchoring operations directly within the community, the centre minimizes transport friction for independent waste pickers and ensures a steady, high-volume stream of recyclable commodities.",
    stakeholders: ["Safisha Nchi's Management Teams", "Grassroots Waste Collectors", "Neighborhood Associations", "Downstream Industrial Recyclers"],
    impact: [
      { label: "Waste Diverted", value: "120T+" },
      { label: "Economic Inclusion", value: "Fair market pricing" },
    ],
    story:
      "Material Diversion: Serving as a high-efficiency collection point, the Nyalenda facility has successfully intercepted and diverted over 120 tonnes of municipal waste, including plastics, glass, and paperboard cartons. \n\nEconomic Inclusion: The centre operates on a model of immediate economic return, providing fair market pricing to local collectors at the point of exchange. This system directly injects capital into the community and stabilizes the income of informal workers. \n\nCommunity Engagement: By functioning as an accessible and reliable recovery hub, the centre fosters local environmental stewardship and normalizes the economic value of sustainable waste practices at the grassroots level.",
    metrics: [
      { val: "120T+", lbl: "Waste Diverted" },
      { val: "Daily", lbl: "Operations" },
    ],
  },
  {
    id: "kiwan-network",
    tag: "Strategic Initiative",
    title: "The KIWAN Waste Network",
    image: "/assets/tuktuk.jpeg",
    overview:
      "The KIWAN Waste Network is a strategic, county-wide advocacy and coordination initiative designed to formalize and empower the informal waste management sector. Moving beyond physical collection logistics, this project centers on policy collaboration, institutional alignment, and shared infrastructure development. It serves as an organizing body that unifies independent waste pickers, giving them a collective voice to engage with municipal authorities and advocate for standardized, safe operating procedures.",
    stakeholders: ["Safisha Nchi", "Independent Waste Pickers", "Local Government Officials", "Civil Society Organizations", "NEMA"],
    impact: [
      { label: "Policy Alignment", value: "NEMA Act regulations" },
      { label: "Infrastructure", value: "Shared resources" },
    ],
    story:
      "Policy Alignment & Advocacy: The network acts as a bridge for policy implementation, successfully facilitating collaboration between informal collectors and local authorities to ensure operations align with NEMA Act regulations. \n\nInfrastructure & Resource Sharing: The initiative develops frameworks for shared logistical resources and infrastructure, reducing operational bottlenecks for independent collectors who previously operated in isolation. \n\nSector Formalization: By networking marginalized environmental workers, KIWAN advances Safisha Nchi’s core strategy of connecting the informal sector to the formal industrial recycling market, promoting both community-led environmental action and long-term economic growth.",
    metrics: [
      { val: "County", lbl: "Network Scale" },
      { val: "NEMA", lbl: "Compliant" },
    ],
  },
  {
    id: "vision-2030",
    tag: "Future Projections",
    title: "Vision 2030 Roadmap",
    image: "/assets/facility.png",
    overview:
      "Building on the validated success of its Kisumu operations and established networks, Safisha Nchi has outlined a comprehensive, multi-year blueprint to scale its physical infrastructure and digital capabilities. The following initiatives represent the company's strategic forecasts and operational targets for national expansion.",
    stakeholders: ["National Investors", "Technology Partners", "National Waste Pickers Association"],
    impact: [
      { label: "Waste Pickers", value: "5,000+" },
      { label: "National Hubs", value: "Nairobi & Mombasa" },
    ],
    story:
      "Projected Milestones\n\nNairobi Expansion (2026 Target): As the immediate next step in scaling physical infrastructure, we plan to launch and operationalize a second major Buy-Back Centre in Nairobi. This facility is projected to intercept significantly higher volumes of urban waste from the capital. \n\nDigital & Regional Integration (2027 Projection): By 2027, we aim to establish a coastal footprint by opening a third operational centre in Mombasa. Concurrently, we will launch a proprietary, live digital platform designed to streamline material tracking, aggregator onboarding, and decentralized payments across all active locations. \n\n Multi -Nation Network Consolidation (2028 Target): The ultimate operational goal for Safisha Nchi is to establish a fully integrated, multi nation wide supply chain across kenya and Uganda. By 2028, the company projects having over 5,000 waste pickers nationally networked, supported, and economically empowered through the centralized Safisha Nchi ecosystem.",
    metrics: [
      { val: "5k+", lbl: "Waste Pickers" },
      { val: "3", lbl: "National Hubs" },
    ],
  },

  {
    id: "carbon-emission",
    tag: "Ongoing Project",
    title: "Landfill Carbon emission Measurement-project",
    image: "/assets/emmisions1.jpeg",
    overview:
      "Safisha Nchi is embarking on a pioneering initiative to quantify the direct greenhouse gas (GHG) emissions avoided through its waste management operations. This project involves systematic monitoring and calculation of methane (CH4) and carbon dioxide (CO2) displacement resulting from recycling activities, utilizing established international methodologies to generate verifiable carbon credits. So far we have been able to visit the following dumpsites to evaluate the impact of our operations in Kenyas Dandora, Thika and Kitengela lanfills. Addditionally, with a team of experts we are working on setting up a system to measure the amount of carbon dioxide avoided through our operations at Kisumu ",
    stakeholders: ["Pakro", "NEMA", "Local Communities", "Civil Societies"],
    impact: [
      { label: "Plastics Diverted", value: "360T+" },
      { label: "CO2 Avoided", value: "270T" },
    ],
    story:
      "Safisha Nchi’s commitment to verifiable impact extends to its pioneering Landfill Carbon Emission Measurement Project. To date, Safisha Nchi has conducted extensive site assessments at three major Kenyan landfills—Dandora, Thika, and Kitengela—evaluating the baseline conditions and the specific impact of the company’s diversion activities. Furthermore, in partnership with environmental engineering experts, the company is developing a proprietary measurement system to quantify the precise carbon tonnage avoided at its Kisumu facility. This ongoing work underscores Safisha Nchi’s dedication to providing transparent, data-backed proof of its contribution to a sustainable future. ",
    metrics: [
      { val: "360T+", lbl: "Recyclables" },
      { val: "270T", lbl: "CO2 Avoided" },
    ],
  },


];
