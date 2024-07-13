import React, { useContext } from 'react';
import SingleItem from "./SingleItem";
import { IoIosArrowDown } from "react-icons/io";
import { ShopContext } from '../Context/ShopContext';

const ShopAllSneaker = () => {
  const { data } = useContext(ShopContext);
  const sneakers = data.filter((item) =>
    item.categories.some((category) => category.name === "sneakers")
  );
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
        {sneakers.map((product) => {
          const imageurl = product.photos[1].url;

          return (
            <SingleItem
              key={product.unique_id}
              id={product.unique_id}
              name={product.name}
              price={product.available_quantity}
              imageurl={imageurl}
              description="Sneakers"
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

export default ShopAllSneaker