"use client";

import Image from "next/image";
import styles from "./PartnerMarquee.module.css";

const partners = [
  { name: "County Government of Kisumu", src: "/assets/County Government of Kisumu-logo.jfif" },
  { name: "NEMA", src: "/assets/nema logo.jfif" },
  { name: "Kepro", src: "/assets/kepro-logo.png" },
  { name: "New Life Mission", src: "/assets/New Life Mission Aid.jfif" },
  { name: "Human Brights", src: "/assets/Human Bight logo.jfif" },
  { name: "Norwegian Retailers", src: "/assets/norwegian logo.png" },
  { name: "Linkon AS", src: "/assets/linkon logo.PNG" },
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
              style={{ objectFit: "contain" }} 
            />
          </div>
        ))}
      </div>
    </div>
  );
}
