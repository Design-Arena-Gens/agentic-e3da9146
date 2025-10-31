import styles from "./FeatureShowcase.module.css";
import { editorialHighlights } from "@/data/products";

export function FeatureShowcase() {
  return (
    <section id="journal" className={styles.section}>
      <div className="inner">
        <div className={styles.header}>
          <p className="section-title">The Atelier Difference</p>
          <p className="section-subtitle">
            We build trousers to outlast trends—balancing enduring style with
            purposeful innovation across fabrics, construction, and fit systems.
          </p>
        </div>
        <div className={styles.grid}>
          {editorialHighlights.map((feature) => (
            <article key={feature.title} className={styles.card}>
              <p className={styles.number}>
                {editorialHighlights.indexOf(feature) + 1}
              </p>
              <h3>{feature.title}</h3>
              <p>{feature.copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
