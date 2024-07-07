import React from 'react';
import { Outlet } from "react-router-dom";
import Navbar from '../Components/Navbar';
import BreadCrum from '../Components/BreadCrum';
import Footer from '../Components/Footer';

const RootLayout = () => {
  return (
    <div className="font-body flex flex-col">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default RootLayout