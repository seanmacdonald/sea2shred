import firebase from 'firebase'; 

import {
    SEND_FRIEND_REQUEST, 
    SEND_FRIEND_REQUEST_SUCCESS, 
    SEND_FRIEND_REQUEST_FAIL
} from './types'; 

/*
    Shredder Detail Action Creator
*/

/*
    @param uid - the uid of the person the current user is requesting
                 to be friends with. 
*/
export const sendFriendRequest = (uid) => {
    return (dispatch) => {
        dispatch({ type: SEND_FRIEND_REQUEST }); 

        sendFriendRequestHelper(dispatch, uid); 
    };
};


/*
    Helper Methods 
*/

const sendFriendRequestHelper = (dispatch, uid) => {
    //first initialize firestore with proper settings
    const firestore = firebase.firestore();
    const settings = { timestampsInSnapshots: true }; 
    firestore.settings(settings);

    //get current user 
    const user = firebase.auth().currentUser;

    //make a reference to the persons's incomingRequests collection that the current
    //user would like to add
    const inRequestColRef = firestore.collection(`shredders/${uid}/incomingRequests`);

    //make another reference for currents user's outgoing requests 
    const outRequestColRef = firestore.collection(`shredders/${user.uid}/outgoingRequests`);

    inRequestColRef.doc(user.uid).set({
        friendRequestFrom: user.uid
    }).then(() => {
        outRequestColRef.doc(uid).set({
            friendRequestSent: uid    
        });
        dispatch({ type: SEND_FRIEND_REQUEST_SUCCESS });
    }).catch(() => {
        console.log('Error writing request document');
        dispatch({ type: SEND_FRIEND_REQUEST_FAIL }); 
    });
};

