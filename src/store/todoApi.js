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
        }),

        addTodos: builder.mutation({
            query: todo => ({
                url: '/todos',
                method: 'POST',
                body: todo
            })
        }),
        updateTodos: builder.mutation({
            query: ({ id, todo }) => ({
                url: `/todos/${id}`,
                method: 'PUT',
                body: todo
            })
        }),
        deleteTodo: builder.mutation({
            query: (id) => ({
                url: `/todos/${id}`,
                method: 'DELETE'
            })
        })
    })
})

export const { 
    useTodosQuery,
    useTodoQuery, 
    useAddTodosMutation, 
    useUpdateTodosMutation, 
    useDeleteTodoMutation } =  todoApi