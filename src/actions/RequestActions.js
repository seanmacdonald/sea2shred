import firebase from 'firebase'; 

import {
    SEND_FRIEND_REQUEST, 
    SEND_FRIEND_REQUEST_SUCCESS, 
    SEND_FRIEND_REQUEST_FAIL
} from './types'; 

/*
    Shredder Detail Action Creator
*/

export const sendFriendRequest = () => {
    console.log('SEND FRIEND REQUEST'); 
    return (dispatch) => {
        dispatch({ type: SEND_FRIEND_REQUEST }); 
    };
};

