import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import createSagaMiddleware from 'redux-saga'

import entriesReducer from '../reducers/entries.reducer';
import modalReducer from '../reducers/modal.reducer';
import { initSagas } from '../sagas';

const sagaMiddleware = createSagaMiddleware()
const middlewares = [sagaMiddleware]

const configureStore = () => {
    const store = createStore(combineReducers({
        entries: entriesReducer,
        modals: modalReducer,
    }), composeWithDevTools(applyMiddleware(...middlewares)));
    // Run all sagas
    initSagas(sagaMiddleware)
    return store
}

export default configureStore