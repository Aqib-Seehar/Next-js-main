

import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-100 shadow-sm sticky top-0 z-50">
      

      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8"> {/* max-w -max width */}

        <div className="flex justify-between items-center h-16">
          <div className="shrink-0 flex flex-col leading-none">
            <div className="text-xl font-bold text-gray-900 text-left">
              SILVER RIVER
            </div>
            <div className="text-xs font-semibold uppercase text-gray-600 tracking-widest mt-0.5">
              MOTOR COMPANY
            </div>
          </div>
          

          <nav className="hidden md:flex space-x-6 text-sm font-medium text-gray-600">
            <Link href="/usedcarsearch" className='hover-text-black'>Search Vehicle</Link>
            <Link href="#" className="hover:text-black">How It Works</Link>
            <Link href="#" className="hover:text-black">About Us</Link>
            <Link href="#" className="hover:text-black">Blog</Link>
            <Link href="#" className="hover:text-black">Contact</Link>
          </nav>

          <div className="flex-shrink-0 flex items-center space-x-3">
            <button className="bg-blue-700 bg-opacity-522 text-white px-4 py-2 text-sm rounded hover:bg-gray-800 transition">
              Login
            </button>
            <button className="bg-black text-white px-4 py-2 text-sm rounded hover:bg-gray-800 transition">
              Register
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;