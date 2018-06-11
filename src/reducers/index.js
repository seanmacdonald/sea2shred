import { combineReducers } from 'redux';

import AuthReducer from './AuthReducer'; 
import NewAccountReducer from './NewAccountReducer'; 

export default combineReducers({ 
    auth: AuthReducer,
    newAcc: NewAccountReducer
});
