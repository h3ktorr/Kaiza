import React from 'react';
import StilettosCover from '../Assets/stilettos-hero.png'
import StilettosSide from '../Assets/stilettos-hero-2.png'

const StilettosHero = () => {
  return (
    <div className="flex h-96 relative">
      <img src={StilettosSide} alt="" className="w-16 mr-10 big-screen" />
      <div className="absolute sm:top-20 left-0 top-5 sm:left-80 min-h-64 min-w-52 sm:bg-white flex justify-center items-center ">
        <div className='pl-4 mt-4 sm:mt-0'>
          <h3 className="text-3xl sm:text-2xl tracking-widerdest">
            STIL
            <br />
            ETT
            <br />
            OS
          </h3>
          <p className="text-sm sm:text-xs mt-32 sm:mt-4 tracking-widest text-white sm:text-black pl-24">
            The best heels for that <br />
            perfect classy look!!!!
          </p>
        </div>
      </div>
      <img
        src={StilettosCover}
        alt=""
        className="sm:ml-96 ml-5 self-center sm:self-auto w-11/12 sm:w-auto h-96 sm:h-auto  object-contain sm:object-fill"
      />
    </div>
  );
}

export default StilettosHero