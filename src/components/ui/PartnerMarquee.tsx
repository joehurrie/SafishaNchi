"use client";

import Image from "next/image";
import styles from "./PartnerMarquee.module.css";

const partners = [
  { name: "County Government of Kisumu", src: "/assets/County%20Government%20of%20Kisumu-logo.jfif" },
  { name: "NEMA", src: "/assets/nema%20logo.jfif" },
  { name: "Kepro", src: "/assets/kepro-logo.png" },
  { name: "New Life Mission", src: "/assets/New%20Life%20Mission%20Aid.jfif" },
  { name: "Human Brights", src: "/assets/Human%20Bight%20logo.jfif" },
  { name: "Norwegian Retailers", src: "/assets/norwegian%20logo.png" },
  { name: "Linkon AS", src: "/assets/linkon%20logo.PNG" },
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
