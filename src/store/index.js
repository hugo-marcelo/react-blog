import { createStore, applyMiddleware, combineReducers } from "redux";
import thunkMiddleware from "redux-thunk";

import { homeReducer } from "./reducers/homeReducer";
import { loadingReducer } from "./reducers/loadingReducer";

const reducers = combineReducers({
  homeReducer,
  loadingReducer,
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
