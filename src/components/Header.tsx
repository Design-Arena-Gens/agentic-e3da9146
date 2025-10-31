import Link from "next/link";
import styles from "./Header.module.css";

const navLinks = [
  { label: "New Arrivals", href: "/#new-arrivals" },
  { label: "Tailored Fit", href: "/#fit" },
  { label: "Lookbook", href: "/#lookbook" },
  { label: "Journal", href: "/#journal" },
  { label: "Support", href: "/#support" },
];

export function Header() {
  return (
    <header className={styles.header}>
      <div className="inner">
        <div className={styles.inner}>
          <Link className={styles.brand} href="/">
            <span>Atelier</span>
            <span>M</span>
          </Link>
          <nav className={styles.nav}>
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className={styles.navLink}>
                {link.label}
              </Link>
            ))}
          </nav>
          <div className={styles.actions}>
            <Link className={styles.link} href="/products/atelier-signature-trouser">
              Shop Signature
            </Link>
            <Link className={styles.button} href="#fit">
              Book a Fitting
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
