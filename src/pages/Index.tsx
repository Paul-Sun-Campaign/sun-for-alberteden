import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import PolicySection from "@/components/PolicySection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import SanityStatus from "@/components/SanityStatus";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <PolicySection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
      <SanityStatus />
    </div>
  );
};

export default Index;
