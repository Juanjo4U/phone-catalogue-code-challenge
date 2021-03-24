import { createSlice } from '@reduxjs/toolkit';

export const phoneSlice = createSlice({
    name: 'phone',
    initialState: {
        phoneList: [],
        isRequestingList: false,
        errorRequestingList: undefined
    },
    reducers: {
        setAllPhoneList: (state, { payload }) => {
            state.phoneList = payload;
            state.errorRequestingList = undefined;
        },
        setPhoneListLoader: (state, { payload }) => {
            state.isRequestingList = payload
        },
        setRequestPhoneListError: (state, { payload }) => {
            state.errorRequestingList = payload
        }
    }
})

export const { setAllPhoneList, setPhoneListLoader, setRequestPhoneListError } = phoneSlice.actions;
export default phoneSlice.reducer;