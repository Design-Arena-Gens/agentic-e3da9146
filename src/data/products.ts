export type Product = {
  slug: string;
  name: string;
  tagline: string;
  price: number;
  currency: "USD";
  description: string;
  features: string[];
  image: string;
  fit: string;
  fabric: string;
  colors: { name: string; swatch: string }[];
  sizes: string[];
  badges?: string[];
};

export const products: Product[] = [
  {
    slug: "atelier-signature-trouser",
    name: "Atelier Signature Trouser",
    tagline: "Tailored precision meets all-day comfort.",
    price: 248,
    currency: "USD",
    description:
      "Our flagship trouser combines a half-canvassed waistband with a breathable stretch-wool blend, engineered to hold its crease from the morning commute through late dinners.",
    features: [
      "Italian stretch-wool with subtle twill texture",
      "Hand-finished waistband and bar tack reinforcement",
      "Signature shadow stripe interior detailing",
    ],
    image:
      "https://images.unsplash.com/photo-1559078405-68608ba26f22?auto=format&fit=crop&w=1200&q=80",
    fit: "Tailored Taper",
    fabric: "96% Super 120s wool, 4% elastane",
    colors: [
      { name: "Charcoal Navy", swatch: "#1f2743" },
      { name: "Stone Grey", swatch: "#747b86" },
      { name: "Umber Brown", swatch: "#5c4b3e" },
    ],
    sizes: ["28", "30", "32", "33", "34", "36", "38"],
    badges: ["Bestseller"],
  },
  {
    slug: "atelier-commuter-chino",
    name: "Commuter Performance Chino",
    tagline: "Premium chino feel with hidden performance stretch.",
    price: 198,
    currency: "USD",
    description:
      "Designed for the modern commute, this chino flexes with movement yet retains its sharp profile. Water-repellent treatment shields from unexpected weather without affecting breathability.",
    features: [
      "Japanese stretch cotton with nano-coating",
      "Moisture-wicking interior waistband",
      "Security zip pocket hidden along side seam",
    ],
    image:
      "https://images.unsplash.com/photo-1611244800657-3ce1c50273d4?auto=format&fit=crop&w=1200&q=80",
    fit: "Athletic Slim",
    fabric: "88% cotton, 9% Sorona®, 3% spandex",
    colors: [
      { name: "Canvas Khaki", swatch: "#cbb394" },
      { name: "Jet Black", swatch: "#1a1a1a" },
      { name: "Marine Blue", swatch: "#1f3a5f" },
    ],
    sizes: ["28", "30", "31", "32", "33", "34", "36"],
    badges: ["New Arrival"],
  },
  {
    slug: "atelier-evening-tuxedo",
    name: "Evening Tuxedo Trouser",
    tagline: "Formal refinement with an immaculate drape.",
    price: 298,
    currency: "USD",
    description:
      "Cut from superfine wool with a satin side stripe, the Evening Trouser is a study in refined minimalism. Lightweight interior lining keeps the silhouette structured without bulk.",
    features: [
      "Super 130s virgin wool with silk sheen",
      "Satin braid at outseam and tailored hem",
      "Hidden adjustable side tabs, no belt required",
    ],
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1200&q=80",
    fit: "Classic Straight",
    fabric: "100% Super 130s wool",
    colors: [
      { name: "Midnight Black", swatch: "#10131a" },
      { name: "Deep Navy", swatch: "#0b1d3a" },
    ],
    sizes: ["30", "31", "32", "33", "34", "36", "38"],
  },
  {
    slug: "atelier-weekend-relaxed",
    name: "Weekend Relaxed Trouser",
    tagline: "Ease into the weekend with elevated softness.",
    price: 178,
    currency: "USD",
    description:
      "A breathable double-weave knit that feels like lounge wear but cuts like a trouser. Micro-adjust waistband and articulated knee seams keep the silhouette refined yet relaxed.",
    features: [
      "Double-knit organic cotton blend",
      "Interior drawcord with exterior clean finish",
      "Gusseted seat for added mobility",
    ],
    image:
      "https://images.unsplash.com/photo-1617339866697-48e5f7c9b49e?auto=format&fit=crop&w=1200&q=80",
    fit: "Relaxed Taper",
    fabric: "78% organic cotton, 18% modal, 4% elastane",
    colors: [
      { name: "Pewter", swatch: "#6d737d" },
      { name: "Slate Blue", swatch: "#3a4e68" },
      { name: "Warm Taupe", swatch: "#b09d8f" },
    ],
    sizes: ["28", "30", "32", "34", "36", "38"],
  },
  {
    slug: "atelier-luxe-flannel",
    name: "Luxe Flannel Trouser",
    tagline: "Winter-ready tailoring with brushed softness.",
    price: 238,
    currency: "USD",
    description:
      "Milled in Biella, Italy, this flannel trouser drapes beautifully while providing warmth on brisk city commutes. Finished with genuine horn buttons and pick stitching throughout.",
    features: [
      "Italian brushed flannel with anti-pilling finish",
      "Tailored seat with split waistband for alterations",
      "Reinforced cuff ready hems",
    ],
    image:
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1200&q=80",
    fit: "Heritage Straight",
    fabric: "100% virgin wool",
    colors: [
      { name: "Ash Grey", swatch: "#8b8f97" },
      { name: "Olive Night", swatch: "#48513d" },
    ],
    sizes: ["30", "32", "33", "34", "36", "38", "40"],
    badges: ["Limited"],
  },
  {
    slug: "atelier-tech-travel",
    name: "Tech Travel Trouser",
    tagline: "Wrinkle-resistant and ready to go worldwide.",
    price: 210,
    currency: "USD",
    description:
      "Constructed from recycled performance fibers, the Tech Travel Trouser sheds wrinkles and stains while maintaining a crisp pleat. Interior passport pocket keeps essentials close.",
    features: [
      "Eco-certified recycled nylon blend",
      "Quick-dry mesh pocketing",
      "Snap-close rear pockets with hidden zippers",
    ],
    image:
      "https://images.unsplash.com/photo-1573495628363-0df2f7a178ee?auto=format&fit=crop&w=1200&q=80",
    fit: "Streamlined Slim",
    fabric: "63% recycled nylon, 29% viscose, 8% elastane",
    colors: [
      { name: "Carbon Grey", swatch: "#4a4f55" },
      { name: "Graphite", swatch: "#2d343e" },
    ],
    sizes: ["28", "30", "32", "33", "34", "36"],
  },
];

