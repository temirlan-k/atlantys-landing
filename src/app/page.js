import React from 'react';
import ChatBox from '@/components/chat/Chat';

import ContactForm from '@/components/home/contact-form';

import HeroSection from '@/components/home/herosection';
import PricingSection from '@/components/home/pricing-section';
import TestimonialsSwiper from '@/components/home/tesnomial-swiper';
import AbilitySection from '@/components/home/ability-section';
import AnimatedIconSection from '@/components/home/animated-section';
import VideoFrame from '@/components/home/video-frame';

export default function Home() {
  return (
    <React.Fragment>
      <HeroSection />
      <AbilitySection />
      <VideoFrame />
      <TestimonialsSwiper />
      <PricingSection />
      <AnimatedIconSection />
      <ContactForm />
      <ChatBox />
    </React.Fragment>
  );
}