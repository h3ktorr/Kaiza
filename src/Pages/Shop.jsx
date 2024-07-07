import React from 'react'
import Hero from '../Components/Hero'
import ShopStilettos from '../Components/ShopStilettos';
import ShopFlats from '../Components/ShopFlats';
import ShopSneakers from '../Components/ShopSneakers';
import FooterHero from '../Components/FooterHero';
import CheckItOut from '../Components/CheckItOut';
import MidHero from '../Components/MidHero';
import MidFooterHero from '../Components/MidFooterHero';

const Shop = () => {
  return (
    <div className="flex flex-col ">
      <Hero />
      <CheckItOut />
      <MidHero />
      <ShopStilettos />
      <ShopFlats />
      <ShopSneakers />
      <FooterHero />
      <MidFooterHero />
    </div>
  );
}

export default Shop