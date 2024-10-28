import ChatBox from '@/components/chat/Chat';
import MyTextAnimation from '@/components/home/ai-assistent';
import ContactForm from '@/components/home/contact-form';
import ExperiencePanel from '@/components/home/experience-panel';
import FeatureSection from '@/components/home/feature-section';
import HeroSection from '@/components/home/herosection';
import PricingSection from '@/components/home/pricing-section';
import TestimonialsSwiper from '@/components/home/tesnomial-swiper';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <TestimonialsSwiper />
      <PricingSection />
      <ContactForm />
      <ChatBox />
    </div>
  );
}
