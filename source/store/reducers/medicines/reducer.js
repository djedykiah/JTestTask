// Core
import { Map, List } from 'immutable';

// Types
import { types } from './types';

const initialState = Map({
    isFetching:    false,
    isInitialized: false,
    items:         [],
    editItem:      {},
    errorMessage:  '',
});

export const medicinesReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.START_FETCHING:
            return state.set('isFetching', true);
        case types.STOP_FETCHING:
            return state.set('isFetching', false);
        case types.INITIALIZE:
            return state.set('isInitialized', true);
        case types.SET_MEDICINES:
            return state.set('items', action.payload);
        case types.ADD_MEDICINE:
            return state.set('items', [ ...state.get('items'), action.payload ]);
        case types.EDIT_MEDICINE:
            return state.set('editItem', action.payload);
        case types.UPDATE_MEDICINE:
            const updatedMedicine = state.get('items').findIndex((item) => item.id === action.payload.id);

            return state.set('items', [ ...state.get('items').slice(0, updatedMedicine), action.payload, ...state.get('items').slice(updatedMedicine + 1) ]);
        case types.DELETE_MEDICINE:
            const deletedMedicine = state.get('items').findIndex((item) => item.id === action.payload);

            return state.set('items', [ ...state.get('items').slice(0, deletedMedicine), ...state.get('items').slice(deletedMedicine + 1) ]);
        case types.SET_ERROR_MESSAGE:
            return state.set('errorMessage', action.payload);
        default:
            return state;
    }
};
