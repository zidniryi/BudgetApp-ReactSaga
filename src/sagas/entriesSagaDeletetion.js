import axios from 'axios';
import { call, put, take } from 'redux-saga/effects';
import types from '../actions/entries.action';

export function* deleteEntrySaga() {
    // While finisih everything and start again
    while (true) {
        const { payload } = yield take(types.REMOVE_ENTRY)
        yield call(deleteEntry, payload.id)
        yield put({ type: types.REMOVE_ENTRY_RESULT, payload: { id: payload.id } })
    }
}

async function deleteEntry(id) {
    axios.delete(`http://localhost:3011/entries/${id}`)
    axios.delete(`http://localhost:3011/values/${id}`)

}