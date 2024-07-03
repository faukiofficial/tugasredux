import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import counterReducer from "./features/counter/reducer";
import { thunk } from "redux-thunk";

const rootReducer = combineReducers({
    counter: counterReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

export default store;