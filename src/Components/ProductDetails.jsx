import React, {useState} from "react";
import { FaAngleDown } from "react-icons/fa6";

const ProductDetails = () => {
 const [productState, setProductState] = useState(false);
 const [deliveryState, setDeliveryState] = useState(false);

  return (
    <div className="self-center sm:flex justify-between gap-4 w-11/12 mt-40">
      <div>
        <hr className="big-screen" />
        <div onClick={()=>setProductState(!productState)} className="bg-herobtndark rounded p-2 px-5 sm:p-0 text-white sm:text-black sm:bg-white mt-2 flex items-center justify-between sm:block">
          <h1>Product details</h1>
          <FaAngleDown className="small-screen" />
        </div>
        <p className="text-itemsecondary text-sm mt-2 border sm:border-none p-5 leading-5 rounded big-screen">
          Elevate your style with the epitome of elegance and sophistication—the
          Tom Ford Black Heel. Crafted with precision and designed for the
          modern woman, these heels are the perfect blend of luxury and comfort.
          Whether you're dressing up for a formal event or adding a touch of
          class to your everyday outfit.
        </p>
        {productState && (
          <p className="text-itemsecondary text-sm mt-2 border sm:border-none p-5 leading-5 rounded small-screen">
            Elevate your style with the epitome of elegance and
            sophistication—the Tom Ford Black Heel. Crafted with precision and
            designed for the modern woman, these heels are the perfect blend of
            luxury and comfort. Whether you're dressing up for a formal event or
            adding a touch of class to your everyday outfit.
          </p>
        )}
      </div>
      <div>
        <hr className="big-screen" />
        <div onClick={()=> setDeliveryState(!deliveryState)} className="bg-herobtndark rounded p-2 px-5 sm:p-0 text-white sm:text-black sm:bg-white mt-2 flex items-center justify-between sm:block">
          <h1 className="mt-2">Delivery & Returns</h1>
          <FaAngleDown className="small-screen" />
        </div>
        <p className="text-itemsecondary text-sm mt-2 border sm:border-none p-5 leading-5 rounded big-screen">
          We offer free standard shipping on orders over $200, with express and
          next-day options available for a fee. Orders are processed within 1-2
          business days, and international shipping is available with varying
          fees. You can return unused and unworn items in their original
          packaging within 30 days for a full refund or exchange, excluding
          final sale items.
        </p>
        {deliveryState && (
          <p className="text-itemsecondary text-sm mt-2 border sm:border-none p-5 leading-5 rounded small-screen">
            We offer free standard shipping on orders over $200, with express
            and next-day options available for a fee. Orders are processed
            within 1-2 business days, and international shipping is available
            with varying fees. You can return unused and unworn items in their
            original packaging within 30 days for a full refund or exchange,
            excluding final sale items.
          </p>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
