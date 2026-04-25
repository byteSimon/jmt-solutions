import HeroSection from "@/components/sections/home/HeroSection";
import WhyChooseUsSection from "@/components/sections/home/WhyChooseUsSection";
import ServicesSection from "@/components/sections/home/ServicesSection";
import AdvantagesSection from "@/components/sections/home/AdvantagesSection";
import PortfolioSection from "@/components/sections/home/PortfolioSection";
import TrustedBySection from "@/components/sections/home/TrustedBySection";
import TestimonialsSection from "@/components/sections/home/TestimonialsSection";
import ContactSection from "@/components/sections/home/ContactSection";
import Footer from "@/components/layouts/Footer";

export default function Home() {
  return (
    <main className="">
      <HeroSection />
      <WhyChooseUsSection />
      <ServicesSection />
      <AdvantagesSection />
      <PortfolioSection />
      <TrustedBySection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
