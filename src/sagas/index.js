// import * as testSaga from './testSaga';
import * as entriesSaga from './entries.saga';
import * as entrySagaDeletion from './entriesSagaDeletetion'


export function initSagas(sagaMiddleware) {
    // Object.values(testSaga).forEach(sagaMiddleware.run.bind())
    Object.values(entriesSaga).forEach(sagaMiddleware.run.bind())
    Object.values(entrySagaDeletion).forEach(sagaMiddleware.run.bind())

}