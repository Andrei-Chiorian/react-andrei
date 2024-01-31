import { connect } from "react-redux";
import { getAccessToken } from "../redux/selectors/auth.selector";
import { authActionRequestFailed, authActionRequestStarted, authActionRequestSuccess } from "../redux/actions";
import axios from "axios";
import { BASE_URL } from "../constants/path";
import { Navigate } from "react-router-dom";

const login = (props, loginUser) => {
    props.onLoadAuthStarted(loginUser);
    axios.post(BASE_URL + '/auth/login',
    loginUser,
    {
        headers: { "Content-type": "application/json;charset=UTF-8" }
    } 
    )
    .then((response) =>{
        console.log(response);
        props.onLoadAuthSuccess(response);
        localStorage.setItem('accessToken', response);            
        Navigate('/');                     
    })
    .catch(error => props.onLoadAuthFailed(error))

    
}

function logout(props) {
    localStorage.removeItem('accessToken');
    props.onLoadAuthSarted();
    console.log(localStorage.getItem("accessToken"));
    console.log(props.accessToken);    
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

export default connect(mapStateToProps, mapDispatchToProps)({logout, login});