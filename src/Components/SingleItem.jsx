import React from 'react';
import { CiHeart } from "react-icons/ci";

const SingleItem = (props) => {
  return (
    <div className="small-img">
      <img src={props.image} alt="" className="small-img" />
      <div className="flex justify-between p-2 ">
        <div className="text-xs tracking-wider">
          <p className="my-1">{props.name}</p>
          <p className="text-itemsecondary">{props.description}</p>
          <p className="my-1">N{props.price}</p>
        </div>
        <CiHeart className="text-3xl" />
      </div>
    </div>
  );
}

export default SingleItem