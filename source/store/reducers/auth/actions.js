// Types
import { types } from './types';

// Async
export const signInAsync = (data) => ({
    type:    types.SIGN_IN_ASYNC,
    payload: data
});

// Sync
export const authenticate = () => ({
    type: types.AUTHENTICATE
});

export const logout = () => ({
    type: types.LOGOUT
});
