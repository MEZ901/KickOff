"use client";
import { createSlice } from "@reduxjs/toolkit";

const playerSlice = createSlice({
  name: "player",
  initialState: {
    players: [],
  },
  reducers: {
    StatePlayer: (state, action) => {
      state.players = [];
      state.players = action.payload;
    },
  },
});

export const { StatePlayer } = playerSlice.actions;

export default playerSlice.reducer;
