// src/components/CarDetail/RecommendedCars.jsx

import React from 'react';

// Mock data for the recommended vehicles
const recommendedCars = [
    {
        id: 1,
        year: 2017,
        make: 'Chevrolet',
        model: 'Spark',
        price: '$12,995',
        image: '/images/spark.jpg', // Placeholder
    },
    {
        id: 2,
        year: 2011,
        make: 'Ram',
        model: '2500 Power Wagon',
        price: '$28,500',
        image: '/images/ram.jpg',
    },
    {
        id: 3,
        year: 1993,
        make: 'Mercedes-Benz',
        model: '500E',
        price: '$65,000',
        image: '/images/mercedes.jpg',
    },
    {
        id: 4,
        year: 2012,
        make: 'Volkswagen',
        model: 'GTI',
        price: '$15,995',
        image: '/images/gti.jpg',
    },
    {
        id: 5,
        year: 2018,
        make: 'Ford',
        model: 'F-150',
        price: '$35,000',
        image: '/images/f150.jpg',
    },
    {
        id: 6,
        year: 2020,
        make: 'Honda',
        model: 'CR-V',
        price: '$24,500',
        image: '/images/crv.jpg',
    },
];

const RecommendedCars = () => {
    // Note: In a production app, you'd use refs and state to handle scrolling with the arrows.
    // Here, we focus on the structure and visual appearance.
    
    // Width classes: w-60 sets a fixed, uniform width for each card, matching the wireframe look.
    const CARD_WIDTH = 'w-60'; 

    return (
        <div className="mt-12 mb-16 relative">
            
            {/* Header */}
            <h2 className="text-2xl font-bold text-gray-900 mb-6 px-4 sm:px-0">
                Recommended Cars for You
            </h2>

            {/* Carousel Wrapper: Allows horizontal scrolling and positions arrows */}
            <div className="relative">
                
                {/* Scrollable Container */}
                <div 
                    className="flex space-x-6 overflow-x-auto p-4 -mx-4 sm:-mx-6 lg:-mx-8 scrollbar-hide" 
                    style={{ scrollSnapType: 'x mandatory' }}
                >
                    {recommendedCars.map((car) => (
                        <div 
                            key={car.id} 
                            className={`flex-shrink-0 ${CARD_WIDTH} bg-white rounded-lg shadow-md border border-gray-100 overflow-hidden cursor-pointer hover:shadow-lg transition duration-300`}
                            style={{ scrollSnapAlign: 'start' }}
                        >
                            {/* Image Area (Height fixed for uniform look) */}
                            <div className="w-full h-32 bg-gray-200 overflow-hidden">
                                {/*  */}
                                <img
                                    src={car.image} // Replace with actual image source
                                    alt={`${car.year} ${car.make} ${car.model}`}
                                    className="w-full h-full object-cover transition transform hover:scale-105"
                                />
                            </div>

                            {/* Details */}
                            <div className="p-3">
                                <p className="text-xs font-semibold text-gray-500 mb-1">
                                    {car.year} {car.make}
                                </p>
                                <h3 className="text-base font-bold text-gray-900 leading-tight mb-2">
                                    {car.model}
                                </h3>
                                <p className="text-xl font-extrabold text-black">
                                    {car.price}
                                </p>
                            </div>
                        </div>
                    ))}
                    {/* Add an empty div for visual space at the end of the scroll */}
                    <div className="flex-shrink-0 w-4"></div> 
                </div>

                {/* Navigation Arrows (Positioned outside the scrolling area) */}
                
                {/* Left Arrow */}
                <button 
                    className="absolute top-1/2 left-0 transform -translate-y-1/2 -ml-2 p-3 bg-white rounded-full shadow-lg border border-gray-200 hover:bg-gray-50 transition hidden lg:block"
                    aria-label="Scroll left"
                >
                    &larr;
                </button>

                {/* Right Arrow */}
                <button 
                    className="absolute top-1/2 right-0 transform -translate-y-1/2 -mr-2 p-3 bg-white rounded-full shadow-lg border border-gray-200 hover:bg-gray-50 transition hidden lg:block"
                    aria-label="Scroll right"
                >
                    &rarr;
                </button>
            </div>
        </div>
    );
};

export default RecommendedCars;