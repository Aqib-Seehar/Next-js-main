"use client";
// src/components/CarDetail/VehicleDetails.jsx (FIXED)

import React, { useState } from "react";

// Mock data for display
const vehicle = {
  name: "2012 Volkswagen GTI",
  guaranteedPrice: "9,595",
  milesPrice: "99,298",
  grade: 4.5,
  location: "Silver River Motor",
  locationDetails:
    "Reserver this car then complete optional online tasks to prepare. Test drive first with no obligation, or start buying online.",
};

// Define the color swatches for the buttons
const colorSwatches = [
  { code: "G", color: "green-600", hoverText: "Green", defaultBg: "gray-200" },
  {
    code: "Y",
    color: "yellow-700", // Darker yellow color
    hoverText: "Yellow",
    defaultBg: "gray-200",
  },
  { code: "R", color: "red-600", hoverText: "Red", defaultBg: "gray-200" },
  { code: "B", color: "blue-600", hoverText: "Blue", defaultBg: "gray-200" },
  { code: "W", color: "white", hoverText: "White", defaultBg: "gray-200" },
];

const VehicleDetails = () => {
  const [hoveredColor, setHoveredColor] = useState("");
  const [activeHoverCode, setActiveHoverCode] = useState(null); 

  // Helper function to get the appropriate text color on hover
  const getHoverTextColor = (swatchCode) => {
    // If the swatch is Yellow or White (light backgrounds), use black text.
    if (swatchCode === 'Y' || swatchCode === 'W') {
      return 'text-black';
    }
    // Otherwise (for Green, Red, Blue - dark backgrounds), use white text.
    return 'text-white';
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md space-y-5 border border-gray-100">
      {/* 1. Title and Prices */}
      <div className="space-y-4">
        <h1 className="text-3xl font-bold text-gray-900 leading-tight">
          {vehicle.name}
        </h1>

        {/* Price Display: Guaranteed Price * | Miles */}
        <div className="flex justify-between items-start pt-2 border-t border-gray-100">
          {/* Guaranteed Price */}
          <div className="flex flex-col flex-1">
            <p className="text-xs text-gray-500 font-medium tracking-wide uppercase text-left">
              Guaranteed Price *
            </p>
            <p className="text-2xl text-black mt-2">
              ${vehicle.guaranteedPrice}
            </p>
          </div>
          <div
            // Set custom height and margin to center the line vertically
            className="h-[60px] border-r border-gray-300 mx-15 mt-1"
          ></div>
          {/* Miles Price */}
          <div className="flex flex-col text-right w-max shrink-0">
            <p className="text-xs text-gray-500 font-medium tracking-wide uppercase text-left">
              Miles
            </p>
            <p className="text-2xl text-black mt-1 text-left">
              {vehicle.milesPrice}
            </p>
          </div>
        </div>

        {/* Buy Car Button - Now white background with black border */}
        <button className="w-full bg-white border border-black text-black py-3 rounded font-semibold text-sm hover:bg-gray-50 transition">
          Buy Our Cars
        </button>
      </div>

      {/* 2. Grade/Rating & Lights */}
      <div className="flex items-center justify-between border-t border-b border-gray-200 py-2 text-sm">
        {/* Left Side: Lights/Color Swatches */}
        <div className="flex items-center space-x-2">
          <span className="font-medium">Lights</span>
          {/* Color Swatches G, Y, R, B, W */}
          {colorSwatches.map((swatch) => (
            <button
              key={swatch.code}
              className={`
                relative w-6 h-6 rounded-full border border-gray-400 text-xs font-bold transition duration-150
                flex items-center justify-center cursor-pointer 
                
                ${
                  swatch.code === "W" // Styling for the White swatch
                    ? `text-gray-900 bg-${swatch.defaultBg}`
                    : `text-gray-900 bg-${swatch.defaultBg}` // Default background for others
                }
                
                ${
                  activeHoverCode === swatch.code 
                    ? `bg-${swatch.color} ${getHoverTextColor(swatch.code)} border-transparent shadow-md` // FIX APPLIED HERE
                    : ""
                }
              `}
              onMouseEnter={() => {
                setHoveredColor(swatch.hoverText);
                setActiveHoverCode(swatch.code);
              }}
              onMouseLeave={() => {
                setHoveredColor("");
                setActiveHoverCode(null);
              }}
              aria-label={`Color ${swatch.hoverText}`}
            >
              {/* The letter inside the circle */}
              {swatch.code}
            </button>
          ))}
        </div>

        {/* Right Side: Grade */}
        <div className="flex items-center space-x-2">
          <span className="font-semibold text-gray-700">
            Grade {vehicle.grade}
          </span>
        </div>
      </div>

      {/* 3. Availability and Details */}
      <div className="space-y-4 pt-2">
        {/* Available at Silver River Motor - Now a heading */}
        <h3 className="text-lg text-center font-semibold text-gray-900 border-b border-gray-100 pb-1">
          Available at {vehicle.location}
        </h3>

        {/* Paragraph description */}
        <p className="text-sm text-gray-600 text-center">
          {vehicle.locationDetails}
        </p>
      </div>

      {/* 4. BOOK APPOINTMENT Button */}
      <button className="w-full bg-black text-white py-3 rounded font-semibold text-sm tracking-widest hover:bg-gray-800 transition shadow-lg">
        BOOK APPOINTMENT
      </button>
    </div>
  );
};

export default VehicleDetails;