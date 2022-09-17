import { configureStore } from '@reduxjs/toolkit'
import authSlice from "./features/auth/authSlice";
import PostSlice from "./features/post/postSlice";
import {commentSlice} from "./features/comment/commentSlice";

export const store = configureStore({
    reducer: {
        auth: authSlice,
        post: PostSlice,
        comment: commentSlice,
    },
})