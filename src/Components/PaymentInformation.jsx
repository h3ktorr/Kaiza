import React, { useState } from "react";
import { FaApplePay, FaPaypal } from "react-icons/fa";
import { SiVisa, SiMastercard } from "react-icons/si";
import { FaAngleDown } from "react-icons/fa6";
import { Link } from "react-router-dom";

const PaymentInformation = () => {
  const [paymentState, setPaymentState] = useState(true);
  return (
    <div className="w-full self-center mt-10 flex flex-col">
      <h2
        className="bg-gray-100 px-12 py-6 flex justify-between"
        onClick={() => setPaymentState(!paymentState)}
      >
        Payment Information
        <span className="small-screen">
          <FaAngleDown />
        </span>
      </h2>
      {paymentState && (
        <div className="w-11/12 self-center mt-6 ">
          <p className="text-sm">Select payment method</p>
          <div className="mt-4 text-xs flex flex-col gap-1">
            <div className="flex items-center gap-4 border-b  w-48 pb-1">
              <input type="radio" name="p-radio" id="p-radio-1" />
              <label htmlFor="p-radio-1" className="flex items-center">
                <SiMastercard className="text-2xl text-red-800" />
                <p className="ml-3">Debit/Credit card</p>
              </label>
            </div>
            <div className="flex items-center gap-4 border-b w-48 ">
              <input type="radio" name="p-radio" id="p-radio-2" />
              <label htmlFor="p-radio-2" className="flex items-center">
                <SiVisa className="text-4xl text-blue-800" />
                <p className="ml-3">Visa</p>
              </label>
            </div>
            <div className="flex items-center gap-4 border-b mb-1 w-48 ">
              <input type="radio" name="p-radio" id="p-radio-3" />
              <label htmlFor="p-radio-3" className="flex items-center">
                <FaApplePay className="text-4xl" />
                <p className="ml-3">Apple pay</p>
              </label>
            </div>
            <div className="flex items-center gap-4 border-b border-itemsecondary pb-2">
              <input type="radio" name="p-radio" id="p-radio-3" />
              <label htmlFor="p-radio-3" className="flex items-center">
                <FaPaypal className="text-3xl text-blue-800" />
                <p className="ml-3">Paypal</p>
              </label>
            </div>
          </div>
        </div>
      )}
      {paymentState && (
        <div className="w-11/12 self-center mt-6 ">
          <p className="text-sm">Credit card information</p>
          <div className="mt-4 w-2/3">
            <div className="w-full text-xs">
              <p className="">Card holder’s name:</p>
              <input
                type="text"
                className="rounded border border-itemsecondary p-2 w-full mt-2"
              />
            </div>
            <div className="sm:flex mt-5 justify-between ">
              <div className="text-xs sm:w-2/3">
                <p className="">Card number:</p>
                <input
                  type="text"
                  className="rounded border border-itemsecondary p-2 w-full mt-2"
                />
              </div>
              <div className="text-xs mt-4 sm:mt-0 ">
                <p className="">CVC:</p>
                <input
                  type="text"
                  className="rounded border border-itemsecondary p-2  mt-2"
                />
              </div>
            </div>
            <div className="text-xs mt-5">
              <p className="">Expiration date:</p>
              <div className="flex gap-3 mt-2">
                <select className="bg-white border border-itemsecondary rounded p-2 text-itemsecondary">
                  <option>Month</option>
                  <option>January</option>
                  <option>Febuary</option>
                </select>
                <select className="bg-white border border-itemsecondary rounded p-2 text-itemsecondary">
                  <option>Day</option>
                  <option>1</option>
                  <option>2</option>
                </select>
                <select className="bg-white border border-itemsecondary rounded p-2 text-itemsecondary">
                  <option>Year</option>
                  <option>2024</option>
                  <option>2023</option>
                </select>
              </div>
            </div>
            <div className="mt-8 text-xs flex gap-2">
              <input type="checkbox" name="check" />
              <label htmlFor="check">Save credit card information</label>
            </div>
            <p className="text-xs text-itemsecondary mt-3">
              This will enable instant checkout in future
            </p>
          </div>
        </div>
      )}
      {paymentState && (
        <Link to="/ordercomplete" className="self-center">
          <button className=" my-20 bg-footerhero rounded w-full sm:w-auto text-xs p-4 sm:p-2 sm:px-8">
            CONFIRM ORDER
          </button>
        </Link>
      )}
    </div>
  );
};

export default PaymentInformation;
