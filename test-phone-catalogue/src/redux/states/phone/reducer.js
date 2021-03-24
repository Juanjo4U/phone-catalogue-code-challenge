import {
    SET_PHONE_LIST, SET_IS_REQUESTING_PHONE_LIST, SET_REQUEST_PHONE_LIST_ERROR
} from "./types";

export const initialState = {
    phoneList: [],
    isRequestingList: false,
    errorRequestingList: undefined
};

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case SET_PHONE_LIST:
            return {
                ...state,
                phoneList: payload,
                errorRequestingList: undefined
            }

        case SET_IS_REQUESTING_PHONE_LIST:
            return {
                ...state,
                isRequestingList: payload
            }

        case SET_REQUEST_PHONE_LIST_ERROR:
            return {
                ...state,
                errorRequestingList: payload
            }

        default:
            return state
    }
}

export default reducer