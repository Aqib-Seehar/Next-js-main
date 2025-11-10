// src/components/SearchPage/FilterPanel.jsx

import React from 'react';
import { FaChevronRight } from 'react-icons/fa';

const filterCategories = [
    'Make', 'Model', 'Year', 'Engine Capacity', 'Mileage', 
    'Fuel Type', 'Sort by Price', 'Transmission', 'Exterior Color', 
    'Cylinders', 'Wheel & Tires'
];

const FilterPanel = () => {
    return (
        <div className="bg-gray-50 p-4 rounded-lg border-gray-100 sticky top-20 ">
            
            {/* Filter Header */}
            <div className="flex justify-between items-center mb-4 pb-2 border-b border-gray-200">
                <h2 className="text-lg font-bold text-gray-900">
                    Filter & Sort (1)
                </h2>
                <button className="text-sm text-blue-600 font-medium hover:underline">
                    Clear Filter
                </button>
            </div>

            {/* Filter Categories List */}
            <div className="space-y-0.5 mb-6">
                {filterCategories.map((category, index) => (
                    <div 
                        key={index} 
                        className="flex justify-between items-center p-2 hover:bg-gray-50 cursor-pointer text-gray-700 text-sm font-medium"
                    >
                        <span>{category}</span>
                        <FaChevronRight className="w-3 h-3 text-gray-400" />
                    </div>
                ))}
            </div>

            {/* Near Location Filter (Standalone Section) */}
            <div className="p-2 border-t border-gray-200">
                <div className="flex justify-between items-center text-gray-700 text-sm font-medium mb-2">
                    <span>Near Location</span>
                    <FaChevronRight className="w-3 h-3 text-gray-400" />
                </div>
                
                {/* Price Range Slider (Placeholder) */}
                <div className="mt-4">
                    <p className="text-xs text-gray-500 mb-1">Sort by Price:</p>
                    {/* Placeholder for the $1000 - $80000 slider */}
                    <div className="w-full h-1 bg-gray-300 rounded relative">
                        {/* Example of showing the range text */}
                        <div className="flex justify-between text-xs text-gray-600 mt-2">
                            <span>$1000</span>
                            <span>$80000</span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default FilterPanel;