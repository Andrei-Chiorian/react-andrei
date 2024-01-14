import React from 'react'
import './CartItem.css'
import {useCart} from "../../hooks/useCart";

function CartItem({ cartItem, notify}) {
    const {addToCart, removeOneFromCart, removeAllFromCart} = useCart();
    return (
        <div className='cart-item'>
            <div className='cart-item-info'>
                <img src={cartItem.image} alt="" />
                <div className='cart-item-title'>
                    {cartItem.title}
                </div>
            </div>
            <div className='cart-item-btn'>
                <div>
                    Qty:{cartItem.quantity}
                </div>
                <div className='qty-btn'>
                    <button className='add-qty-btn' onClick={() => {addToCart(cartItem)}}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                    </button>

                    <button className='delete-btn' onClick={() => {
                            removeAllFromCart(cartItem)
                            notify()
                        }}>                        
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>                                           
                    </button>
                    
                    <button className='remove-qty-btn' onClick={() => {
                            removeOneFromCart(cartItem)
                            
                        }}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                        </svg>
                    </button>
                </div>
                <div>
                    {cartItem.price}€
                </div>                
            </div>
        </div>
    )
}
export default CartItem;