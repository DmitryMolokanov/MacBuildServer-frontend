import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/authReducer";

export const store = configureStore({
  reducer: {
    token: authReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
