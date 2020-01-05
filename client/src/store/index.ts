import {createStore, combineReducers, applyMiddleware, compose} from 'redux';

const reducer = combineReducers({});

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const index = {
    ...createStore(rootReducer, composeEnhancers(applyMiddleware()))
}

export default index;