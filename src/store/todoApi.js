import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const todoApi = createApi({
    reducerPath: 'todoApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:7000/' }),
    tagTypes: ['Todo'],
    endpoints: (builder) => ({
        todos: builder.query({
            query: () => '/todos',
            providesTags: ['Todo']
        }),
        todo: builder.query({
            query: (id) => `/todos/${id}`,
            providesTags: ['Todo']
        }),

        addTodos: builder.mutation({
            query: (todo) => ({
                url: '/todos',
                method: 'POST',
                body: todo
            }),
            invalidatesTags: ['Todo']
        }),
        updateTodos: builder.mutation({
            query: ({ id, todo }) => ({
                url: `/todos/${id}`,
                method: 'PUT',
                body: todo
            }),
            invalidatesTags: ['Todo']
        }),
        deleteTodo: builder.mutation({
            query: (id) => ({
                url: `/todos/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['Todo']
        })
    })
})

export const { 
    useTodosQuery,
    useTodoQuery, 
    useAddTodosMutation, 
    useUpdateTodosMutation, 
    useDeleteTodoMutation } =  todoApi