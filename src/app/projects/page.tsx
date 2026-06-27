"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import styles from "./page.module.css";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import ProjectModal, { type ProjectData } from "@/components/ui/ProjectModal";

const projects: (ProjectData & { tag: string; metrics: { val: string; lbl: string }[] })[] = [
  {
    id: "waste-pickers",
    tag: "Social Impact",
    title: "Waste Pickers Initiative",
    image: "/assets/waste pickers.jpg",
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
    image: "/assets/buyback.jpg",
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

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);

  return (
    <>
      {/* 1. HERO (100vh, imagery background) */}
      <section className={`section-100 zone-light ${styles.hero}`}>
        <div className={styles.hero__bg}>
          <Image
            src="/assets/buyback1.jpeg"
            alt="Community waste collection"
            fill
            priority
            style={{ objectFit: "cover" }}
          />
          <div className={styles.hero__overlay} />
        </div>
        <div className={`container ${styles.hero__inner}`}>
          <RevealGroup>
            <RevealItem>
              <span className={styles.heroLabel}>All Projects</span>
            </RevealItem>
            <RevealItem>
              <h1 className={`display-xl ${styles.heroHeadline}`}>
                Work happening<br />on the ground.
              </h1>
            </RevealItem>
            <RevealItem>
              <p className={styles.heroSub}>
                Our operational scale spans 1 main recycling site and 7 satellite
                collection hubs across the Kisumu region.
              </p>
            </RevealItem>
          </RevealGroup>
        </div>
      </section>

      {/* 2. SCALE STATS (Light Surface) */}
      <section className={`section zone-light`}>
        <div className="container">
          <RevealGroup className={styles.scale__row}>
            {[
              { val: "1", label: "Main Processing Site", desc: "Central Kisumu Hub for aggregation and value-added processing" },
              { val: "7", label: "Satellite Hubs", desc: "Community collection centres embedded across the region" },
              { val: "150+", label: "Active Collectors", desc: "Informal waste pickers in our network" },
              { val: "360T+", label: "Waste Diverted", desc: "Total materials recovered to date" },
            ].map((s) => (
              <RevealItem key={s.label} className={styles.scale__stat}>
                <span className={styles.scale__val}>{s.val}</span>
                <span className={styles.scale__lbl}>{s.label}</span>
                <span className={styles.scale__desc}>{s.desc}</span>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* 3. PROJECTS GRID — Click opens full-screen modal */}
      <section className={`section-100 zone-dark`}>
        <div className="container">
          <div className="section-header--center">
            <RevealGroup>
              <RevealItem><span className="overline overline--dark">Our Projects</span></RevealItem>
              <RevealItem>
                <h2 className="display-lg">Initiatives driving change.</h2>
              </RevealItem>
              <RevealItem>
                <p className="body-md" style={{ color: "var(--dark-sub)", marginTop: "1rem" }}>
                  Click any project to explore the full story.
                </p>
              </RevealItem>
            </RevealGroup>
          </div>

          <RevealGroup className={styles.projects__grid}>
            {projects.map((proj) => (
              <RevealItem
                key={proj.id}
                className={styles.project__card}
                onClick={() => setSelectedProject(proj)}
                role="button"
                tabIndex={0}
                onKeyDown={(e: React.KeyboardEvent) => { if (e.key === "Enter") setSelectedProject(proj); }}
              >
                <div className={styles.project__img}>
                  <Image src={proj.image} alt={proj.title} fill style={{ objectFit: "cover" }} />
                  <div className={styles.project__imgOverlay} />
                  <span className={styles.project__tag}>{proj.tag}</span>
                  <span className={styles.project__open}>View Project →</span>
                </div>
                <div className={styles.project__body}>
                  <h3 className={styles.project__title}>{proj.title}</h3>
                  <p className={styles.project__desc}>{proj.overview}</p>
                  <div className={styles.project__metrics}>
                    {proj.metrics.map((m) => (
                      <div key={m.lbl} className={styles.metric}>
                        <span className={styles.metric__val}>{m.val}</span>
                        <span className={styles.metric__lbl}>{m.lbl}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* 4. CTA (Light Surface) */}
      <section className={`section-100 zone-light`}>
        <div className="container--narrow" style={{ textAlign: "center" }}>
          <RevealGroup>
            <RevealItem><span className="overline">Let's Build Together</span></RevealItem>
            <RevealItem>
              <h2 className="display-md" style={{ marginBottom: "1.5rem" }}>
                Want to partner on a project?
              </h2>
            </RevealItem>
            <RevealItem>
              <p className="body-lg" style={{ marginBottom: "3rem" }}>
                We are always looking for sponsors, community partners, and
                corporate clients who share our vision for a circular Kenya.
              </p>
            </RevealItem>
            <RevealItem>
              <Link href="/contact" className="btn btn-primary">
                Get in Touch
                <svg viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
            </RevealItem>
          </RevealGroup>
        </div>
      </section>

      {/* Full-screen project modal */}
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </>
  );
}
