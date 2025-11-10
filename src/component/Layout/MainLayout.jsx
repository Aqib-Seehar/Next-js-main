

import React from 'react';
import Header from './Header';
import Footer from './Footer';
import PageNavigation from '../CardDetail/PageNavigation';
import BreadCrumbs from '../CardDetail/BreadCrumbs';
const MainLayout = ({ children }) => {

  const showPageNavigation = true; 
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      {showPageNavigation && <BreadCrumbs />} 
      <PageNavigation />

      <main className="flex-grow">
        {children}
      </main>
      
      <Footer />
    </div>
  );
};

export default MainLayout;