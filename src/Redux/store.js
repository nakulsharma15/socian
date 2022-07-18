import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './slices/authSlice';
import { postReducer } from "./slices/postSlice";
import { userReducer } from './slices/userSlice';
import { modalReducer } from "./slices/modalSlice";

export const store = configureStore({

    reducer: {
        auth: authReducer,
        posts: postReducer,
        users: userReducer,
        modal: modalReducer
    }
});