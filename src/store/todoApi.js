import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const todoApi = createApi({
    reducerPath: 'todoApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:7000/' }),
    endpoints: (builder) => ({
        todos: builder.query({
            query: () => '/todos'
        }),
        todo: builder.query({
            query: (id) => `/todos/${id}`
        })
    })
})

export const { useTodosQuery, useTodoQuery } =  todoApi