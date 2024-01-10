import React from 'react';
import { Link } from 'react-router-dom';
import { BASE_PATH, USERS_PATH, SHOPPING_CART_PATH } from '../../constants/path';
import './NavBar.css'

export function NavBar() {
    return (
      <nav className='nav-container'>
        <div className='logo-container'>
            <Link to={BASE_PATH}><img src="logo512.png" alt="logo" /></Link>
        </div>
        <div className='links-container'>
            <Link className='links' to={USERS_PATH}>Users</Link>
            <Link className='links' to={SHOPPING_CART_PATH}>Shopping Cart</Link>
        </div>
                
      </nav>
    );
}