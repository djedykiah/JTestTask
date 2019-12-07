// Types
import { types } from './types';

// Sync
export const startFetching = () => ({
    type: types.START_FETCHING,
});

export const stopFetching = () => ({
    type: types.STOP_FETCHING,
});

export const setErrorMessage = (message) => ({
    type:    types.SET_ERROR_MESSAGE,
    payload: message,
});

export const setMedicines = (data) => ({
    type:    types.SET_MEDICINES,
    payload: data,
});
