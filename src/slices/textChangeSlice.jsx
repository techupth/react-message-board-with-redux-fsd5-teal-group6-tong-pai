import { createSlice } from "@reduxjs/toolkit";

const initialState = " ";

export const textChangeSlice = createSlice({
  name: "messageList",
  initialState: initialState,
  reducers: {
    textChange: (state, action) => {
      state = action.payload;
      console.log(state);
      return state;
    },
  },
});

export const { textChange } = textChangeSlice.actions;

export default textChangeSlice.reducer;
