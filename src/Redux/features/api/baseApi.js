import {
  createApi,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => "/posts",
    }),
    getUsers: builder.query({
      query: () => "/users",
    }),
    getASingleUserById: builder.query({
      query: (id) => `/users/${id}`,
    }),
  }),
});

export const {
  useGetPostsQuery,
  useGetUsersQuery,
  useGetASingleUserByIdQuery,
} = baseApi;
