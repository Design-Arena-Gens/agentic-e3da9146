import Image from "next/image";
import Link from "next/link";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section className={styles.hero}>
      <div className="inner">
        <div className={styles.panel}>
          <div className={styles.copy}>
            <span className={styles.kicker}>Menswear Studio / SS25</span>
            <h1>
              Engineered trousers
              <span> designed to elevate every dimension of your day.</span>
            </h1>
            <p>
              Discover precision-tailored silhouettes crafted in Italian and
              Japanese mills. Move freely with hidden stretch architecture while
              maintaining a sharp, architectural line.
            </p>
            <div className={styles.actions}>
              <Link href="#new-arrivals" className={styles.primary}>
                Explore Collection
              </Link>
              <Link href="#fit" className={styles.secondary}>
                Fit guidance
              </Link>
            </div>
            <div className={styles.stats}>
              <div>
                <span>48hr</span>
                <p>Complimentary tailoring turnaround.</p>
              </div>
              <div>
                <span>7 fits</span>
                <p>Dialed to match your build & posture.</p>
              </div>
              <div>
                <span>∞</span>
                <p>Alterations guaranteed for the life of the garment.</p>
              </div>
            </div>
          </div>
          <div className={styles.media}>
            <div className={styles.primaryImage}>
              <Image
                src="https://images.unsplash.com/photo-1521572212565-7a1c01d19f97?auto=format&fit=crop&w=1200&q=80"
                alt="Man wearing tailored trousers in studio"
                fill
                sizes="(min-width: 1200px) 520px, (min-width: 768px) 50vw, 90vw"
                priority
              />
            </div>
            <div className={styles.secondaryCard}>
              <p>Custom hem finishing</p>
              <span>Tailors in Porto, Seoul, and NYC</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
