import React from 'react';
import BreadCrum from '../Components/BreadCrum';
import StilettosHero from '../Components/StilettosHero';
import ShopAllFlats from '../Components/ShopAllFlats';

const Flats = () => {
  return (
    <div className="flex flex-col">
      <BreadCrum ok={true} name="Flats" />
      <StilettosHero />
      <ShopAllFlats />
    </div>
  );
}

export default Flats