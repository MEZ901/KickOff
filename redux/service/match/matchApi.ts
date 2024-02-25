import { apiSlice } from "../../api/apiSlice";

export const matchApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    fixtures: builder.query({
      query: () => ({
        url: `fixtures?include=participants;venue`,
        method: "GET",
      }),
    }),
  }),
});

export const { useFixturesQuery } = matchApi;
