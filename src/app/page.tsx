import Navbar from '@/components/Navbar';
import Footer from '@/components/ui/Footer';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import TrademarkSection from '@/components/sections/TrademarkSection';
import BranchesSection from '@/components/sections/BranchesSection';
import FeaturesSection from '@/components/sections/FeaturesSection';
import CTASection from '@/components/sections/CTASection';

export default function Home() {
  return (
    <main className="min-h-screen bg-black overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <TrademarkSection />
      <BranchesSection />
      <FeaturesSection />
      <CTASection />
      <Footer />
    </main>
  );
}