export const editorialHighlights = [
  {
    title: "Tailoring Re-engineered",
    copy: "Every pair is pattern-matched in our Porto studio, engineered with micro stretch zones so you stay sharp without feeling restricted.",
  },
  {
    title: "Textiles with Purpose",
    copy: "We work with family-owned mills across Italy and Japan, partnering on exclusive fabrications that blend sustainability with luxe handfeel.",
  },
  {
    title: "Precise Fit System",
    copy: "Seven tailored fits across waist sizes let you dial in your exact silhouette, supported by complimentary alterations for life.",
  },
];

export const testimonials = [
  {
    quote:
      "The Signature Trouser finally solved my search for something office-ready that I can actually bike in. The stretch is invisible.",
    name: "Malik Johnson",
    role: "Design Director, London",
  },
  {
    quote:
      "These chinos survived three weeks of travel and still looked boardroom sharp. Hidden pockets are a game changer.",
    name: "Ethan Reyes",
    role: "Operations VP, New York",
  },
  {
    quote:
      "The fit options and tailoring support helped me build a rotation that feels custom. Quality is unmatched at this price.",
    name: "Kenji Watanabe",
    role: "Boutique Owner, Tokyo",
  },
];

export const lookbookShots = [
  {
    image:
      "https://images.unsplash.com/photo-1475180098004-ca77a66827be?auto=format&fit=crop&w=1200&q=80",
    alt: "Model wearing Atelier M signature trouser against architectural set",
  },
  {
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80",
    alt: "Layered neutral outfit showcasing drape of flannel trouser",
  },
  {
    image:
      "https://images.unsplash.com/photo-1516257984-b1b4d707412e?auto=format&fit=crop&w=1200&q=80",
    alt: "Detail shot of waistband craftsmanship and horn buttons",
  },
];
