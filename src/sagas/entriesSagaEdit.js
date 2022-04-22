import axios from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';
import types from '../actions/entries.action';

export function* editEntrySaga() {
    yield takeLatest(types.UPDATE_ENTRY, editEntryToDb)
}

function* editEntryToDb({ payload }) {
    yield call(editEntry, payload)
    yield call(editEntryDetail, payload)
    yield put({ type: types.UPDATE_ENTRY_RESULT, payload })
}


async function editEntry({ id, entry }) {
    await axios.put(`http://localhost:3011/entries/${id}`, { description: entry.description })

}

async function editEntryDetail({ id, entry }) {
    await axios.put(`http://localhost:3011/values/${id}`, { isExpense: entry.isExpense, value: entry.value })
}