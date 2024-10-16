import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white  shadow-sm">
      <div className="container mx-auto flex justify-between items-center px-6">
        <div className="flex items-center gap-8">
          <Image src="/logo.svg" alt="Company Logo" width={150} height={10} />
          <div className="hidden md:flex gap-10 font-semibold text-sm">
            <Link
              href="/pricing"
              className="text-gray-700 hover:text-blue-500 transition duration-150 ease-in-out"
            >
              Pricing
            </Link>
            <Link
              href="/demo"
              className="text-gray-700 hover:text-blue-500 transition duration-150 ease-in-out"
            >
              Book a demo
            </Link>
            <Link
              href="/contact"
              className="text-gray-700 hover:text-blue-500 transition duration-150 ease-in-out"
            >
              Contact
            </Link>
          </div>
        </div>

        <div className="flex items-center gap-10">
          <Link
            href="/signin"
            className="text-gray-700 font-semibold text-sm hover:text-blue-500 transition duration-150 ease-in-out"
          >
            Sign In
          </Link>
          <Link
            href="/waitlist"
            className="px-6 py-2 bg-green-500 text-white  rounded-lg hover:bg-green-600 transition duration-150 ease-in-out"
          >
            Join the waitlist
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
