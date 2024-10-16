import FeatureSection from '@/components/home/feature-section';
import HeroSection from '@/components/home/herosection';
import PricingSection from '@/components/home/pricing-section';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <FeatureSection />
      <PricingSection />
    </div>
  );
}
