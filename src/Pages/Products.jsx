import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BreadCrum from "../Components/BreadCrum";
import ProductDisplay from "../Components/ProductDisplay";
import ProductDetails from "../Components/ProductDetails";
import ProductReviews from "../Components/ProductReviews";
import AlsoLike from "../Components/AlsoLike";
import { ShopContext } from "../Context/ShopContext";

const Products = () => {
  const { data } = useContext(ShopContext);
  const [product, setProduct] = useState({});
  const [productCategory, setProductCategory] = useState("");
  const { productId } = useParams();

  useEffect(() => {
    if (data && data.length > 0) {
      const foundProduct = data.find((item) => item.unique_id === productId);
      setProduct(foundProduct);
      setProductCategory(foundProduct.categories[0].name);
    }
  }, [productId, data]);

  return (
    <div className="flex flex-col">
      <BreadCrum
        productOk={true}
        productCategory={productCategory}
        productName={product.name}
      />
      <ProductDisplay product={product} />
      <ProductDetails />
      <ProductReviews product={product} />
      <AlsoLike />
    </div>
  );
};

export default Products;