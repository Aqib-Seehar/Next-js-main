// src/components/CarDetail/ImageGallery.jsx
'use client';

import React, { useState } from 'react';

// Updated data using the /images/ path from the public directory
const mockImages = [
  { id: 1, url: '/images/volkswagen-main.png', alt: 'Main view of Volkswagen GTI' },
  { id: 2, url: '/images/volkswagen-rear.png', alt: 'Rear view thumbnail' },
  { id: 3, url: '/images/volkswagen-interior-1.jpg', alt: 'Interior view thumbnail' },
  { id: 4, url: '/images/volkswagen-interior-2.jpg', alt: 'Front-right thumbnail' },

];

const ImageGallery = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const currentImage = mockImages[currentImageIndex];
  const totalImages = mockImages.length;

  const handleNavigation = (direction) => {
    let newIndex = currentImageIndex;
    if (direction === 'next') {
      newIndex = (currentImageIndex + 1) % totalImages;
    } else if (direction === 'prev') {
      newIndex = (currentImageIndex - 1 + totalImages) % totalImages;
    }
    setCurrentImageIndex(newIndex);
  };

  return (
    <div className="space-y-4">
      
      {/* 1. Main Image Display Area  object -contain scales the image down to fit completely*/}
      <div className="relative rounded-lg overflow-hidden border border-gray-200 w-full h-[400px] bg-gray-100 flex items-center justify-center">
        <img
          src={currentImage.url} // Using the public path here
          alt={currentImage.alt}
          // The height (h-[400px]) is set to visually match the typical gallery size
          className="w-full  h-full object-contain block " 
        />

        {/* Image Counter (Top Right) */}
        <div className="absolute top-4 right-4 bg-gray-900/70 text-white text-xs font-medium px-3 py-1 rounded">
          {currentImageIndex + 1} of {totalImages}
        </div>

        {/* Navigation Arrows (Prev/Next) */}
        <button
          onClick={() => handleNavigation('prev')}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black/60 text-white p-3 rounded-full hover:bg-black/80 transition focus:outline-none"
          aria-label="Previous image"
        >
          &#10094;
        </button>
        <button
          onClick={() => handleNavigation('next')}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black/60 text-white p-3 rounded-full hover:bg-black/80 transition focus:outline-none"
          aria-label="Next image"
        >
          &#10095;
        </button>
      </div>

      {/* 2. Thumbnail Carousel Strip */}
      <div className="flex items-center space-x-2">
        {/* Thumbnail Scroll Controls (Prev/Next) */}
        <button className="p-2 text-gray-600 hover:text-black hidden md:block" aria-label="Scroll thumbnails left">&#10094;</button>
        
        {/* Thumbnails container - Added padding/margin to prevent arrow overlap */}
        <div className="flex space-x-2 overflow-x-auto py-1">
          {mockImages.map((image, index) => (
            <img
              key={image.id}
              src={image.url}
              alt={image.alt}
              className={`flex-shrink-0 w-20 h-20 object-cover rounded cursor-pointer transition 
                ${index === currentImageIndex 
                  ? 'border-2 border-black opacity-100 shadow-md' 
                  : 'border border-gray-300 opacity-70 hover:opacity-90'
                }`}
              onClick={() => setCurrentImageIndex(index)}
            />
          ))}
        </div>

        <button className="p-2 text-gray-600 hover:text-black hidden md:block" aria-label="Scroll thumbnails right">&#10095;</button>
      </div>
    </div>
  );
};

export default ImageGallery;