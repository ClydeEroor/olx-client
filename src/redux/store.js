import { configureStore } from '@reduxjs/toolkit'
import authSlice from "./features/auth/authSlice";
import PostSlice from "./features/post/postSlice";

export const store = configureStore({
    reducer: {
        auth: authSlice,
        post: PostSlice,
    },
})