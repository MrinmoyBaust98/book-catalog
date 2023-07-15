import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/v1" }),
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
  }),
});

export const {
  useGetLandingPageBooksQuery,
  useGetAllBooksQuery,
  useGetsingleBooksQuery,
} = api;
