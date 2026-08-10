"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import styles from "./HeroSlideshow.module.css";

const SLIDES = [


  {
    src: "/assets/buybacknew.jpg",
    alt: "Community buy-back centre operations in Kisumu",
  },
  {
    src: "/assets/landfill4.jpg",
    alt: "Landfill diversion and waste sorting at Safisha Nchi",
  },
  {
    src: "/assets/landfillnew2.jpg",
    alt: "Baled plastics at Safisha Nchi processing hub",
  },
  {
    src: "/assets/bailer_new.jpg",
    alt: "Waste sorting site at Safisha Nchi community hub",
  },
  {
    src: "/assets/sacks.png",
    alt: "Safisha Nchi waste management and recycling operations, Kisumu Kenya",
  },
];

const INTERVAL_MS = 4000;

export default function HeroSlideshow() {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);
  const [direction, setDirection] = useState<"in" | "out">("in");
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const advance = (next: number) => {
    setPrev(current);
    setDirection("in");
    setCurrent(next);
  };

  useEffect(() => {
    timerRef.current = setInterval(() => {
      advance((current + 1) % SLIDES.length);
    }, INTERVAL_MS);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [current]);

  const goTo = (index: number) => {
    if (index === current) return;
    if (timerRef.current) clearInterval(timerRef.current);
    advance(index);
  };

  return (
    <div className={styles.slideshow} aria-hidden="true">
      {/* Render all slides; CSS controls which are visible */}
      {SLIDES.map((slide, i) => (
        <div
          key={slide.src}
          className={[
            styles.slide,
            i === current ? styles.slide__active : "",
            i === prev ? styles.slide__exit : "",
          ]
            .filter(Boolean)
            .join(" ")}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            priority={i === 0}
            sizes="100vw"
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
        </div>
      ))}

      {/* Dark-green veil overlay */}
      <div className={styles.veil} />

      {/* Dot navigation */}
      <div className={styles.dots} role="tablist" aria-label="Slideshow navigation">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            role="tab"
            aria-selected={i === current}
            aria-label={`Go to slide ${i + 1}`}
            className={[styles.dot, i === current ? styles.dot__active : ""].join(" ")}
            onClick={() => goTo(i)}
          />
        ))}
      </div>

      {/* Progress bar */}
      <div className={styles.progress__track} aria-hidden="true">
        <div
          key={current}
          className={styles.progress__bar}
          style={{ animationDuration: `${INTERVAL_MS}ms` }}
        />
      </div>
    </div>
  );
}
