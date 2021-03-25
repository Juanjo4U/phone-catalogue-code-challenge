import logger from 'redux-logger';
import createSagaMiddleware from "redux-saga";
import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './states';
import { onAppRuns } from './onAppRuns';
import { rootSaga } from './sagas';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => [...getDefaultMiddleware(), sagaMiddleware, logger]
})

sagaMiddleware.run(rootSaga);

if (store.dispatch) onAppRuns(store.dispatch);