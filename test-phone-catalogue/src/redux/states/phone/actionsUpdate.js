import { REQUEST_ALL_PHONE_LIST } from "../../sagas/phone/types";

export const requestPhoneList = () => (
    {
        type: REQUEST_ALL_PHONE_LIST,
    }
);