import { Navigate } from "react-router-dom";
import React from "react";
import { connect } from "react-redux";


function PrivateRoute(props)  {
    return props.isAuth ? (
      // Renderizar el contenido del componente
        <>
            {props.children}
        </>           
            
    ) : (
      // Redirigir al login si no hay token
      <Navigate to="/login" />
    );
  };

  const mapStateToProps = (state) => ({    
    isAuth: state.authState.isAuth
  });


  export default connect(mapStateToProps)(PrivateRoute);