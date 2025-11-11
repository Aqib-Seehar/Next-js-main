// src/components/CarDetail/FeatureList.jsx

import React from "react";
// 💡 Importing specific icons from react-icons/fa for a quick, professional look
import { MdAudiotrack, MdCircle } from "react-icons/md";
import { TbTool } from "react-icons/tb";
import { SiCanvas } from "react-icons/si";

// ===============================================
// 1. ICON MAPPING
// ===============================================

// Map descriptive names to the appropriate React Icon Component
const ICON_MAP = {
  // Engine & Performance
  Mp3: MdAudiotrack,
  Tool: TbTool,
  Circle: MdCircle,
  Canvas: SiCanvas,
};

// ===============================================
// 2. MOCK DATA STRUCTURE
// ===============================================

const features = {
  left: [
    { label: "MP3 Connection", value: "", iconType: "Mp3" },
    { label: "Aux input", value: "", iconType: "RADIO" },
    { label: "Satelite Radio", value: "" },
    {
      label: "4 Cyl.",
      value: "",
      iconType: "Tool",
      className: "mt-6 pt-2 ",
    },
    { label: "Automatic", value: "", iconType: "FUEL" },
    { label: "30/39 MPG", value: "", iconType: "HP" },
    { label: "FWD", value: "", iconType: "FUEL" },
    { label: "84 HP", value: "", iconType: "FABRIC" },
    { label: "83 Torque", value: "", iconType: "FABRIC" },
    { label: "9 gal Tank", value: "", iconType: "WHEEL" },
    {
      label: "Green Exterior.",
      value: "",
      iconType: "Circle",
      className: "mt-6 pt-2 ",
    },
    { label: "Green Interior", value: "", iconType: "Circle" },
    {
      label: "Alloy Wheels",
      value: "",
      iconType: "Canvas",
      className: "mt-6 pt-2 ",
    },
    { label: "15 in Wheels", value: "", iconType: "WH15 in Wheels" },
  ],
  right: [
    { label: "Leather Interior", value: "" },
    { label: "Power Locks", value: "" },
    { label: "Power Windows", value: "" },
    { label: "Keyless Entry", value: "" },
    { label: "Keyless Start", value: "" },
    { label: "Rear Fold Down Seats", value: "" },
  ],
};

const FeatureList = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
      {/* Header: Stock & VIN */}
      <div className="text-center pb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4 ">
          Vehicle Features
        </h2>

        {/* 💡 FIX: Removed w-[600px]. Replaced with max-w-xl and added flex/space-x for better horizontal layout */}
        <div className="inline-flex flex-wrap justify-center border border-gray-400 p-2 sm:p-3 rounded-full text-sm text-center ring-1 shadow-sm max-w-xl mx-auto">
          {/* Use span with responsive margin/padding */}
          <span className="px-2 sm:px-0">Stock #1126325572</span>
          <span className="text-gray-400 hidden sm:inline-block mx-2">
            |
          </span>{" "}
          {/* Separator */}
          <span className="px-2 sm:px-0">VIN: KL2D6D9E9FC746670</span>
        </div>
      </div>

      {/* Two-Column Feature List (Responsive grid-cols-1 md:grid-cols-2) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-1 justify-items-center">
        {" "}
        {/* 1. Left Features (WITH ICONS) */}
        <div className="space-y-1 w-full max-w-sm">
          {features.left.map((item, index) => {
            const IconComponent = ICON_MAP[item.iconType];

            return (
              <div
                key={index}
                className={`flex  text-sm text-gray-800 ${
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
        {/* 2. Right Features (NO ICONS) */}
        <div className="space-y-1 w-full max-w-sm">
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
