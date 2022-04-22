import axios from 'axios';
import { call, fork, put, take } from 'redux-saga/effects';

import types, { populateEntries, populateEntryDetail } from '../actions/entries.action';

export function* getAllEntries() {
    yield take(types.GET_ENTRIES)
    const { data } = yield call(axios, 'http://localhost:3011/entries')
    yield put(populateEntries(data))
}

export function* getEntryDetails(id) {
    const result = yield call(axios, `http://localhost:3011/values/${id}`)
    yield put(populateEntryDetail(id, result.data))
}

export function* getAllEntriesDetails() {
    const { payload } = yield take(types.POPULATE_ENTRIES)
    // yield payload.map(entry => fork(getEntryDetails, entry.id))
    for (let entry of payload) {
        yield fork(getEntryDetails, entry.id)
    }

}