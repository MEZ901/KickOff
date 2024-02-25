import { apiSlice } from "../../api/apiSlice";

export const leagueApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    leagues: builder.query({
      query: () => ({
        url: `leagues`,
        method: "GET",
      }),
    }),
  }),
});

export const { useLeaguesQuery } = leagueApi;
