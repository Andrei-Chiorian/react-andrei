import { Outlet } from "react-router-dom";
import React from 'react';
import { NavBar } from "../NavBar/NavBar";
import { Footer } from "../Footer/Footer";
import { CartProvider } from "../../contexts/Cart";
import './Main.css';

export default function Main() {
  
  return (
    <>
      <NavBar />
      <div className='outlet-content'>
        <CartProvider>
          <Outlet />
        </CartProvider>
      </div>        
      <Footer />      
    </>
  );
}