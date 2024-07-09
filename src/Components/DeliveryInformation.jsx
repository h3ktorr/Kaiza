import React, {useState} from "react";
import { FaAngleDown } from "react-icons/fa6";

const DeliveryInformation = () => {
 const [deliveryState, setDeliveryState] = useState(false)
  return (
    <div className="w-full self-center mt-10 flex flex-col">
      <h2 className="bg-gray-100 px-12 py-6 flex justify-between" onClick={()=>setDeliveryState(!deliveryState)}>
        Delivery Information
        <span className="small-screen">
          <FaAngleDown />
        </span>
      </h2>
      <div className="w-11/12 self-center mt-6 big-screen">
        <p className="text-sm">Delivery Details</p>
        <div className="mt-4 pb-4 border-b border-itemsecondary">
          <p className="text-xs mb-4">Standard Delivery</p>
          <input type="radio" name="radio" id="radio-1" />
          <label htmlFor="radio-1" className="text-xs pl-3">
            N 1,000 (Orders placed now are expected to arrive before or on
            Friday, Jul 15- Saturday, Jul 16.) N 2,000 (Orders placed now are
            expected to arrive before or on Friday, Jul 15- Saturday, Jul 16.)
          </label>
        </div>
        <div className="mt-4">
          <p className="text-xs mb-4">Express Delivery</p>
          <input type="radio" name="radio" id="radio-2" />
          <label htmlFor="radio-2" className="text-xs pl-3">
            N 2,000 (Orders placed now are expected to arrive before or on
            Friday, Jul 15- Saturday, Jul 16.)
          </label>
        </div>
        <p className="mt-4 text-xs">
          Deliveries take about 3-5 business days. (Orders placed now are
          expected to arrive before or on Friday, Jul 15- Saturday, Jul 16.) N
          2,000 (Orders placed now are expected to arrive before or on Friday,
          Jul 15- Saturday, Jul 16.)
        </p>
      </div>
      {deliveryState && <div className="w-11/12 self-center mt-6 small-screen">
        <p className="text-sm">Delivery Details</p>
        <div className="mt-4 pb-4 border-b border-itemsecondary">
          <p className="text-xs mb-4">Standard Delivery</p>
          <input type="radio" name="radio" id="radio-1" />
          <label htmlFor="radio-1" className="text-xs pl-3">
            N 1,000 (Orders placed now are expected to arrive before or on
            Friday, Jul 15- Saturday, Jul 16.) N 2,000 (Orders placed now are
            expected to arrive before or on Friday, Jul 15- Saturday, Jul 16.)
          </label>
        </div>
        <div className="mt-4">
          <p className="text-xs mb-4">Express Delivery</p>
          <input type="radio" name="radio" id="radio-2" />
          <label htmlFor="radio-2" className="text-xs pl-3">
            N 2,000 (Orders placed now are expected to arrive before or on
            Friday, Jul 15- Saturday, Jul 16.)
          </label>
        </div>
        <p className="mt-4 text-xs">
          Deliveries take about 3-5 business days. (Orders placed now are
          expected to arrive before or on Friday, Jul 15- Saturday, Jul 16.) N
          2,000 (Orders placed now are expected to arrive before or on Friday,
          Jul 15- Saturday, Jul 16.)
        </p>
      </div>}
    </div>
  );
};

export default DeliveryInformation;
