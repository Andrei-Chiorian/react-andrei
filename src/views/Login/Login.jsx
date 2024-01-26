import React, { useEffect, useState } from 'react';
import {connect} from "react-redux";
import {authActionRequestFailed, authActionRequestStarted, authActionRequestSuccess} from "../../redux/actions";
import {getAccessToken} from "../../redux/selectors/auth.selector";
import  axios  from 'axios';
import {BASE_URL} from '../../constants/path';


function Login(props) {
    
    const onLogin = (loginUser) => {
        props.onLoadAuthStarted(loginUser);
        axios.post(BASE_URL + '/auth/login',
        loginUser,
        {
            headers: { "Content-type": "application/json;charset=UTF-8" }
        } 
        )
        .then((accessToken) =>{
            props.onLoadAuthSuccess(accessToken);            
        })
        .catch(error => props.onLoadAuthFailed(error))

        
    }

    useEffect (() => {
        console.log(props.accessToken)
    },[props.accessToken])
        
    

    const [loginUser, setNewLoginUser] = useState({
        username: "",        
        password: ""
    })    

    const handleChangeUsername = (username) => {
        const _loginUser = {...loginUser};
        _loginUser.username = username;
        setNewLoginUser({..._loginUser});
    }
    
    const handleChangePassword = (password) => {
        const _loginUser = {...loginUser};
        _loginUser.password = password;
        setNewLoginUser({..._loginUser});
    }
    
    return (
        <div className='login-container'>
            <label htmlFor="login-username">Username</label>
            <input type="text" id="login-username" onChange={(e)=>handleChangeUsername(e.target.value)}/>
            <label htmlFor="login-password">Password</label>
            <input type="text" id="login-password" onChange={(e)=>handleChangePassword(e.target.value)}/>
            <button onClick={() => onLogin(loginUser)}></button>
            {props.accessToken && <div>Usuario logeado</div>}
            {props.error?.response && <div>{props.error?.response?.data?.msg}</div>}
        </div>
    )
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

export default connect(mapStateToProps, mapDispatchToProps)(Login);
