import '@testing-library/jest-dom';
import { cleanup } from "@testing-library/react";
import { setPhoneListLoader, setAllPhoneList } from "../actionsUpdate";
import reducer, { initialState } from "../reducer";
import phones from "../../../../utils/phones.json";

afterEach(cleanup);

it('modify store correctly loader true', () => {
    const expectedNextState = JSON.parse(JSON.stringify(initialState));
    expectedNextState.isRequestingList = true;
    expect(reducer(initialState, setPhoneListLoader(true))).toEqual(expectedNextState);
});

it('modify store correctly with phones', () => {
    const expectedNextState = JSON.parse(JSON.stringify(initialState));
    expectedNextState.phoneList = phones;
    expect(reducer(initialState, setAllPhoneList(phones))).toEqual(expectedNextState);
});