import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loginStatus: false,
  uid: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.loginStatus = true;
      state.uid = action.payload;
    },
    logout: (state) => {
      state.loginStatus = false;
      state.uid = null;
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
