import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
  endpoints: (builder) => ({
    getTodos: builder.query({
      query: () => "/api/v1/todos",
    }),
    getTodo: builder.query({
      query: (id) => `/api/v1/todos/${id}`,
    }),
    createTodo: builder.mutation({
      query: (data) => ({
        url: "/api/v1/todos",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Todos"],
    }),
    updateTodo: builder.mutation({
      query: ({ id, data }) => ({
        url: `/api/v1/todos/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Todos"],
    }),
  }),
});

export const { useGetTodosQuery, useGetTodoQuery, useCreateTodoMutation, useUpdateTodoMutation } = apiSlice;

export default apiSlice;
