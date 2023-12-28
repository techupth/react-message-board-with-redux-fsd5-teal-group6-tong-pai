import { configureStore } from "@reduxjs/toolkit";
import  textSlice  from "../slices/messageBoardSlice";
export const store = configureStore({
  reducer: {
    textSlice: textSlice,
  },
});
