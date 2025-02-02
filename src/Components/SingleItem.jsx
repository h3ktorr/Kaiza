import React from "react";
import { CiHeart } from "react-icons/ci";
import { Link } from "react-router-dom";

const SingleItem = (props) => {
  return (
    <div className="small-img">
      <Link to={`/product/${props.id}`}>
        <img
          src={`https://api.timbu.cloud/images/${props.imageurl}?organization_id=dc5223dc05244b6885be89f9a28790b3&Appid=R8Y1FRV0K6OATNM&Apikey=${process.env.REACT_APP_API_KEY}`}
          alt=""
          className="small-img"
        />
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
