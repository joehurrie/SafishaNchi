"use client";

import { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectModal, { ProjectData } from "./ProjectModal";
import { RevealGroup, RevealItem } from "./Reveal";
import styles from "./ProjectShowcase.module.css";

const projectsData: ProjectData[] = [
  {
    id: "kisumu-hub",
    title: "Kisumu Central Processing Hub",
    image: "/assets/operations.png",
    overview: "Our flagship facility aggregating recyclables from across the Lake Victoria region.",
    stakeholders: ["County Government of Kisumu", "NEMA", "Local Waste Pickers"],
    impact: [
      { label: "Processing Capacity", value: "50 Tonnes/Day" },
      { label: "Jobs Created", value: "120+" }
    ],
    story: "Established to solve the critical bottleneck in waste aggregation, the Kisumu Hub serves as the central node for 7 satellite centers. It features industrial balers and sorting lines, creating a direct link between informal collectors and large-scale manufacturing."
  },
  {
    id: "nyalenda-bbc",
    title: "Nyalenda Buy-Back Centre",
    image: "/assets/buyback.jpg",
    overview: "A community-integrated center providing immediate cash for recyclables.",
    stakeholders: ["Nyalenda Community Leadership", "Women's Groups"],
    impact: [
      { label: "Active Collectors", value: "350+" },
      { label: "Monthly Income Injected", value: "KES 500,000+" }
    ],
    story: "By placing the buy-back center directly within the community, we've eliminated transport costs for local collectors. This facility empowers women and youth by offering fair, transparent pricing and immediate payment for sorted materials."
  },
  {
    id: "waste-pickers",
    title: "Waste Pickers Empowerment",
    image: "/assets/wastepickers2.jpg",
    overview: "Formalizing and supporting the informal sector with training and PPE.",
    stakeholders: ["Safisha Nchi Training Wing", "Health Partners"],
    impact: [
      { label: "Trained Individuals", value: "500+" },
      { label: "Safety Incidents Reduced", value: "85%" }
    ],
    story: "Informal waste pickers are the backbone of recycling in Kenya. This initiative provides them with high-visibility PPE, health and safety training, and financial literacy workshops, elevating their crucial environmental work into dignified, safe livelihoods."
  },
  {
    id: "kiwan-network",
    title: "KIWAN Network Expansion",
    image: "/assets/bales.jpg",
    overview: "A decentralized collection network spanning multiple counties.",
    stakeholders: ["Regional Logistics Partners", "Municipal Councils"],
    impact: [
      { label: "Counties Reached", value: "4" },
      { label: "Volume Increase", value: "300%" }
    ],
    story: "The Kisumu Waste Actors Network (KIWAN) integration has allowed us to standardise pricing and collection methodologies across the region. This project scales our impact, bringing structured recycling infrastructure to underserved municipalities."
  }
];

export default function ProjectShowcase() {
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);

  return (
    <section className="section-100 zone-light" id="projects">
      <div className="container">
        <div className="section-header--center">
          <RevealItem>
            <span className="overline">Our Work</span>
          </RevealItem>
          <RevealItem>
            <h2 className="display-lg">Project Showcase.</h2>
          </RevealItem>
        </div>

        <RevealGroup className={styles.grid}>
          {projectsData.map((project) => (
            <RevealItem key={project.id}>
              <ProjectCard project={project} onSelect={setSelectedProject} />
            </RevealItem>
          ))}
        </RevealGroup>
      </div>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
}
