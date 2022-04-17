import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import createSagaMiddleware from 'redux-saga'

import entriesReducer from '../reducers/entries.reducer';
import modalReducer from '../reducers/modal.reducer';
import { testSaga } from '../sagas/testSaga';

const sagaMiddleware = createSagaMiddleware()
const middlewares = [sagaMiddleware]

const configureStore = () => {
    const store = createStore(combineReducers({
        entries: entriesReducer,
        modals: modalReducer,
    }), composeWithDevTools(applyMiddleware(...middlewares)));
    sagaMiddleware.run(testSaga)
    return store
}

export default configureStore