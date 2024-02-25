"use client";
import { createSlice } from "@reduxjs/toolkit";

const favoriteSlice = createSlice({
  name: "favorite",
  initialState: {
    favorites: [
      {
        id: 0,
        starting_at: "",
        participants: [],
        result_info: "",
      },
    ],
  },
  reducers: {
    stateFavorites: (state, action) => {
      state.favorites.push({
        id: action.payload?.id,
        starting_at: action.payload.starting_at,
        participants: action.payload?.participants,
        result_info: action.payload?.result_info,
      });
    },
    stateDeleteFavorite: (state, action) => {
      let index = state.favorites.findIndex(
        (item) => item.id === action.payload
      );
      state.favorites.splice(index, 1);
    },
  },
});

export const { stateFavorites, stateDeleteFavorite } = favoriteSlice.actions;

export default favoriteSlice.reducer;
