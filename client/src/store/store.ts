import { configureStore } from '@reduxjs/toolkit'
import { apiSlice } from '@/services/apiSlice'
import { createListenerMiddleware } from '@reduxjs/toolkit'
const listenerMiddleware = createListenerMiddleware()
export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer

    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware()
            .prepend(listenerMiddleware.middleware)
            .concat(apiSlice.middleware)
})
