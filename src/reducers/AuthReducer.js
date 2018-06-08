import {
    EMAIL_CHANGED, 
    PASSWORD_CHANGED,
    LOGIN_USER
} from '../actions/types'; 

const INITIAL_STATE = {
    email: '', 
    password: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case EMAIL_CHANGED:
            return { ...state, email: action.payload };
        case PASSWORD_CHANGED:
            return { ...state, password: action.payload };
        case LOGIN_USER:
            return { ...state, INITIAL_STATE }; 
        default: 
            return state; 
    }
};

