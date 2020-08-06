import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers";

import thunkMiddleware from 'redux-thunk';
import loggerMiddleware from 'redux-logger';

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, loggerMiddleware));

export default store;