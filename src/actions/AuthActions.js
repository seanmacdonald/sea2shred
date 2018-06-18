import firebase from 'firebase'; 
import { Actions } from 'react-native-router-flux';

import {
    LOGIN_EMAIL_CHANGED, 
    LOGIN_PASSWORD_CHANGED,
    LOGIN_USER,
    LOGIN_USER_SUCCESS, 
    LOGIN_USER_FAIL
} from './types'; 


/*
    LOGIN FORM INPUT ACTION CREATORS 
*/

export const loginEmailChanged = (text) => {
    return {
        type: LOGIN_EMAIL_CHANGED, 
        payload: text
    };
}; 

export const loginPasswordChanged = (text) => {
    return {
        type: LOGIN_PASSWORD_CHANGED, 
        payload: text
    };
};  


/*
    LOGIN ACTION CREATOR
*/

export const loginUser = ({ email, password }) => {
    return (dispatch) => {
        dispatch({ type: LOGIN_USER });

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((user) => {
                loginUserSuccess(dispatch, user); 
            })
            .catch((error) => {
                loginUserFail(dispatch, error);      
            });
    };
};

const loginUserSuccess = (dispatch, user) => {
    dispatch({ 
        type: LOGIN_USER_SUCCESS,
        payload: user  
    });

    Actions.main(); 
};

const loginUserFail = (dispatch, error) => {
    dispatch({ 
        type: LOGIN_USER_FAIL, 
        payload: error
    }); 
};
