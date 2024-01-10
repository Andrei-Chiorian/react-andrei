import React from "react";
import { Link } from "react-router-dom";
import { SHOPPING_CART_PATH, USERS_PATH } from "../../constants/path";
import './Home.css'

function Home() {
    
    return (
        <div className="home-content">
            <h1>Home</h1>
            <div className="home-img-container">
                <img className="home-img" src="logo192.png" alt="logo" />
                <h2>Aqui puedes consultar todos los ejercicios de React </h2>
            </div>            
            <div className='home-content-container'>
                <div className="task">
                    <div className="task-wrapper">
                        <Link to={SHOPPING_CART_PATH}>Shopping Cart</Link>
                    </div>                    
                </div>
                <div className="task" >
                <div className="task-wrapper">
                    <Link to={USERS_PATH}>Users</Link> 
                </div>  
                </div>                
            </div>
        </div>
    );
}

export default Home;