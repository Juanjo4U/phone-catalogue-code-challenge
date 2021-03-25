import { call, put, fork, takeLatest, StrictEffect } from "redux-saga/effects";
import { constants } from "../../../utils/constants";
import { fetchGet } from "../../../utils/fetchs";
import { setAllPhoneList, setPhoneListLoader, setRequestPhoneListError } from "../../states/phone";
import { REQUEST_ALL_PHONE_LIST } from "./watchedActions/types";

export function* requestAllPhones(): Generator<StrictEffect> {
    yield put(setPhoneListLoader(true));
    try {
        const phones = yield call(() => fetchGet({ url: constants.API.phones }));
        yield put(setAllPhoneList(phones));
    } catch (err) {
        yield put(setRequestPhoneListError(err));
    } finally {
        yield put(setPhoneListLoader(false));
    }
}

function* watchPhoneListRequest() {
    yield takeLatest(REQUEST_ALL_PHONE_LIST, requestAllPhones)
}

export const phoneSagas = [fork(watchPhoneListRequest)];