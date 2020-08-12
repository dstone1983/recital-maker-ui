import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    loading: false,
    error: null,
    initialized: false,
}

export const asyncSlice = createSlice({
    name: 'asyncReducer',
    initialState,
    reducers: {
        async_start: state => {
            state.loading = true
            state.error = null
        },
        async_finish: state => (state.loading = false),
        async_error: (state, payload) => {
            state.loading = false
            state.error = payload
        },
        async_loaded: state => (state.initialized = true),
    },
})

export const asyncReducer = asyncSlice.reducer
export const {
    async_error,
    async_finish,
    async_loaded,
    async_start,
} = asyncSlice.actions
