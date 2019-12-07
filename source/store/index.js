// Core
import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import immutableTransform from 'redux-persist-transform-immutable';

// Reducer
import createRootReducer from './reducers';

// Saga
import { rootSaga } from './reducers';

// Middleware
import { enhancedStore, history, sagaMiddleware } from './middleware';

const persistConfig = {
    transforms: [ immutableTransform() ],
    key:        'root',
    storage,
};

const persistedReducer = persistReducer(
    persistConfig,
    createRootReducer(history)
);

export const store = createStore(persistedReducer, enhancedStore);

const persistor = persistStore(store);

export { history, persistor };

sagaMiddleware.run(rootSaga);
