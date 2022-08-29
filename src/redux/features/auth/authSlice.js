import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from "../../../utils/axios";

const initialState = {
    user: null,
    token: null,
    isLoading: false,
    status: null,
}

//Register USer

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

        throw error.response.data
    }
})

//Login User

export const loginUser = createAsyncThunk(
    'auth/loginUser',
    async ({username, password}) => {
        try {
            const {data} = await axios.post('/auth/login', {
                username,
                password,
            })
            if (data.token) {
                window.localStorage.setItem('token', data.token)
            }
            return data

        } catch (error) {

            console.log(error)

            throw error.response.data
        }
    })



// Check Auth

export const getMe = createAsyncThunk(
    'auth/loginUser',
    async () => {
        try {
            const {data} = await axios.get('/auth/me')
            return data

        } catch (error) {

            console.log(error)

            throw error.response.data
        }
    })




export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logOut: (state) => {
            state.user = null
            state.token = null
            state.isLoading = null
            state.status = null
        }
    },
    extraReducers: {

        // Register User
        [registerUser.pending]: (state) => {
            state.isLoading = true
            state.status = null
        },
        [registerUser.fulfilled]: (state, action) => {
            state.isLoading = false
            state.status = action?.payload?.message
            state.user = action?.payload?.user
            state.token = action?.payload?.token
        },
        [registerUser.rejected]: (state, action) => {
            console.log(action)
            state.status = action.error.message
            state.isLoading = false
        },

        // Login User

        [loginUser.pending]: (state) => {
            state.isLoading = true
            state.status = null
        },
        [loginUser.fulfilled]: (state, action) => {
            console.log(action)
            state.isLoading = false
            state.status = action?.payload?.message
            state.user = action?.payload?.user
            state.token = action?.payload?.token
          
        },
        },
    
        [loginUser.rejected]: (state, action) => {
            console.log(action)
            state.status = action.error.message
            state.isLoading = false
          
        },

        // Check Auth

        [getMe.pending]: (state) => {
            state.isLoading = true
            state.status = null
        },
        [getMe.fulfilled]: (state, action) => {
            state.isLoading = false
            state.status = null
            state.user = action?.payload?.user
            state.token = action?.payload?.token
        },
        [getMe.rejected]: (state, action) => {
            console.log(state.status)
            state.status = action.error.message
            state.isLoading = false
        },


    }
)

console.log(authSlice)


export const checkIsAuth = state => Boolean(state.auth.token)

export default authSlice.reducer
export const { logOut } = authSlice.actions

