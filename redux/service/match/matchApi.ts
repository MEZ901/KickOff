import { apiSlice } from "../../api/apiSlice";

export const matchApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    fixtures: builder.query({
      query: () => ({
        url: `fixtures?include=league;participants;venue`,
        method: "GET",
      }),
    }),
    getFixture: builder.query({
      query: (id: string) => `fixtures/${id}?include=league;participants;venue`,
    }),
  }),
});

export const { useFixturesQuery, useGetFixtureQuery } = matchApi;
