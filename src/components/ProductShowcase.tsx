import { products } from "@/data/products";
import styles from "./ProductShowcase.module.css";
import { ProductCard } from "./ProductCard";

export function ProductShowcase() {
  return (
    <section id="new-arrivals" className={styles.section}>
      <div className="inner">
        <div className={styles.header}>
          <p className="section-title">Signature trouser roster</p>
          <p className="section-subtitle">
            A curated lineup spanning boardroom, travel, and after-hours silhouettes.
            Each fabrication is engineered to keep its line and finish through real
            world movement.
          </p>
        </div>
        <div className={styles.grid}>
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
