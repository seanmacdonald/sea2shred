import firebase from 'firebase'; 

import {
    LOGIN_EMAIL_CHANGED, 
    LOGIN_PASSWORD_CHANGED,
    LOGIN_USER,
    LOGIN_USER_SUCCESS, 
    LOGIN_USER_FAIL, 
    USER_LOGGED_IN, 
    USER_NOT_LOGGED_IN, 
    USER_LOGGED_OUT,
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
    LOGIN ACTION CREATORS
*/

export const loginUser = ({ email, password, navigation }) => {
    return (dispatch) => {
        dispatch({ type: LOGIN_USER });

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((user) => {
                loginUserSuccess(dispatch, user, navigation); 
            })
            .catch((error) => {
                loginUserFail(dispatch, error);      
            });
    };
};

export const userLoggedIn = () => {
    return (dispatch) => {
        console.log('user is already logged in'); 
        dispatch({ type: USER_LOGGED_IN });
    };
};

export const userNotLoggedIn = () => {
    return (dispatch) => {
        dispatch({ type: USER_NOT_LOGGED_IN });
    };
};


/*
    Login Helper Methods 
*/

const loginUserSuccess = (dispatch, user, navigation) => {
    dispatch({ 
        type: LOGIN_USER_SUCCESS,
        payload: user  
    });
    console.log(this.props); 
    navigation.navigate('homepage'); 
};

const loginUserFail = (dispatch, error) => {
    dispatch({ 
        type: LOGIN_USER_FAIL, 
        payload: error
    }); 
};


/*
    Logout Action Creators 
*/
export const userLoggedOut = () => {
    return (dispatch) => {
        dispatch({ type: USER_LOGGED_OUT }); 
    };
};
