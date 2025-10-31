import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { products } from "@/data/products";
import styles from "./page.module.css";

type ProductPageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export function generateMetadata(
  { params }: ProductPageProps
): Metadata {
  const product = products.find((item) => item.slug === params.slug);

  if (!product) {
    return {
      title: "Product not found",
    };
  }

  return {
    title: `${product.name}`,
    description: product.description,
    openGraph: {
      title: product.name,
      description: product.description,
      images: [
        {
          url: product.image,
          width: 1200,
          height: 1600,
        },
      ],
    },
  };
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = products.find((item) => item.slug === params.slug);

  if (!product) {
    return (
      <main className={styles.main}>
        <div className="inner">
          <div className={styles.notFound}>
            <h1>Product unavailable</h1>
            <p>
              The piece you are searching for has either sold through or moved to
              archive. Explore the latest roster to discover new tailoring.
            </p>
            <Link href="/" className={styles.back}>
              Back to collection
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className={styles.main}>
      <div className="inner">
        <div className={styles.grid}>
          <div className={styles.gallery}>
            <div className={styles.image}>
              <Image
                src={product.image}
                alt={product.name}
                fill
                sizes="(min-width: 1100px) 560px, 90vw"
                priority
              />
            </div>
            <div className={styles.badges}>
              {product.badges?.map((badge) => (
                <span key={badge}>{badge}</span>
              ))}
            </div>
          </div>
          <div className={styles.details}>
            <Link href="/" className={styles.back}>
              ← Collection
            </Link>
            <h1>{product.name}</h1>
            <p className={styles.tagline}>{product.tagline}</p>
            <p className={styles.price}>
              ${product.price}
              <span>{product.currency}</span>
            </p>
            <p className={styles.description}>{product.description}</p>

            <div className={styles.meta}>
              <div>
                <p>Fit</p>
                <span>{product.fit}</span>
              </div>
              <div>
                <p>Fabrication</p>
                <span>{product.fabric}</span>
              </div>
            </div>

            <div className={styles.colors}>
              <p>Palette</p>
              <div>
                {product.colors.map((color) => (
                  <span key={color.name}>
                    <i style={{ background: color.swatch }} />
                    {color.name}
                  </span>
                ))}
              </div>
            </div>

            <div className={styles.sizes}>
              <p>Select waist</p>
              <div>
                {product.sizes.map((size) => (
                  <button key={size} type="button">
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className={styles.actions}>
              <button type="button" className={styles.primary}>
                Add to cart
              </button>
              <button type="button" className={styles.secondary}>
                Book fitting
              </button>
            </div>

            <ul className={styles.featureList}>
              {product.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
