import { apiSlice } from "../../api/apiSlice";

export const playerApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    Players: builder.query({
      query: () => ({
        url: `players?include=nationality;position`,
        method: "GET",
      }),
    }),
    getPlayersById: builder.query({
      query: (id) => ({
        url: `players/${id}?include=nationality;position`,
      }),
    }),
    search: builder.query({
      query: (query) => ({
        url: `players/search/${query}?include=nationality;position`,
        method: "GET",
      }),
    }),
  }),
});

export const { usePlayersQuery, useSearchQuery, useGetPlayersByIdQuery } =
  playerApi;
