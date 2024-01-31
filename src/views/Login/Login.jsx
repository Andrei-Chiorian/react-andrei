import React, { useEffect, useState } from 'react';
import {connect} from "react-redux";
import {authActionRequestFailed, authActionRequestStarted, authActionRequestSuccess} from "../../redux/actions";
import {getAccessToken} from "../../redux/selectors/auth.selector";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { BASE_URL } from '../../constants/path.js';
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBInput
  }
  from 'mdb-react-ui-kit';
import './login.css'

function Login(props) {

    const [loginUser, setNewLoginUser] = useState({
        username: "",        
        password: ""
    }) 
    const navigate = useNavigate();
    
    const onLogin = (loginUser) => {
        props.onLoadAuthStarted(loginUser);
        axios.post(BASE_URL + '/auth/login',
        loginUser,
        {
            headers: { "Content-type": "application/json;charset=UTF-8" }
        } 
        )
        .then((response) =>{                       
            props.onLoadAuthSuccess(response.data);            
            localStorage.setItem('accessToken', response.data);                     
            navigate('/');                     
        })
        .catch(error => props.onLoadAuthFailed(error))            
    }

    useEffect(() => {
        console.log(props.isAuth)        
        props.isAuth && navigate('/')   
    },[navigate, props.isAuth])
            
    const toRegister = () => {
        navigate('/register')
    }  

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
                  
        <MDBContainer className="gradient-form mt-0">

            <MDBRow className='mt-5'>

                <MDBCol col='6' className="mb-5">
                    <div className="d-flex flex-column ms-5">

                        <div className="text-center">
                        <img src="logo192.png"
                            style={{width: '185px'}} alt="logo" />
                        <h4 className="mt-1 mb-5 pb-1">React Training</h4>
                        </div>

                        <p>Porfavor, inicie sesión</p>


                        <MDBInput wrapperClass='mb-4' label='Nombre de usuario' id='form1' type='text' onChange={(e)=>handleChangeUsername(e.target.value)}/>
                        <MDBInput wrapperClass='mb-4' label='Contraseña' id='form2' type='password' onChange={(e)=>handleChangePassword(e.target.value)}/>


                        <div className="text-center pt-1 mb-5 pb-1">
                            <MDBBtn className="mb-4 w-100 gradient-custom-2" onClick={() => onLogin(loginUser)}>Sign in</MDBBtn>
                            <a className="text-muted" href="#!">¿Has olvidado tu contraseña?</a>
                        </div>

                        <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-4">
                            <p className="mb-0">No tienes cuenta?</p>
                            <MDBBtn outline className='mx-2' color='danger' onClick={()=>toRegister()}>
                                Registrate
                            </MDBBtn>
                        </div>

                    </div>
                </MDBCol>

                <MDBCol col='6' className="mb-5">
                    <div className="d-flex flex-column  justify-content-center gradient-custom-2 h-100 mb-4">

                        <div className="text-black px-3 py-4 p-md-5 mx-md-4">
                        <h4 className="mb-4">A fumar petardos con React y Redux</h4>
                        <p className="small mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                        </div>

                    </div>
                </MDBCol>
            </MDBRow>
        </MDBContainer>            
       
    )
}

const mapStateToProps = (state) => ({
    accessToken: getAccessToken(state),
    isLoading: state.authState.isLoading,
    error: state.authState.error,
    isAuth: state.authState.isAuth
});

const mapDispatchToProps = (dispatch) => ({
    onLoadAuthStarted: (loginUser) => dispatch(authActionRequestStarted(loginUser)),
    onLoadAuthSuccess: (accessToken) => dispatch(authActionRequestSuccess(accessToken)),
    onLoadAuthFailed: (error) => dispatch(authActionRequestFailed(error)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
