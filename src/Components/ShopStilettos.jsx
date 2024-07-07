import React from "react";
import { Stilettos } from "../Assets/data";
import SingleItem from "./SingleItem";

const ShopStilettos = () => {
  return (
    <div className="w-11/12 self-center mt-8 flex flex-col">
      <h1 className="p-4 text-xl tracking-widest">Stilettos</h1>
      <div className="flex justify-between overflow-scroll gap-4">
        {Stilettos.map((product) => {
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
      <p className="self-end mt-2 text-itembtn tracking-wider">view all</p>
      <hr className="mt-4 h-1"/>
    </div>
  );
};

export default ShopStilettos;
