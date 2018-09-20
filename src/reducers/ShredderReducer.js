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
} from '../actions/types'; 

const INITIAL_STATE = {
    fetchingShredders: false,
    fetchingShreddersSuccess: false, 
    fetchingShreddersFail: false, 
    friends: [],

    searchingShredders: false, 
    searchingShreddersSuccess: false, 
    searchingShreddersFail: false, 
    searchResults: [],

    fetchingDetails: false, 
    fetchingDetailsSuccess: false, 
    fetchingDetailsFail: false, 
    details: {}
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

        case SEARCH_SHREDDERS: 
            return { 
                ...state, 
                searchingShredders: true, 
                searchingShreddersSuccess: false, 
                searchShreddersFail: false, 
                searchResults: []
            }; 
        
        case SEARCH_SHREDDERS_SUCCESS: 
            return { 
                ...state, 
                searchingShredders: false, 
                searchingShreddersSuccess: true, 
                searchingShreddersFail: false, 
                searchResults: action.payload
            }; 
        
        case SEARCH_SHREDDERS_FAIL: 
            return { 
                ...state, 
                searchingShredders: false, 
                searchingShreddersSuccess: false, 
                searchingShreddersFail: true, 
            }; 

        case FETCH_SHREDDER_DETAILS:
            return {
                ...state, 
                fetchingDetails: true, 
                fetchingDetailsSuccess: false, 
                fetchingDetailsFail: false, 
            };
        
        case FETCH_SHREDDER_DETAILS_SUCCESS:
            return {
                ...state,
                fetchingDetails: false, 
                fetchingDetailsSuccess: true, 
                fetchingDetailsFail: false, 
                details: action.payload
            };
        
        case FETCH_SHREDDER_DETAILS_FAIL:
            return {
                ...state,
                fetchingDetails: false, 
                fetchingDetailsSuccess: false, 
                fetchingDetailsFail: true, 
            };
        
        default: 
            return state; 
    }
};

