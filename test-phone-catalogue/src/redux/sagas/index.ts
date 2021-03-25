import { all } from "redux-saga/effects";
import { phoneSagas } from "./phone";
export function* rootSaga() {
    yield all([...phoneSagas]);
}