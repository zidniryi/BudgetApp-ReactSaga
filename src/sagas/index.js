// import * as testSaga from './testSaga';
import * as entriesSaga from './entries.saga';


export function initSagas(sagaMiddleware) {
    // Object.values(testSaga).forEach(sagaMiddleware.run.bind())
    Object.values(entriesSaga).forEach(sagaMiddleware.run.bind())

}