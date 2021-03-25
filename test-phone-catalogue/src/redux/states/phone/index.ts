import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const phoneSlice = createSlice({
    name: 'phone',
    initialState: {
        phoneList: [],
        isRequestingList: false,
        errorRequestingList: undefined
    },
    reducers: {
        setAllPhoneList: (state, { payload }: PayloadAction<any>) => {
            state.phoneList = payload;
            state.errorRequestingList = undefined;
        },
        setPhoneListLoader: (state, { payload }: PayloadAction<boolean>) => {
            state.isRequestingList = payload
        },
        setRequestPhoneListError: (state, { payload }: PayloadAction<any>) => {
            state.errorRequestingList = payload
        }
    }
})

export const { setAllPhoneList, setPhoneListLoader, setRequestPhoneListError } = phoneSlice.actions;
export default phoneSlice.reducer;