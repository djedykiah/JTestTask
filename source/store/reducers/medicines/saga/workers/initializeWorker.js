// Core
import { put } from 'redux-saga/es/effects';

//API
import { api } from 'API';

// Actions
import { initialize, authenticate } from '../../actions';

export function* initializeWorker () {
    try {
        yield put(initialize());

        yield api.auth.signIn();

        yield put(authenticate());
    } catch (e) {
        console.error('Initialize worker', e);
    } finally {

    }
}
