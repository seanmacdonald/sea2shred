import firebase from 'firebase'; 

import { 
    FETCH_SHREDDERS, 
    FETCH_SHREDDERS_SUCCESS,
    FETCH_SHREDDERS_FAIL,

    SEARCH_SHREDDERS,
    SEARCH_SHREDDERS_SUCCESS, 
    SEARCH_SHREDDERS_FAIL,

    FETCH_SHREDDER_DETAILS, 
    FETCH_SHREDDER_DETAILS_SUCCESS, 
    FETCH_SHREDDER_DETAILS_FAIL  
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
    ShredderDetailPage Action Creators
*/
export const fetchShredderDetails = (uid, isFriend) => {
    return (dispatch) => {
        dispatch({ type: FETCH_SHREDDER_DETAILS });

        getShredderDetails(dispatch, uid, isFriend); 
    };
};

/* 
    Helper Methods 
*/

const getAllFriends = (dispatch) => {
    //first initialize firestore with proper settings
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
    //first initialize firestore with proper settings
    const firestore = firebase.firestore();
    const settings = { timestampsInSnapshots: true }; 
    firestore.settings(settings);

    //make ref for shredders collection
    const friendsColRef = firestore.collection('shredders'); 

    //now query firestore to get all users that match the searh parameter
    //TODO: make query an inequality to grab more users 
    friendsColRef.where('lastName', '==', searchText)
        .get()
        .then((querySnapshot) => {
            const searchResults = [];

            querySnapshot.forEach((doc) => {
                //doc.data() is never undefined for query doc snapshots
                console.log(doc.id, ' => ', doc.data());
                searchResults.push(doc.data());
            });

            dispatch({
                type: SEARCH_SHREDDERS_SUCCESS, 
                payload: searchResults
            });
        }); 
};

/*
    This functions gets the details of a shredder who is either a friend or 
    a non friend. If it is a friend, the details will be retrieved from the 
    current user's friend collection. If it is not a friend the details will 
    be retrieved from the shredder collection.  
*/
const getShredderDetails = (dispatch, uid, isFriend) => {
    //first initialize firestore with proper settings
    const firestore = firebase.firestore();
    const settings = { timestampsInSnapshots: true }; 
    firestore.settings(settings);

    if (isFriend) {
        //get current user 
        const user = firebase.auth().currentUser;

        //make a reference for the user's friends collection
        const friendDocRef = firestore.doc(`shredders/${user.uid}/friends/${uid}`);

        friendDocRef.get().then((doc) => {
            if (doc.exists) {
                dispatch({
                    type: FETCH_SHREDDER_DETAILS_SUCCESS, 
                    payload: doc.data()
                 });
            } else {
                dispatch({ type: FETCH_SHREDDER_DETAILS_FAIL });
            }
        });
    } else {
        //make a reference to the parameter uid under shredders collection 
        const uidDocRef = firestore.doc(`shredders/${uid}`);

        uidDocRef.get().then((doc) => {
            if (doc.exists) {
                dispatch({
                    type: FETCH_SHREDDER_DETAILS_SUCCESS, 
                    payload: doc.data()
                 });
            } else {
                dispatch({ type: FETCH_SHREDDER_DETAILS_FAIL });
            }
        });
    }
};
