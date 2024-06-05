import { createApi } from "@reduxjs/toolkit/query/react";
import axiosBaseQuery from "../axios/axiosBaseQuery";

export const apiSlice = createApi({
  reducerPath: "flightApi",
  baseQuery: axiosBaseQuery(),
  endpoints: (builder) => ({
    getAirlines: builder.query({
      query: () => ({
        url: "/tools/airlines-data",
        method: "get",
      }),
    }),
  }),
});

export const { useGetAirlinesQuery } = apiSlice;
