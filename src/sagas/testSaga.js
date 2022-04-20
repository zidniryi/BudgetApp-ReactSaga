import { call, delay, fork, put, take } from 'redux-saga/effects'
// TAKE is execute when something done
// DELAY you know what
// PUT is like dispatch
// CALL  direct call function with generator style
// FORK is call but can called function in paralel

function double(number) {
    return number * 2
}

export function* testSaga() {
    while (true) {
        // console.log("Starting saga")
        const state = yield take('TEST_MESSAGE')
        const a = yield call(double, 11)
        const b = yield double(3)
        // console.log(a, "A")
        // console.log(b, "B")
        // console.log("Finish Saga Function", state)
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

function* doNothing() {
    console.log("I Have Been Called")
    yield delay(1000)
    console.log("Do nothing")
}

export function* testSagaFork() {
    while (true) {
        yield take('TEST_MESSAGE_2')


        yield delay(1000)
        yield fork(doNothing)
        yield fork(doNothing)
        yield fork(doNothing)

        // const state = yield take('TEST_MESSAGE_2')
        // console.log(state)

    }
}

export function* dispatchTest() {
    while (true) {
        yield delay(5000)
        yield put({
            type: 'TEST_MESSAGE_2',
            payload: 1000
        })

        // const state = yield take('TEST_MESSAGE_2')
        // console.log(state)
    }
}