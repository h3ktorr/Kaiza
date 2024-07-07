import React from 'react';
import { MdKeyboardArrowRight } from "react-icons/md";


const BreadCrum = (props) => {
  return (
    <div className='my-4 w-11/12 self-center p-4 flex'>
     <p>Shop</p>  
     {props.ok && <p>{MdKeyboardArrowRight}{props.name}</p>}
    </div>
  )
}

export default BreadCrum