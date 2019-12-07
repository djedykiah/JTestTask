// Core
import { put } from 'redux-saga/es/effects';

// Actions
import { initialize } from '../../actions';

export function* initializeWorker () {
    try {
        yield put(initialize());
    } catch (e) {
        console.error('Initialize worker', e);
    } finally {

    }
}
