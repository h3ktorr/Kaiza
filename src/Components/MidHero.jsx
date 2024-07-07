import React from 'react';
import midHero from "../Assets/mid-hero.png";


const MidHero = () => {
  return (
    <div className="relative small-screen flex self-center mt-8">
      <div className="absolute top-1/4 left-1/4 text-center">
        <h2 className="text-2xl">Kaiza</h2>
        <p className="my-4 text-sm">
          Walk the walk: Feel <br /> comfort and classy
        </p>
        <button className='border-2 border-black p-1 px-3 text-xs rounded'>SHOW NOW</button>
      </div>
      <img src={midHero} alt="" />
    </div>
  );
}

export default MidHero