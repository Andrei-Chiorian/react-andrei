import React, { useEffect } from 'react';
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/Routes";
import 'bootstrap/dist/css/bootstrap.min.css';
import { authActionRequestDefault } from './redux/actions';
import { connect } from 'react-redux';
import './App.css';


function App(props) {
 
  const isTokenStored = () => {
    return !!localStorage.getItem("accessToken");
  }

  useEffect(() => {       
    isTokenStored() && props.onLoadAuthDefault(localStorage.getItem("accessToken")) 
  }, [])
 
  return (    
      <div className='App'>
        <RouterProvider router={router}/>
      </div>    
  );

}


const mapDispatchToProps = (dispatch) => ({  
  onLoadAuthDefault: (accessToken) => dispatch(authActionRequestDefault(accessToken))  
});

export default connect(null, mapDispatchToProps)(App);
