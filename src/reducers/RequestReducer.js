import {
    SEND_FRIEND_REQUEST, 
    SEND_FRIEND_REQUEST_SUCCESS, 
    SEND_FRIEND_REQUEST_FAIL
} from '../actions/types'; 

const INITIAL_STATE = {
    pendingRequest: false, //a request has already been sent
    sendingRequest: false, 
    sendingRequestSuccess: false,
    sendingRequestFail: false, 
}; 

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SEND_FRIEND_REQUEST: 
            return {
                ...state, 
                pendingRequest: false,
                sendingRequest: true, 
                sendingRequestSuccess: false,
                sendingRequestFail: false, 
            };
        
        case SEND_FRIEND_REQUEST_SUCCESS: 
            return {
                ...state,
                pendingRequest: false,
                sendingRequest: false, 
                sendingRequestSuccess: true,
                sendingRequestFail: false, 
            };

        case SEND_FRIEND_REQUEST_FAIL: 
            return {
                ...state,
                pendingRequest: false,
                sendingRequest: false, 
                sendingRequestSuccess: true,
                sendingRequestFail: false, 
            };

        default: 
            return state; 

    }
}