import React from 'react'
import BreadCrum from '../Components/BreadCrum'
import DeliveryDetails from '../Components/DeliveryDetails';
import DeliveryInformation from '../Components/DeliveryInformation';
import ReturnPolicy from '../Components/ReturnPolicy';
import PaymentInformation from '../Components/PaymentInformation';

const Delivery = () => {
  return (
    <div className="flex flex-col">
      <BreadCrum ok={true} name="Delivery" />
      <DeliveryDetails />
      <DeliveryInformation />
      <ReturnPolicy />
      <PaymentInformation />
    </div>
  );
}

export default Delivery