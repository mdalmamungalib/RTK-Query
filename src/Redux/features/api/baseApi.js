import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Base API configuration
export const baseApi = createApi({
  reducerPath: "api", // Unique identifier for the API slice
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com", // Base URL for API calls
  }),
  endpoints: (builder) => ({
    // Fetch all posts
    getPosts: builder.query({
      query: () => "/posts",
    }),

    // Fetch all users
    getUsers: builder.query({
      query: () => "/users",
    }),

    // Fetch a single user by ID
    getASingleUserById: builder.query({
      query: (id) => `/users/${id}`,
      // Optional: Transform response to only return user data
      transformResponse: (response) => response,
    }),

    // Create a new post
    setPost: builder.mutation({
      query: (post) => ({
        url: "/posts",
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Explicit content type for clarity
        },
        body: post, // Post payload
      }),
    }),
  }),
});

// Export hooks for API methods
export const {
  useGetPostsQuery,
  useGetUsersQuery,
  useGetASingleUserByIdQuery,
  useSetPostMutation,
} = baseApi;
