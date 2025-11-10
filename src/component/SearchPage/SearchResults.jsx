'use client';
// src/components/SearchPage/SearchResults.jsx

import React, { useState } from 'react';
import { FaTh, FaList, FaAngleDown, FaStar, FaVolumeUp } from 'react-icons/fa';

// Define the color swatches globally or within the SearchResults component
const colorSwatches = [
    { code: "G", color: "green-600", hoverText: "Green" },
    { code: "Y", color: "yellow-500", hoverText: "Yellow" },
    { code: "R", color: "red-600", hoverText: "Red" },
    { code: "B", color: "blue-600", hoverText: "Blue" },
    { code: "W", color: "white", hoverText: "White" },
];

// Mock data (unchanged, using existing grade/image props)
const mockResults = [
    { id: 1, year: 2022, make: 'BMW', model: 'X3 xDrive', mileage: '108,604 KM', price: '$42,998', status: 'In Pro Location', image: '/images/2022-BMW.png', grade: '3.5' },
    { id: 2, year: 2020, make: 'Ram', model: '1500 Bighorn', mileage: '108,604 KM', price: '$233,998', status: 'In Pro Location', image: '/images/2020-Ram.png', grade: '4.0' },
    { id: 3, year: 2020, make: 'Porsche', model: 'Macan', mileage: '108,604 KM', price: '$55,998', status: 'In Pro Location', image: '/images/2020-Porsche.png', grade: '4.5' },
    { id: 4, year: 2023, make: 'Subaru', model: 'Legacy Premium', mileage: '108,604 KM', price: '$212,998', status: 'Available', image: '/images/2023-Subaru.png', grade: '3.0' },
    { id: 5, year: 2014, make: 'Volkswagen', model: 'Golf GTI', mileage: '108,604 KM', price: '$233,998', status: 'Available', image: '/images/2014-Volkswagen.png', grade: '3.8' },
    { id: 6, year: 2019, make: 'Nissan', model: 'Altima', mileage: '108,604 KM', price: '$233,998', status: 'Available', image: '/images/2019-Nissan.png', grade: '4.2' },
    { id: 7, year: 2018, make: 'Jeep', model: 'Grand Cherokee Limited', mileage: '108,604 KM', price: '$233,998', status: 'Available', image: '/images/2018-Jeep.png', grade: '4.1' },
];

// =================================================================
// ResultCard Component (Includes Swatches)
// =================================================================

const ResultCard = ({ car, viewMode }) => {
    const isListView = viewMode === 'list';
    const numStars = parseFloat(car.grade || 3.5);

    const cardClasses = isListView
        ? "flex bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300 mb-4"
        : "flex flex-col bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300 h-full";
        
    const imageClasses = isListView
        ? "w-2/5 md:w-1/4 flex-shrink-0" 
        : "w-full h-40";

    const detailsClasses = isListView
        ? "p-4 flex-grow grid grid-cols-1 md:grid-cols-3 gap-y-2"
        : "p-4 flex-grow flex flex-col";

    return (
        <div className={cardClasses}>
            
            {/* Image Section */}
            <div className={`${imageClasses} bg-gray-200 relative`}>
                <img 
                    src={car.image} 
                    alt={`${car.year} ${car.make} ${car.model}`}
                    className="w-full h-full object-cover" 
                />
                {/* Location Tag */}
                {car.status === 'In Pro Location' && (
                    <div className="absolute bottom-2 left-2 bg-black text-white text-xs font-semibold px-2 py-0.5 rounded-full">
                        Located in {car.status.replace('In ', '')}
                    </div>
                )}
            </div>

            {/* Details Section */}
            <div className={detailsClasses}>
                
                {/* Title and Price */}
                <div className={isListView ? "col-span-1 md:col-span-1" : ""}>
                    <h3 className="text-lg font-bold text-gray-900">
                        {car.year} {car.make} {car.model}
                    </h3>
                    <p className="text-xl font-extrabold text-black mt-1">{car.price}</p>
                </div>

                {/* Specs */}
                <div className={`text-sm text-gray-600 ${isListView ? 'col-span-1 md:col-span-1 space-y-1' : 'mt-2'}`}>
                    <p>{car.mileage} • Automatic</p>
                    <p>3.5L V6 SMPI TI-VCT</p>
                </div>

                {/* Ratings, Swatches, and Announce Button */}
                <div className={`flex flex-col ${isListView ? 'items-end justify-between md:col-span-1' : 'items-start mt-4 pt-2 border-t border-gray-100'}`}>
                    
                    {/* Swatches (Added here) */}
                    <div className="flex items-center space-x-2 mb-2">
                         {colorSwatches.map((swatch) => (
                            <div 
                                key={swatch.code}
                                // We use Tailwind's group-hover and specific hover classes for interaction 
                                // instead of React state to simplify per-card instance management.
                                className={`
                                    group relative w-6 h-6 rounded-full border border-gray-400 text-xs font-bold transition duration-150
                                    flex items-center justify-center cursor-pointer bg-gray-200  text-gray-900
                                    hover:bg-${swatch.color} hover:text-white hover:border-transparent hover:shadow-md
                                    ${swatch.code === "W" ? "bg-white" : ""}
                                `}
                                // Ensure Tailwind can recognize these dynamic classes by forcing them to exist:
                                // hover:bg-green-600 hover:bg-yellow-500 hover:bg-red-600 hover:bg-blue-600 hover:bg-white
                            >
                                {swatch.code}
                                
                                {/* Hover Text Tooltip */}
                                <span className="
                                    absolute hidden group-hover:block -top-8 
                                    bg-gray-800 text-white text-xs px-2 py-1 rounded 
                                    whitespace-nowrap z-10
                                ">
                                    {swatch.hoverText}
                                </span>
                            </div>
                        ))}
                    </div>

                    {/* Ratings */}
                    <div className="flex items-center text-sm mb-2">
                        <span className="text-gray-500 mr-2">{car.grade}</span>
                        {[...Array(5)].map((_, i) => (
                            <FaStar key={i} className={`w-3 h-3 ${i < numStars ? 'text-yellow-400' : 'text-gray-300'}`} />
                        ))}
                        <span className="text-gray-500 ml-2">Grade {car.grade}</span>
                    </div>
                    
                    {/* Announce Button */}
                    <button className="flex items-center text-sm text-blue-600 hover:text-blue-800 transition">
                        <FaVolumeUp className="w-3 h-3 mr-1" />
                        Announce
                    </button>
                </div>
            </div>
        </div>
    );
};


