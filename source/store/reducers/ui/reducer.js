// Core
import { Map } from 'immutable';

// Types
import { types } from './types';

const initialState = Map({
    isFetching:    false,
    isOnline:      false,
    isInitialized: false,
    userLanguage:  'en',
    languages:     [ 'en', 'uk', 'ru' ],
    errorMessage:  '',
});

export const uiReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.START_FETCHING:
            return state.set('isFetching', true);
        case types.STOP_FETCHING:
            return state.set('isFetching', false);
        case types.SET_ONLINE_STATE:
            return state.set('isOnline', true);
        case types.SET_OFFLINE_STATE:
            return state.set('isOnline', false);
        case types.INITIALIZE:
            return state.set('isInitialized', true);
        case types.SET_ERROR_MESSAGE:
            return state.set('errorMessage', action.payload);
        case types.SET_USER_LANGUAGE:
            return state.set('userLanguage', action.payload);
        default:
            return state;
    }
};
