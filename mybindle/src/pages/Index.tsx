import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import SparksSection from "@/components/SparksSection";
import InstallSection from "@/components/InstallSection";
import DonationSection from "@/components/DonationSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import DownloadCTA from "@/components/DownloadCTA";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <FeaturesSection />
      <SparksSection />
      <InstallSection />
      <DonationSection />
      <TestimonialsSection />
      <DownloadCTA />
    </div>
  );
};

export default Index;