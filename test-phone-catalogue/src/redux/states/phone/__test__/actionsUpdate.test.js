import '@testing-library/jest-dom';
import { cleanup } from "@testing-library/react";
import { SET_IS_REQUESTING_PHONE_LIST, SET_PHONE_LIST } from "../types";
import { setAllPhoneList, setPhoneListLoader } from "../actionsUpdate";
import phones from "../../../../utils/phones.json";

afterEach(cleanup);

it('action update returns correctly the object to update isRequestingList to true', () => {
    const expectedReturn = {
        type: SET_IS_REQUESTING_PHONE_LIST,
        payload: true
    }
    expect(setPhoneListLoader(true)).toEqual(expectedReturn);
});

it('action update returns correctly the object to update phoneList equal to phoneLists', () => {
    const expectedReturn = {
        type: SET_PHONE_LIST,
        payload: phones
    }
    expect(setAllPhoneList(phones)).toEqual(expectedReturn);
});