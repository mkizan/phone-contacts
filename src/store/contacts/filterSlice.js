import { createSlice } from "@reduxjs/toolkit";
import { contactsInitialState } from "./initialState";

export const filterSlice = createSlice({
  name: "filters",
  initialState: contactsInitialState,
  reducers: {
    setFilter(state, { payload }) {
      state.filter = payload;
    },
  },
});

export const { setFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
