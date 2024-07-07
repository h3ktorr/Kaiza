import React from 'react';
import BottomImg from "../Assets/bottom-hero.png";

const FooterHero = () => {
  return (
    <div className="flex w-11/12 self-center mt-8 h-100 big-screen">
      <div className="w-full bg-footerhero text-white flex flex-col justify-center items-center">
        <h2 className="text-5xl">Kaiza Shoes</h2>
        <p className="text-center my-4 text-lg tracking-widest">
          Don’t miss your chance to wear this <br /> exciting new design. Our
          shoes <br /> the best!!!!!
        </p>
        <button className="bg-white py-3 px-5 rounded text-herobtn">
          Shop Now
        </button>
      </div>
      <img src={BottomImg} alt="" className=" h-100 object-contain" />
    </div>
  );
}

export default FooterHero