import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';

import entriesReducer from '../reducers/entries.reducer';
import modalReducer from '../reducers/modal.reducer';


const configureStore = () => {
    return createStore(combineReducers({
        entries: entriesReducer,
        modals: modalReducer,
    }), composeWithDevTools(applyMiddleware()));
}

export default configureStore