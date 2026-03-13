import React, { useContext } from "react";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa6";
import { MdOutlineRemoveShoppingCart } from "react-icons/md";
import { Cartcontext } from "./Router";

function Cartqty({ product }) {
  const { RemoveToCart, cart ,Increment,Decrement} = useContext(Cartcontext);

  function getproductQuantity(product) {
    const productFound = cart.find((cartItem) => {
      return cartItem.id === product.id;
    });
    return productFound.quantity;
  }
  return (
    <div className="minicart">
      <div className="cartqty">
        <button>
          <FaPlus onClick={()=>Increment(product)}/>
        </button>

        <p>{getproductQuantity(product)}</p>

        <button>
          <FaMinus onClick={()=>Decrement(product)}/>
        </button>
        <MdOutlineRemoveShoppingCart onClick={() => RemoveToCart(product)} />
      </div>
    </div>
  );
}

export default Cartqty;
