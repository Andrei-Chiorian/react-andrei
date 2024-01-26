import {connect} from "react-redux";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { SHOPPING_CART_PATH, USERS_PATH } from "../../constants/path";
import {getAccessToken} from "../../redux/selectors/auth.selector";
import './Home.css'

function Home(props) {

    const navigate = useNavigate();
    if (props.accessToken == null) {
        // navigate({BASE_URL'/login'})
    }
    
    return (
        <div className="home-content">
            <h1>Home</h1>
            <div className="home-img-container">
                <img className="home-img" src="logo192.png" alt="logo" />
                <h2>Aqui puedes consultar todos los ejercicios de React </h2>
            </div>            
            <div className='home-content-container'>
                <Link to={SHOPPING_CART_PATH} className="task">                    
                    <div className="task-wrapper">
                        Shopping Cart
                    </div>             
                </Link>
                <Link to={USERS_PATH} className="task">                    
                    <div className="task-wrapper">
                        Users 
                    </div>                    
                </Link>                
            </div>
        </div>
    );
}

const mapStateToProps = (state) => ({
    accessToken: getAccessToken(state),
    isLoading: state.authState.isLoading,
    error: state.authState.error,
});


export default connect(mapStateToProps)(Home);