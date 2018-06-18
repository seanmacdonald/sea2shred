import firebase from 'firebase'; 
import { Actions } from 'react-native-router-flux'; 

import {
    SIGNUP_FIRST_NAME_CHANGED,
    SIGNUP_LAST_NAME_CHANGED,
    SIGNUP_EMAIL_CHANGED, 
    SIGNUP_PASSWORD_CHANGED, 
    SIGNUP_CONFIRM_PASSWORD_CHANGED, 
    SIGNUP_USER, 
    SIGNUP_USER_SUCCESS, 
    SIGNUP_USER_FAIL
} from './types'; 

/*
    SIGNUP FORM INPUT ACTION CREATORS 
*/

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

/*
    SIGNUP ACTION CREATOR
*/
//TODO: add logic to ensure user enters a first and last name
//      and checks that the password was entered correctly 
export const signupUser = ({ email, password }) => {
    return (dispatch) => {
        dispatch({ type: SIGNUP_USER });

        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((user) => {
                signupUserSuccess(dispatch, user); 
            })
            .catch((error) => {
                signupUserFail(dispatch, error);      
            });
    };
};


const signupUserFail = (dispatch, error) => {
    dispatch({
        type: SIGNUP_USER_FAIL, 
        payload: error
    });
};

const signupUserSuccess = (dispatch, user) => {
    dispatch({
        type: SIGNUP_USER_SUCCESS, 
        payload: user 
    });

    Actions.main();
};

