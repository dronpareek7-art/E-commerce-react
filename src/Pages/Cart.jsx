import React from "react";
import { useContext } from "react";
import { Cartcontext } from "../component/Router";
import Cartqty from "../component/Cartqty";

function Cart() {
  const { cart } = useContext(Cartcontext);
  return (
    <>
      <h2>Cart Items</h2>
      <div className="cart">
        <div className="contents">
          {cart.map((item) => {
            return (
              <div className="cartitem" key={item.id}>
                <img src={item.image} alt="" />
                <h4>{item.title}</h4>
                <p>{item.price}</p>
                <Cartqty product={item} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Cart;
