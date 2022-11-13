import { createSlice } from "@reduxjs/toolkit";
import {
  createNewUser,
  loginUser,
  editUser,
  deleteUser,
  getUserProperties,
  bookProperty,
  getUserBookings,
} from "../api-requests/userRequests";

const initialState = {
  user: {},
  token: null,
  loading: false,
  error: null,
  loggedIn: false,
  userName: "",
  userProperties: [],
  userBookings: []
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    auth: (state, action) => {
      state.loggedIn = true;
      state.user = action.payload.user;
      state.token = action.payload.token;
    }
  },
  extraReducers: {
    [createNewUser.pending]: (state) => {
      state.loading = true;
    },
    [createNewUser.fulfilled]: (state, action) => {
      state.loading = false;
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    [createNewUser.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },
    [loginUser.pending]: (state) => {
      state.loading = true;
    },
    [loginUser.fulfilled]: (state, action) => {
      state.loading = false;
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    [loginUser.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },
    [editUser.pending]: (state) => {
      state.loading = true;
    },
    [editUser.fulfilled]: (state, action) => {
      state.loading = false;
      state.user = action.payload.user;
    },
    [deleteUser.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },
    [deleteUser.pending]: (state) => {
      state.loading = true;
    },
    [deleteUser.fulfilled]: (state, action) => {
      state.loading = false;
      state.user = action.payload.user;
    },
    [deleteUser.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },
    [getUserProperties.pending]: (state) => {
      state.loading = true;
    },
    [getUserProperties.fulfilled]: (state, action) => {
      state.loading = false;
      state.userProperties =  action.payload;
    },
    [getUserProperties.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },
     [getUserBookings.pending]: (state) => {
      state.loading = true;
    },
    [getUserBookings.fulfilled]: (state, action) => {
      state.loading = false;
      state.userBookings = action.payload;
    },
    [getUserBookings.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },
  },
});

export const slectUser = (state) => {
  return { ...state.user };
};

export const { auth } = userSlice.actions;
export default userSlice.reducer;
