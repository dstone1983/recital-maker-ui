import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    template_list: [],
}

export const templateSlice = createSlice({
    name: 'templates',
    initialState,
    reducers: {
        add_template: (state, { payload }) =>
            (state.templates = [...state.templates, payload]),
        remove_templates: (state, { payload }) => {
            state.templates = [...state.templates].filter(
                template => template.id !== payload
            )
        },
    },
})

export const templatesReducer = templateSlice.reducer
export const { add_template, remove_templates } = templateSlice.actions
