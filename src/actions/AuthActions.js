import firebase from 'firebase'; 
import { Actions } from 'react-native-router-flux'; 
import {
    EMAIL_CHANGED, 
    PASSWORD_CHANGED,
    LOGIN_USER
} from './types'; 

export const emailChanged = (text) => {
    return {
        type: EMAIL_CHANGED, 
        payload: text
    };
}; 

export const passwordChanged = (text) => {
    return {
        type: PASSWORD_CHANGED, 
        payload: text
    };
};  

export const loginUser = ({ email, password }) => {
    return (dispatch) => {
        dispatch({ type: LOGIN_USER });

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((user) => {
                console.log(user);
                Actions.main(); 
            })
            .catch((error) => {
                console.log(error);     
            });
    };
};
