import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const BreadCrum = (props) => {
  return (
    <div className="my-4 w-11/12 self-center p-4 flex items-center">
      <p>
        {" "}
        <Link to="/">Shop</Link>
      </p>
      {props.ok && (
        <div className="flex items-center">
          <FaAngleRight />
          <p>{props.name}</p>
        </div>
      )}
      {props.productOk && (
        <div className="flex items-center">
          <FaAngleRight />
          <p className="capitalize">
            <Link to={`/${props.productCategory}`}>
              {props.productCategory}
            </Link>
          </p>
          <FaAngleRight />
          <p>{props.productName}</p>
        </div>
      )}
    </div>
  );
};

export default BreadCrum;
