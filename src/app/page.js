/* import Image from "next/image";
import Header from "@/component/Layout/header";
import LightRays from "@/component/lightrays";

export default function Home() {
  return (
    <>
      <Header />
      <div style={{ width: "100%", height: "600px", position: "relative" }}>
        <LightRays
          raysOrigin="top-center"
          raysColor="#831898" //hex color 6 digit
          raysSpeed={1.5}
          lightSpread={2}
          rayLength={2}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
          className="custom-rays"
        />
      </div>
    </>
  );
}
 */
// src/app/page.jsx (or similar page file)

import React from "react";
// Assuming you are using import aliases like @/component
import MainLayout from "@/component/Layout/MainLayout";
import ImageGallery from "@/component/CardDetail/ImageGallery";
import VehicleDetails from "@/component/CardDetail/VehicleDetails";
import RelatedModels from "@/component/CardDetail/RelateModels";
import FeatureList from "@/component/CardDetail/FeatureList";
import VehicleLocation from "@/component/CardDetail/VehicleLocation";
import RecommendedCars from "@/component/CardDetail/RecommendedCars";

const VehicleDetailPage = () => {
  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* LEFT COLUMN (2/3 width) */}
          <div className="lg:col-span-2 space-y-8">
            {/* 1. Image Gallery is the first element on the LEFT */}
            <ImageGallery />
            <FeatureList />
            
          </div>

          {/* RIGHT COLUMN (1/3 width) */}
          <div className="lg:col-span-1 space-y-8">
            {/* 1. Vehicle Details is the first element on the RIGHT */}
            <VehicleDetails />
            <RelatedModels />
          </div>
        </div>
        <div className="mt-8">
          <VehicleLocation />
        </div>
        <RecommendedCars />
      </div>
    </MainLayout>
  );
};

export default VehicleDetailPage;
