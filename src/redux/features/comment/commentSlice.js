import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "../../../utils/axios";


const initialState = {
    comments: [],
    loading: false,
}

export const createComment = createAsyncThunk('comment/createComment',
    async ({postId, comment}) => {


        try {
            const {data} = await axios.post(`/comments/${postId}`, {
                postId,
                comment,
            })
            console.log(data)
            return data

        } catch (error) {
            console.log(error)
        }


    },
)

export const getPostComments = createAsyncThunk('comment/getPostComments', async (postId) => {
    try {
        const {data} = await axios.get(`/posts/comments/${postId}`)
        console.log(data)
        return data

    } catch (error) {
        console.log(error)
    }
})







export const commentSlice = createSlice({
    name: 'comment',
    initialState,
    reducers: {},
    extraReducers: {

        //Create Post

        [createComment.pending]: (state) => {
            state.loading = true
        },
        [createComment.fulfilled]: (state, action) => {
            state.loading = false
            state.comments.push(action.payload)
        },
        [createComment.rejected]: (state) => {
            state.loading = false

        },


        //Get Comments

        [getPostComments.pending]: (state) => {
            state.loading = true
        },
        [getPostComments.fulfilled]: (state, action) => {
            state.loading = false
            state.comments = action.payload
            console.log(state.comments)
        },
        [getPostComments.rejected]: (state) => {
            state.loading = false
        },
    },
})