// =================================================================
// SearchResults Component (Outer shell, dark background)
// =================================================================

const SearchResults = () => {
    const [viewMode, setViewMode] = useState('list'); 

    const resultsContainerClasses = viewMode === 'list'
        ? 'space-y-4'
        : 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4';

    const getButtonClasses = (mode) => 
        `p-2 border ${mode === viewMode ? 'bg-black text-white' : 'bg-white text-gray-500 hover:bg-gray-100'}`;

    return (
        <div className=" p-4 rounded-lg"> 
            
            {/* Top Bar: View Options and Sort */}
            <div className="flex justify-between items-center mb-6">
                
                <div className="grow">
                    <h2 className="text-2xl font-bold text-gray-900">
                    Used Cars Near Me for sale
                </h2>
                    </div> 
                
                {/* Right Side Controls (View Toggles + Sort) */}
                <div className="flex items-center space-x-4"> 
                    
                    {/* View Mode Toggles */}
                    <div className="flex items-center text-sm font-medium text-gray-700 space-x-2"> 
                        {/* Grid View Label & Button */}
                        <div className="flex items-center space-x-1 font-extrabold">
                            <p>Grid View</p>
                            <button 
                                onClick={() => setViewMode('grid')}
                                className={getButtonClasses('grid') + ' rounded-lg'}
                                aria-label="Switch to Grid View"
                            >
                                <FaTh className="w-4 h-4" />
                            </button>
                        </div>
                        
                        {/* List View Label & Button */}
                        <div className="flex items-center space-x-1">
                            <p>List View</p>
                            <button 
                                onClick={() => setViewMode('list')}
                                className={getButtonClasses('list') + ' rounded-lg'}
                                aria-label="Switch to List View"
                            >
                                <FaList className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                    
                    {/* Sort Dropdown */}
                    <div className="flex items-center text-sm">
                        <label htmlFor="sort" className="mr-2 text-gray-200">Sort:</label>
                        <div className="relative">
                            <select 
                                id="sort" 
                                className="appearance-none bg-white border border-gray-300 text-gray-900 py-2 pl-3 pr-8 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
                            >
                                <option>Default</option>
                                <option>Price: Low to High</option>
                                <option>Year: Newest</option>
                            </select>
                            <FaAngleDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Results Container */}
            <div className={resultsContainerClasses}>
                {mockResults.map((car) => (
                    <ResultCard key={car.id} car={car} viewMode={viewMode} /> 
                ))}
            </div>

            {/* Pagination (Updated colors for visibility) */}
            <div className="flex justify-center items-center space-x-2 mt-8 text-white">
                <button className="p-2 border border-gray-400 rounded text-gray-200 hover:bg-gray-500">&lt;</button>
                <span className="px-3 py-1 bg-black text-white rounded">1</span>
                <button className="px-3 py-1 border border-gray-400 rounded text-gray-200 hover:bg-gray-500">2</button>
                <button className="px-3 py-1 border border-gray-400 rounded text-gray-200 hover:bg-gray-500">3</button>
                <button className="p-2 border border-gray-400 rounded text-gray-200 hover:bg-gray-500">&gt;</button>
            </div>
        </div>
    );
};

export default SearchResults;