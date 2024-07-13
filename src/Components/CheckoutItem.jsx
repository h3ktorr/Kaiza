import React, {useContext} from "react";
import { AiFillCreditCard } from "react-icons/ai";
import { IoGift } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { IoIosClose } from "react-icons/io";
import { Link } from "react-router-dom";
import { ShopContext } from "../Context/ShopContext";
import { FaMinus, FaPlus, FaRegTrashCan } from "react-icons/fa6";


const CheckoutItem = (props) => {
  const { product } = props;
  
  const {
    data,
    cartItems,
    removeFromCart,
    addToCart,
    deleteCartItem,
    getTotalCartAmount,
    cartSizes,
  } = useContext(ShopContext); 

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
          <div className="sm:border-b p-2 pb-8 border-itemsecondary">
            {data && data.map((e) => {
              if (cartItems[e.unique_id] > 0) {
                return (
                  <div key={e.unique_id} className="flex mb-2 text-sm gap-1">
                    <div className="w-24">
                      <img
                        src={`/api/images/${e.photos[2].url}?organization_id=dc5223dc05244b6885be89f9a28790b3&Appid=R8Y1FRV0K6OATNM&Apikey=8b9e0c9e1737410b9894b1f90594690720240712145150788065`}
                        alt=""
                      />
                    </div>
                    <div className="ml-4 flex flex-col py-2">
                      <p className="">{e.name}</p>
                      <p className="">{cartSizes[e.unique_id]}</p>
                      <div className="flex mt-auto items-center gap-3">
                        <FaMinus onClick={() => removeFromCart(e.unique_id)} />
                        <p>{cartItems[e.unique_id]}</p>
                        <FaPlus onClick={() => addToCart(e.unique_id)} />
                      </div>
                    </div>
                    <div className="ml-auto flex flex-col justify-between pr-1 py-2">
                      <p className="">
                        N{e.available_quantity * cartItems[e.unique_id]}
                      </p>
                      <FaRegTrashCan
                        onClick={() => deleteCartItem(e.unique_id)}
                      />
                    </div>
                  </div>
                );
              }
            })}
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
              <p>N{getTotalCartAmount()}</p>
            </div>
            <div className="flex justify-between pb-8">
              <p>Delivery:</p>
              <p>N2,000</p>
            </div>

            <div className="flex justify-between pb-8">
              <p className="font-bold text-xl">TOTAL:</p>
              <p>N{getTotalCartAmount() + 2000}</p>
            </div>
          </div>
          <p className="w-full p-4 bg-gray-300 small-screen">1 item</p>
          <Link to="/delivery">
            <button className="self-center bg-footerhero rounded w-full sm:w-auto text-xs p-4 sm:p-2 sm:px-8 my-8 hover:bg-red-950 hover:text-white">
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