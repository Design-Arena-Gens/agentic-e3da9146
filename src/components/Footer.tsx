import Link from "next/link";
import styles from "./Footer.module.css";

const menu = [
  {
    heading: "Explore",
    links: [
      { label: "Lookbook", href: "/#lookbook" },
      { label: "Tailoring Studio", href: "/#fit" },
      { label: "Editorial", href: "/#journal" },
    ],
  },
  {
    heading: "Support",
    links: [
      { label: "Contact Concierge", href: "/#support" },
      { label: "Delivery & Returns", href: "/#support" },
      { label: "Gift Concierge", href: "/#support" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About Atelier M", href: "/#journal" },
      { label: "Sustainability", href: "/#journal" },
      { label: "Careers", href: "/#journal" },
    ],
  },
];

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <div className="inner">
        <div className={styles.top}>
          <div>
            <p className={styles.brand}>Atelier M</p>
            <p className={styles.claim}>
              Elevated menswear engineered with precision tailoring, sustainable
              fabrications, and uncompromising attention to detail.
            </p>
          </div>
          <div className={styles.grid}>
            {menu.map((group) => (
              <div key={group.heading} className={styles.column}>
                <p className={styles.heading}>{group.heading}</p>
                <ul className={styles.links}>
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <Link href={link.href}>{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <form className={styles.newsletter}>
            <p className={styles.newsHeading}>Stay in the atelier loop</p>
            <p className={styles.newsCopy}>
              Receive invites to fittings, limited drops, and studio events
              before anyone else.
            </p>
            <div className={styles.inputRow}>
              <input
                type="email"
                name="email"
                placeholder="Email address"
                aria-label="Email address"
              />
              <button type="submit">Join</button>
            </div>
          </form>
        </div>
        <div className={styles.bottom}>
          <span>© {year} Atelier M</span>
          <div className={styles.bottomLinks}>
            <Link href="/#support">Privacy</Link>
            <Link href="/#support">Terms</Link>
            <Link href="/#support">Accessibility</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
