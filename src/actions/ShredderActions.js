import firebase from 'firebase'; 

import { 
    FETCH_SHREDDERS, 
    FETCH_SHREDDERS_SUCCESS,
    FETCH_SHREDDERS_FAIL
} from './types'; 

export const fetchShredders = () => {
    return (dispatch) => {
        dispatch({ type: FETCH_SHREDDERS }); 
    };
};

