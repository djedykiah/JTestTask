// Core
import { combineReducers } from 'redux';
import { all, call } from 'redux-saga/effects';

// Reducers
import { authReducer as auth } from './auth/reducer';
import { uiReducer as ui } from './ui/reducer';

// Watchers
import { watchUi } from '../reducers/ui/saga/watchers';
import { watchAuth } from '../reducers/auth/saga/watchers';
import { connectRouter } from 'connected-react-router';

const createRootReducer = (history) => {
    return combineReducers({
        router: connectRouter(history),
        auth,
        ui,
    });
};

export default createRootReducer;

export function* rootSaga () {
    yield all([ call(watchAuth), call(watchUi) ]);
}
