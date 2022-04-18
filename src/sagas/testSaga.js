import { call, delay, put, take } from 'redux-saga/effects'
// TAKE is execute when something done
// DELAY you know what
// PUT is like dispatch
// CALL  direct call function with generator style

function double(number) {
    return number * 2
}

export function* testSaga() {
    while (true) {
        console.log("Starting saga")
        const state = yield take('TEST_MESSAGE')
        const a = yield call(double, 11)
        const b = yield double(3)
        console.log(a, "A")
        console.log(b, "B")
        console.log("Finish Saga Function", state)
    }
}

export function* dispatchText() {
    while (true) {
        yield delay(1000)
        yield put({
            type: 'TEST_MESSAGE',
            payload: Math.random()
        })
    }
}