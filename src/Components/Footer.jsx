import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="sm:flex w-11/12 self-center mt-8 bg-footerbg text-white items-center justify-center sm:h-80 h-96 pl-5">
      <div className="px-6 sm:px-16 py-4 sm:py-0">
        <h1 className="text-lg">Be the first to know!</h1>
        <div className="flex my-4 ">
          <input
            type="email"
            placeholder="Email address"
            className="text-xs p-3 rounded-l-md"
          />
          <button className="w-24 bg-gray-400 text-xs py-4 bg-footerbtn text-black rounded-r-md">
            SIGN UP
          </button>
        </div>
        <div className="flex gap-4 big-screen">
          <FaInstagram className="bg-footerbtn text-black size-5 p-1 rounded-lg" />
          <FaXTwitter className="bg-footerbtn text-black size-5 p-1 rounded-lg" />
          <FaPinterest className="bg-footerbtn text-black size-5 p-1 rounded-lg" />
          <FaLinkedin className="bg-footerbtn text-black size-5 p-1 rounded-lg" />
          <FaFacebook className="bg-footerbtn text-black size-5 p-1 rounded-lg" />
        </div>
      </div>
      <ul className="grid grid-cols-2 sm:grid-cols-4  w-full items-center justify-center text-xs list-disc gap-4 sm:gap-8 pl-8 sm:pl-0 mx-auto">
        <li>Shop</li>
        <li>About us</li>
        <li>Custom Orders</li>
        <li>Return policy</li>
        <li>Gallery</li>
        <li>Contact us</li>
        <li>Work with us</li>
        <li>Terms of service</li>
        <li>What we do</li>
        <li>FAQ's</li>
        <li>Make enquiries</li>
      </ul>
      <div className="small-screen mt-5 ml-8">
        <div className="flex gap-7">
          <FaInstagram className="bg-footerbtn text-black size-5 p-1 rounded-lg" />
          <FaXTwitter className="bg-footerbtn text-black size-5 p-1 rounded-lg" />
          <FaPinterest className="bg-footerbtn text-black size-5 p-1 rounded-lg" />
          <FaLinkedin className="bg-footerbtn text-black size-5 p-1 rounded-lg" />
          <FaFacebook className="bg-footerbtn text-black size-5 p-1 rounded-lg" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
