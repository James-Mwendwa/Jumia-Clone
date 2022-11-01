import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userId: null,
  userName: null,
};

export const appSlice = createSlice({
  name: "app",
  initialState,

  reducers: {
    setUserId: (state, action) => {
      state.app += action.payload;
    },
  },
});

export const { setUserId } = appSlice.actions;
export const selectUserId = (state) => state.app.userId;
export const selectUserName = (state) => state.app.userName;

export default appSlice.reducer;
