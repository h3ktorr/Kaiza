import React, {useState} from "react";
import { FaAngleDown } from "react-icons/fa6";


const ReturnPolicy = () => {
 const [returnState, setReturnState] = useState(false);
  return (
    <div className="w-full self-center mt-10 flex flex-col">
      <h2
        className="bg-gray-100 px-12 py-6 flex justify-between"
        onClick={() => setReturnState(!returnState)}
      >
        Return Policy
        <span className="small-screen">
          <FaAngleDown />
        </span>
      </h2>
      <div className="w-11/12 self-center mt-6 big-screen">
        <p className="text-sm">Our Return policy</p>
        <p className="text-xs mt-4 leading-6">
          We offer free standard shipping on orders over N50,000, with express
          and next-day options available for a fee. Orders are processed within
          1-2 business days, and international shipping is available with
          varying fees. You can return unused and unworn items in their original
          packaging within 30 days for a full refund or exchange, excluding
          final sale items. Contact customer service to initiate a return, and
          refunds will be processed within 7-10 business days of receiving the
          return. Shipping fees are non-refundable, and customers are
          responsible for return shipping costs.
        </p>
      </div>
      {returnState && <div className="w-11/12 self-center mt-6 small-screen">
        <p className="text-sm">Our Return policy</p>
        <p className="text-xs mt-4 leading-6">
          We offer free standard shipping on orders over N50,000, with express
          and next-day options available for a fee. Orders are processed within
          1-2 business days, and international shipping is available with
          varying fees. You can return unused and unworn items in their original
          packaging within 30 days for a full refund or exchange, excluding
          final sale items. Contact customer service to initiate a return, and
          refunds will be processed within 7-10 business days of receiving the
          return. Shipping fees are non-refundable, and customers are
          responsible for return shipping costs.
        </p>
      </div>}
    </div>
  );
};

export default ReturnPolicy;
