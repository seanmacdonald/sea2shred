import {
    SIGNUP_FIRST_NAME_CHANGED,
    SIGNUP_LAST_NAME_CHANGED,
    SIGNUP_EMAIL_CHANGED, 
    SIGNUP_PASSWORD_CHANGED, 
    SIGNUP_CONFIRM_PASSWORD_CHANGED
} from './types'; 

export const signupFirstNameChanged = (text) => {
    return {
        type: SIGNUP_FIRST_NAME_CHANGED, 
        payload: text
    };
}; 

export const signupLastNameChanged = (text) => {
    return {
        type: SIGNUP_LAST_NAME_CHANGED, 
        payload: text
    };
};  

export const signupEmailChanged = (text) => {
    return {
        type: SIGNUP_EMAIL_CHANGED, 
        payload: text
    };
}; 

export const signupPasswordChanged = (text) => {
    return {
        type: SIGNUP_PASSWORD_CHANGED, 
        payload: text
    };
};  

export const signupConfirmPasswordChanged = (text) => {
    return {
        type: SIGNUP_CONFIRM_PASSWORD_CHANGED, 
        payload: text
    };
};  
