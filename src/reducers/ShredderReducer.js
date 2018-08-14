import { 
    FETCH_SHREDDERS, 
    FETCH_SHREDDERS_SUCCESS,
    FETCH_SHREDDERS_FAIL
} from '../actions/types'; 

const INITIAL_STATE = {
    fetchingShredders: false,
    fetchingShreddersSuccess: false, 
    fetchingShreddersFail: false, 
    friends: [],
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_SHREDDERS: 
            return { 
                ...state, 
                fetchingShredders: true, 
                fetchingShreddersSuccess: false, 
                fetchingShreddersFail: false, 
                friends: []
            }; 
        
        case FETCH_SHREDDERS_SUCCESS: 
            return { 
                ...state, 
                fetchingShredders: false, 
                fetchingShreddersSuccess: true, 
                fetchingShreddersFail: false, 
                friends: action.payload
            }; 
        
        case FETCH_SHREDDERS_FAIL: 
            return { 
                ...state, 
                fetchingShredders: false, 
                fetchingShreddersSuccess: false, 
                fetchingShreddersFail: true, 
            }; 
        
        default: 
            return state; 
    }
};

