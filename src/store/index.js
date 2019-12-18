import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import reducer from '../reducer';

const middlewares = [logger, thunk];


function configureStore(initialState) {
    const store = createStore(reducer, initialState, applyMiddleware(...middlewares));
    return store;
}

export default configureStore;