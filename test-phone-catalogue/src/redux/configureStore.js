import logger from 'redux-logger';
import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './toolkitStates';
import { onAppRuns } from './onAppRuns';

export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger)
})

if (store.dispatch) onAppRuns(store.dispatch);