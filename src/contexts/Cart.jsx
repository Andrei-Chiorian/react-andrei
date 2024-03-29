import { createContext, useState } from "react";
import { toast } from 'react-toastify';

export const CartContext = createContext();


export function CartProvider ({children}) {
    const [cart, setCart] = useState([]);
    
    const deleteNotify = () => {
        toast.success('Articulo eliminado correctamente', {
            position: "bottom-left",
            autoClose: 2500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",            
        });
    };

    const addToCart = item => {

        const itemInCartIndex = cart.findIndex(cartItem => cartItem.id === item.id);

        if (itemInCartIndex >= 0) {
            const newCart = structuredClone(cart);
            newCart[itemInCartIndex].quantity += 1;
            console.log(cart)
            return setCart(newCart)
        }

        setCart(prevState => ([
            ...prevState,
            {
                ...item,
                quantity: 1
            }
        ]))
        console.log(cart)
    }

    const removeOneFromCart = item => {
        const itemInCartIndex = cart.findIndex(cartItem => cartItem.id === item.id);
        const newCart = structuredClone(cart);
        newCart[itemInCartIndex].quantity -= 1;
        console.log(cart)
        if(newCart[itemInCartIndex].quantity <= 0){
            deleteNotify();
            return setCart(prevState => prevState.filter(cartItem => cartItem.id !== item.id)); 
                
            
            
        }else {
            return setCart(newCart)
        }
    }

    const removeAllFromCart = item => {
        setCart(prevState => prevState.filter(cartItem => cartItem.id !== item.id))
    }

    const clearCart = () => {
        setCart([]);
    }

    const totalPrice = (cart) => {
        var total = 0
        cart.map((cartItem) => {
            return (
                total = total + (cartItem.price * cartItem.quantity)
            )
        })
        return (
            parseFloat(total).toFixed(2)
        )
    }
    
    return (
        <CartContext.Provider value= {{cart, addToCart, removeOneFromCart, removeAllFromCart, clearCart, totalPrice}}>
            {children}
        </CartContext.Provider>
    )
}