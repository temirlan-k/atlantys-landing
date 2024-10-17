'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';


const testimonials = [
  {
    id: '1',
    name: 'Катя',
    username: 'agolubevakat',
    description: 'Продала свой первый сайт за 200 евро во время обучения',
    image: 'https://randomuser.me/api/portraits/women/68.jpg',
  },
  {
    id: '2',
    name: 'Элизабет',
    username: 'elizulina',
    description:
      'Захватила несколько клиентов почти за 500 евро во время обучения, теперь работает в компании Саши',
    image: 'https://randomuser.me/api/portraits/women/47.jpg',
  },
  {
    id: '3',
    name: 'Кристина',
    username: 'kristya_iva',
    description: "Устроилась на работу в 'оzоn' спустя 3 месяца после выпуска",
    image: 'https://randomuser.me/api/portraits/women/90.jpg',
  },
  {
    id: '4',
    name: 'Анна',
    username: 'anna_nova',
    description: 'Получила предложение работы сразу после выпуска',
    image: 'https://randomuser.me/api/portraits/women/52.jpg',
  },
  {
    id: '5',
    name: 'София',
    username: 'sofia_don',
    description: 'Работает в международной компании спустя 2 месяца после выпуска',
    image: 'https://randomuser.me/api/portraits/women/23.jpg',
  },
];

const TestimonialsSwiper = () => {
  return (
    <div className="mt-40 ">
      <Swiper
        navigation
        pagination={{ clickable: true }}
        slidesPerView={3}
        spaceBetween={30}
        effect="fade"
        loop={true} 
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col  items-center justify-center p-8  rounded-lg h-56 shadow- ">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="h-24 rounded-full mb-4"
              />
              <p className="text-lg font-semibold">
                {testimonial.name} (@{testimonial.username})
              </p>
              <p className="text-gray-600 text-center mt-2">{testimonial.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TestimonialsSwiper;
