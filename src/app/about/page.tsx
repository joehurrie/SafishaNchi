import Image from "next/image";
import type { Metadata } from "next";
import styles from "./page.module.css";
import Reveal, { RevealGroup, RevealItem } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "About Us | Safisha Nchi",
  description:
    "Learn about Safisha Nchi's mission, our team, and our vision for a circular economy in Kenya. We empower youth and women through dignified green jobs.",
};

const strategy = [
  { title: "Expand Buy-Back Network", desc: "Scale from 7 to 15+ satellite hubs, covering more communities and increasing monthly collection volumes." },
  { title: "Household Garbage Collection", desc: "Expand our logistics network to provide direct household waste collection, ensuring proper segregation at source." },
  { title: "Organic Waste & BSF", desc: "Introduce large-scale organic waste management using Black Soldier Fly (BSF) larvae — producing high-protein animal feed and organic fertilizer." },
  { title: "New Balers & Infrastructure", desc: "Install industrial-grade hydraulic balers at main hubs to increase throughput capacity and improve baled output quality for mills." },
  { title: "Government & Policy Alliances", desc: "Strengthen collaborations with county governments and support NEMA Act recycling mandate implementation across all operating regions." },
];

const timeline = [
  { year: "2014", label: "The Beginning", desc: "Founded with a single buy-back centre in Kisumu, focused on informal plastic recovery." },
  { year: "2017", label: "Network Growth", desc: "Expanded to 3 satellite hubs; established relationships with 50+ informal collectors." },
  { year: "2020", label: "Value Addition", desc: "Introduced sorting, crushing and baling capabilities. First batch of manufacturing-grade pellets produced." },
  { year: "2023", label: "Scaling Impact", desc: "Reached 150+ active collectors, 7 satellite hubs, and 360T+ total waste diverted. KIWAN membership established." },
  { year: "2026+", label: "The Future", desc: "Household collection, BSF organic waste processing, and expansion to 15+ hubs across Western Kenya." },
];

