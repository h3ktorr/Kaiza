import React from "react";
import { Flats } from "../Assets/data";
import SingleItem from "./SingleItem";
import { Link } from "react-router-dom";

const ShopFlats = () => {
  let flat = Flats.slice(0, 4);

  return (
    <div className="w-11/12 self-center mt-8 flex flex-col">
      <h1 className="p-4 text-xl tracking-widest">Flats</h1>
      <div className="flex justify-between overflow-scroll gap-4">
        {flat.map((product) => {
          return (
            <SingleItem
              key={product.id}
              id={product.id}
              name={product.name}
              image={product.image}
              price={product.price}
              description={product.description}
            />
          );
        })}
      </div>
      <Link to='flats'>
        <p className="self-end mt-2 text-itembtn tracking-wider">view all</p>
      </Link>

      <hr className="mt-4 h-1" />
    </div>
  );
};

export default ShopFlats;
