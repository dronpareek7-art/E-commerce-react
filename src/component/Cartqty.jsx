import React, { useContext } from "react";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa6";
import { MdOutlineRemoveShoppingCart } from "react-icons/md";
import { Cartcontext } from "./Router";

function Cartqty({ product }) {
  const { RemoveToCart, cart, Increment, Decrement } = useContext(Cartcontext);

  function getproductQuantity(product) {
    const productFound = cart.find((cartItem) => {
      return cartItem.id === product.id;
    });
    return productFound.quantity;
  }
  return (
    <div className="minicart">
      <div className="cartqty">
        <button onClick={() => Increment(product)}>
          <FaPlus />
        </button>

        <span className="qty">{getproductQuantity(product)}</span>

        <button onClick={() => Decrement(product)}>
          <FaMinus />
        </button>
        <MdOutlineRemoveShoppingCart onClick={() => RemoveToCart(product)} className="removeicon"/>
      </div>
    </div>
  );
}

export default Cartqty;
