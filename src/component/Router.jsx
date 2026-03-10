import React, { createContext,useState } from "react";

import Ecommerce from "../Pages/Ecommerce";
import { About } from "../Pages/About";
import { Blog } from "../Pages/Blog";
import { Login } from "../Pages/Login";
import { Cart } from "../Pages/Cart";
import { Header } from "./Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Footer } from "./Footer";
import SingleProduct from "../Pages/SingleProduct.jsx";
export const Cartcontext = createContext(null);

const Home = () => {
  const [cart, setCart] = useState([]);

  function addtocart(productToadd) {
    setCart([...cart, productToadd]);
  }
  console.log(cart);

  return (
    <BrowserRouter>
      <Cartcontext.Provider value={{ cart, setCart, addtocart }}>
        <Header />
        <Routes>
          <Route path="/" element={<Ecommerce />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/blog" element={<Blog />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/product/:id" element ={<SingleProduct/>}></Route>
        </Routes>
        <Footer/>
      </Cartcontext.Provider>
    </BrowserRouter>
  );
};
export default Home;
