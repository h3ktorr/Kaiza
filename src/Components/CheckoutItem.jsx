import React from "react";
import { AiFillCreditCard } from "react-icons/ai";
import { IoGift } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { IoIosClose } from "react-icons/io";
import { Link } from "react-router-dom";

const CheckoutItem = (props) => {
  const { product } = props;
  return (
    <div className="self-center w-11/12">
      <div className="flex justify-between border-b pb-4 border-itemsecondary big-screen">
        <div>
          <div className="flex gap-4 items-center">
            <h3>CHECKOUT</h3>
            <IoGift />
          </div>
          <p className="text-xs text-itemsecondary">
            Items are reserved for 30 minutes.
          </p>
        </div>
        <div className="flex gap-4 items-center">
          <h3>Total</h3>
          <AiFillCreditCard />
        </div>
      </div>
      <div className="sm:flex bg-gray-100">
        <div className="sm:w-1/2 sm:border-r border-itemsecondary">
          <div className="sm:flex justify-between sm:border-b pb-8 border-itemsecondary">
            <img src={product.image[0]} alt="" className="sm:w-1/2 w-full" />
            <div className="relative flex flex-col justify-center  w-1/2 text-start pl-5 sm:pl-10">
              <IoIosClose className="absolute top-3 right-3 text-2xl text-red-700 big-screen" />
              <h1 className="text-xl">Tom Ford</h1>
              <p className="text-xs mt-3">
                Black <span>| Size 42 |</span> Qty 1
              </p>
              <div className="flex mt-12 items-center gap-4 w-40">
                <button className="flex items-center border p-2 rounded text-xs gap-1">
                  <p>Save for later</p> <CiHeart />
                </button>
                <p className="text-xs text-red-700">Edit</p>
              </div>
            </div>
          </div>
          <div className="sm:mt-96  pl-8 sm:p-8">
            <p className="text-sm">Do you have a discount code?</p>
            <p className="text-xs mt-3 text-itemsecondary underline">
              Apply here
            </p>
          </div>
        </div>
        <div className="sm:w-1/2 px-8 sm:px-16 pt-16 flex flex-col text-sm sm:text-base">
          <div>
            <div className="flex justify-between pb-8">
              <p>Sub-total:</p>
              <p>N30,000</p>
            </div>
            <div className="flex justify-between pb-8">
              <p>Delivery:</p>
              <p>N2,000</p>
            </div>
            <div className="flex justify-between pb-8">
              <p>Standard delivery:</p>
              <p>N2,000</p>
            </div>
            <div className="flex justify-between pb-8">
              <p className="font-bold text-xl">TOTAL:</p>
              <p>N32,000</p>
            </div>
          </div>
          <p className="w-full p-4 bg-gray-300 small-screen">1 item</p>
          <Link to='/delivery'>
            <button className="self-center bg-footerhero rounded w-full sm:w-auto text-xs p-4 sm:p-2 sm:px-8 my-8">
              CHECKOUT
            </button>
          </Link>
        </div>
      </div>
      <div className="flex justify-between pt-20 px-52 pb-52 text-red-800 big-screen">
        <h3 className="underline">Delivery & Returns</h3>
        <h3 className="underline">Continue shopping</h3>
      </div>
    </div>
  );
};

export default CheckoutItem;
