import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './ShoppingCart.css';
import Item from '../../components/Item/Item';
import LayoutBtn from '../../components/Buttons/LayoutBtn/LayoutBtn';
import CartItem from '../../components/CartItem/CartItem';
import { Filters } from '../../components/Filters/Filters';
import { useCart } from '../../hooks/useCart';


function ShoppingCart() {
    //Variable para guardar datos del fetch
    const [fetchedItems, setFetchedItems] = useState([]);

    //Variable para guardar el carrito
    const {cart, clearCart, totalPrice} = useCart();

    //Variable para el control del estado del boton de layout
    const [clicked, setClicked] = useState(false);

    //Variable de estado para los filtros
    const [filters, setFilters] = useState({
        category: "all",
        minPrice: 0
    });

    //Variable para el control del icono del boton de layout
    const svg = clicked
        ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 0 1 0 3.75H5.625a1.875 1.875 0 0 1 0-3.75Z" />
        </svg>
        : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" />
        </svg>

    // Variabel para el control del layout de los items
    const layout = clicked ? "items-container-grid" : "items-container-row";

    // Funcion para cambiar el estado de clicked
    const handleClick = () => {
        setClicked(!clicked);
    }

    const succesNotify = () => {
        toast.success('Articulo añadido correctamente', {
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
   
    // Funcion para el filtrado
    const filterItems = (items) => {
        return items.filter(item => {
            return (
                item.price >= filters.minPrice && 
                (
                    filters.category === 'all' ||
                    item.category === filters.category
                )
            )
        })
    }
 

    // Hook para el fetch de datos desde un api publica 
    useEffect(() => {
        if (fetchedItems.length === 0) {
            fetch("https://fakestoreapi.com/products")
                .then((response) => response.json())
                .then((items) => {
                    setFetchedItems(items)
                });
        }
    }, [fetchedItems]); // Monitoreando el estado de fetchedItems cada vez que cambia ejecuta el codigo
    
    // Variable con los productos filtrados
    const filteredItems = filterItems(fetchedItems)
    const areItemsInCart = () => {
        if(cart.length > 0) {     
            return (
                true
            )
        }
    }
    return (
        <>
        <ToastContainer
            position="bottom-left"
            autoClose={2500}
            hideProgressBar={false}
            newestOnTop
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"            
        />
            <h1>ITEMS SHOP</h1>
            <div className='container' style={clicked ? {gap: '60px'} : {gap: '600px'}}>
                <div className="shop-container">
                    <div className='btns-container'>
                        <LayoutBtn children={svg} onClick={handleClick} />
                        <Filters changeFilters ={setFilters} filters={filters}/>
                    </div>
                    <div className={layout}>                        
                        {
                            filteredItems.map((item) => {
                                return (
                                    <Item key={item.id} item={item} notify={succesNotify}/>
                                )
                            })           
                        }
                    </div>
                </div>
                <label htmlFor="cart-id" className='cart-button'>
                    <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' strokeWidth='1' stroke='currentColor' fill='none' strokeLinecap='round' strokeLinejoin='round'>
                        <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                        <path d='M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0' />
                        <path d='M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0' />
                        <path d='M17 17h-11v-14h-2' />
                        <path d='M6 5l14 1l-1 7h-13' />
                    </svg>
                </label>
                <input id="cart-id" type='checkbox' hidden />
                <div className='cart-container'>                    
                    <div className='cart-item-container-wrapper'>
                        <div className='cart-item-container'>
                            {
                            areItemsInCart() 
                            ? cart.map((cartItem) => {
                                return (
                                    <CartItem key={cartItem.id} cartItem={cartItem} notify={deleteNotify}/>
                                )
                            })                              
                            : 'No hay productos en el carrito'                           
                            }
                            {
                            areItemsInCart() 
                            ? <div className='total-price'>
                                <span>
                                    Total:
                                </span>
                                <span>
                                    {totalPrice(cart)}€
                                </span>  
                            </div>                            
                            : ' '                           
                            }                        
                        </div>
                        <div style={{display: areItemsInCart()? 'flex' : 'none', justifyContent: 'center', marginTop: '10px'}}>
                            <button className='clear-btn' onClick={() => {clearCart()}}>
                                <img src="noun-empty-cart-149119.svg" alt=""/>                          
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </>

    );
}

export default ShoppingCart;