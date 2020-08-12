import { createSlice } from '@reduxjs/toolkit'
import { addMusician } from './helpers/musicians'

const initialState = {
    musician_list: [],
}

export const musiciansSlice = createSlice({
    name: 'musicians',
    initialState,
    reducers: {
        add_musician: (state, { payload }) => {
            console.log('test')
            state.musician_list = addMusician(state.musician_list, payload)
        },
        remove_musician: (state, { payload }) => {
            state.musician_list = [...state.musicians].filter(
                musician => musician.musician_id !== payload
            )
        },
    },
})

export const musicanReducer = musiciansSlice.reducer
export const { add_musician, remove_musician } = musiciansSlice.actions
