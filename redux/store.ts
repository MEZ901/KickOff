import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./api/apiSlice";
import playerSlice from "./features/player/playerSlice";
import favoriteSlice from "./features/favorite/favoriteSlice";
import matchSlice from "./features/match/matchSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      [apiSlice.reducerPath]: apiSlice.reducer,
      match: matchSlice,
      players: playerSlice,
      favorites: favoriteSlice,
    },

    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat([apiSlice.middleware]),
  });
};

export const store = makeStore();

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
