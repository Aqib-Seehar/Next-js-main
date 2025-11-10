

import React from 'react';
import Header from './Header';
import Footer from './Footer';
import PageNavigation from '../CardDetail/PageNavigation';
import BreadCrumbs2 from '../CardDetail/BreadCrumbs2';
const UsedCarLayout = ({ children }) => {

  const showPageNavigation = true; 
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      {showPageNavigation && <BreadCrumbs2 />} 
      

      <main className="flex-grow">
        {children}
      </main>
      
      <Footer />
    </div>
  );
};

export default UsedCarLayout;