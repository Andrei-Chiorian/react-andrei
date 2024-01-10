import React from 'react'
import './Item.css'
import DescContent from '../ReadMore/ReadMore'
import {useCart} from "../../hooks/useCart";

function Item({item}) {    
    const {addToCart, cart} = useCart();

    const checkItemInCart = item => {
        return cart.some(itemInCart => itemInCart.id === item.id);
    }

    const isProductInCart = checkItemInCart(item);

    return (
        <div className="item">
            <div className='img-container'>
                <img src = {item.image} alt="" />
            </div>
            <div className='info-container'>
                <h2>
                    {item.title}
                </h2>
                <div className='category'>
                    {item.category}
                </div>                  
                <DescContent desc = {item.description}/>                            
            </div>
            <div className='item-bnt-container'>
                <div className='price'>
                    {item.price}€   
                </div>                
                <button className='add-btn' onClick={() => {
                    addToCart(item)
                }}
                >
                    {
                    isProductInCart 
                        ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                        : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                        </svg>                     
                    }
                </button>
            </div>
            
        </div>
    );
  }

export default Item;