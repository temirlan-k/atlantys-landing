import Image from 'next/image';
import React from 'react';
import { FaLinkedinIn } from 'react-icons/fa'; // Ensure you have react-icons installed

const Footer = () => {
  return (
    <footer className="text-black mt-20 py-5">
      <div className="max-w-7xl mx-auto gap-5 px-4 flex flex-col justify-between items-center">
        <div>
          <Image src="/logo.svg" alt="" width={200} height={100} />
        </div>
        <div className="flex flex-wrap justify-center md:justify-start gap-8 mb-4 md:mb-0">
          <a
            href="/features"
            className="text-[#012D73] hover:text-gray-500 transition duration-150 ease-in-out"
          >
            Features
          </a>
          <a
            href="/demo"
            className="text-[#012D73] hover:text-gray-500 transition duration-150 ease-in-out"
          >
            Book a demo
          </a>
          <a
            href="/contact"
            className="text-[#012D73] hover:text-gray-500 transition duration-150 ease-in-out"
          >
            Contact us
          </a>
          <a
            href="/signup"
            className="text-[#012D73] hover:text-gray-500 transition duration-150 ease-in-out"
          >
            Sign Up
          </a>
          <a
            href="/commitment"
            className="text-[#012D73] hover:text-gray-500 transition duration-150 ease-in-out"
          >
            Our zero-bias commitment
          </a>
          <a
            href="/privacy"
            className="text-[#012D73] hover:text-gray-500 transition duration-150 ease-in-out"
          >
            Privacy & terms
          </a>
        </div>
        <div className="flex gap-2 items-center">
          <FaLinkedinIn size={24} className="bg-black" />
        </div>
        <div>
          <span className="text-gray-400 text-sm">
            &copy; 2023, Employers AI Limited. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
