import React from 'react';
import BreadCrum from '../Components/BreadCrum';
import StilettosHero from '../Components/StilettosHero';
import ShopAllSneaker from '../Components/ShopAllSneaker';

const Sneakers = () => {
  return (
    <div className="flex flex-col">
      <BreadCrum ok={true} name="Sneakers" />
      <StilettosHero />
      <ShopAllSneaker />
    </div>
  );
}

export default Sneakers