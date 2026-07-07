import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import { projectsData } from "@/components/ui/projectsData";
import Reveal, { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import Footer from "@/components/layout/Footer";

// Generate static params for all known projects
export function generateStaticParams() {
  return projectsData.map((project) => ({
    id: project.id,
  }));
}

export default async function ProjectDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = projectsData.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  const otherProjects = projectsData.filter((p) => p.id !== id);

  return (
    <>
      {/* 1. HERO */}
      <section className={`section-100 zone-dark ${styles.hero}`}>
        <div className={styles.hero__bg}>
          <Image
            src={project.image}
            alt={project.title}
            fill
            priority
            style={{ objectFit: "cover" }}
          />
          <div className={styles.hero__overlay} />
        </div>
        <div className={`container ${styles.hero__inner}`}>
          <RevealGroup>
            <RevealItem>
              <span className="overline overline--lime">{project.tag}</span>
            </RevealItem>
            <RevealItem>
              <h1 className="display-xl" style={{ color: "var(--white)" }}>
                {project.title}
              </h1>
            </RevealItem>
          </RevealGroup>
        </div>
      </section>

      {/* 2. DETAILS */}
      <section className={styles.details}>
        <div className={`container ${styles.detailsInner}`}>
          <RevealGroup>
            <div className={styles.section}>
              <RevealItem>
                <h3 className="display-sm">Overview</h3>
                {project.overview.split("\n\n").map((p, idx) => (
                  <p key={idx} className="body-lg" style={{ color: "var(--on-dark-muted)", marginBottom: "1rem" }}>
                    {p}
                  </p>
                ))}
              </RevealItem>
            </div>

            <div className={styles.grid2}>
              <div className={styles.section}>
                <RevealItem>
                  <h3 className="display-sm">Stakeholders</h3>
                  <ul className={styles.list}>
                    {project.stakeholders.map((s, i) => (
                      <li key={i}>{s}</li>
                    ))}
                  </ul>
                </RevealItem>
              </div>
              <div className={styles.section}>
                <RevealItem>
                  <h3 className="display-sm">Impact</h3>
                  <ul className={styles.list}>
                    {project.impact.map((imp, i) => (
                      <li key={i}>
                        <strong>{imp.value}</strong> — {imp.label}
                      </li>
                    ))}
                  </ul>
                </RevealItem>
              </div>
            </div>

            <div className={styles.section}>
              <RevealItem>
                <h3 className="display-sm">The Narrative</h3>
                {project.story.split("\n\n").map((p, idx) => (
                  <p key={idx} className="body-lg" style={{ color: "var(--on-dark-muted)", marginBottom: "1.5rem" }}>
                    {p}
                  </p>
                ))}
              </RevealItem>
            </div>
          </RevealGroup>
        </div>
      </section>

      {/* 3. OTHER PROJECTS */}
      <section className={styles.otherProjects}>
        <div className="container">
          <RevealGroup>
            <RevealItem>
              <h2 className="display-md" style={{ color: "var(--white)" }}>Other Projects</h2>
            </RevealItem>
            <div className={styles.otherGrid}>
              {otherProjects.map((p, index) => (
                <RevealItem key={p.id} delay={index * 0.1}>
                  <Link href={`/projects/${p.id}`} className={styles.otherCard}>
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      style={{ objectFit: "cover" }}
                    />
                    <div className={styles.otherOverlay}>
                      <span className="overline overline--lime">{p.tag}</span>
                      <h3 className={styles.otherTitle}>{p.title}</h3>
                    </div>
                  </Link>
                </RevealItem>
              ))}
            </div>
          </RevealGroup>
        </div>
      </section>
      
      {/* 4. FOOTER */}
      {/* The Footer is rendered by the layout, but if they explicitly want it attached to the bottom of the project document on a green background... wait, layout.tsx already renders <Footer /> on all pages. Let's make sure we don't duplicate it. */}
    </>
  );
}
