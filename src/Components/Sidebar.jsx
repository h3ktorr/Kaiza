import React, { useRef, useContext, useEffect } from "react";
import { IoClose } from "react-icons/io5";
import { ShopContext } from "../Context/ShopContext";
import { Link } from "react-router-dom";


const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useContext(ShopContext);

  const sidebarRef = useRef(null);

  const handleSidebarClose = (e) => {
    if (e.target === sidebarRef.current) {
      closeSidebar();
    }
  };

  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isSidebarOpen]);
  
  return (
    <div
      className={`${
        isSidebarOpen
          ? "fixed z-10 top-0 left-0 bg-transparent w-full transform -translate-x-full transition duration-500 show-sidebar"
          : "fixed z-10 top-0 left-0 bg-transparent w-full transform -translate-x-full transition duration-500"
      }`}
      ref={sidebarRef}
      onClick={handleSidebarClose}
    >
      <div className="w-10/12 px-4 bg-white h-full">
        <div className="flex justify-between px-4 py-4">
          <div className="text-xl font-bold">Kaiza</div>
          <IoClose className="closecart-btn" onClick={closeSidebar} />
        </div>
        <div className="flex flex-col gap-2 pl-2">
          <p onClick={closeSidebar}> <Link to='/stilettos'>Stilettos</Link> </p>
          <p onClick={closeSidebar}> <Link to='/flats'>Flats</Link></p>
          <p onClick={closeSidebar}> <Link to='/sneakers'>Sneakers</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
