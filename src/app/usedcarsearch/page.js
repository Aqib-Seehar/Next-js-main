// app/usedcarsearch/page.js

import React from "react";
import UsedCarLayout from "@/component/Layout/UsedCarLayout";

// 💡 We will create these two new components:
import FilterPanel from "@/component/SearchPage/FilterPanel";
import SearchResults from "@/component/SearchPage/SearchResults";

const UsedCarSearchPage = () => {
  return (
    <UsedCarLayout>
      <div className="bg-white min-h-screen py-8 max-w-fit ">
        <div className=" mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header/Title */}
         
          
          {/* Main Grid: Left Column (Filters) and Right Column (Results) */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            
            {/* 1. Left Column: Filter Panel (Takes 1/4 width) */}
            <div className="lg:col-span-1 ">
              <FilterPanel />
            </div>
            
            {/* 2. Right Column: Search Results (Takes 3/4 width) */}
            
            <div className=" lg:col-span-3 mx-9 ">
               
              <SearchResults />
            </div>
          </div>
        </div>
      </div>
    </UsedCarLayout>
  );
};

export default UsedCarSearchPage;