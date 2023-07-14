import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/v1" }),
  endpoints: (builder) => ({
    getLandingPageBooks: builder.query({
      query: () => "/landing-page",
    }),
    getAllBooks: builder.query({
      query: () => "/books",
    }),
  }),
});

export const { useGetLandingPageBooksQuery, useGetAllBooksQuery } = api;
