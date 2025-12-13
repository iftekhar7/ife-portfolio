import { configureStore } from '@reduxjs/toolkit'; 
import profileReducer from "./Slices/userProfile&Token";
import commonReducer from "./Slices/common"
import { api } from './api';


export const store = configureStore({
    reducer: {
        [api.reducerPath]: api.reducer,
        profile: profileReducer,
        common: commonReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware),
});

