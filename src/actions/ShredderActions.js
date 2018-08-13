import firebase from 'firebase'; 

import { 
    FETCH_SHREDDERS, 
    FETCH_SHREDDERS_SUCCESS,
    FETCH_SHREDDERS_FAIL
} from './types'; 

export const fetchShredders = () => {
    return (dispatch) => {
        dispatch({ type: FETCH_SHREDDERS }); 

        getAllFriends(dispatch); 
    };
};


/* 
    Helper Methods 
*/

const getAllFriends = (dispatch) => {
    //first initialize firestore with proper settigns
    const firestore = firebase.firestore();
    const settings = { timestampsInSnapshots: true }; 
    firestore.settings(settings);

    //get current user 
    //TODO: check and make sure successfully got current user
    const user = firebase.auth().currentUser;

    ///make a reference for the user's friends collection
    const friendsColRef = firestore.collection(`shredders/${user.uid}/friends`); 

    friendsColRef.get().then((querySnapshot) => {
        const friends = [];

        querySnapshot.forEach((doc) => {
            //doc.data() is never undefined for query doc snapshots
            console.log(doc.id, ' => ', doc.data());
            friends.push(doc.data());
        });

         dispatch({
            type: FETCH_SHREDDERS_SUCCESS, 
            payload: friends
         });
    });
};
