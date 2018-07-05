import { 
    FETCH_SHREDDERS, 
    FETCH_SHREDDERS_SUCCESS,
    FETCH_SHREDDERS_FAIL
} from '../actions/types'; 

const INITIAL_STATE = {
    loading: false, 
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_SHREDDERS: 
            return { ...state, loading: true }; 
        
        case FETCH_SHREDDERS_SUCCESS: 
            return { ...state, loading: false }; 
        
        case FETCH_SHREDDERS_FAIL: 
            return { ...state, loading: false }; 
        
        default: 
            return state; 
    }
};

