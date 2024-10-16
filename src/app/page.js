import FeatureSection from '@/components/home/feature-section';
import HeroSection from '@/components/home/herosection';
import PricingSection from '@/components/home/pricing-section';
import TestimonialsSwiper from '@/components/tesnomial-swiper';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <TestimonialsSwiper/>
      <FeatureSection />
      <PricingSection />
    </div>
  );
}
