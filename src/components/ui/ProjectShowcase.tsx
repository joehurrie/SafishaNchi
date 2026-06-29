"use client";

import { useState } from "react";
import Link from "next/link";
import ProjectCard from "./ProjectCard";
import ProjectModal, { type ProjectData } from "./ProjectModal";
import { RevealGroup, RevealItem } from "./Reveal";
import { projectsData } from "./projectsData";
import styles from "./ProjectShowcase.module.css";

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
            <h2 className="display-lg">Our Projects.</h2>
          </RevealItem>
        </div>

        <RevealGroup className={styles.grid}>
          {projectsData.slice(0, 3).map((project) => (
            <RevealItem key={project.id}>
              <ProjectCard project={project} onSelect={setSelectedProject} />
            </RevealItem>
          ))}
        </RevealGroup>

        <div className={styles.ctaRow}>
          <Link href="/projects" className="btn btn-accent">
            More Projects
            <svg viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </Link>
        </div>
      </div>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
}
