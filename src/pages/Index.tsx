import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustBar from "@/components/TrustBar";
import CollectionSection from "@/components/CollectionSection";
import ScienceSection from "@/components/ScienceSection";
import EngineeringSection from "@/components/EngineeringSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <TrustBar />
      <CollectionSection />
      <ScienceSection />
      <EngineeringSection />
      <Footer />
    </div>
  );
};

export default Index;
