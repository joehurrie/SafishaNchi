"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import styles from "./page.module.css";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { projectsData } from "@/components/ui/projectsData";

const projects = projectsData;
const spring: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function ProjectsPage() {
  return (
    <>
      {/* 1. HERO */}
      <section className={`zone-dark ${styles.hero}`} aria-labelledby="projects-h1">
        <div className={styles.hero__bg}>
          <Image
            src="/assets/project.JPG"
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
              <h1 id="projects-h1" className={`display-xl ${styles.heroTitle}`}>
                Bringing change<br />to communities and<br />environment.
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
              { val: "1", label: "Main Hub", desc: "Central Kisumu Hub for aggregation and value-added processing" },
              { val: "7", label: "Satellite Hubs", desc: "Community collection centres embedded across the region" },
              { val: "150+", label: "Active Collectors", desc: "Informal waste pickers empowered in our network" },
              { val: "360T+", label: "Plastics Diverted", desc: "Total materials recovered successfully" },
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
              <RevealItem><span className="overline overline--lime">Our Projects</span></RevealItem>
              <RevealItem>
                <h2 className="display-lg" style={{ color: "var(--white)" }}>Initiatives driving change.</h2>
              </RevealItem>
              <RevealItem>
                <p className="body-md" style={{ color: "var(--on-dark-muted)", marginTop: "1rem" }}>
                  Click any project to explore the full story.
                </p>
              </RevealItem>
            </RevealGroup>
          </div>

          <RevealGroup className={styles.projects__grid}>
            {projects.map((proj) => (
              <RevealItem key={proj.id}>
                <Link
                  href={`/projects/${proj.id}`}
                  className={styles.project__card}
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
                </Link>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* 4. CTA (Light Surface) */}
      <section className={`section-100 zone-light`}>
        <div className="container--narrow" style={{ textAlign: "center" }}>
          <RevealGroup>
            <RevealItem><span className="overline">Let&apos;s Build Together</span></RevealItem>
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
              <Link href="/contact" className="btn btn-accent">
                Get in Touch
                <svg viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
            </RevealItem>
          </RevealGroup>
        </div>
      </section>
    </>
  );
}
