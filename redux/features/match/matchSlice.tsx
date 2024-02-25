"use client";
import { createSlice } from "@reduxjs/toolkit";

const matchSlice = createSlice({
  name: "match",
  initialState: {
    matches: [],
  },
  reducers: {
    Statematch: (state, action) => {
      state.matches = [];
      state.matches = action.payload;
    },
  },
});

export const { Statematch } = matchSlice.actions;

export default matchSlice.reducer;
