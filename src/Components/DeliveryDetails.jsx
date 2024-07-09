import React from "react";
import { TfiWorld } from "react-icons/tfi";


const DeliveryDetails = () => {
  return (
    <div className="w-full flex flex-col">
      <h2 className="bg-deliveryhead text-center py-6 text-lg font-bold tracking-widest">Confirm Delivery Details</h2>
      <div className="w-11/12 self-center mt-10">
        <p className="text-sm">Country:</p>
        <div className="flex items-center gap-4 mt-4">
         <TfiWorld />
         <select className="text-xs p-3 bg-white border border-itemsecondary px-8 rounded w-full sm:w-auto">
          <option>Please select</option>
          <option>USA</option>
          <option>Nigeria</option>
         </select>
        </div>
      </div>
    </div>
  );
};

export default DeliveryDetails;
