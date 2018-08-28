import firebase from 'firebase'; 

import { 
    FETCH_SHREDDERS, 
    FETCH_SHREDDERS_SUCCESS,
    FETCH_SHREDDERS_FAIL,
    SEARCH_SHREDDERS,
    SEARCH_SHREDDERS_SUCCESS, 
    SEARCH_SHREDDERS_FAIL 
} from './types'; 

/*
    ShreddersPage Action Creators
*/
export const fetchShredders = () => {
    return (dispatch) => {
        dispatch({ type: FETCH_SHREDDERS }); 

        getAllFriends(dispatch); 
    };
};


/*
    AddShredders Action Creators 
*/
export const searchShredders = (searchText) => {
    return (dispatch) => {
        dispatch({ type: SEARCH_SHREDDERS }); 

        searchForShredders(dispatch, searchText); 
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

const searchForShredders = (dispatch, searchText) => {
    //first initialize firestore with proper settigns
    const firestore = firebase.firestore();
    const settings = { timestampsInSnapshots: true }; 
    firestore.settings(settings);

    //make ref for shredders collection
    const friendsColRef = firestore.collection('shredders/'); 

    //now query firestore to get all users that match the searh parameter
    friendsColRef.where('lastName', '>=', searchText)
        .then((querySnapshot) => {
            const searchResults = [];

            querySnapshot.forEach((doc) => {
                //doc.data() is never undefined for query doc snapshots
                console.log(doc.id, ' => ', doc.data());
                searchResults.push(doc.data());
            });

            dispatch({
                type: FETCH_SHREDDERS_SUCCESS, 
                payload: searchResults
            });
        }); 
};
