import QuickInfoBar from "@/components/QuickInfoBar";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import HighlightBoxes from "@/components/HighlightBoxes";
import PricingPlans from "@/components/PricingPlans";
import NRIConnectPreview from "@/components/NRIConnectPreview";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <QuickInfoBar />
      <Navbar />
      <main>
        <HeroSection />
        <HighlightBoxes />
        <PricingPlans />
        <NRIConnectPreview />
        <Testimonials />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
