import React, { createContext, useState } from "react";

import Ecommerce from "../Pages/Ecommerce";
import { About } from "../Pages/About";
import { Blog } from "../Pages/Blog";
import { Login } from "../Pages/Login";
import Cart from "../Pages/Cart.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SingleProduct from "../Pages/SingleProduct.jsx";
import Layout from "./Layout.jsx";

export const Cartcontext = createContext(null);

const Home = () => {
  const [cart, setCart] = useState([]);

  function addtocart(productToadd) {
    const productAddTocart = { ...productToadd, quantity: 1 };
    setCart([...cart, productAddTocart]);
    console.log(productAddTocart);
  }
  console.log(cart);

  function isProductInCart(product) {
    const productFound = cart.find((cartItem) => {
      return cartItem.id === product.id;
    });
    return productFound;
  }

  function RemoveToCart(productToremove) {
    setCart(
      cart.filter((cartItem) => {
        return cartItem.id !== productToremove.id;
      }),
    );
  }

function Increment(product) {
  setCart(
    cart.map((cartItem) => {
      if (cartItem.id === product.id) {
        return { ...cartItem, quantity: cartItem.quantity + 1 };
      }
      return cartItem;
    })
  );
}
function Decrement(product) {
  setCart(
    cart.map((cartItem) => {
      if (cartItem.id === product.id && cartItem.quantity > 0) {
        return { ...cartItem, quantity: cartItem.quantity - 1 };
      }
      return cartItem;
    })
  );
}


  return (
    <BrowserRouter>
      <Cartcontext.Provider
        value={{
          cart,
          setCart,
          addtocart,
          isProductInCart,
          RemoveToCart,
          Increment,
          Decrement,
        }}
      >
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Ecommerce />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/blog" element={<Blog />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
            <Route path="/product/:id" element={<SingleProduct />}></Route>
          </Route>
        </Routes>
      </Cartcontext.Provider>
    </BrowserRouter>
  );
};
export default Home;
