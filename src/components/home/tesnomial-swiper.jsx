'use client';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Example array with random text and image URLs
const data = [
  {
    title: 'бухгалтерии',
    description:
      'Support your customers and agents with our AI solutions, powered by Generative AI on voice and chat.',
    bigPhoto: 'https://via.placeholder.com/300', // Placeholder image for big photo
    smallPhoto: 'https://via.placeholder.com/150', // Placeholder image for small photo
  },
  {
    title: 'юриспруденции',
    description:
      'Boost your e-commerce business with AI-driven customer support that provides personalized experiences.',
    bigPhoto: 'https://via.placeholder.com/300/0f0', // Another placeholder image
    smallPhoto: 'https://via.placeholder.com/150/ff0',
  },
  {
    title: 'образовании',
    bigPhoto: 'https://via.placeholder.com/300/f00', // Another placeholder image
    smallPhoto: 'https://via.placeholder.com/150/00f',
  },
  {
    title: 'аналитике',
    bigPhoto: 'https://via.placeholder.com/300/f00', // Another placeholder image
    smallPhoto: 'https://via.placeholder.com/150/00f',
  },
  {
    title: 'продажах',
    bigPhoto: 'https://via.placeholder.com/300/f00', // Another placeholder image
    smallPhoto: 'https://via.placeholder.com/150/00f',
  },
  {
    title: 'маркетинге',
    bigPhoto: 'https://via.placeholder.com/300/f00', // Another placeholder image
    smallPhoto: 'https://via.placeholder.com/150/00f',
  },
  {
    title: ' обслуживании клиентов',
    bigPhoto: 'https://via.placeholder.com/300/f00', // Another placeholder image
    smallPhoto: 'https://via.placeholder.com/150/00f',
  },
  {
    title: 'рекрутинге',
    bigPhoto: 'https://via.placeholder.com/300/f00', // Another placeholder image
    smallPhoto: 'https://via.placeholder.com/150/00f',
  },
];

const AnimatedTelecomSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Cycle through the data array every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
    }, 2000); // 2000ms = 2 seconds
    return () => clearInterval(interval); // Clean up interval on component unmount
  }, []);

  const { title, description, bigPhoto, smallPhoto } = data[currentIndex];

  return (
    <div className="flex flex-col md:flex-row justify-between items-center p-10">
      {/* Text Section with Bottom to Top Animation */}
      <motion.div
        className="md:w-1/2 text-center md:text-left"
        key={title} // Key to trigger Framer Motion re-animation
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-3xl md:text-5xl font-bold mb-4">ИИ-ассистент {title}</h1>

        {/* <div className="flex space-x-4 justify-center md:justify-start">
          <button className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700">
            See a Demo
          </button>
          <button className="border border-blue-600 text-blue-600 py-2 px-4 rounded-lg hover:bg-blue-50">
            Discover How
          </button>
        </div> */}
      </motion.div>

      {/* Image Section */}
      <div className="relative md:w-1/2 flex justify-center">
        {/* Big Photo with Right to Left Animation */}
        <motion.img
          src={bigPhoto}
          alt="Big AI Agent"
          className="w-80 h-80 object-cover rounded-lg"
          key={bigPhoto} // Key to trigger re-animation
          initial={{ opacity: 0, x: 200 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -200 }}
          transition={{ duration: 1 }}
        />

        {/* Small Photo with Left to Right Animation */}
        <motion.img
          src={smallPhoto}
          alt="Small AI Customer"
          className="absolute top-10 left-10 w-40 h-40 object-cover rounded-lg"
          key={smallPhoto} // Key to trigger re-animation
          initial={{ opacity: 0, x: -200 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 200 }}
          transition={{ duration: 1 }}
        />
      </div>
    </div>
  );
};

export default AnimatedTelecomSection;
