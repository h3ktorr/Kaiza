import React from 'react';
import { useParams } from "react-router-dom";
import { Stilettos, Flats, Sneakers } from "../Assets/data";
import BreadCrum from '../Components/BreadCrum';
import CheckoutItem from '../Components/CheckoutItem';

const Checkout = () => {
 const allProducts = [...Stilettos, ...Flats, ...Sneakers];
 const { productId } = useParams();
 const product = allProducts.find((item) => item.id === 2);

  return (
    <div className="flex flex-col">
      <BreadCrum ok={true} name="Checkout" />
      <CheckoutItem product={product}/>
    </div>
  );
}

export default Checkout