// Core
import { Map } from 'immutable';

// Types
import { types } from './types';

const initialState = Map({
    isOpen: false,
    type:   '',
});

export const modalReducer = (state = initialState, action) => {

    switch (action.type) {
        case types.SHOW_MODAL:
            return state.set('isOpen', true).set('type', action.payload.type);

        case types.SHOW_MODAL_ADD: {
            return state.set('type', 'MODAL_ADD');
        }
        case types.SHOW_MODAL_EDIT: {
            return state.set('type', 'MODAL_EDIT');
        }
        case types.HIDE_MODAL:
            return initialState;
        default:
            return state;
    }
};
