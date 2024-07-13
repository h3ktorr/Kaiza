import React, { useContext } from "react";
import { PiShoppingCartSimpleFill } from "react-icons/pi";
import { IoPersonOutline } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { FaBarsStaggered } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { ShopContext } from "../Context/ShopContext";

const Navbar = () => {
  const { openSidebar } = useContext(ShopContext);
  return (
    <div className="flex p-6 px-8 items-center shadow-lg justify-between ">
      <div className="small-screen" onClick={openSidebar}>
        <FaBarsStaggered />
      </div>
      <h1 className="sm:mr-auto pl-4 text-3xl "> <Link to="/">Kaiza</Link></h1>
      <ul className="flex gap-10 mr-10 text-sm big-screen">
        <li>
          <Link to="/">Home</Link></li>
        <li>Shop</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="flex gap-8 sm:mr-4 ">
        <IoSearch />
        <Link to="/checkout"><PiShoppingCartSimpleFill /></Link>
        <IoPersonOutline className="big-screen" />
      </div>
    </div>
  );
};

export default Navbar;
