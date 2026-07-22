"use client";

import Image from "next/image";
import styles from "./ImpactCard.module.css";

export interface ImpactCardData {
  id: string;
  label: string;
  value: number;
  suffix: string;
  prefix?: string;
  metric: string;
  detail: string;
  img: string;
  imgAlt: string;
}

interface Props {
  card: ImpactCardData;
  delay?: number;
  isHovered: boolean;
  onHover: (id: string | null) => void;
  anyHovered: boolean;
}

export default function ImpactCard({ card, delay = 0, isHovered, onHover, anyHovered }: Props) {
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // On desktop only: hover state is managed by mouse events
    // On mobile: no interaction needed, cards always show full content
    if (window.innerWidth > 768) {
      onHover(card.id);
    }
  };

  return (
    <div
      className={`${styles.card} ${isHovered ? styles.card__expanded : ""} ${anyHovered && !isHovered ? styles.card__compressed : ""}`}
      onMouseEnter={() => onHover(card.id)}
      onMouseLeave={() => onHover(null)}
      onClick={handleClick}
      tabIndex={0}
      onFocus={() => onHover(card.id)}
      onBlur={() => onHover(null)}
      role="article"
      aria-label={`${card.label}: ${card.prefix ?? ""}${card.value}${card.suffix} ${card.metric}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      {/* Full image background */}
      <div className={styles.card__img}>
        <Image
          src={card.img}
          alt={card.imgAlt}
          fill
          sizes="(max-width: 768px) 100vw, 25vw"
          style={{ objectFit: "cover" }}
        />
        {/* Gradient overlay — always present, deepens on hover */}
        <div className={`${styles.card__veil} ${isHovered ? styles.card__veil__deep : ""}`} />
      </div>

      {/* Default state: stat number visible at bottom */}
      <div className={`${styles.card__default} ${isHovered ? styles.card__default__hidden : ""}`}>
        <span className={styles.default__num}>
          {card.prefix ?? ""}{card.value}{card.suffix}
        </span>
        <span className={styles.default__label}>{card.label}</span>
      </div>

      {/* Hover reveal: full content slides up */}
      <div className={`${styles.card__reveal} ${isHovered ? styles.card__reveal__visible : ""}`}>
        <span className={styles.reveal__metric}>{card.metric}</span>
        <div className={styles.reveal__stat}>
          <span className={styles.reveal__num}>
            {card.prefix ?? ""}{card.value}{card.suffix}
          </span>
        </div>
        <h3 className={styles.reveal__label}>{card.label}</h3>
        <p className={styles.reveal__detail}>{card.detail}</p>
      </div>
    </div>
  );
}
