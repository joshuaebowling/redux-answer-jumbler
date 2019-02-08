import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { RootReducer } from "./reducers/Root";
export default createStore(
  combineReducers(RootReducer),
  applyMiddleware(thunk)
);
