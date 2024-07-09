import React from "react";
import { FaStar } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import { Link } from "react-router-dom";

const ProductDisplay = (props) => {
  const { product } = props;
  return (
    <div className="self-center sm:flex justify-between w-11/12">
      <div className="w-full sm:flex items-start gap-4 ">
        <div className="flex flex-col gap-2 big-screen">
          <img src={product.image[0]} alt="" className="w-28" />
          <img src={product.image[1]} alt="" className="w-28" />
          <img src={product.image[2]} alt="" className="w-28" />
          <img src={product.image[3]} alt="" className="w-28" />
        </div>
        <img src={product.image[4]} alt="" className=" w-full sm:w-100" />
        <div className="small-screen mt-4">
          <div className="flex gap-2 overflow-scroll">
            <img src={product.image[0]} alt="" className="w-28" />
            <img src={product.image[1]} alt="" className="w-28" />
            <img src={product.image[2]} alt="" className="w-28" />
            <img src={product.image[3]} alt="" className="w-28" />
          </div>
        </div>
      </div>
      <div className="big-screen">
        <div>
          <div className="flex justify-between">
            <h3 className="text-2xl">{product.name}</h3>
            <p>N{product.price}</p>
          </div>
          <p className="text-itemsecondary text-xs mt-1">
            Padlock 105mm metallic black sandals heel
          </p>
          <p className="text-sm mt-1">
            Unlock your classiness; never go wrong with the perfect shoes.
          </p>
          <hr className="mt-5" />
        </div>
        <div className="mt-2">
          <h3>Choose your size. </h3>
          <p className="text-itemsecondary text-xs mt-1">
            Choose what size is right for you.
          </p>
          <div className="flex gap-2 mt-3">
            <button className="border p-1 rounded">39</button>
            <button className="border p-1 rounded">40</button>
            <button className="border p-1 rounded">42</button>
          </div>
          <hr className="mt-5" />
        </div>
        <div className="mt-2">
          <h3>Select your quantity. </h3>
          <p className="text-itemsecondary text-xs mt-1">
            There’s no such thing as “too many”.
          </p>
          <div className="flex gap-2 mt-2 ">
            <button className="border  rounded-3xl w-8">-</button>
            <div className="w-10 border rounded"></div>
            <button className="border  rounded-3xl w-8">+</button>
          </div>
          <hr className="mt-5" />
        </div>
        <button className="uppercase mt-5 bg-footerhero py-2 px-5 rounded self-center text-xs tracking-widest">
          Add to Cart
        </button>
      </div>
      <div className="small-screen mt-16">
        <div className="">
          <h3 className="text-lg">N{product.price}</h3>
          <p className="text-sm">{product.category}</p>
          <div className="flex items-center gap-4">
            <div className="flex gap-2 mt-2 items-center">
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
              <CiStar className="text-lg" />
            </div>
            <p className="text-xs">4.9 (891 reviews)</p>
          </div>
          <hr className="mt-4" />
        </div>
        <div className="mt-6 ">
          <p className="text-sm">Please select size:</p>
          <div className="flex gap-6 mt-5 justify-center text-xs">
            <button className="border border-itemsecondary p-1 px-6 rounded">
              39
            </button>
            <button className="border border-itemsecondary p-1 px-6 rounded">
              40
            </button>
            <button className="border border-itemsecondary p-1 px-6 rounded">
              42
            </button>
          </div>
          <hr className="mt-8" />
        </div>
        <div className="mt-6 ">
          <p className="text-sm">Please select quantity:</p>
          <div className="flex gap-2 mt-5">
            <button className="border  rounded-3xl w-8">-</button>
            <div className="w-14 border border-itemsecondary rounded"></div>
            <button className="border  rounded-3xl w-8">+</button>
          </div>
          <hr className="mt-8" />
        </div>
        <Link to='/checkout'>
          <button className="uppercase mt-5 bg-footerhero py-2 px-5 rounded self-center text-xs tracking-widest">
            Add to Cart
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProductDisplay;
