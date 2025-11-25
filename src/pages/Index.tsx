import Navbar from "@/components/Navbar";
import HeroCarousel from "@/components/HeroCarousel";
import SectorsSection from "@/components/SectorsSection";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        <HeroCarousel />
        <SectorsSection />
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
