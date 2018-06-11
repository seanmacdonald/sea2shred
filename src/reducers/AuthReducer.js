import {
    LOGIN_EMAIL_CHANGED, 
    LOGIN_PASSWORD_CHANGED,
    LOGIN_USER, 
    LOGIN_USER_SUCCESS, 
    LOGIN_USER_FAIL
} from '../actions/types'; 

const INITIAL_STATE = {
    email: '', 
    password: '', 
    loading: false, 
    error: '', 
    user: null
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOGIN_EMAIL_CHANGED:
            return { ...state, email: action.payload };
        case LOGIN_PASSWORD_CHANGED:
            return { ...state, password: action.payload };
        case LOGIN_USER:
            return { ...state, loading: true, error: '' };
        case LOGIN_USER_SUCCESS:
            return { ...state, ...INITIAL_STATE, user: action.payload }; 
        case LOGIN_USER_FAIL:
            return { ...state, loading: false, error: 'Authentication Failed', password: '' };
        default: 
            return state; 
    }
};

