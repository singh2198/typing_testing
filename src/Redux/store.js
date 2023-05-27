// ...
import { createStore, applyMiddleware, compose, combineReducers } from "redux";

import thunk from "redux-thunk";

import { typereducer } from "./reducer";
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  typereducer,
});

export const store = createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(thunk))
);
