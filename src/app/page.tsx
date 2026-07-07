"use client";

import { useState } from "react";

import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import ImpactCard, { ImpactCardData } from "@/components/ui/ImpactCard";
import ExpertiseAccordion from "@/components/ui/ExpertiseAccordion";
import PartnerMarquee from "@/components/ui/PartnerMarquee";
import ProjectsShowcase from "@/components/ui/ProjectsShowcase";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";

// ─── Static data ────────────────────────────────────────────────
const partners = [
  { name: "Kisumu County Government", src: "/assets/County Government of Kisumu-logo.jfif" },
  { name: "NEMA Kenya", src: "/assets/nema logo.jfif" },
  { name: "KEPRO", src: "/assets/kepro-logo.png" },
  { name: "New Life Mission Aid", src: "/assets/New Life Mission Aid.jfif" },
];

const impactCards: ImpactCardData[] = [
  {
    id: "diverted",
    label: "Waste Diverted from Landfills",
    value: 360,
    suffix: "T+",
    metric: "Tonnes",
    detail:
      "360+ metric tonnes of post-consumer plastics, glass, and fibre recovered from Kisumu communities — material that would otherwise enter waterways or open dumps.",
    img: "/assets/bales2.jpeg",
    imgAlt: "Baled plastics at Safisha Nchi processing hub",
  },
  {
    id: "collectors",
    label: "Informal Collectors Supported",
    value: 150,
    suffix: "+",
    metric: "People",
    detail:
      "Over 150 informal waste pickers integrated into our formal collection network — receiving transparent pricing, PPE, health training, and financial literacy support.",
    img: "/assets/wastecollector1.jpeg",
    imgAlt: "Waste pickers at community buy-back centre",
  },
  {
    id: "hubs",
    label: "Community Buy-Back Centres",
    value: 7,
    suffix: "",
    metric: "Hubs",
    detail:
      "Seven satellite collection hubs embedded across Kisumu's densest informal settlements — each operating transparent weighing systems and immediate cash payment.",
    img: "/assets/buyback.jpeg",
    imgAlt: "Safisha Nchi buy-back centre operations",
  },
  {
    id: "co2",
    label: "CO₂ Equivalent Offset",
    value: 270,
    suffix: "T",
    metric: "Tonnes CO₂",
    detail:
      "Recycling 360+ tonnes of material avoids the equivalent of 270 tonnes of CO₂ — compared to virgin material production and open landfill decomposition.",
    img: "/assets/Investor.jpeg",
    imgAlt: "Community tree planting and environmental cleanup",
  },
];

