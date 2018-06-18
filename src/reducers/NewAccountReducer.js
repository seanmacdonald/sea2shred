import {
    SIGNUP_FIRST_NAME_CHANGED,
    SIGNUP_LAST_NAME_CHANGED,
    SIGNUP_EMAIL_CHANGED, 
    SIGNUP_PASSWORD_CHANGED, 
    SIGNUP_CONFIRM_PASSWORD_CHANGED, 
    SIGNUP_USER, 
    SIGNUP_USER_SUCCESS, 
    SIGNUP_USER_FAIL
} from '../actions/types'; 

const INITIAL_STATE = {
    firstName: '', 
    lastName: '', 
    email: '', 
    password: '', 
    confirmPassword: '', 
    loading: false, 
    error: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SIGNUP_FIRST_NAME_CHANGED:
            return { ...state, firstName: action.payload };
        case SIGNUP_LAST_NAME_CHANGED:
            return { ...state, lastName: action.payload };
        case SIGNUP_EMAIL_CHANGED:
            return { ...state, email: action.payload };
        case SIGNUP_PASSWORD_CHANGED:
            return { ...state, password: action.payload }; 
        case SIGNUP_CONFIRM_PASSWORD_CHANGED:
            return { ...state, confirmPassword: action.payload };
        case SIGNUP_USER:
            return { ...state, loading: true, error: '' }; 
        case SIGNUP_USER_SUCCESS:
            return { ...state, ...INITIAL_STATE, user: action.payload }; 
        case SIGNUP_USER_FAIL:
            return { ...state, loading: false, error: 'Sign Up Failed' }; 
        default: 
            return state; 
    }
};
