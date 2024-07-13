import React, {useContext} from 'react';
import { Stilettos, Flats, Sneakers } from "../Assets/data";
import BreadCrum from '../Components/BreadCrum';
import CheckoutItem from '../Components/CheckoutItem';
import { ShopContext } from '../Context/ShopContext';

const Checkout = () => {
 const allProducts = [...Stilettos, ...Flats, ...Sneakers];
 const { productState } = useContext(ShopContext);

  return (
    <div className="flex flex-col">
      <BreadCrum ok={true} name={productState.name} />
      <CheckoutItem product={productState}/>
    </div>
  );
}

export default Checkout