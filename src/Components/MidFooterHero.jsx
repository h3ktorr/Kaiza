import React from "react";
import midFooterHero from "../Assets/midfooter-hero.png";

const MidFooterHero = () => {
  return (
    <div className="bg-footerhero w-11/12 self-center mt-8 small-screen p-8">
      <div className="flex flex-col justify-center items-center">
        <img src={midFooterHero} alt="" />
        <p className="my-4 text-sm text-center tracking-widest">
          Don’t miss your chance to wear this <br /> exciting new design. Our
          shoes <br /> the best!!!!!
        </p>
        <button className="bg-white py-2 px-5 rounded self-center text-xs tracking-widest">
          SHOP NOW
        </button>
      </div>
    </div>
  );
};

export default MidFooterHero;
