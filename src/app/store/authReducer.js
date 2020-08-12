import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isLoggedIn: false,
    error: null,
    user: null,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        auth_success: (state, { payload }) => {
            state.error = null
            state.isLoggedIn = true
            state.user = payload
        },
        auth_error: (state, { payload }) => {
            state.isLoggedIn = false
            state.user = null
            state.error = payload
        },
        logout_success: () => initialState,
    },
})

export const authReducer = authSlice.reducer
export const { auth_error, auth_success, logout_success } = authSlice.actions
