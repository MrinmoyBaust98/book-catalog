import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/v1" }),
  tagTypes: ["comments"],
  endpoints: (builder) => ({
    //landing page books
    getLandingPageBooks: builder.query({
      query: () => "/landing-page",
    }),
    // all book page books
    getAllBooks: builder.query({
      query: () => "/books",
    }),
    //  get single Books
    getsingleBooks: builder.query({
      query: (id) => `/books/${id}`,
    }),
    //posr comment
    postComment: builder.mutation({
      query: ({ id, data }) => ({
        url: `/books/comment/${id}`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["comments"],
    }),
    // get comments
    getComment: builder.query({
      query: (id) => `/books/comment/${id}`,
      providesTags: ["comments"],
    }),
  }),
});

export const {
  useGetLandingPageBooksQuery,
  useGetAllBooksQuery,
  useGetsingleBooksQuery,
  usePostCommentMutation,
  useGetCommentQuery,
} = api;
