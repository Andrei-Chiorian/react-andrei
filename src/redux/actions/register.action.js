import { REGISTER_ACTION_REQUEST_STARTED } from "../../constants/register.actionTypes";

const registerActionRequestStarted = (query) => {
    // console.log(query);
    return {
        type: REGISTER_ACTION_REQUEST_STARTED,
        payload: query
    }
    
};

export {registerActionRequestStarted}
    