"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./ProjectCard.module.css";
import type { ProjectData } from "./ProjectModal";

interface ProjectCardProps {
  project: ProjectData;
  onSelect: (project: ProjectData) => void;
}

export default function ProjectCard({ project, onSelect }: ProjectCardProps) {
  return (
    <motion.div
      layoutId={`card-${project.id}`}
      className={styles.card}
      onClick={() => onSelect(project)}
      whileHover="hover"
      initial="rest"
    >
      <div className={styles.imageWrap}>
        <motion.div
          className={styles.imageInner}
          variants={{
            rest: { scale: 1 },
            hover: { scale: 1.05 }
          }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <Image src={project.image} alt={project.title} fill style={{ objectFit: "cover" }} />
        </motion.div>

        {/* Subtle dark overlay — no color tinting */}
        <motion.div
          className={styles.mask}
          variants={{
            rest: { opacity: 0.35 },
            hover: { opacity: 0.08 }
          }}
          transition={{ duration: 0.5 }}
        />
      </div>

      <div className={styles.body}>
        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.overview}>{project.overview}</p>
        <span className={styles.cta}>View Project</span>
      </div>
    </motion.div>
  );
}
