import Link from "next/link";
import Image from "next/image";
import type { Product } from "@/data/products";
import styles from "./ProductCard.module.css";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.imageWrap}>
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(min-width: 1200px) 350px, (min-width: 768px) 45vw, 90vw"
          priority={product.badges?.includes("Bestseller")}
        />
        <div className={styles.badges}>
          {product.badges?.map((badge) => (
            <span key={badge}>{badge}</span>
          ))}
        </div>
      </div>
      <div className={styles.content}>
        <div>
          <p className={styles.name}>{product.name}</p>
          <p className={styles.tagline}>{product.tagline}</p>
        </div>
        <p className={styles.price}>
          ${product.price}
          <span> {product.currency}</span>
        </p>
        <div className={styles.meta}>
          <span>{product.fit}</span>
          <span>•</span>
          <span>{product.fabric}</span>
        </div>
        <ul className={styles.features}>
          {product.features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
        <div className={styles.colors}>
          {product.colors.map((color) => (
            <span
              key={color.name}
              className={styles.color}
              style={{ background: color.swatch }}
              title={color.name}
            />
          ))}
        </div>
        <div className={styles.actions}>
          <Link href={`/products/${product.slug}`} className={styles.primary}>
            View Detail
          </Link>
          <button type="button" className={styles.secondary}>
            Add to Cart
          </button>
        </div>
      </div>
    </article>
  );
}
