// ...
import { createStore, applyMiddleware ,compose,combineReducers} from 'redux'
import createSagaMiddleware from 'redux-saga'
import thunk from "redux-thunk";
// ...
// import { helloSaga } from './saga'
import { typereducer } from './reducer';
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    typereducer,
    
  });

const sagaMiddleware = createSagaMiddleware()
export const store = createStore(rootReducer,composeEnhancer(applyMiddleware(thunk)))
