// TODO: Start Create Store Here !
import { configureStore } from "@reduxjs/toolkit";
import messageBoardSlice from "../slices/messageBoardSlice";
import textChangeSlice from "../slices/textChangeSlice";

export const store = configureStore({
  reducer: {
    messageList: messageBoardSlice,
    inputText: textChangeSlice,
  },
});
