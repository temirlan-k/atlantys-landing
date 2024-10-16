import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <div className="bg-white mt-64">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h1 className="text-5xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-7xl">
            The future of hiring is <br /> here.
          </h1>
          <p className="mt-2 text-base leading-8 font-light  sm:mt-4">
            Screen hundreds of applicants in seconds, not hours. Generate enticing job ads <br />
            instantly. Remove human bias from your hiring. Source your dream candidates in <br />{' '}
            your sleep.
          </p>
          <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-center">
            <div className="rounded-md shadow">
              <Link
                href="/waitlist"
                className="w-full flex items-center justify-center border border-transparent text-xs font-medium rounded-md text-white bg-emerald-500 p-3 "
              >
                Join the waitlist
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
