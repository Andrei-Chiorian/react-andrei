import React from "react";
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
                <div>
                    Users
                </div>
                <div>
                    Shopping Cart
                </div>
            </div>
        </div>
    );
}

export default Home;