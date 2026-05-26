import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TickerStrip from "@/components/TickerStrip";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import RosterSection from "@/components/RosterSection";
import BrandsSection from "@/components/BrandsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <TickerStrip />
      <AboutSection />
      <ServicesSection />
      <RosterSection />
      <BrandsSection />
      <ContactSection />
      <Footer />
      <ContactModal />
    </main>
  );
}
