import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userProfile: null,
    token: null
}


export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        setUserProfile: (state, action) => {
            state.userProfile = action.payload;
        },
        setUserProfileImage: (state, action) => {
            state.userProfileImage = action.payload;
        },
        clearUserProfile: (state) => {
            state.userProfile = null;
        },
        storeMsToken: (state, action) => {
            state.token = action.payload;
        }
    },
});

export const { setUserProfile, clearUserProfile, storeMsToken,setUserProfileImage } = profileSlice.actions;
export default profileSlice.reducer;