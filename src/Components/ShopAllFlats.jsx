import React from 'react';
import { Flats } from "../Assets/data";
import SingleItem from "./SingleItem";
import { IoIosArrowDown } from "react-icons/io";

const ShopAllFlats = () => {
  return (
    <div className="w-11/12 self-center mt-16 flex flex-col">
      <div className="flex px-8 sm:px-4 gap-4 sm:gap-32 text-sm justify-between sm:justify-normal">
        <p className="border-2 p-2 rounded-lg  text-herobtn">
          Sort by{IoIosArrowDown}
        </p>
        <p className="border-2 p-2 rounded-lg  text-herobtn">
          Category <span>{IoIosArrowDown}</span>
        </p>
        <p className="ml-auto big-screen">0 results</p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4 mt-8">
        {Flats.map((product) => {
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
      <button className="uppercase text-sm self-center mt-8 border-2 p-2 rounded-lg text-herobtn">
        Load more
      </button>
    </div>
  );
}

export default ShopAllFlats