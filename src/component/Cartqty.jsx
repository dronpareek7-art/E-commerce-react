import React, { useContext } from 'react'
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa6";
import { MdOutlineRemoveShoppingCart } from "react-icons/md";
import { Cartcontext } from './Router';

function Cartqty({product}) {

   const {RemoveToCart} = useContext(Cartcontext)
  return (
     <div className="minicart">
        <div className="cartqty">
          <button><FaPlus /></button>
            <p></p>
            <button><FaMinus /></button>
        </div>
       <MdOutlineRemoveShoppingCart  onClick={()=>RemoveToCart(product)} />
     </div>
  )
}

export default Cartqty