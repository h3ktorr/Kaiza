import React from "react";
import { FaStar } from "react-icons/fa";
import { CiStar, CiSearch } from "react-icons/ci";
import { FaPen } from "react-icons/fa";

const ProductReviews = (props) => {
  const { product } = props;
  return (
    <div className="self-center flex flex-col justify-between gap-4 w-11/12 mt-20 big-screen">
      <div>
        <div className="flex justify-between">
          <h3 className="text-lg">Reviews</h3>
          <p className="flex items-center gap-4 text-sm text-red-400">
            Leave a review
            <FaPen className="text-black" />
          </p>
        </div>
        <div className="flex gap-8 items-center mt-2">
          <div className="flex gap-2">
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <CiStar className="text-lg" />
          </div>
          <p className="text-xs">
            4.9 (891 reviews) | 99% recommend this product.
          </p>
        </div>
        <div className="flex items-center gap-6 mt-6">
          <CiSearch />
          <p className="text-xs">Search Reviews</p>
        </div>
        <hr className="mt-4" />
      </div>
      <div>
        <div className="flex justify-between">
          <h3 className="text-sm">Andrea, 25</h3>
          <p className="text-xs">1-8 of 912 reviews</p>
        </div>
        <div className="flex gap-2 mt-2">
          <FaStar className="text-yellow-500" />
          <FaStar className="text-yellow-500" />
          <FaStar className="text-yellow-500" />
          <FaStar className="text-yellow-500" />
          <CiStar className="text-lg" />
        </div>
        <p className="text-sm mt-2">
          The shoes are beautiful and exactly how i saw it.
        </p>
        <div className="flex mt-3 gap-8">
          <img src={product.image[0]} alt="" className="w-28" />
          <img src={product.image[1]} alt="" className="w-28" />
          <img src={product.image[2]} alt="" className="w-28" />
        </div>
        <p className="mt-8 text-xs">Yes, I recommend this product</p>
        <p className="mt-4 text-xs leading-6 text-itemsecondary">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia <br /> consequat duis enim velit mollit.
          Exercitation veniam consequat sunt nostrud amet. <br />
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia <br /> consequat duis enim velit mollit.
          Exercitation veniam consequat sunt nostrud amet.
        </p>
        <div className="mt-8 flex text-xs items-center">
          <p className="mr-5">Was this helpful?</p>
          <button className="border rounded p-1 mr-2 border-black">Yes</button>
          <button className="border rounded p-1 border-black">No</button>
        </div>
      </div>
      <hr className="mt-32 border-itemsecondary"/>
    </div>
  );
};

export default ProductReviews;
