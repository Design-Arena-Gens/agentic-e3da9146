import { testimonials } from "@/data/products";
import styles from "./Testimonials.module.css";

export function Testimonials() {
  return (
    <section className={styles.section}>
      <div className="inner">
        <div className={styles.header}>
          <p className="section-title">Trusted by creators worldwide</p>
          <p className="section-subtitle">
            From boardrooms to creative studios, Atelier M trousers move with
            leaders shaping culture, praised for unshakable polish and comfort.
          </p>
        </div>
        <div className={styles.carousel}>
          {testimonials.map((item) => (
            <figure key={item.name} className={styles.card}>
              <blockquote>{`“${item.quote}”`}</blockquote>
              <figcaption>
                <p>{item.name}</p>
                <span>{item.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
