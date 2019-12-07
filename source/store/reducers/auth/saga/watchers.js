// Core
import { takeEvery } from 'redux-saga/effects';

// Types
import { types } from '../types';

// Workers
import { signInWorker } from './workers/signInWorker';

export function* watchAuth () {
    yield takeEvery(types.SIGN_IN_ASYNC, signInWorker);
}