// ─── Homepage ───────────────────────────────────────────────────
export default function Home() {
  const [hoveredImpact, setHoveredImpact] = useState<string | null>(null);

  return (
    <>
      {/* ═══════════════════════════════════════════
          1. HERO
      ═══════════════════════════════════════════ */}
      <section className={styles.hero} aria-labelledby="hero-h1">
        <div className={styles.hero__bg}>
          <Image
            src="/assets/img.png"
            alt="Safisha Nchi waste management and recycling operations, Kisumu Kenya"
            fill priority
            style={{ objectFit: "cover", objectPosition: "center 25%" }}
          />
          <div className={styles.hero__veil} />
        </div>

        <div className={`container ${styles.hero__body}`}>
          <RevealGroup className={styles.hero__copy}>
            <RevealItem>
              <span className={`overline overline--lime`}>
                Waste Management · Circular Economy · Kisumu, Kenya
              </span>
            </RevealItem>
            <RevealItem>
              <h1 className={`display-xl ${styles.hero__h1}`} id="hero-h1">
                Recycling Waste,  Improving <span style={{ color: "var(--lime)" }}>Livelihoods</span>
              </h1>
            </RevealItem>
            <RevealItem>
              <p className={styles.hero__sub}>
                We bridge the gap between environmental necessity and economic opportunity by turning waste into a resource for growth.
              </p>
            </RevealItem>
            <RevealItem>
              <div className={styles.hero__actions}>
                <Link href="/materials" className="btn btn-primary">
                  See How We Operate
                  <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                </Link>
                <Link href="/contact" className="btn btn-outline-white">
                  Partner With Us
                </Link>
              </div>
            </RevealItem>
          </RevealGroup>

          {/* Scroll indicator */}
          <div className={styles.hero__scroll} aria-hidden="true">
            <div className={styles.scroll__bar} />
            <span>Scroll</span>
          </div>
        </div>

        {/* Quick stats overlay */}
        <div className={styles.hero__stats} aria-label="Key operational metrics">
          {[
            { n: 360, s: "T+", l: "Waste Diverted" },
            { n: 150, s: "+", l: "Collectors Supported" },
            { n: 7, s: "", l: "Collection Hubs" },
            { n: 10, s: "yr+", l: "Years Operating" },
          ].map((st) => (
            <div key={st.l} className={styles.hero__stat}>
              <AnimatedCounter target={st.n} suffix={st.s} className={styles.hero__stat__num} />
              <span className={styles.hero__stat__lbl}>{st.l}</span>
            </div>
          ))}
        </div>
      </section>



      {/* ═══════════════════════════════════════════
          2. ABOUT — Concise summary
      ═══════════════════════════════════════════ */}
      <section className={`section zone-canvas ${styles.about}`} aria-labelledby="about-h2">
        <div className="container">
          <div className={styles.about__grid}>

            {/* Left: statement */}
            <RevealItem direction="left" className={styles.about__left}>
              <span className="overline">About Safisha Nchi Ltd.</span>
              <h2 className={`display-lg ${styles.about__headline}`} id="about-h2">
                Waste Management<br />for a Better Environment.
              </h2>
              <Link href="/about" className={`btn btn-forest ${styles.about__cta}`}>
                Our Story
                <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
            </RevealItem>

            {/* Right: concise summary */}
            <RevealItem direction="right" className={styles.about__right}>
              <p className={styles.about__para}>
                Safisha Nchi is a Kenyan waste management enterprise operating in Kisumu, Kenya. We run community Buy-Back Centres, sort and
                process post-consumer plastics, glass, and paperboard, creating dignified livelihoods, and
                supplying recycled feedstock to industrial buyers.
              </p>

              {/* Credentials row */}
              <div className={styles.about__credentials}>
                {["NEMA Registered", "KIWAN Member", "Waste-to-Green-Jobs", "10+ Years Operating"].map((c) => (
                  <span key={c} className="chip chip--outline">{c}</span>
                ))}
              </div>
            </RevealItem>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          3. IMPACT — Full-bleed 100vh image strip
      ═══════════════════════════════════════════ */}
      <section
        className={styles.impact__section}
        aria-labelledby="impact-h2"
        aria-label="Measurable Impact"
      >
        {/* Section label floats above the strip */}
        <div className={styles.impact__label__row}>
          <span className="overline" style={{ color: "rgba(255,255,255,0.5)" }}>
            Measurable Impact
          </span>
          <h2 className={styles.impact__eyebrow} id="impact-h2">
            Hover to explore our impact
          </h2>
        </div>

        {/* Horizontal strip of image columns */}
        <div className={styles.impact__strip} role="list">
          {impactCards.map((card, i) => (
            <ImpactCard
              key={card.id}
              card={card}
              delay={i * 0.05}
              isHovered={hoveredImpact === card.id}
              onHover={setHoveredImpact}
              anyHovered={hoveredImpact !== null}
            />
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          4. PARTNERS CAROUSEL
      ═══════════════════════════════════════════ */}
      <section className={`${styles.partners} zone-alt`} aria-label="Partner organisations" style={{ paddingBottom: "var(--sp-12)" }}>
        <div className="container">
          <p className={styles.partners__eyebrow}>
            OUR PARTNERS AND STAKEHOLDERS
          </p>
        </div>
        <PartnerMarquee />
      </section>

      {/* ═══════════════════════════════════════════
          5. EXPERTISE ACCORDION
      ═══════════════════════════════════════════ */}
      <section className={`section zone-canvas ${styles.expertise__section}`} aria-labelledby="expertise-h2">
        <div className="container">
          <div className={styles.expertise__header}>
            <RevealItem>
              <span className="overline">Our Expertise</span>
              <h2 className={`display-md`} id="expertise-h2" style={{ marginTop: "0.5rem" }}>
                Our Waste Management System.
              </h2>
              <p className="body-md" style={{ marginTop: "0.75rem", maxWidth: "56ch" }}>
                Six interconnected service streams working as one — from
                community collection through sorting, recycling, training,
                consulting, and waste picker empowerment.
              </p>
            </RevealItem>
          </div>
          <ExpertiseAccordion />
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          6. FULL-BLEED BANNER
      ═══════════════════════════════════════════ */}
      <section className={styles.banner} aria-label="Community empowerment through recycling">
        <div className={styles.banner__img}>
          <Image
            src="/assets/sitetour.JPG"
            alt="Community waste collection drives in Kisumu informal settlements"
            fill
            style={{ objectFit: "cover", objectPosition: "center 40%" }}
          />
          <div className={styles.banner__veil} />
        </div>
        <div className={`container ${styles.banner__content}`}>
          <RevealItem direction="left">
            <h2 className={`display-md ${styles.banner__headline}`}>
              We don&apos;t just manage waste.<br />We build environmental and economic infrastructure.
            </h2>
            <p className={styles.banner__sub}>
              Every tonne collected creates verified livelihoods for the women
              and youth who recover it, transforming ecological challenges into
              sustainable green careers.
            </p>
          </RevealItem>
          <RevealItem direction="right">
            <Link href="/about" className="btn btn-primary">
              Learn More
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </Link>
          </RevealItem>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          7. DUAL CTA — Investors + Consultation
      ═══════════════════════════════════════════ */}
      <section className={`section zone-alt ${styles.dual__cta}`} aria-label="Partnership and consultation options">
        <div className="container">
          <div className={styles.dual__grid}>

            {/* Card A — Investor / Partner callout (forest) */}
            <RevealItem direction="left" className={styles.cta__card__a}>
              <div className={styles.cta__a__img}>
                <Image src="/assets/team1.jpeg" alt="Safisha Nchi partnership meetings" fill style={{ objectFit: "cover" }} />
                <div className={styles.cta__a__img__veil} />
              </div>
              <div className={styles.cta__a__body}>
                <span className={`overline overline--on-dark`}>For Investors &amp; Partners</span>
                <h2 className={`display-sm ${styles.cta__a__headline}`}>
                  Attracting investors &amp; partners to build Kenya&apos;s circular economy.
                </h2>
              </div>
            </RevealItem>

            {/* Card B — Free consultation (lime) */}
            <RevealItem direction="right" className={styles.cta__card__b}>
              <span className="overline">Free Consultation</span>
              <h2 className={`display-sm ${styles.cta__b__headline}`}>
                Ready to recycle smarter? Book a free consultation.
              </h2>
              <p className={styles.cta__b__desc}>
                Whether you run a hotel, school, manufacturing plant, or
                county authority — our team will analyse your current waste
                profile and design a compliant, cost-effective diversion plan.
                No obligation, no jargon.
              </p>

              <div className={styles.cta__b__points}>
                {[
                  "On-site waste audit included",
                  "NEMA compliance gap analysis",
                  "Custom collection schedule",
                  "ESG reporting support",
                ].map((pt) => (
                  <div key={pt} className={styles.cta__point}>
                    <div className={styles.point__dot} aria-hidden="true" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>

              <Link href="/contact" className="btn btn-forest" style={{ marginTop: "2rem", alignSelf: "flex-start" }}>
                Book a Free Consultation
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
            </RevealItem>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          8. PROJECTS SHOWCASE
      ═══════════════════════════════════════════ */}
      <section className={`section zone-canvas ${styles.projects__section}`} aria-labelledby="projects-h2">
        <div className="container">
          <div className={styles.projects__header}>
            <RevealItem>
              <span className="overline">Our Projects</span>
              <h2 className="display-md" id="projects-h2" style={{ marginTop: "0.5rem" }}>
                Our Projects.
              </h2>
              <p className="body-md" style={{ marginTop: "0.75rem", maxWidth: "52ch" }}>
                Click any project to explore the full story. Each one is a step
                in building Kenya&apos;s circular economy — ground up.
              </p>
            </RevealItem>
          </div>
          <ProjectsShowcase />
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          9. MAP — Location hub section
      ═══════════════════════════════════════════ */}
      <section className={`${styles.map__section}`} aria-labelledby="map-h2">
        <div className={styles.map__header}>
          <div className="container">
            <RevealItem>
              <span className="overline">Find Us</span>
              <h2 className="display-sm" id="map-h2" style={{ marginTop: "0.4rem" }}>
                Our processing hubs &amp; Buy-Back Centres across Kisumu.
              </h2>
            </RevealItem>
          </div>
        </div>

        <div className={styles.map__embed}>
          <iframe
            title="Safisha Nchi locations in Kisumu, Kenya"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63835.06399843843!2d34.70299535!3d-0.09199995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182aa433a44ab001%3A0x47c9de0a9ef4f5a7!2sKisumu%2C%20Kenya!5e0!3m2!1sen!2sus!4v1720000000000!5m2!1sen!2sus&style=feature:all|saturation:-30"
            width="100%"
            height="100%"
            style={{ border: 0, filter: "grayscale(15%) contrast(1.05)" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />

          {/* Hub legend overlay */}
          <div className={styles.map__legend}>
            <div className={styles.map__legend__title}>Collection Network</div>
            <div className={styles.map__legend__item}>
              <div className={`${styles.map__dot} ${styles.map__dot__main}`} />
              <span>Kisumu Central Hub — Main Processing Site</span>
            </div>
            <div className={styles.map__legend__item}>
              <div className={`${styles.map__dot} ${styles.map__dot__sat}`} />
              <span>7 Satellite Buy-Back Centres</span>
            </div>
            <Link href="/contact" className={`btn btn-primary ${styles.map__legend__btn}`}>
              Get Directions
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          10. CONNECT / CONTACT PREVIEW
      ═══════════════════════════════════════════ */}
      <section className={`section zone-dark ${styles.connect}`} aria-labelledby="connect-h2">
        <div className="container">
          <div className={styles.connect__grid}>
            <RevealItem direction="left" className={styles.connect__left}>
              <span className="overline overline--on-dark">Get in Touch</span>
              <h2 className={`display-lg ${styles.connect__headline}`} id="connect-h2">
                Let&apos;s Connect.
              </h2>
              <p className={styles.connect__sub}>
                Waste collection contracts, community partnerships, investment
                discussions, or NEMA compliance advisory — our team responds
                within 24 hours.
              </p>
              <div className={styles.connect__details}>
                {[
                  { icon: "📞", val: "+254 727 107 994", href: "tel:+254727107994" },
                  { icon: "✉️", val: "info@safishanchi.co.ke", href: "mailto:info@safishanchi.co.ke" },
                  { icon: "📍", val: "Kisumu, Kenya", href: "https://maps.google.com/?q=Kisumu,Kenya" },
                ].map((d) => (
                  <a key={d.val} href={d.href} className={styles.connect__detail} target={d.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">
                    <span className={styles.connect__detail__icon}>{d.icon}</span>
                    <span>{d.val}</span>
                  </a>
                ))}
              </div>
            </RevealItem>

            <RevealItem direction="right" className={styles.connect__form__card}>
              <h3 className={styles.form__card__title}>Send us a message</h3>
              <form className={styles.connect__form} onSubmit={(e) => e.preventDefault()}>
                <div className={styles.form__row}>
                  <div className="form-field">
                    <label className="form-label" htmlFor="hp-name">Full Name</label>
                    <input className="form-input" type="text" id="hp-name" required placeholder="Jane Mwangi" />
                  </div>
                  <div className="form-field">
                    <label className="form-label" htmlFor="hp-email">Email Address</label>
                    <input className="form-input" type="email" id="hp-email" required placeholder="jane@company.co.ke" />
                  </div>
                </div>
                <div className="form-field">
                  <label className="form-label" htmlFor="hp-interest">Area of Interest</label>
                  <select className="form-input" id="hp-interest" defaultValue="" required>
                    <option value="" disabled>Select an option…</option>
                    <option>Waste Collection</option>
                    <option>Community Partnerships</option>
                    <option>Waste Management Consultation</option>
                    <option>Sponsor a Project</option>
                    <option>Training on Waste Management</option>
                    <option>General Inquiry</option>
                  </select>
                </div>
                <div className="form-field">
                  <label className="form-label" htmlFor="hp-msg">Message</label>
                  <textarea className="form-input" id="hp-msg" rows={4} placeholder="Tell us about your waste challenge or how you'd like to partner…" />
                </div>
                <button type="submit" className="btn btn-primary" style={{ width: "100%", justifyContent: "center" }}>
                  Send Message
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                </button>
              </form>
            </RevealItem>
          </div>
        </div>
      </section>
    </>
  );
}