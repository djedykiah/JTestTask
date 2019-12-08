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

export const editMedicine = (data) => ({
    type:    types.EDIT_MEDICINE,
    payload: data,
});

export const updateMedicine = (data) => ({
    type:    types.UPDATE_MEDICINE,
    payload: data,
});

export const addMedicine = (data) => {
    return {
        type:    types.ADD_MEDICINE,
        payload: data,
    };
};

export const deleteMedicine = (data) => ({
    type:    types.DELETE_MEDICINE,
    payload: data,
});
