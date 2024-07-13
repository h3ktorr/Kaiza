import React, { useContext } from "react";
import SingleItem from "./SingleItem";
import { Link } from "react-router-dom";
import { ShopContext } from "../Context/ShopContext";

const ShopStilettos = () => {
  const { data } = useContext(ShopContext);
  const filteredItems = data.filter(item =>
    item.categories.some(category => category.name === "stilettos")
);
  let stiletto = filteredItems.slice(0, 4);

  return (
    <div className="w-11/12 self-center mt-8 flex flex-col">
      <h1 className="p-4 text-xl tracking-widest">Stilettos</h1>
      <div className="flex justify-between overflow-scroll gap-4">
        {stiletto.map((product) => {
          const imageurl = product.photos[1].url;

          return (
            <SingleItem
              key={product.unique_id}
              id={product.unique_id}
              name={product.name}
              price={product.available_quantity}
              imageurl={imageurl}
              description="Stilettos"
            />
          );
        })}
      </div>
      <Link to="stilettos">
        <p className="self-end mt-2 text-itembtn tracking-wider">view all</p>
      </Link>

      <hr className="mt-4 h-1" />
    </div>
  );
};

export default ShopStilettos;
