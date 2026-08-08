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
    image: "/assets/sortingsite_new.jpg",
    overview:
      "The Kisumu Project was Safisha Nchi’s foundational proof-of-concept operation. Over a three-year period, the company deployed a targeted operational facility in Kisumu to establish a robust, localized waste collection, buy-back, and processing ecosystem. This direct intervention yielded concrete, field-verified results across both environmental and socioeconomic metrics, proving the viability of the company's decentralized model.",
    stakeholders: ["County Government of Kisumu", "NEMA", "Local Communities", "Independent Waste Pickers"],
    impact: [
      { label: "Plastics Diverted", value: "360T+" },
      { label: "CO2 Avoided", value: "270T" },
    ],
    aboutTheProject:
      "The Kisumu Project served as Safisha Nchi’s foundational proof-of-concept operation, establishing a robust blueprint for localized waste collection, buy-back mechanisms, and industrial material processing over an intensive three-year period. Operating directly within the vibrant urban and peri-urban landscape of Kisumu County, this initiative was strategically designed to tackle the mounting challenges of municipal solid waste management while creating a predictable, income-generating ecosystem for grassroots environmental actors. By bridging the critical gap between unorganized waste generation and formal industrial recycling supply chains, the project successfully deployed a decentralized operational framework that proved the commercial and ecological viability of localized resource recovery. Over its operational lifecycle, the facility evolved from a pilot intervention into a cornerstone of regional environmental stewardship, systematically intercepting high-value polymers and organic-adjacent recyclables that would have otherwise ended up choking local drainage systems, polluting Lake Victoria's expansive basin, or contributing to open-air municipal burning. This direct intervention yielded concrete, field-verified results across multiple environmental, social, and economic metrics, demonstrating how private-sector ingenuity can align seamlessly with public-sector objectives to foster sustainable urban development, green job creation, and long-term climate resilience across secondary East African cities.\n\nMaterial Recovery Capacity: Safisha Nchi's Kisumu facility successfully collected, processed, baled, and redirected over 360 tonnes of high-grade recyclable plastics, specifically targeting high-density polyethylene (HDPE), low-density polyethylene (LDPE), and polyethylene terephthalate (PET). This rigorous industrial sorting ensured that raw polymers were reintroduced back into the circular manufacturing economy rather than degrading in open environments.\n\nEnvironmental Impact: Through continuous, data-driven interventions and scaling operations, the company catalyzed a measurable shift in regional sanitation, helping raise Kisumu's citywide recycling diversion rate from a baseline of just 4% up to a robust 10%. Furthermore, by successfully displacing the industrial requirement for petroleum-derived virgin plastics, the project avoided over 270 tonnes of equivalent CO2 emissions, contributing directly to Kenya's broader nationally determined contributions (NDCs).\n\nCommunity Empowerment: Beyond its ecological metrics, the project functioned as a vital socioeconomic engine by creating 40 direct, stable, and dignified local jobs within the processing facility itself. Outside the facility walls, Safisha Nchi actively integrated and empowered over 150 independent waste pickers. By equipping them with essential safety training, personal protective equipment (PPE), and reliable, transparent direct mobile payments, the initiative transformed precarious informal labor into a respected, economically secure vocation that supports hundreds of dependents across Kisumu County.",
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
    aboutTheProject:
      "The Safisha Nchi Chiga Buy-Back Centre operates as a highly localized, community-embedded waste recovery and aggregation hub situated strategically within the Kisumu region. Designed meticulously to resolve the persistent logistical friction between informal grassroots waste generation and large-scale industrial recycling, this facility serves as a vital physical anchor where individual collectors, community groups, and local households can seamlessly exchange recovered solid waste commodities for fair, immediate, and transparent financial compensation. By situating processing operations directly inside the heart of the community rather than distant industrial parks, the centre dramatically minimizes transport bottlenecks, lowers fuel emissions associated with long-haul waste transit, and guarantees a steady, high-volume stream of valuable recyclable materials for downstream manufacturing partners. The facility leverages a community-first approach that transforms municipal solid waste from an urban nuisance into an immediate, tangible economic asset for residents, fostering a deep-seated culture of environmental responsibility. Through structured daily operations, rigorous material grading, and transparent pricing models, the Chiga Buy-Back Centre stands as a testament to how decentralized, grassroots infrastructure can effectively stabilize local economies while driving systemic, large-scale ecological restoration and zero-waste pathways across secondary Kenyan municipalities.\n\nMaterial Diversion: Serving as a high-efficiency collection and grading terminal, the Chiga facility has successfully intercepted, sorted, and diverted over 120 tonnes of diverse municipal solid waste streams away from open dumpsites, specifically capturing rigid plastics, clean glass fractions, and compressed paperboard cartons.\n\nEconomic Inclusion: The centre operates on a strict model of immediate, equitable economic return, providing guaranteed fair-market pricing to informal collectors at the exact point of material exchange. This reliable cash-flow mechanism injects vital micro-capital directly into grassroots households and effectively cushions vulnerable informal workers against market volatility.\n\nCommunity Engagement: By functioning as an easily accessible, welcoming, and entirely dependable recovery hub, the centre successfully normalizes the intrinsic economic and ecological value of sustainable waste practices, inspiring active neighborhood participation and long-term environmental protection at the grassroots level.",
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
    aboutTheProject:
      "The KIWAN Waste Network is an ambitious, county-wide advocacy, policy alignment, and multi-stakeholder coordination initiative engineered specifically to formalize, protect, and empower the historically marginalized informal waste management sector. Moving far beyond traditional physical collection logistics, this landmark project focuses intensively on institutional capacity building, regulatory compliance frameworks, policy advocacy, and shared resource infrastructure development across Kenya. It acts as a cohesive organizing body that unifies independent waste pickers, micro-collectors, and grassroots cooperatives, providing them with a powerful, unified collective voice to engage directly with county government authorities, environmental regulators, and corporate sustainability leaders. By advocating for standardized, safe operating procedures and recognizing waste pickers as essential municipal sanitation workers, the network dismantles historical stigmas and integrates informal networks into formal municipal solid waste management master plans. Through strategic stakeholder workshops, capacity-building seminars, and legal framework navigation, the KIWAN Waste Network ensures that grassroots actors are not left behind in the transition toward a circular economy, thereby fostering an inclusive, equitable, and legally protected environment for all environmental champions operating across the region.\n\nPolicy Alignment & Advocacy: The network functions as a critical bridge for practical policy implementation, successfully facilitating ongoing dialogues and collaborative frameworks between informal collectors and local county authorities to ensure all field operations strictly adhere to environmental standards set by the NEMA Act regulations.\n\nInfrastructure & Resource Sharing: The initiative develops scalable frameworks for shared logistical assets, collective storage facilities, and transportation resources, drastically reducing operational bottlenecks and overhead costs for independent collectors who previously operated in isolated, vulnerable conditions.\n\nSector Formalization: By formally networking marginalized environmental workers, KIWAN advances Safisha Nchi’s overarching corporate strategy of seamlessly connecting the informal sector to high-value industrial recycling markets, promoting community-led environmental governance and sustainable long-term economic prosperity.",
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
    aboutTheProject:
      "Building firmly upon the empirically validated success of its pioneering Kisumu operations, established community buy-back centers, and expansive regional advocacy networks, Safisha Nchi has formulated a comprehensive, multi-year strategic blueprint designed to aggressively scale its physical infrastructure, logistical footprint, and digital capabilities nationwide. The Vision 2030 Roadmap represents the company's meticulous long-term forecasts, capital allocation targets, and phased operational milestones aimed at transforming Kenya's waste management landscape into a fully integrated, technologically advanced circular ecosystem. By identifying high-density urban centers with acute solid waste deficits, Safisha Nchi is positioning itself to deploy standardized, high-capacity recovery hubs across major economic corridors in East Africa. This expansion strategy pairs physical infrastructure development with cutting-edge proprietary digital tracking systems, ensuring real-time data transparency, seamless aggregator onboarding, and instantaneous mobile payments across all active regional branches. Through strategic partnerships with national investors, technology innovators, and municipal governments, the Vision 2030 Roadmap outlines a clear trajectory toward pan-African circular economy leadership, ensuring that exponential business growth directly translates into massive environmental restoration, carbon mitigation, and the mass socio-economic empowerment of thousands of informal waste workers over the coming decade.\n\nProjected Milestones\n\nNairobi Expansion (2026 Target): As the immediate next step in scaling physical infrastructure, we plan to launch and operationalize a second major Buy-Back Centre in Nairobi. This facility is projected to intercept significantly higher volumes of urban waste from the capital.\n\nDigital & Regional Integration (2027 Projection): By 2027, we aim to establish a coastal footprint by opening a third operational centre in Mombasa. Concurrently, we will launch a proprietary, live digital platform designed to streamline material tracking, aggregator onboarding, and decentralized payments across all active locations.\n\nMulti-Nation Network Consolidation (2028 Target): The ultimate operational goal for Safisha Nchi is to establish a fully integrated, multi-nation-wide supply chain across Kenya and Uganda. By 2028, the company projects having over 5,000 waste pickers nationally networked, supported, and economically empowered through the centralized Safisha Nchi ecosystem.",
    metrics: [
      { val: "5k+", lbl: "Waste Pickers" },
      { val: "3", lbl: "National Hubs" },
    ],
  },
  {
    id: "carbon-emission",
    tag: "Ongoing Project",
    title: "Landfill Carbon emission Measurement-project",
    image: "/assets/Co2_new.jpg",
    overview:
      "Safisha Nchi is embarking on a pioneering initiative to quantify the direct greenhouse gas (GHG) emissions avoided through its waste management operations. This project involves systematic monitoring and calculation of methane (CH4) and carbon dioxide (CO2) displacement resulting from recycling activities, utilizing established international methodologies to generate verifiable carbon credits. So far we have been able to visit the following dumpsites to evaluate the impact of our operations in Kenyas Dandora, Thika and Kitengela landfills. Additionally, with a team of experts we are working on setting up a system to measure the amount of carbon dioxide avoided through our operations at Kisumu.",
    stakeholders: ["Pakro", "NEMA", "Local Communities", "Civil Societies"],
    impact: [
      { label: "Plastics Diverted", value: "360T+" },
      { label: "CO2 Avoided", value: "270T" },
    ],
    aboutTheProject:
      "Safisha Nchi is spearheading a pioneering, data-intensive research and quantification initiative designed to measure, analyze, and verify the direct greenhouse gas (GHG) emissions avoided through its extensive waste diversion and recycling operations. Recognizing the urgent global need for transparent, audit-ready climate metrics, this project involves rigorous, systematic monitoring and mathematical calculation of methane and carbon dioxide displacement resulting from industrial recycling activities, leveraging internationally recognized carbon accounting methodologies to generate certified, high-integrity carbon credits. To build an unassailable baseline, Safisha Nchi’s technical teams have conducted comprehensive site assessments and environmental audits across major Kenyan municipal dumpsites and landfills, specifically focusing on Dandora in Nairobi, Thika, and the rapidly growing Kitengela landfills. Furthermore, collaborating closely with a specialized collective of environmental engineers, atmospheric scientists, and carbon market experts, the company is actively developing an advanced, proprietary measurement and reporting framework to quantify the precise tonnage of carbon dioxide and fugitive methane prevented at its flagship Kisumu operational hub. This ongoing, multi-faceted initiative underscores Safisha Nchi’s unwavering corporate commitment to providing transparent, science-backed proof of its direct contribution to global climate change mitigation, sustainable development goals, and corporate net-zero commitments.\n\nSafisha Nchi’s commitment to verifiable impact extends to its pioneering Landfill Carbon Emission Measurement Project. To date, Safisha Nchi has conducted extensive site assessments at three major Kenyan landfills—Dandora, Thika, and Kitengela—evaluating the baseline conditions and the specific impact of the company’s diversion activities. Furthermore, in partnership with environmental engineering experts, the company is developing a proprietary measurement system to quantify the precise carbon tonnage avoided at its Kisumu facility. This ongoing work underscores Safisha Nchi’s dedication to providing transparent, data-backed proof of its contribution to a sustainable future.",
    metrics: [
      { val: "360T+", lbl: "Recyclables" },
      { val: "270T", lbl: "CO2 Avoided" },
    ],
  },
];