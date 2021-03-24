import '@testing-library/jest-dom';
import { cleanup } from "@testing-library/react";
import { getIsRequestingList, getPhoneList } from "../selecters";
import { initialState } from "../reducer";
import phones from "../../../../utils/phones.json";

afterEach(cleanup);

it('selecter get correctly loader true', () => {
    const expectedNextState = JSON.parse(JSON.stringify(initialState));
    expectedNextState.isRequestingList = true;
    expect(getIsRequestingList({ phone: expectedNextState })).toEqual(true);
});

it('selecter get correctly phoneList', () => {
    const expectedNextState = JSON.parse(JSON.stringify(initialState));
    expectedNextState.phoneList = phones;
    expect(getPhoneList({ phone: expectedNextState })).toEqual(phones);
});