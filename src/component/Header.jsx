import React, { useContext } from 'react'
import { Cartcontext } from './Router'

export const Header = () => {
  const {cart}=useContext(Cartcontext);
  return (
    <nav className='navbar'>
        <h2 className='logo'><a href="/">E-commerce</a></h2>
        <ul className='nav-links'>
            <li><a href="/about">About</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/cart">Cart <span>{cart.length}</span></a></li>
            <li><a href="/login">Login</a></li>
        </ul>
    </nav>
  )
}
