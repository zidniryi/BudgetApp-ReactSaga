import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';

import entriesReducer from '../reducers/entries.reducer';

const configureStore = () => {
    return createStore(combineReducers({
        entries: entriesReducer,
    }), composeWithDevTools(applyMiddleware()));
}

export default configureStore