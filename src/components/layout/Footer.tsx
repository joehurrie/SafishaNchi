import Image from "next/image";
import Link from "next/link";
import styles from "./Footer.module.css";

const footerNav = [
  {
    title: "Navigate",
    links: [
      { label: "Home", href: "/" },
      { label: "Materials", href: "/materials" },
      { label: "About Us", href: "/about" },
      { label: "Projects", href: "/projects" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Projects",
    links: [
      { label: "Kisumu Central Hub", href: "/projects/kisumu-project" },
      { label: "Carbon Emission Measurement", href: "/projects/carbon-emission" },
      { label: "KIWAN Network", href: "/projects/kiwan-network" },
    ],
  },
  {
    title: "Get Involved",
    links: [
      { label: "Waste Collection", href: "/contact" },
      { label: "Community Partnerships", href: "/contact" },
      { label: "Sponsor a Project", href: "/contact" },
      { label: "Training", href: "/contact" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footer__inner}`}>
        {/* Top grid */}
        <div className={styles.footer__grid}>
          {/* Brand col */}
          <div className={styles.footer__brand}>
            <Link href="/" className={styles.logo} aria-label="Safisha Nchi">
              <Image src="/assets/logo.png" alt="" width={72} height={72} className={styles.logo__image} />
              <span className={styles.logo__text}>Safisha Nchi</span>
            </Link>
            <p className={styles.footer__tagline}>
              Clean The Country
            </p>
            <div className={styles.footer__contact}>
              <a href="tel:+254740113368">+254 727 107 994</a>
              <a href="mailto:info@safishanchi.co.ke">info@safishanchi.co.ke</a>

            </div>
          </div>

          {/* Nav cols */}
          {footerNav.map((col) => (
            <div key={col.title} className={styles.footer__col}>
              <h4 className={styles.footer__col__title}>{col.title}</h4>
              <ul>
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className={styles.footer__bottom}>
          <span>© {new Date().getFullYear()} Safisha Nchi Limited. All rights reserved.</span>
          <div className={styles.footer__legal}>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
