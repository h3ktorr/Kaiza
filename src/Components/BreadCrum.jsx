import React from "react";
import { FaAngleRight } from "react-icons/fa6";

const BreadCrum = (props) => {
  return (
    <div className="my-4 w-11/12 self-center p-4 flex items-center">
      <p>Shop</p>
      {props.ok && (
        <div className="flex items-center">
          <FaAngleRight />
          <p>{props.name}</p>
        </div>
      )}
      {props.productOk && (
        <div className="flex items-center">
          <FaAngleRight />
          <p>{props.productCategory}</p>
          <FaAngleRight />
          <p>{props.productName}</p>
        </div>
      )}
    </div>
  );
};

export default BreadCrum;
