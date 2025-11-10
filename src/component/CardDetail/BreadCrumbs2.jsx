// src/components/CarDetail/PageNavigation.jsx (REVISED)

import React from 'react';

const BreadCrumbs2 = () => {
  // Define the breadcrumb structure
  const breadcrumbs = [
    { name: 'Home', href: '/' },
    { name: 'Used Car Search', href: '/search' },
  ];
  
  return (
    <div className="bg-gray-100 border-b border-gray-200 py-3 text-sm">
      {/* Container for max width and centering */}
      {/* We no longer use 'justify-between' since both items are on the left */}
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
        
        {/* All content is now grouped on the left, using flex-col to stack */}
        <div className="flex flex-col space-y-1">
            
            {/* 1. Breadcrumbs (TOP/LEFT) */}
            <nav aria-label="Breadcrumb" className="order-2 md:order-1">
              <ol className="flex items-center space-x-2">
                {breadcrumbs.map((crumb, index) => (
                  <React.Fragment key={crumb.name}>
                    <li className="flex items-center">
                      {crumb.isCurrent ? (
                        // Current page item (not a link, darker color)
                        <span className="text-gray-900 font-medium text-xs">
                          {crumb.name}
                        </span>
                      ) : (
                        // Link item
                        <a 
                          href={crumb.href} 
                          className="text-gray-500 hover:text-black transition text-xs"
                        >
                          {crumb.name}
                        </a>
                      )}
                    </li>
                    {/* Separator - only show if it's not the last item */}
                    {index < breadcrumbs.length - 1 && (
                      <li className="text-gray-400 mx-1 text-xs">/</li>
                    )}
                  </React.Fragment>
                ))}
              </ol>
            </nav>
            
        </div>
      </div>
    </div>
  );
};

export default BreadCrumbs2;