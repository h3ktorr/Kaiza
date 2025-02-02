import React from 'react';
import { Outlet } from "react-router-dom";
import Navbar from '../Components/Navbar';
import BreadCrum from '../Components/BreadCrum';
import Footer from '../Components/Footer';
import ScrollToTop from '../Components/ScrollToTop';
import Sidebar from '../Components/Sidebar';

const RootLayout = () => {
  return (
    <div className="font-body flex flex-col">
      <ScrollToTop />
      <Navbar />
      <Sidebar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default RootLayout