// src/components/CarDetail/VehicleLocation.jsx

import React from 'react';
// You will want to replace these placeholders with actual Flowbite SVG icons 

// Placeholder for a Map Pin Icon
const MapPinIcon = (props) => (
    <svg 
        className={`w-5 h-5 ${props.className || ''}`} 
        aria-hidden="true" 
        xmlns="http://www.w3.org/2000/svg" 
        fill="currentColor" 
        viewBox="0 0 24 24"
        {...props}
    >
        <path fillRule="evenodd" d="M12 2a8 8 0 0 0-8 8c0 5.428 5.767 9.873 8 13.5 2.233-3.627 8-8.072 8-13.5a8 8 0 0 0-8-8zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" clipRule="evenodd"/>
    </svg>
);

// Placeholder for a Phone Icon
const PhoneIcon = (props) => (
    <svg 
        className={`w-4 h-4 ${props.className || ''}`} 
        aria-hidden="true" 
        xmlns="http://www.w3.org/2000/svg" 
        fill="currentColor" 
        viewBox="0 0 24 24"
        {...props}
    >
        <path d="M16 3h.99a1 1 0 0 1 1 1v4.735a1.5 1.5 0 0 1-2.583 1.054L15 9.497A1.5 1.5 0 0 0 13 8h-2a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2.128l1.417-1.127a1.5 1.5 0 0 1 2.583 1.054V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h12z"/>
    </svg>
);


const VehicleLocation = () => {
    
    // Static data matching the wireframe
    const dealerName = 'Silver River Motor';
    const addressLine1 = '972 NW 167th St';
    const addressLine2 = 'Hialeah, FL 33014';
    const locationCity = 'Miami';
    const phoneNumber = '888-418-1212';
    
    return (
        // Card Container: Matches the styling of FeatureList (white bg, shadow, border)
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 mt-6">
            
            {/* 1. Header: Vehicle Located at */}
            <h2 className="text-xl font-bold text-gray-900 mb-4">
                Vehicle Located at
            </h2>

            {/* Content Container: Splits into Location Details (Left) and Map (Right) */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                
                {/* 2. Left Column: Location Details, Scheduling, Contact */}
                <div className="lg:col-span-1 space-y-4">
                    
                    {/* Location Information */}
                    <div className="flex items-start space-x-2 text-gray-800">
                        <MapPinIcon className="flex-shrink-0 w-6 h-6 text-blue-600 mt-0.5" />
                        <div className="text-sm">
                            {/* The "Miami" location label is separate and bold */}
                            <p className="font-bold text-lg mb-1">{locationCity}</p>
                            
                            {/* The dealer and address are combined and slightly smaller */}
                            <p className="font-medium">
                                {dealerName} {addressLine1}
                            </p>
                            <p className="text-gray-600">
                                {addressLine2}
                            </p>
                        </div>
                    </div>
                    
                    {/* Schedule Input/Button */}
                    <div className="space-y-2 pt-2">
                        <input 
                            type="text" 
                            placeholder="Schedule a Test Drive" 
                            className="w-full p-2 border border-gray-300 rounded text-sm placeholder-gray-500"
                        />
                        <button className="w-full bg-black text-white font-semibold py-2 rounded shadow-md hover:bg-gray-800 transition duration-150">
                            Schedule a Test Drive
                        </button>
                    </div>

                    {/* Contact & Directions Links */}
                    <div className="flex justify-between items-center pt-2 text-sm">
                        <a 
                            href={`tel:${phoneNumber}`} 
                            className="flex items-center text-blue-600 font-medium hover:underline transition duration-150"
                        >
                            <PhoneIcon className="w-4 h-4 mr-1" />
                            {phoneNumber}
                        </a>
                        
                        <a 
                            href="#" 
                            className="text-blue-600 font-medium hover:underline transition duration-150"
                        >
                            Get Directions
                        </a>
                    </div>
                </div>

                {/* 3. Right Column: Map Placeholder */}
                <div className="lg:col-span-2">
                    {/* This div acts as a placeholder for the embedded map (e.g., Google Maps iframe or an image) */}
                    <div className="bg-gray-200 h-full min-h-[250px] w-full border border-gray-300 rounded overflow-hidden">
                        {/* Static Map Image Placeholder (Mimics the look of the map in Figma) */}
                        <div className="relative h-full w-full">
                            <div className="flex items-center justify-center h-full text-gray-500 font-medium">
                                [Placeholder for Embedded Map]
                            </div>
                            {/* Example of adding a simple map detail layer if needed */}
                            <div className="absolute bottom-2 right-2 bg-white px-2 py-1 text-xs rounded shadow">
                                Map data ©2025 Google
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VehicleLocation;