"use client";

import Image from "next/image";
import styles from "./PartnerMarquee.module.css";

const partners = [
  { name: "County Government of Kisumu", src: "/assets/logos/county-government-of-kisumu-logo.jpg" },
  { name: "NEMA", src: "/assets/logos/nema-logo.jpg" },
  { name: "Kepro", src: "/assets/logos/kepro-logo.png" },
  { name: "New Life Mission", src: "/assets/logos/new-life-mission-aid.jpg" },
  { name: "Human Brights", src: "/assets/logos/human-bight-logo.jpg" },
  { name: "Norwegian Retailers", src: "/assets/logos/norwegian-logo.png" },
  { name: "KAWR", src: "/assets/kawr.jpg" },
  { name: "Linkon AS", src: "/assets/logos/linkon-logo.png" },
  { name: "Pakpro", src: "/assets/pakpro-logo.png" },
];

export default function PartnerMarquee() {
  // We duplicate the array to ensure seamless infinite scrolling
  const duplicatedPartners = [...partners, ...partners];

  return (
    <div className={styles.marquee__container}>
      <div className={styles.marquee__track}>
        {duplicatedPartners.map((partner, idx) => (
          <div key={`${partner.name}-${idx}`} className={styles.marquee__item}>
            <Image
              src={partner.src}
              alt={partner.name}
              fill
              sizes="150px"
              style={{ objectFit: "contain", borderRadius: "8px" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
