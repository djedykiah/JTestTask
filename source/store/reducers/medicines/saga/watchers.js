
// Core
import { takeEvery } from 'redux-saga/es/effects';

// Types
import { types } from '../types';

// Workers
import { initializeWorker } from './workers/initializeWorker';

export function* watchUi () {
    yield takeEvery(types.INITIALIZE_ASYNC, initializeWorker);
}
