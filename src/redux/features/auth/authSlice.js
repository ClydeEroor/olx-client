import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from "../../../utils/axios";

const initialState = {
    user: null,
    token: null,
    isLoading: false,
    status: null,
}

let errorcode = null

export const registerUser = createAsyncThunk('auth/registerUser', async ({username, password}) => {
    try {
        const {data} = await axios.post('/auth/register', {
            username,
            password,
        })

        if (data.token) {
            window.localStorage.setItem('token', data.token)
        }
        return data

    } catch (error) {
        console.log(error)
        errorcode = error.response.data
        console.log(errorcode.message)

    }
})



export const authSlice = createSlice({
    name: 'auth',
    initialState, //Todo удалить {}
    reducers: {},
    extraReducers: {
        [registerUser.pending]: (state) => {
            state.isLoading = true
            state.status = null
        },
        [registerUser.fulfilled]: (state, action) => {
            state.isLoading = false
            state.status = action?.payload?.message ?? errorcode?.message
            state.use = action?.payload?.user
            state.token = action?.payload?.token
        },
        [registerUser.rejected]: (state, action) => {
            state.status = action.payload.message ?? errorcode?.message
            state.isLoading = false
        },
    }
})

export default authSlice.reducer