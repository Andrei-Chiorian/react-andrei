import { jwtDecode } from "jwt-decode";
import {
    AUTH_ACTION_REQUEST_DEFAULT,
    AUTH_ACTION_REQUEST_FAILED,
    AUTH_ACTION_REQUEST_STARTED,
    AUTH_ACTION_REQUEST_SUCCESS
} from "../../constants/auth.actionTypes";

const INITIAL_STATE = {
    authUser_id: null,
    authUser_role: null,    
    authUser_mail: null,
    authUser_username: null,
    isLoading: false,
    isAuth: false,
    error: null    
}

const applyGetAuthStarted = (state, action) => {
     
    return {
        ...state,
        authUser_id: null,
        authUser_role: null,    
        authUser_mail: null,
        authUser_username: null,
        isLoading: false,
        isAuth: false,
        error: null       
    }
    
};

const applyGetAuthSuccess = (state, action) => {
    
    action.payload.accessToken && localStorage.setItem('accessToken', action.payload.accessToken);  
    
    return {
        ...state,
        accessToken: action.payload.accessToken || localStorage.getItem("accessToken"),
        authUser_id: jwtDecode(action.payload.accessToken).id || jwtDecode(localStorage.getItem("accessToken")).id, 
        authUser_role: jwtDecode(action.payload.accessToken).role || jwtDecode(localStorage.getItem("accessToken")).role,    
        authUser_mail: jwtDecode(action.payload.accessToken).mail || jwtDecode(localStorage.getItem("accessToken")).mail,
        authUser_username: jwtDecode(action.payload.accessToken).sub || jwtDecode(localStorage.getItem("accessToken")).sub,
        isLoading: false,
        isAuth: true
    }
}

const applyGetAuthFailed = (state, action) => {
    console.log(action.payload)
    return {
        ...state,
        accessToken: null,
        isLoading: false,
        isAuth: false,
        error: action.payload
    }
};

const applyGetAuthDefault = (state, action) => {   
    return {
        ...state,
        accessToken: action.payload|| localStorage.getItem("accessToken"),
        authUser_id: jwtDecode(action.payload).id || jwtDecode(localStorage.getItem("accessToken")).id, 
        authUser_role: jwtDecode(action.payload).role || jwtDecode(localStorage.getItem("accessToken")).role,    
        authUser_mail: jwtDecode(action.payload).mail || jwtDecode(localStorage.getItem("accessToken")).mail,
        authUser_username: jwtDecode(action.payload).sub || jwtDecode(localStorage.getItem("accessToken")).sub,
        isLoading: false,
        isAuth: true
    }
};


function authReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case AUTH_ACTION_REQUEST_STARTED: {
            return applyGetAuthStarted(state, action);
        }
        case AUTH_ACTION_REQUEST_SUCCESS: {
            return applyGetAuthSuccess(state, action);
        }
        case AUTH_ACTION_REQUEST_FAILED: {
            return applyGetAuthFailed(state, action);
        }
        case AUTH_ACTION_REQUEST_DEFAULT: {
            return applyGetAuthDefault(state, action);
        }
        default: return state;
    }
}

export default authReducer;