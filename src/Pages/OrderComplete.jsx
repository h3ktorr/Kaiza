import React from 'react'
import BreadCrum from '../Components/BreadCrum'
import CompletionDetails from '../Components/CompletionDetails';

const OrderComplete = () => {
  return (
    <div className="flex flex-col">
      <BreadCrum ok={true} name="Checkout" />
      <CompletionDetails />
    </div>
  );
}

export default OrderComplete