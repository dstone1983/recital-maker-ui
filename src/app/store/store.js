import { asyncReducer } from './asyncReducer'
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { authReducer } from './authReducer'
import { templatesReducer } from './templatesReducer'
import { templateReducer } from './templateReducer'
import { musicanReducer } from './musiciansReducer'

const middleware = [
    ...getDefaultMiddleware({
        serializableCheck: false,
    }),
]

export const ReduxStore = configureStore({
    reducer: {
        async: asyncReducer,
        auth: authReducer,
        currentTemplate: templateReducer,
        templates: templatesReducer,
        musicians: musicanReducer,
    },
    middleware,
})
