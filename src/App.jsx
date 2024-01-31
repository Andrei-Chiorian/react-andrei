import React, { useEffect } from 'react';
import { RouterProvider} from "react-router-dom";
import { router } from "./routes/Routes";
import 'bootstrap/dist/css/bootstrap.min.css';
import { authActionRequestFailed, authActionRequestStarted, authActionRequestSuccess } from './redux/actions';
import { connect } from 'react-redux';
import { getAccessToken } from './redux/selectors/auth.selector';
import './App.css'


function App(props) {

  const isTokenStored = () => {
    return !!localStorage.getItem("accessToken");
  }

  useEffect(() => {
    props.onLoadAuthStarted("");    
    isTokenStored() && props.onLoadAuthSuccess(localStorage.getItem("accessToken"))   
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (    
      <div className='App'>
        <RouterProvider router={router}/>
      </div>    
  );
}

const mapStateToProps = (state) => ({
  accessToken: getAccessToken(state),
  isLoading: state.authState.isLoading,
  error: state.authState.error,  
});

const mapDispatchToProps = (dispatch) => ({
  onLoadAuthStarted: (loginUser) => dispatch(authActionRequestStarted(loginUser)),  
  onLoadAuthSuccess: (accessToken) => dispatch(authActionRequestSuccess(accessToken)),
  onLoadAuthFailed: (error) => dispatch(authActionRequestFailed(error)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
