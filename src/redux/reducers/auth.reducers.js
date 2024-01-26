import {
    AUTH_ACTION_REQUEST_FAILED,
    AUTH_ACTION_REQUEST_STARTED,
    AUTH_ACTION_REQUEST_SUCCESS
} from "../../constants/auth.actionTypes";

const INITIAL_STATE = {
    user: null,
    isLoading: false,
    error: null
}

const applyGetAuthStarted = (state, action) => {
    console.log(state);
    console.log(action);
    return {
        ...state,
        accessToken: null,
        isLoading: true
    }
    
};

const applyGetAuthSuccess = (state, action) => ({
    ...state,
    accessToken: action.payload.accessToken || localStorage.getItem("accessToken"),
    isLoading: false
})

const applyGetAuthFailed = (state, action) => ({
    ...state,
    accessToken: null,
    isLoading: false,
    error: action.payload.error
});


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
        default: return state;
    }
}

export default authReducer;