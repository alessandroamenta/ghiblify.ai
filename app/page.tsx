import { Hero } from "@/components/hero";
import { PricingSection } from "@/components/pricing-section";
import { Footer } from "@/components/footer";
import { ImageCarousel } from "@/components/image-carousel";
import { GhibliGallery } from "@/components/ghibli-gallery";
import { FaqSection } from "@/components/faq-section";
import { IosWaitlist } from "@/components/ios-waitlist";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center">
      <Hero />
      <ImageCarousel />
      <GhibliGallery />
      <PricingSection />
      <FaqSection />
      <Footer />
      <IosWaitlist />
    </main>
  );
}
