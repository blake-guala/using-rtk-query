import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:7000' }),
    endpoints: (builder) => ({
        getTodos: builder.query({
            query: () => '/todos'
        })
    })
})

export const { useGetTodoQuery } = apiSlice