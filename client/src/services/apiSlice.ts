import { createApi } from '@reduxjs/toolkit/query/react'
import { baseQueryWithErrorHandling } from './baseQueryWithErrorHandling'

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: baseQueryWithErrorHandling,
    tagTypes:['Category'],
    endpoints: () => ({}),
});
