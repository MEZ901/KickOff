import { configureStore } from "@reduxjs/toolkit";
import { matchApi } from "./service/match/matchApi";
import playerSlice from "./features/player/playerSlice";
import favoriteSlice from "./features/favorite/favoriteSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      [matchApi.reducerPath]: matchApi.reducer,
      players: playerSlice,
      favorites: favoriteSlice,
    },

    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat([matchApi.middleware]),
  });
};

export const store = makeStore();

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
