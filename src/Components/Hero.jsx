import React from "react";
import heroImg from "../Assets/hero-img.png";

const Hero = () => {
  return (
    <div className="flex w-11/12 self-center relative">
      <div className="w-1/2 bg-black text-white flex flex-col justify-center items-center big-screen">
        <h2 className="text-5xl">Kaiza</h2>
        <p className="text-center my-4 text-lg tracking-widest">
          Walk the walk: Kaiza shoes <br /> quality and classy
        </p>
        <button className="bg-white py-3 px-5 rounded text-herobtn">
          Shop Now
        </button>
      </div>
      <div className="small-screen absolute">
        <div className="text-4xl mt-16 pl-1  text-white">
          <h3 className="tracking-widerdest">
            <span className="text-black">S</span>HOP
          </h3>
          <h3 className="my-8 tracking-widerdest">
            <span className="text-black">S</span>HOP
          </h3>
          <h3 className="tracking-widerdest">
            <span className="text-black">S</span>HOP
          </h3>
        </div>
        <p className="ml-12 mt-10 text-white ">
          Shop the best of women’s <br /> shoes
        </p>
      </div>
      <img src={heroImg} alt="" className="w-11/12 h-96 sm:h-auto ml-auto sm:ml-0 sm:w-1/2" />
    </div>
  );
};

export default Hero;