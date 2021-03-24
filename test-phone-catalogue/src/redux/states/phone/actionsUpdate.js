import {
    SET_PHONE_LIST, SET_IS_REQUESTING_PHONE_LIST, SET_REQUEST_PHONE_LIST_ERROR
} from "./types";

export const setAllPhoneList = (phones = []) => (
    {
        type: SET_PHONE_LIST,
        payload: phones
    }
)

export const setPhoneListLoader = (isLoading) => (
    {
        type: SET_IS_REQUESTING_PHONE_LIST,
        payload: isLoading
    }
);

export const setRequestPhoneListError = (error) => (
    {
        type: SET_REQUEST_PHONE_LIST_ERROR,
        payload: error
    }
);