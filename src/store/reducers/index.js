import { combineReducers } from 'redux';

import authReducer from './authentication';
import profile from './profile';

const rootReducer = combineReducers({ authReducer, profile });

export default rootReducer;