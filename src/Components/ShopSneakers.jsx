import React, { useContext } from "react";
import { Sneakers } from "../Assets/data";
import SingleItem from "./SingleItem";
import { Link } from "react-router-dom";
import { ShopContext } from "../Context/ShopContext";

const ShopSneakers = () => {
  const { data } = useContext(ShopContext);
  const filteredItems = data.filter((item) =>
    item.categories.some((category) => category.name === "sneakers")
  );
  let sneaker = filteredItems.slice(3, 7);

  return (
    <div className="w-11/12 self-center mt-8 flex flex-col">
      <h1 className="p-4 text-xl tracking-widest">Sneakers</h1>
      <div className="flex justify-between overflow-scroll gap-4">
        {sneaker.map((product) => {
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
      <Link to='sneakers'>
        <p className="self-end mt-2 text-itembtn tracking-wider">view all</p>
      </Link>

      <hr className="mt-4 h-1" />
    </div>
  );
};

export default ShopSneakers;
