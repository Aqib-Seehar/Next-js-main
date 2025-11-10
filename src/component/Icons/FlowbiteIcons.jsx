// src/components/Icons/FlowbiteIcons.jsx

import React from "react";

// You will define a component for each icon you need

export const FuelIcon = (props) => (
  // Note the use of 'className' instead of 'class' and spreading 'props'
  <svg
    className={`w-5 h-5 ${props.className || ""}`}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M17.657 16.657L13.414 20.899A5 5 0 0110 21.9V13.5M17.657 16.657L6.464 5.464A2 2 0 005.05 4.05L4 5.05M17.657 16.657L17.657 16.657M16 11H8M16 11V3"
    ></path>
  </svg>
);

export const RadioIcon = (props) => (
  // Example for a Radio/Antenna Icon
  <svg
    className={`w-5 h-5 ${props.className || ""}`}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    ></path>
  </svg>
);

// ... define all other icons (CylinderIcon, LockIcon, RulerIcon, etc.)
