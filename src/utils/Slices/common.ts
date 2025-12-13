import { createSlice, } from '@reduxjs/toolkit';

const initialState = {
    message: {
        isOpen: false,
        message: '',
        type: '',
    }
};


export const common = createSlice({
    name: 'common',
    initialState,
    reducers: {
        setMessageContent: (state, action) => {
            state.message = action.payload;
        },
    },
});

export const { setMessageContent } =
    common.actions;
export default common.reducer;