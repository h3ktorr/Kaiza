import React from 'react'
import StilettosHero from '../Components/StilettosHero'
import ShopAllStilettos from '../Components/ShopAllStilettos';
import BreadCrum from '../Components/BreadCrum';

const Stilettos = () => {
  return (
    <div className="flex flex-col">
      <BreadCrum ok={true} name='Stilettos' />
      <StilettosHero />
      <ShopAllStilettos />
    </div>
  );
}

export default Stilettos