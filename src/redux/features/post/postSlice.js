import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "../../../utils/axios";

const initialState = {
    post: [],
    popularPosts: [],
    loading: false,
}


export const createPost = createAsyncThunk(
    'post/createPost',
    async(params) => {
    try {
        const { data } = await axios.post('/posts', params)

        return data

    } catch (error) {
        console.log(error)
    }
})


export const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {},
    extraReducers: {},
})

export default postSlice.reducer