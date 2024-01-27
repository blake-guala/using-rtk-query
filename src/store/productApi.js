import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const productApi = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:7000' }),
    endpoints: (builder) => ({
        todos: builder.query({
            query: () => '/todos'
        })
    })
})

export const { useTodosQuery } = productApi