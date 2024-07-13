import React, {createContext, useEffect, useState} from 'react';
import { Stilettos, Flats, Sneakers } from "../Assets/data";
import axios from "axios";

export const ShopContext = createContext(null);

const allProducts = [...Stilettos, ...Flats, ...Sneakers];

const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < 31; index++) {
    cart[index] = 0;
  }
  return cart;
};

const getDefaultSizes = () => {
  let sizes = {};
  for (let index = 0; index < 31; index++) {
    sizes[index] = 40;
  }
  return sizes;
};

const ShopContextProvider = (props) => {
 const [cartItems, setCartItem] = useState(getDefaultCart());
 const [cartSizes, setCartSizes] = useState(getDefaultSizes());
 const [productState, setProductState] = useState({});
 const [isSidebarOpen, setIsSidebarOpen] = useState(false);
 const [data, setData] = useState([]);

 useEffect(() => {
   const fetchData = async () => {
     try {
       const response = await axios.get(
         "https://timbu-get-all-products.reavdev.workers.dev/?organization_id=dc5223dc05244b6885be89f9a28790b3&Appid=R8Y1FRV0K6OATNM&Apikey=8b9e0c9e1737410b9894b1f90594690720240712145150788065"
       );
       setData(response.data.items);
     } catch (error) {
       console.error(error);
     }
   };
   fetchData();
 }, []);
 console.log(data);

 const openSidebar = () => {
   setIsSidebarOpen(true);
 };
 const closeSidebar = () => {
   setIsSidebarOpen(false);
 };

 const chooseSize = (itemId, itemSize) => {
   setCartSizes((prev) => ({ ...prev, [itemId]: itemSize }));
 };

 const addToCart = (itemId) => {
   setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
 };

 const removeFromCart = (itemId) => {
   setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
 };

 const deleteCartItem = (itemId) => {
   setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] * 0 }));
 };

 const getTotalCartAmount = () => {
   let totalAmount = 0;
   for (const item in cartItems) {
     if (cartItems[item] > 0) {
       let itemInfo = data.find(
         (product) => product.unique_id === item
       );
       totalAmount += itemInfo.available_quantity * cartItems[item];
     }
   }
   return totalAmount;
 };

 const contextValue = {
   productState,
   setProductState,
   cartItems,
   addToCart,
   removeFromCart,
   deleteCartItem,
   getTotalCartAmount,
   allProducts,
   isSidebarOpen,
   openSidebar,
   closeSidebar,
   data,
   chooseSize,
   cartSizes,
 };
 
  return (
    <ShopContext.Provider value={contextValue}>
     {props.children}
    </ShopContext.Provider>
  )
}

export default ShopContextProvider