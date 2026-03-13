import React from "react";
import { useContext } from "react";
import { Cartcontext } from "../component/Router";
import Cartqty from "../component/Cartqty";
import "../Pages/Cart.css";
function Cart() {
  const { cart } = useContext(Cartcontext);
  return (
    <>
      <h2 className="Heading-cart">Cart Items({cart.length})</h2>
      <div className="cart">
        <div className="contents">
          {cart.map((item) => {
            return (
              <div className="cartitem" key={item.id}>
                <div className="cart-left">
                  <img src={item.image} alt="" />
                </div>
                <div className="cart-info">
                  <h3>{item.title}</h3>
                  <h5> Price :${item.price}</h5>
                </div>
                <div className="cart-right">
                  <Cartqty product={item} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Cart;
