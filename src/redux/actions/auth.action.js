import {
    AUTH_ACTION_REQUEST_FAILED,
    AUTH_ACTION_REQUEST_STARTED,
    AUTH_ACTION_REQUEST_SUCCESS
} from "../../constants/auth.actionTypes";

const authActionRequestStarted = (query) => {
    // console.log(query);
    return {
        type: AUTH_ACTION_REQUEST_STARTED,
        payload: query
    }
    
};

const authActionRequestSuccess = (accessToken) => {
    // console.log(accessToken);
    return {
        type: AUTH_ACTION_REQUEST_SUCCESS,
        payload: {accessToken}
    }
};

const authActionRequestFailed = (error) => {
    // console.log(error);
    return {
        type: AUTH_ACTION_REQUEST_FAILED,
        payload: {error}
    }
};

export {
    authActionRequestStarted,
    authActionRequestSuccess,
    authActionRequestFailed
}