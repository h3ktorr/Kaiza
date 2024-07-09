import React from 'react';
import { useParams } from 'react-router-dom';
import { Stilettos, Flats, Sneakers } from "../Assets/data";
import BreadCrum from '../Components/BreadCrum';
import ProductDisplay from '../Components/ProductDisplay';
import ProductDetails from '../Components/ProductDetails';
import ProductReviews from '../Components/ProductReviews';
import AlsoLike from '../Components/AlsoLike';


const Products = () => {
 const allProducts = [...Stilettos, ...Flats, ...Sneakers];
 const { productId } = useParams();
 const product = allProducts.find((item) => item.id === Number(productId));
 
  return (
    <div className="flex flex-col">
      <BreadCrum
        productOk={true}
        productCategory={product.category}
        productName={product.name}
      />
      <ProductDisplay product={product} />
      <ProductDetails />
      <ProductReviews product={product} />
      <AlsoLike />
    </div>
  );
}

export default Products