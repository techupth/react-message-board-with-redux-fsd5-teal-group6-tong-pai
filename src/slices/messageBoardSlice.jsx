// TODO: Start Create Slice Here
// โค้ดนี้อยู่ในไฟล์ slices/counterSlice.js

import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const messageBoardSlice = createSlice({
  name: "messageList",
  initialState: initialState,
  reducers: {
    addText: (state, action) => {
      state.push(action.payload);
      return state;
    },

    deleteText: (state,action) =>{

      state.splice(action.payload,1);


    }

  },
});

export const { addText, deleteText } = messageBoardSlice.actions;

export default messageBoardSlice.reducer;
