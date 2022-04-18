import axios from 'axios';
import { call, put, take } from 'redux-saga/effects';
import types from '../actions/entries.action';

export function* getAllEntries() {
    yield take(types.GET_ENTRIES)
    const result = yield call(axios, 'http://localhost:3011/entries')
    yield put({
        type: types.POPULATE_ENTRIES,
        payload: result.data
    })

}