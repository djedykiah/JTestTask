// Core
import { combineReducers } from 'redux';
import { all, call } from 'redux-saga/effects';

// Reducers
import { medicinesReducer as medicines } from './medicines/reducer';
import { uiReducer as ui } from './ui/reducer';
import { modalReducer as modal } from './modals/reducer';

// Watchers
import { watchUi } from '../reducers/ui/saga/watchers';
import { connectRouter } from 'connected-react-router';

const createRootReducer = (history) => {
    return combineReducers({
        router: connectRouter(history),
        medicines,
        ui,
        modal,
    });
};

export default createRootReducer;

export function* rootSaga () {
    yield all([ call(watchUi) ]);
}
