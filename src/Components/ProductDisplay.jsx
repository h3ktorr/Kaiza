import React, {useContext, useState} from "react";
import { FaStar } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import { Link } from "react-router-dom";
import { ShopContext } from "../Context/ShopContext";

const ProductDisplay = (props) => {
  const { addToCart, cartItems, removeFromCart, chooseSize } =
    useContext(ShopContext);
  const [selectedSize, setSelectedSize] = useState(40); 
  const { product } = props;

  const handleSize = (itemId, size) => {
    chooseSize(itemId, size)
    setSelectedSize(size)
  }

  return (
    <div className="self-center sm:flex justify-between w-11/12">
      <div className="w-full sm:flex items-start gap-4 ">
        {product.photos && (
          <div className="flex flex-col gap-2 big-screen">
            <img
              src={`https://api.timbu.cloud/images/${product.photos[2].url}?organization_id=dc5223dc05244b6885be89f9a28790b3&Appid=R8Y1FRV0K6OATNM&Apikey=8b9e0c9e1737410b9894b1f90594690720240712145150788065`}
              alt=""
              className="w-28"
            />
            <img
              src={`https://api.timbu.cloud/images/${product.photos[0].url}?organization_id=dc5223dc05244b6885be89f9a28790b3&Appid=R8Y1FRV0K6OATNM&Apikey=8b9e0c9e1737410b9894b1f90594690720240712145150788065`}
              alt=""
              className="w-28"
            />
            <img
              src={`https://api.timbu.cloud/images/${product.photos[3].url}?organization_id=dc5223dc05244b6885be89f9a28790b3&Appid=R8Y1FRV0K6OATNM&Apikey=8b9e0c9e1737410b9894b1f90594690720240712145150788065`}
              alt=""
              className="w-28"
            />
            <img
              src={`https://api.timbu.cloud/images/${product.photos[4].url}?organization_id=dc5223dc05244b6885be89f9a28790b3&Appid=R8Y1FRV0K6OATNM&Apikey=8b9e0c9e1737410b9894b1f90594690720240712145150788065`}
              alt=""
              className="w-28"
            />
          </div>
        )}
        {product.photos && (
          <img
            src={`https://api.timbu.cloud/images/${product.photos[1].url}?organization_id=dc5223dc05244b6885be89f9a28790b3&Appid=R8Y1FRV0K6OATNM&Apikey=8b9e0c9e1737410b9894b1f90594690720240712145150788065`}
            alt=""
            className=" w-full sm:w-100"
          />
        )}
        <div className="small-screen mt-4">
          {product.photos && (
            <div className="flex gap-2 overflow-scroll">
              <img
                src={`https://api.timbu.cloud/images/${product.photos[2].url}?organization_id=dc5223dc05244b6885be89f9a28790b3&Appid=R8Y1FRV0K6OATNM&Apikey=8b9e0c9e1737410b9894b1f90594690720240712145150788065`}
                alt=""
                className="w-28"
              />
              <img
                src={`https://api.timbu.cloud/images/${product.photos[0].url}?organization_id=dc5223dc05244b6885be89f9a28790b3&Appid=R8Y1FRV0K6OATNM&Apikey=8b9e0c9e1737410b9894b1f90594690720240712145150788065`}
                alt=""
                className="w-28"
              />
              <img
                src={`https://api.timbu.cloud/images/${product.photos[3].url}?organization_id=dc5223dc05244b6885be89f9a28790b3&Appid=R8Y1FRV0K6OATNM&Apikey=8b9e0c9e1737410b9894b1f90594690720240712145150788065`}
                alt=""
                className="w-28"
              />
              <img
                src={`https://api.timbu.cloud/images/${product.photos[4].url}?organization_id=dc5223dc05244b6885be89f9a28790b3&Appid=R8Y1FRV0K6OATNM&Apikey=8b9e0c9e1737410b9894b1f90594690720240712145150788065`}
                alt=""
                className="w-28"
              />
            </div>
          )}
        </div>
      </div>
      <div className="big-screen">
        <div>
          <div className="flex justify-between">
            <h3 className="text-2xl">{product.name}</h3>
            <p>N{product.available_quantity}</p>
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
            <button
              onClick={() => handleSize(product.unique_id, 39)}
              className={`border p-1 rounded ${
                selectedSize === 39 ? "bg-black text-white" : ""
              }`}
            >
              39
            </button>
            <button
              onClick={() => handleSize(product.unique_id, 40)}
              className={`border p-1 rounded ${
                selectedSize === 40 ? "bg-black text-white" : ""
              }`}
            >
              40
            </button>
            <button
              onClick={() => handleSize(product.unique_id, 42)}
              className={`border p-1 rounded ${
                selectedSize === 42 ? "bg-black text-white" : ""
              }`}
            >
              42
            </button>
          </div>
          <hr className="mt-5" />
        </div>
        <div className="mt-2">
          <h3>Select your quantity. </h3>
          <p className="text-itemsecondary text-xs mt-1">
            There’s no such thing as “too many”.
          </p>
          <div className="flex gap-2 mt-2 ">
            <button
              className="border  rounded-3xl w-8"
              onClick={() => removeFromCart(product.unique_id)}
            >
              -
            </button>
            <div className="w-10 border rounded text-center">
              {cartItems[product.unique_id]}
            </div>
            <button
              className="border  rounded-3xl w-8"
              onClick={() => addToCart(product.unique_id)}
            >
              +
            </button>
          </div>
          <hr className="mt-5" />
        </div>
        <Link to="/checkout" onClick={() => addToCart(product.unique_id)}>
          <button className="uppercase mt-5 bg-footerhero py-2 px-5 rounded self-center text-xs tracking-widest hover:bg-red-950 hover:text-white">
            Add to Cart
          </button>
        </Link>
      </div>
      <div className="small-screen mt-16">
        <div className="">
          <h3 className="text-lg">N{product.available_quantity}</h3>
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
            <button
              onClick={() => handleSize(product.unique_id, 39)}
              className={`border border-itemsecondary p-1 px-6 rounded ${
                selectedSize === 39 ? "bg-black text-white" : ""
              }`}
            >
              39
            </button>
            <button
              onClick={() => handleSize(product.unique_id, 40)}
              className={`border border-itemsecondary p-1 px-6 rounded ${
                selectedSize === 40 ? "bg-black text-white" : ""
              }`}
            >
              40
            </button>
            <button
              onClick={() => handleSize(product.unique_id, 42)}
              className={`border border-itemsecondary p-1 px-6 rounded ${
                selectedSize === 42 ? "bg-black text-white" : ""
              }`}
            >
              42
            </button>
          </div>
          <hr className="mt-8" />
        </div>
        <div className="mt-6 ">
          <p className="text-sm">Please select quantity:</p>
          <div className="flex gap-2 mt-5">
            <button
              className="border  rounded-3xl w-8"
              onClick={() => removeFromCart(product.unique_id)}
            >
              -
            </button>
            <div className="w-14 border border-itemsecondary rounded text-center">
              {cartItems[product.unique_id]}
            </div>
            <button
              className="border  rounded-3xl w-8"
              onClick={() => addToCart(product.unique_id)}
            >
              +
            </button>
          </div>
          <hr className="mt-8" />
        </div>
        <Link to="/checkout" onClick={() => addToCart(product.unique_id)}>
          <button className="uppercase mt-5 bg-footerhero py-2 px-5 rounded self-center text-xs tracking-widest hover:bg-red-950 hover:text-white">
            Add to Cart
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProductDisplay;