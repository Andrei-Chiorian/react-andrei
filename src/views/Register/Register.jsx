import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getAccessToken } from '../../redux/selectors/auth.selector';
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBInput
  }
  from 'mdb-react-ui-kit';
import { BASE_URL } from '../../constants/path';
import axios from 'axios';
import { authActionRequestFailed, authActionRequestStarted, authActionRequestSuccess } from '../../redux/actions';
import './register.css'

function Register(props) {

    const navigate = useNavigate();
    
    useEffect(() => {        
        props.isAuth && navigate('/')
    },[navigate, props.isAuth])

    const [registerUser, setRegisterUser] = useState({
        username: "",
        email: "",        
        password: "",
        checkPassword: ""
    }) 
    
    
    const onRegister = (registerUser) => {
        props.onLoadAuthStarted();
        axios.post(BASE_URL + '/users',
        registerUser,
        {
            headers: { "Content-type": "application/json;charset=UTF-8" }
        } 
        )
        .then((response) =>{                       
            props.onLoadAuthSuccess(response.data);
            localStorage.setItem('accessToken', response.data);            
            navigate('/');                     
        })
        .catch(error => console.log(error))            
    }


    const handleChangeUsername = (username) => {
        const _registerUser = {...registerUser};
        _registerUser.username = username;
        setRegisterUser({..._registerUser});
    }

    const handleChangeMail = (mail) => {
        const _registerUser = {...registerUser};
        _registerUser.mail = mail;
        setRegisterUser({..._registerUser});
    }
    
    const handleChangePassword = (password) => {
        const _registerUser = {...registerUser};
        _registerUser.password = password;
        setRegisterUser({..._registerUser});
    }
    const handleChangeCheckPassword = (checkPassword) => {
        const _registerUser = {...registerUser};
        _registerUser.checkPassword = checkPassword;
        setRegisterUser({..._registerUser});
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

                        <p>Rellena los siguientes campos</p>


                        <MDBInput wrapperClass='mb-4' label='Nombre de usuario' id='form1' type='text' onChange={(e)=>handleChangeUsername(e.target.value)}/>
                        <MDBInput wrapperClass='mb-4' label='Email' id='form2' type='text' onChange={(e)=>handleChangeMail(e.target.value)}/>
                        <MDBInput wrapperClass='mb-4' label='Contraseña' id='form3' type='password' onChange={(e)=>handleChangePassword(e.target.value)}/>
                        <MDBInput wrapperClass='mb-4' label='Confirmar contraseña' id='form4' type='password' onChange={(e)=>handleChangeCheckPassword(e.target.value)}/>


                        <div className="text-center pt-1 mb-5 pb-1">
                            <MDBBtn className="mb-4 w-100 gradient-custom-2" onClick={() => onRegister(registerUser)}>Registrar</MDBBtn>                    
                        </div>

                        <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-4">
                            <p className="mb-0">¿Ya tienes cuenta?</p>
                            <MDBBtn outline className='mx-2' color='danger'>
                                Iniciar sesión
                            </MDBBtn>
                        </div>

                    </div>
                </MDBCol>

                <MDBCol col='6' className="mb-5">
                    <div className="d-flex flex-column  justify-content-center gradient-custom-2 h-100 mb-4">

                        <div className="text-black px-3 py-4 p-md-5 mx-md-4">
                        <h4 class="mb-4">A fumar petardos con React y Redux</h4>
                        <p class="small mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
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

export default connect(mapStateToProps, mapDispatchToProps)(Register);