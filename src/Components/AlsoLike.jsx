import React from 'react';
import { Stilettos, Flats, Sneakers } from '../Assets/data'
import SingleItem from './SingleItem';

const AlsoLike = () => {
  const allProducts = [...Stilettos, ...Flats, ...Sneakers];
  function randomRecommends(amount) {
   let recommends = allProducts;
   const randomElements = [];
   for (let i = 0; i < amount; i++) {
     const randomIndex = Math.floor(Math.random() * recommends.length);
     randomElements.push(recommends.splice(randomIndex, 1)[0]);
   }
   return randomElements;
  }

  return (
    <div className="self-center flex flex-col items-center gap-4 w-11/12 mt-20" >
      <h3 className='uppercase'>You may also like</h3>
      <div className='grid grid-cols-4 gap-8 mt-4 big-screen'>
        {randomRecommends(8).map((item) => {
          return <img src={item.image[0]} key={item.id} className='w-28' alt="" />;
        })}
      </div>
      <div className='small-screen-grid grid grid-cols-2 gap-8 mt-4 '>
        {randomRecommends(4).map((item) => {
          return <img src={item.image[0]} key={item.id} className='w-32' alt="" />;
        })}
      </div>
      
      <button className='uppercase text-xs border p-1 rounded text-itemsecondary mt-4'>Load more</button>
    </div>
  );
}

export default AlsoLike