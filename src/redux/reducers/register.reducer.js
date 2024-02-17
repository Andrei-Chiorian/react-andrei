import { REGISTER_ACTION_REQUEST_STARTED } from "../../constants/register.actionTypes";

const INITIAL_STATE = {
     
}

const applyGetRegisterStarted = (state) => {
     
    return {
        ...state            
    }
    
};


function registerReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case REGISTER_ACTION_REQUEST_STARTED: {
            return applyGetRegisterStarted(state, action);
        }        
        default: return state;
    }
}

export default registerReducer;