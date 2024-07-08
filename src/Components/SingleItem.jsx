import React from "react";
import { CiHeart } from "react-icons/ci";
import { Link } from "react-router-dom";

const SingleItem = (props) => {
  return (
    <div className="small-img">
      <Link to={`/product/${props.id}`}>
        <img src={props.image[0]} alt="" className="small-img" />
      </Link>
      <div className="flex justify-between p-2 small-img">
        <div className="text-xs tracking-wider">
          <p className="my-1">{props.name}</p>
          <p className="text-itemsecondary ">{props.description}</p>
          <p className="my-1">N{props.price}</p>
        </div>
        <CiHeart className="text-3xl" />
      </div>
    </div>
  );
};

export default SingleItem;
