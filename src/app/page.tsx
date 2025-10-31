import { Hero } from "@/components/Hero";
import { ProductShowcase } from "@/components/ProductShowcase";
import { FeatureShowcase } from "@/components/FeatureShowcase";
import { FitMatrix } from "@/components/FitMatrix";
import { Lookbook } from "@/components/Lookbook";
import { Testimonials } from "@/components/Testimonials";
import { SupportCTA } from "@/components/SupportCTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <ProductShowcase />
      <Lookbook />
      <FeatureShowcase />
      <FitMatrix />
      <Testimonials />
      <SupportCTA />
    </main>
  );
}
