// src/components/CarDetail/PageNavigation.jsx (REVISED)

import React from 'react';

const PageNavigation = () => {
  // Define the breadcrumb structure
  const breadcrumbs = [
    { name: 'Home', href: '/' },
    { name: 'Used Car Search', href: '/search' },
    { name: 'Volkswagen', href: '/search/volkswagen' },
    { name: '2012 Volkswagen GTI', isCurrent: true }, 
  ];
  
  return (
    <div className="bg-black border-b border-gray-200 py-3 text-sm ">
      {/* Container for max width and centering */}
      {/* We no longer use 'justify-between' since both items are on the left */}
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
        
        {/* All content is now grouped on the left, using flex-col to stack */}
        <div className="flex flex-col space-y-1 ">
            

            {/* 2. Back to Result (BOTTOM/LEFT) - Changed font size to match small text in wireframe */}
           
            <a 
              href="/search" 
              className="text-white text-sm font-medium flex items-center hover:text-blue-600 transition order-1 md:order-2"
            >
              {/* Unicode left arrow for a clean look */}
              <span className="mr-2 text-lg font-bold">&#8249;</span>
              Back to result
            </a>
            
        </div>
      </div>
    </div>
  );
};

export default PageNavigation;