import React from "react";
import CompletionImg from "../Assets/completion-img.png";

const CompletionDetails = () => {
  return (
    <div className="w-full flex flex-col">
      <h2 className="bg-deliveryhead text-center py-6 sm:text-2xl font-bold tracking-widest">
        Thank you for your order!
      </h2>
      <div className="w-11/12 self-center flex items-center justify-center mt-10">
        <img src={CompletionImg} alt="" />
      </div>
      <div className="w-11/12 self-center flex flex-col items-center justify-center mt-10 text-xs sm:text-base">
        <p className="font-bold">We hope you enjoyed this as much as we did.</p>
        <p className="text-itemsecondary mt-3">Click <a href="/" className="underline text-red-800">here</a>  to continue your shopping experience.</p>
      </div>
    </div>
  );
};

export default CompletionDetails;
