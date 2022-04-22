import axios from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';
import types from '../actions/entries.action';

export function* addEntrySaga() {
    yield takeLatest(types.ADD_ENTRY, addEntryToDb)
}

function* addEntryToDb({ payload }) {
    yield call(addEntry, payload)
    yield call(addEntryDetail, payload)
    yield put({ type: types.ADD_ENTRY_RESULT, payload })
}


async function addEntry({ id, description }) {
    await axios.post('http://localhost:3011/entries', { id, description })

}

async function addEntryDetail({ id, isExpense, value }) {
    await axios.post('http://localhost:3011/values', { id, isExpense, value })
}