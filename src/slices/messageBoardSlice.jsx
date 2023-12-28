import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const textSlice = createSlice({
  name: "textSlice",
  initialState: initialState,
  reducers: {
    addText: (state, action) => {
      state = [...state, action.payload];
      return state;
    },
    deleteText: (state, action) => {
      state.splice(action.payload, 1);
    },
  },
});

export const { addText, deleteText } = textSlice.actions;

export default textSlice.reducer;
