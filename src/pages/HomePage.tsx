import HeroSection from "@/components/home/HeroSection";
import EditorialSection from "@/components/home/EditorialSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CTASection from "@/components/home/CTASection";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black">
      <HeroSection />
      <EditorialSection />
      <TestimonialsSection />
      <CTASection />
    </main>
  );
}
