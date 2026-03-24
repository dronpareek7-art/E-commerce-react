import React, { useContext } from "react";
import { Cartcontext } from "./Router";
import { Link } from "react-router-dom";
import { IoLogIn } from "react-icons/io5";
export const Header = () => {
  const { cart , Currency,setCurrency} = useContext(Cartcontext);
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        <h2 className="brand">
          <span className="shop">Shop</span>
          <span className="sphere">Sphere</span>
        </h2>
      </Link>
      <ul className="nav-links">
        <li>
          <select name="" id="" value={Currency} onChange={(e)=>setCurrency(e.target.value)}>
            <option value="USD">$ USD</option>
            <option value="INR">₹ INR</option>
          </select>
        </li>

        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/cart">
            Cart <span>({cart.length})</span>
          </Link>
        </li>
        <li>
          <Link to="/login">
            Login <IoLogIn />
          </Link>
        </li>
      </ul>
    </nav>
  );
};
