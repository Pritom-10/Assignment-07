import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../src/Component/Navbar';
import Footer from '../src/Component/Footer';

const RootLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet/>
      <Footer />
    </div>
  );
};

export default RootLayout;