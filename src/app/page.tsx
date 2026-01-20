import Navbar from '@/components/Navbar';
import Footer from '@/components/ui/Footer';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import TrademarkSection from '@/components/sections/TrademarkSection';
import FranchiseNetworkSection from '@/components/sections/FranchiseNetworkSection';
import FeaturesSection from '@/components/sections/FeaturesSection';
import CTASection from '@/components/sections/CTASection';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#1a1a1a] via-[#252525] to-[#1a1a1a] overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <TrademarkSection />
      <FranchiseNetworkSection />
      <FeaturesSection />
      <CTASection />
      <Footer />
    </main>
  );
}
