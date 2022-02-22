import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const contentApi = createApi({
  reducerPath: "contentApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://test.daground.io",
    prepareHeaders: (headers) => {
      headers.set("TEST-AUTH", "wantedpreonboarding");
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getContents: builder.query({ query: () => "/info/contents" }),
  }),
});

export const { useGetContentsQuery } = contentApi;
