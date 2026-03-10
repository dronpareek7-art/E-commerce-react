import React, { useContext } from 'react'
import { Cartcontext } from './Router'
import { Link } from 'react-router-dom';
export const Header = () => {
  const {cart}=useContext(Cartcontext);
  return (
    <nav className='navbar'>
        <h2 className='logo'><Link  to="/">E-commerce</Link></h2>
        <ul className='nav-links'>
            <li><Link  to="/about">About</Link></li>
            <li><Link  to="/blog">Blog</Link></li>
            <li><Link  to="/cart">Cart <span>{cart.length}</span></Link></li>
            <li><Link  to="/login">Login</Link></li>
        </ul>
    </nav>
  )
}
