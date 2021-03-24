import { createStore, applyMiddleware } from "redux";
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { onAppRuns } from "./onAppRuns";
import { rootReducer } from "./states";

export const store = createStore(rootReducer, applyMiddleware(thunk, logger));

if (store.dispatch) onAppRuns(store.dispatch);