import { Outlet, useNavigate } from "react-router-dom";
import React, { useEffect } from 'react';
import  NavBar  from "../NavBar/NavBar";
import { Footer } from "../Footer/Footer";
import { CartProvider } from "../../contexts/Cart";
import './Main.css';
import { LOGIN_PATH } from "../../constants/path";
import { connect } from "react-redux";
import { authActionRequestDefault } from "../../redux/actions";
import PrivateRoute from "../PrivateRoute";



function Main(props) {
    const navigate = useNavigate();
    const isTokenStored = () => {
        return !!localStorage.getItem("accessToken");
    }
    useEffect(() => {        
        isTokenStored || navigate(LOGIN_PATH);    
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props])

    

    return (
        <>
            <NavBar />
            <div className='outlet-content'>        
            <CartProvider>
              {/* <PrivateRoute> */}
                <Outlet />
              {/* </PrivateRoute>          */}
                
            </CartProvider>      
            </div>        
            <Footer />
        </>     
    );
}

const mapStateToProps = (state) => ({  
  isAuth: state.authState.isAuth
});

const mapDispatchToProps = (dispatch) => ({  
  onLoadAuthDefault: (accessToken) => dispatch(authActionRequestDefault(accessToken))  
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);