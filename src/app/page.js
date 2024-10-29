import React from 'react';
import ChatBox from '@/components/chat/Chat';
import MyTextAnimation from '@/components/home/ai-assistent';
import ContactForm from '@/components/home/contact-form';
import ExperiencePanel from '@/components/home/experience-panel';

import HeroSection from '@/components/home/herosection';
import PricingSection from '@/components/home/pricing-section';
import TestimonialsSwiper from '@/components/home/tesnomial-swiper';
import TypingTextAnimation from '@/components/home/ai-assistent';
import AbilitySection from '@/components/home/ability-section';

export default function Home() {
  return (
    <React.Fragment>
      <HeroSection />
      <AbilitySection/>
      <TestimonialsSwiper />
      <PricingSection />
      <ContactForm />
      <ChatBox />
    </React.Fragment>
  );
}
