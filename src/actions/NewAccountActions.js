import firebase from 'firebase'; 
import '@firebase/firestore'; 

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

// Error Message Constants 
const MISSING_FORM_INPUT_ERROR = 'All fields must be filled in.'; 
const PASSWORD_NOT_MATCHING_ERROR = 'Password was not re-entered correctly.';
const ACCOUNT_NOT_CREATED_ERROR = 'Account could not be created';  


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
export const signupUser = ({ formData, navigation }) => {
    return (dispatch) => {
        dispatch({ type: SIGNUP_USER });

        //check that all fields are filled in
        if (
            formData.firstName === '' ||
            formData.lastName === '' ||
            formData.password === '' ||
            formData.confirmPassword === '' ||
            formData.email === ''
        ) {
                const formError = MISSING_FORM_INPUT_ERROR; 
                signupUserFail(dispatch, formError); 
                return; 
        }
        
        //check that the password was re-entered correctly
        if (formData.password !== formData.confirmPassword) {
            const passwordError = PASSWORD_NOT_MATCHING_ERROR;
            signupUserFail(dispatch, passwordError);
            return;   
        }

        //attempt to sign up the new user... 
        firebase.auth().createUserWithEmailAndPassword(formData.email, formData.password)
            .then((user) => {
                createShredderDoc(user);
            })
            .catch((error) => {
                console.log('could not create shredder doc'); 
                console.log(error); 
            })
            .then((user) => {
                signupUserSuccess(dispatch, user, navigation); 
            })
            .catch((error) => {
                console.log('could not signup user');
                console.log(error);  

                let accountError = ACCOUNT_NOT_CREATED_ERROR;

                //if firebase has an error message then display it instead
                if (error.message !== null) {
                    accountError = error.message; 
                }
                console.log(accountError); 
                signupUserFail(dispatch, accountError);      
            });
    };
};


/*
    Helper Methods 
*/
const createShredderDoc = (user) => {
    //first initialize firestore with proper settigns
    const firestore = firebase.firestore();
    const settings = { timestampsInSnapshots: true }; 
    firestore.settings(settings);

    //get refference to root node 'shredders' 
    const shredderColRef = firestore.collection('shredders');
    
    //add a new document with a generated id to the root collection 'shredders'
    shredderColRef.add({
        email: user.user.email
    }).then((docRef) => {
        console.log('SHREDDER UPDATE SUCCESS: ', docRef.id); 
        return user; 
    }).catch((error) => {
        console.log('SHREDDER UPDATE FAIL'); 
        console.log(error);
    }); 
};

const signupUserFail = (dispatch, errorMessage) => {
    dispatch({
        type: SIGNUP_USER_FAIL, 
        payload: errorMessage
    });
};

const signupUserSuccess = (dispatch, user, navigation) => {
    dispatch({
        type: SIGNUP_USER_SUCCESS, 
        payload: user 
    });

    navigation.navigate('homepage'); 
};

