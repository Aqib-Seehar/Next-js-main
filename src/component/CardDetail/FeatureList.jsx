// src/components/CarDetail/FeatureList.jsx

// src/components/CarDetail/FeatureList.jsx

import React from "react";
// 💡 Importing specific icons from react-icons/fa for a quick, professional look
import {
  FaRadio,
  FaCogs,
  FaGasPump,
  FaTachometerAlt,
  FaLock,
  FaChair,
  FaWindowMaximize,
  FaKey,
  FaRulerCombined,
  FaTire,
} from "react-icons/fa";

// ===============================================
// 1. ICON MAPPING
// ===============================================

// Map descriptive names to the appropriate React Icon Component
const ICON_MAP = {
  // Engine & Performance
  RADIO: FaRadio,
  CYLINDER: FaCogs,
  AUTOMATIC: FaCogs,
  FUEL: FaGasPump,
  HP: FaTachometerAlt,

  // Interior Features
  FABRIC: FaChair,
  LOCKS: FaLock,
  WINDOW: FaWindowMaximize,
  KEY: FaKey,
  SEAT: FaChair,

  // Chassis & Wheels / Dimensions
  WHEEL: FaTire,
  RULER: FaRulerCombined,
};

// ===============================================
// 2. MOCK DATA STRUCTURE (Matching Figma)
// ===============================================

const features = {
  // Left Column Data
  left: [
    { label: "MP3 Connection", value: "", iconType: "CYLINDER" },
    { label: "Aux input", value: "", iconType: "RADIO" },
    { label: "Satelite Radio", value: "" },
    // 💡 Added mt-2 class here to push it down from '4 Cyl.'
    {
      label: "4 Cyl.",
      value: "",
      iconType: "4 Cyl.",
      className: "mt-6  pt-2 ",
    },
    { label: "30 / 29 mpg", value: "", iconType: "FUEL" },
    { label: "200 hp", value: "", iconType: "HP" },
    { label: "9 gal Tank", value: "", iconType: "FUEL" },
    { label: "Green Interior", value: "", iconType: "FABRIC" },
    { label: "Alloy Wheels", value: "", iconType: "WHEEL" },
    { label: "15 in Wheels", value: "", iconType: "WHEEL" },
  ],
  // Right Column Data (Icons are not applied here to match the visual gap in the figma)
  right: [
    { label: "Leather Interior", value: "" },
    { label: "Power Locks", value: "" },
    { label: "Power Windows", value: "" },
    { label: "Keyless Entry", value: "" },
    { label: "Keyless Start", value: "" },
    { label: "Rear Fold Down Seats", value: "" },
    // Dimensions
  ],
};

const FeatureList = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
      {/* Header: Stock & VIN (Minimal/Unobtrusive) - Max-w-sm for centered alignment */}
      <div className=" text-center pb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4 ">
          Vehicle Features
        </h2>

        <div className="inline-block border border-gray-400 p-3 rounded-full text-center ring-1 shadow-sm w-[600px]">
          <span>Stock #1126325572</span>
          <span>VIN: KL2D6D9E9FC746670</span>
        </div>
      </div>

      {/* Two-Column Feature List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-1">
        {/* 1. Left Features (WITH ICONS) */}
        <div className="space-y-1">
          {features.left.map((item, index) => {
            const IconComponent = ICON_MAP[item.iconType];

            return (
              // 💡 Added item.className here to apply the spacing and line
              <div
                key={index}
                className={`flex items-start text-sm text-gray-800 ${
                  item.className || ""
                }`}
              >
                {/* Icon Container: Ensures fixed size and color */}
                <span className="shrink-0 w-6 h-6 mr-2 flex items-center justify-start">
                  {IconComponent && (
                    <IconComponent className="w-4 h-4 text-green-500" />
                  )}
                </span>

                <p className="flex justify-between w-full">
                  <span className="font-medium">{item.label}</span>
                  {item.value && (
                    <span className="text-gray-600 font-normal ml-4 text-right">
                      {item.value}
                    </span>
                  )}
                </p>
              </div>
            );
          })}
        </div>

        {/* 2. Right Features (NO ICONS - Using empty space for alignment) */}
        <div className="space-y-1">
          {features.right.map((item, index) => (
            <div key={index} className="flex items-start text-sm text-gray-800">
              {/* Empty space placeholder for visual alignment with the left column icons */}
              <span className="flex-shrink-0 w-6 h-5 mr-2"></span>

              <p className="flex justify-between w-full">
                <span className="font-medium">{item.label}</span>
                {item.value && (
                  <span className="text-gray-600 font-normal ml-4 text-right">
                    {item.value}
                  </span>
                )}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureList;

/* 

/*
 
            <div className=" text-center pb-8">
                
         
               
                <h2 className="text-xl font-bold text-gray-900 mb-4 ">
                    Vehicle Features
                </h2>
                
    
                <div className="inline-block border border-gray-400 p-3 rounded-full text-center ring-1 shadow-sm w-[600px]">
                    <span>Stock #1126325572</span>
                    <span>VIN: KL2D6D9E9FC746670</span>
                </div>
            </div> */

/*  left: [
            { category: '', items: [
                { icon: ICONS.MP3, label: 'MP3 Connection', value: '' },
                { icon: ICONS.Aux, label: 'Aux Input', value: '' },
                { icon: ICONS.Radio, label: 'Satelite Radio', value: '' },
            ]},
             { category: '', items: [
                { icon: ICONS.Cyinde, label: '4 Cyl.', value: '' },
                { icon: ICONS.Automatic, label: 'Automatic', value: '' },
                { icon: ICONS.Cylinder, label: '30/39 MPG', value: '' },
                { icon: ICONS.Cylinder, label: 'FWD', value: '' },
                { icon: ICONS.Cylinder, label: '84 HP', value: '' },
                { icon: ICONS.Cylinder, label: '83 Torque', value: '' },
                { icon: ICONS.Cylinder, label: '9 gal Tank', value: '' },
            ]}, 
            { category: 'Interior Features', items: [
                { icon: ICONS.Interior, label: 'Green Interiors', value: '' },
            ]},
            { category: 'Chassis & Wheels', items: [
                { icon: ICONS.Wheels, label: 'Alloy Wheels', value: '' },
                { icon: ICONS.Wheels, label: '15 in Wheels', value: '' },
            ]}
        ],
        // Right Column Data
        right: [
            { category: 'Interior Features', items: [
                { icon: ICONS.Interior, label: 'Leather Interior', value: 'Yes' },
                { icon: ICONS.Locks, label: 'Power Locks', value: 'Yes' },
                { icon: ICONS.Windows, label: 'Power Windows', value: 'Yes' },
                { icon: ICONS.Key, label: 'Keyless Entry', value: 'Yes' },
                { icon: ICONS.Key, label: 'Keyless Start', value: 'No' },
                { icon: ICONS.Seats, label: 'Rear Fold Down Seats', value: 'Yes' },
            ]},
            { category: 'Dimensions', items: [
                { icon: ICONS.Dimensions, label: 'Front Head Room', value: '38.8 inches' },
                { icon: ICONS.Dimensions, label: 'Rear Head Room', value: '38.5 inches' },
                { icon: ICONS.Dimensions, label: 'Front Leg Room', value: '41.2 inches' },
                { icon: ICONS.Dimensions, label: 'Rear Leg Room', value: '35.2 inches' },
                { icon: ICONS.Dimensions, label: 'Front Shoulder Room', value: '55.3 inches' },
                { icon: ICONS.Dimensions, label: 'Rear Shoulder Room', value: '54.2 inches' },
            ]}, */
