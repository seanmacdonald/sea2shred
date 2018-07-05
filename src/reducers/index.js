import { combineReducers } from 'redux';

import AuthReducer from './AuthReducer'; 
import NewAccountReducer from './NewAccountReducer'; 
import ShredderReducer from './ShredderReducer'; 

export default combineReducers({ 
    auth: AuthReducer,
    newAcc: NewAccountReducer, 
    shred: ShredderReducer
});
