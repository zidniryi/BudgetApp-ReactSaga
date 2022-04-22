import { call, delay, fork, put, take, takeEvery, cancelled, cancel, takeLatest } from "redux-saga/effects";
// TAKE is execute when something done
// DELAY you know what
// PUT is like dispatch
// CALL  direct call function with generator style
// FORK is call but can called function in paralel
//  TAKE EVERY is execute when like TAKE but in paralel style
// CANCEL is to cancel or delete fork
// CANCELLED is called on the FORK
// TAKE LAST like start the saga from begin and repeat

function double(number) {
    return number * 2;
}

export function* testSaga() {
    while (true) {
        // console.log("Starting saga")
        const state = yield take("TEST_MESSAGE");
        const a = yield call(double, 11);
        const b = yield double(3);
        // console.log(a, "A")
        // console.log(b, "B")
        // console.log("Finish Saga Function", state)
    }
}

export function* dispatchText() {
    while (true) {
        yield delay(1000);
        yield put({
            type: "TEST_MESSAGE",
            payload: Math.random(),
        });
    }
}

function* doNothing() {
    console.log("I Have Been Called");
    yield delay(1000);
    console.log("Do nothing");
}

export function* testSagaFork() {
    while (true) {
        yield take("TEST_MESSAGE_2");

        yield delay(1000);
        yield fork(doNothing);
        yield fork(doNothing);
        yield fork(doNothing);
    }
}

export function* testSagaTakeEveryProcess({ payload }) {
    console.log(`Starting Process ${payload}`);
    yield delay(3000);
    console.log(`Ending Process ${payload}`);
}

export function* testSagaTakeEvery() {
    const { payload } = yield takeEvery(
        "TEST_MESSAGE_3",
        testSagaTakeEveryProcess
    );
    console.log(`index Take Every ${payload}`);
}

// function* infinitySaga() {
//     console.log("Starting Saga");
//     while (true) {
//         try {
//             console.log("Inside infinity loop");
// yield delay(500);

//         } catch (err) {
//             console.log("See error", err);
//         } finally {
//             console.log("The fork IS CANCELED?", yield cancelled())
//         }
// yield delay(500);
//     }
//     console.log("Ending Saga");
// }

function* infinitySaga() {
    console.log("Starting Saga");
    let index = 0
    while (true) {
        index++
        try {
            console.log("Inside infinity loop", index);
            yield delay(1000);
        } catch (err) {
            console.log("See error", err);
        } finally {
            console.log("The fork IS CANCELED?", yield cancelled())
        }
    }
    console.log("Ending Saga");
}

export function* testSagaTakeLatest() {
    yield takeLatest("TEST_MESSAGE_5", infinitySaga);
}

export function* testSagaCanceled() {
    yield take("TEST_MESSAGE_4");
    const handleCancel = yield fork(infinitySaga);
    yield delay(3000);
    yield cancel(handleCancel);
}

export function* dispatchTest() {
    let index = 0;

    while (true) {
        yield delay(5000);
        yield put({
            type: "TEST_MESSAGE_5",
            payload: index,
        });

        // yield put({
        //     type: 'TEST_MESSAGE_3',
        //     payload: index
        // })
        // index++

    }
}
