import React, { useEffect } from "react";
import { useContext } from "react";
import { Cartcontext } from "../component/Router";
import Cartqty from "../component/Cartqty";
import "../Pages/Cart.css";
import { useState } from "react";
function Cart() {
  const { cart, Currency, convert } = useContext(Cartcontext);

  const [CartTotal, setCartTotal] = useState(0);
  const [deliveryFees, setDeliveryFess] = useState(0);

  useEffect(() => {
    let total = 0;
    cart.forEach((item) => {
      total += item.price * item.quantity;
    });
    setCartTotal(total.toFixed(2));
  }, [cart]);
  return (
    <>
      <h2 className="Heading-cart">Cart Items({cart.length})</h2>
      <div className="cart-container">
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
                    <h5>
                      Price: {Currency === "INR" ? "₹" : "$"}
                      {convert(item.price)}
                    </h5>
                  </div>
                  <div className="cart-right">
                    <Cartqty product={item} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="order-summary">
          <h3>Order Summary </h3>
          <ul>
            <li>
              <span>Bag Total:</span>
              <span>
                {" "}
                {Currency === "INR" ? "₹" : "$"}
                {convert(CartTotal)}
              </span>
            </li>
            <li>
              <span>Delivery Charges:</span>
              <span>{deliveryFees}</span>
            </li>
          </ul>
          <hr />
          <h4>
            <span>Your Total</span>

            <span>
              {Currency === "INR" ? "₹" : "$"}
              {convert(Number(CartTotal) + Number(deliveryFees))}
            </span>
          </h4>
          <button className="checkout-btn">Proceed to Checkout</button>
        </div>
      </div>
    </>
  );
}

export default Cart;
