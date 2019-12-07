// Core
import { put } from 'redux-saga/effects';

// Actions
import { startFetching, stopFetching, setErrorMessage } from '../../../ui/actions';
import { authenticate } from '../../actions';

export function* signInWorker ({ payload }) {
    try {
        yield put(startFetching());

        yield put(authenticate());

    } catch ({ message }) {
        yield put(setErrorMessage(message));
    } finally {
        yield put(stopFetching());
    }
}
