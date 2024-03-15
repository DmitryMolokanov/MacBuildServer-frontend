import { createSlice } from "@reduxjs/toolkit";

interface initialStateTypes {
  token: string;
}

export const initialState: initialStateTypes[] = [];

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    addToken: (state, action) => {
      return [...state, action.payload];
    },
    cleanState: (state) => {
      state.splice(0, state.length);
    },
  },
});

export const { addToken, cleanState } = authSlice.actions;
export default authSlice.reducer;