export default function AboutPage() {
  return (
    <>
      {/* 1. HERO (100vh, Light Surface) */}
      <section className={`section-100 zone-light ${styles.hero}`}>
        <div className={styles.hero__bg}>
          <Image src="/assets/about.png" alt="Safisha Nchi team at work" fill priority style={{ objectFit: "cover", opacity: 0.1 }} />
        </div>
        <div className={`container ${styles.hero__inner}`}>
          <RevealGroup>
            <RevealItem><span className="overline">About Us</span></RevealItem>
            <RevealItem>
              <h1 className="display-xl" style={{ maxWidth: "800px" }}>
                Our journey toward a cleaner future.
              </h1>
            </RevealItem>
          </RevealGroup>
        </div>
      </section>

      {/* 2. MISSION (100vh, Dark Panel) */}
      <section className={`section-100 zone-dark`}>
        <div className="container">
          <div className={styles.mission__grid}>
            <RevealGroup className={styles.mission__headline}>
              <RevealItem><span className="overline overline--dark">Our Mission</span></RevealItem>
              <RevealItem>
                <h2 className="display-md">
                  Safisha Nchi delivers sustainable waste management solutions,
                  helping businesses and communities
                  transition to clean, circular, future-ready practices.
                </h2>
              </RevealItem>
            </RevealGroup>
            
            <RevealGroup className={styles.mission__copy}>
              <RevealItem>
                <p className="body-lg" style={{ color: "var(--dark-sub)", marginBottom: "1.5rem" }}>
                  We connect informal waste collectors directly to industrial
                  recyclers — removing middlemen, paying fair prices, and
                  building the circular infrastructure Kenya needs.
                </p>
              </RevealItem>
              <RevealItem>
                <p className="body-md" style={{ color: "var(--dark-sub)" }}>
                  Our model creates dignified employment, drives environmental
                  accountability, and transforms what was once waste into
                  high-value industrial raw materials.
                </p>
              </RevealItem>
            </RevealGroup>
          </div>
        </div>
      </section>

      {/* 3. PEOPLE IMPACT (Light Surface) */}
      <section className={`section-100 zone-light`}>
        <div className="container">
          <div className={styles.impact__grid}>
            <div className={styles.impact__img}>
              <Image src="/assets/wastepickers2.jpg" alt="Youth and women waste pickers at work" fill style={{ objectFit: "cover", filter: "grayscale(100%)" }} />
            </div>
            <div className={styles.impact__copy}>
              <RevealGroup>
                <RevealItem><span className="overline">Our People Impact</span></RevealItem>
                <RevealItem>
                  <h2 className="display-md" style={{ marginBottom: "3rem" }}>
                    Empowering vulnerable youth & women.
                  </h2>
                </RevealItem>
                
                {[
                  { icon: "👷", title: "Youth & Women Empowerment", desc: "Providing dignified green jobs and financial independence for vulnerable youth and women across Kisumu." },
                  { icon: "🦺", title: "Health, Safety & PPE Provision", desc: "Equipping all our collectors and staff with comprehensive PPE and regular health and safety training." },
                  { icon: "📢", title: "Community Education Initiatives", desc: "Over 5.5 Million impressions generated through our grassroots environmental awareness campaigns." },
                ].map((item, i) => (
                  <RevealItem key={item.title} className={styles.impact__item}>
                    <div className={styles.impact__icon}>{item.icon}</div>
                    <div>
                      <h3 className={styles.impact__item__title}>{item.title}</h3>
                      <p className={styles.impact__item__desc}>{item.desc}</p>
                    </div>
                  </RevealItem>
                ))}
              </RevealGroup>
            </div>
          </div>
        </div>
      </section>

      {/* 4. HISTORY & TIMELINE (Light Surface) */}
      <section className={`section-100 zone-light`}>
        <div className="container">
          <div className="section-header--center">
            <RevealGroup>
              <RevealItem><span className="overline">Our History</span></RevealItem>
              <RevealItem><h2 className="display-lg">The path so far.</h2></RevealItem>
            </RevealGroup>
          </div>

          <RevealGroup className={styles.timeline}>
            {timeline.map((item) => (
              <RevealItem key={item.year} className={styles.timeline__item}>
                <span className={styles.timeline__year}>{item.year}</span>
                <div className={styles.timeline__content}>
                  <h3 className={styles.timeline__label}>{item.label}</h3>
                  <p className={styles.timeline__desc}>{item.desc}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* 5. STRATEGY (100vh, Dark Panel) */}
      <section className={`section-100 zone-dark`}>
        <div className="container">
          <div className="section-header--center">
            <RevealGroup>
              <RevealItem><span className="overline overline--dark">Vision & Growth</span></RevealItem>
              <RevealItem><h2 className="display-lg">Our roadmap to scaled impact.</h2></RevealItem>
            </RevealGroup>
          </div>
          
          <RevealGroup className={styles.strategy__grid}>
            {strategy.map((s) => (
              <RevealItem key={s.title} className={styles.strategy__card}>
                <h3 className={styles.strategy__title}>{s.title}</h3>
                <p className={styles.strategy__desc}>{s.desc}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* 6. TEAM (Light Surface) */}
      <section className={`section-100 zone-light`}>
        <div className="container">
          <div className="section-header--center">
            <RevealGroup>
              <RevealItem><span className="overline">Our People</span></RevealItem>
              <RevealItem><h2 className="display-md">The team behind Safisha Nchi.</h2></RevealItem>
              <RevealItem>
                <p className="body-lg" style={{ marginTop: "1rem" }}>
                  We are a dedicated team of environmentalists, engineers, and community organizers working towards a cleaner Kenya.
                </p>
              </RevealItem>
            </RevealGroup>
          </div>
          <Reveal className={styles.team__photo}>
            <Image src="/assets/about.png" alt="Safisha Nchi Team" fill style={{ objectFit: "cover", filter: "grayscale(100%)" }} />
            <div className={styles.team__caption}>
              <p>Our founder and the core operations team on-site at the Kisumu Central Hub, actively transforming waste management practices.</p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
