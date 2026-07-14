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
      <section className={`section-100 zone-dark ${styles.hero}`} aria-labelledby="projects-h1">
        <div className={styles.hero__bg}>
          <Image
            src="/assets/project.JPG"
            alt="Community waste collection and recycling operations"
            fill priority sizes="100vw"
            style={{ objectFit: "cover", objectPosition: "center 30%" }}
          />
          <div className={styles.hero__overlay} />
        </div>
        <div className={`container ${styles.hero__inner}`}>
          <RevealGroup>
            <RevealItem><span className="overline overline--lime">Our Projects</span></RevealItem>
            <RevealItem>
              <h1 id="projects-h1" className={`display-xl ${styles.heroTitle}`} style={{ maxWidth: "800px" }}>
                Bringing change
              </h1>
            </RevealItem>
            <RevealItem>
              <p className={`body-lg ${styles.heroSub}`}>
                Our operational scale spans 1 main recycling site and 7 mini
                collection hubs across the Kisumu region.
              </p>
            </RevealItem>
          </RevealGroup>
        </div>
      </section>



      {/* 3. PROJECTS GRID */}
      <section className={`section zone-canvas`}>
        <div className="container">
          <div className="section-header--center">
            <RevealGroup>
              <RevealItem><span className="overline">Our Projects</span></RevealItem>
              <RevealItem>
                <h2 className="display-lg">Initiatives driving change.</h2>
              </RevealItem>
              <RevealItem>
                <p className="body-md" style={{ marginTop: "1rem" }}>
                  Click any project to explore the full story.
                </p>
              </RevealItem>
            </RevealGroup>
          </div>

          <RevealGroup className={styles.projects__grid}>
            {projects.map((proj) => (
              <RevealItem key={proj.id}>
                <motion.div whileHover={{ y: -6 }} whileTap={{ scale: 0.98 }} style={{ height: "100%" }}>
                  <Link
                    href={`/projects/${proj.id}`}
                    className={styles.project__card}
                    style={{ height: "100%" }}
                  >
                    <div className={styles.project__img}>
                      <Image src={proj.image} alt={proj.title} fill style={{ objectFit: "cover" }} />
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
                </motion.div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* 4. CTA */}
      <section className="section zone-dark" aria-labelledby="cta-h2" style={{ background: "var(--primary)" }}>
        <div className="container--narrow" style={{ textAlign: "center" }}>
          <RevealGroup>
            <RevealItem><span className="overline overline--on-dark">Let&apos;s Build Together</span></RevealItem>
            <RevealItem>
              <h2 id="cta-h2" className="display-md" style={{ marginBottom: "1.5rem", color: "var(--on-white)" }}>
                Want to partner on a project?
              </h2>
            </RevealItem>
            <RevealItem>
              <p className="body-lg" style={{ marginBottom: "3rem", color: "rgba(255,255,255,0.7)" }}>
                We are always looking for sponsors, community partners, and
                corporate clients who share our vision for a circular Kenya.
              </p>
            </RevealItem>
            <RevealItem>
              <Link href="/contact" className="btn btn-lime">
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
