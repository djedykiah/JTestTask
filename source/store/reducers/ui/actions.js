// Types
import { types } from './types';

// Async
export const initializeAsync = () => ({
    type: types.INITIALIZE_ASYNC,
});

// Sync
export const startFetching = () => ({
    type: types.START_FETCHING,
});

export const stopFetching = () => ({
    type: types.STOP_FETCHING,
});

export const setOnlineState = () => ({
    type: types.SET_ONLINE_STATE,
});

export const setOfflineState = () => ({
    type: types.SET_OFFLINE_STATE,
});

export const initialize = () => ({
    type: types.INITIALIZE,
});

export const setErrorMessage = (message) => ({
    type:    types.SET_ERROR_MESSAGE,
    payload: message,
});

export const setUserLanguage = (message) => ({
    type:    types.SET_USER_LANGUAGE,
    payload: message,
});
