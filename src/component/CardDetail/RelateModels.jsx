// src/components/CarDetail/RelatedModels.jsx

import React from "react";

// Mock data for the similar models list, matching the wireframe content
const relatedModels = [
  {
    id: 1,
    name: "2023 Audi RS3",
    details: "600 mi, 7-speed Manual",
    image: "/images/2023-audi.png",
  },
  {
    id: 2,
    name: "1986 Pontiac Firebird",
    details: "Turbo, 5-speed Automatic",
    image: "/images/Pontiac.png",
  },
  {
    id: 3,
    name: "2001 BMW M5",
    details: "380 HP, 6-speed Manual",
    image: "/images/2001-BMW.png",
  },
  {
    id: 4,
    name: "2009 BMW 328i Convertible",
    details: "120k mi, Automatic",
    image: "/images/2009-BMW.png",
  },
  {
    id: 5,
    name: "1995 Audi S6 Avant",
    details: "160k mi, Automatic (7-Speed)",
    image: "/images/1995-audi.png",
  },
];

const RelatedModels = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md space-y-4 border border-gray-100">
      {/* Title - Matches wireframe style */}
      <h2 className="text-base font-bold text-gray-900 border-b border-gray-200 pb-2">
        More Similar Models Available
      </h2>

      {/* List of Related Models */}
      <ul className="space-y-3 pt-2">
        {relatedModels.map((model) => (
          <li
            key={model.id}
            className="flex items-start hover:bg-gray-50 p-2 -mx-2 rounded transition cursor-pointer"
          >
            {/* Image Placeholder - Small, square thumbnail (w-16 h-16) */}
            <div className="flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden mr-3">
              {/*  */}
              <img
                src={model.image} // Replace with actual image source later
                alt={model.name}
                className="w-full h-full object-cover bg-gray-200"
              />
            </div>

            {/* Text Content */}
            <div className="flex flex-col justify-center py-0.5">
              {/* Model Name */}
              <p className="text-sm font-semibold text-gray-900 leading-tight">
                {model.name}
              </p>
              {/* Details/Subtitle */}
              <p className="text-xs text-gray-600 mt-0.5">{model.details}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RelatedModels;
