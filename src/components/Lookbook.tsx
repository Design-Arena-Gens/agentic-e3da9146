import Image from "next/image";
import { lookbookShots } from "@/data/products";
import styles from "./Lookbook.module.css";

export function Lookbook() {
  return (
    <section id="lookbook" className={styles.section}>
      <div className="inner">
        <div className={styles.header}>
          <p className="section-title">Lookbook: Architectural Ease</p>
          <p className="section-subtitle">
            Sculpted silhouettes, neutral tonal layering, and artisan textiles
            combine for a refined yet effortless wardrobe foundation.
          </p>
        </div>
        <div className={styles.grid}>
          {lookbookShots.map((shot) => (
            <figure key={shot.alt} className={styles.figure}>
              <Image
                src={shot.image}
                alt={shot.alt}
                fill
                sizes="(min-width: 1200px) 360px, (min-width: 768px) 45vw, 90vw"
              />
              <figcaption>{shot.alt}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
