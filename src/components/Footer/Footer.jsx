import React from 'react';
import { Link } from 'react-router-dom';
import { BASE_PATH, USERS_PATH, SHOPPING_CART_PATH} from '../../constants/path';
import './Footer.css'

export function Footer() {
    return (
      <footer className='footer-container'>
        <div className='logo-container-footer'>
            <Link to={BASE_PATH}><img src="logo512.png" alt="logo" /></Link>
        </div>
        <div className='links-container-footer'>
            <div>
                Pagina Sin Hacer
            </div>
            <div>
                Pagina Sin Hacer
            </div>            
            <Link className='links' to={SHOPPING_CART_PATH}>Shopping Cart</Link>     
            <Link className='links' to={USERS_PATH}>Users</Link>            
        </div>        
      </footer>
    );
}