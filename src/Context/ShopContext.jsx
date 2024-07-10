import React, {createContext, useState} from 'react';

export const ShopContext = createContext(null);


const ShopContextProvider = (props) => {
 const [productState, setProductState] = useState({})
 const contextValue = {
  productState, setProductState
 }
 
  return (
    <ShopContext.Provider value={contextValue}>
     {props.children}
    </ShopContext.Provider>
  )
}

export default ShopContextProvider