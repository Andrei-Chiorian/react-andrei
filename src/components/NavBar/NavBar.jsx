import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BASE_PATH, USERS_PATH, SHOPPING_CART_PATH} from '../../constants/path';
import './NavBar.css'
import { connect } from 'react-redux';
import { getAccessToken } from '../../redux/selectors/auth.selector';
import { authActionRequestFailed, authActionRequestStarted, authActionRequestSuccess } from '../../redux/actions/auth.action.js';
import UserNavButton from '../Buttons/NavDropdownButton/NavDropdownButton.jsx';


function NavBar(props) {
    const navigate = useNavigate()

    const logout = () => {
        props.onLoadAuthStarted();
        localStorage.removeItem('accessToken');        
        navigate('/login');

    }

    return (
        <nav className='nav-container'>
            <div className='logo-container'>
                <Link to={BASE_PATH}><img src="logo512.png" alt="logo" /></Link>
            </div>
            <div className='links-container'>
                <Link className='links' to={SHOPPING_CART_PATH}>Shopping Cart</Link>
                <Link className='links' to={USERS_PATH}>Users</Link>
                <div className='userNavContainer'>
                    <span style={{fontSize: '14px',marginTop: '3px'}}>
                        Hola,   
                    </span>                    
                    <UserNavButton onLogout={logout} username={props.authUser_username}/>                                                       
                </div>           
            </div>                
        </nav>
    );
}

const mapStateToProps = (state) => ({
    accessToken: getAccessToken(state),
    isLoading: state.authState.isLoading,
    error: state.authState.error,    
    authUser_role: state.authState.authUser_role,    
    authUser_username: state.authState.authUser_username,
    isAuth: state.authState.isAuth        
});


const mapDispatchToProps = (dispatch) => ({
  onLoadAuthStarted: (loginUser) => dispatch(authActionRequestStarted(loginUser)),
  onLoadAuthSuccess: (accessToken) => dispatch(authActionRequestSuccess(accessToken)),
  onLoadAuthFailed: (error) => dispatch(authActionRequestFailed(error)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);