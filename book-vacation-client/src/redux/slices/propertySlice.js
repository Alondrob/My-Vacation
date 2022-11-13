import { createSlice } from "@reduxjs/toolkit";
import {
  getAllProperties,
  createNewProperty,
  getPropertyById,
} from "../api-requests/propertyRequests";


const initialState = {
  loading: false,
  properties: [],
  property: null,
  createdProperty: {},
  booked: [],
  error: null,
};

const propertySlice = createSlice({
  name: "property",
  initialState,
  reducers: {},
  extraReducers: {
    [getAllProperties.pending]: (state) => {
      state.loading = true;
    },
    [getAllProperties.fulfilled]: (state, action) => {
      state.loading = false;
      state.properties = action.payload.properties;
    },
    [getAllProperties.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },
    [getPropertyById.pending]: (state) => {
      state.loading = true;
    },
    [getPropertyById.fulfilled]: (state, action) => {
      state.loading = false;
      state.property = action.payload.property;
    },
    [getPropertyById.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },
    [createNewProperty.pending]: (state) => {
      state.loading = true;
    },
    [createNewProperty.fulfilled]: (state, action) => {
      state.loading = false;
      state.createdProperty = action.payload.property;
    },
    [createNewProperty.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },
  },
});

export const selectProperties = (state) => {
  // console.log("state", state);
  return {
    ...state.property,
  };
};
export default propertySlice.reducer;
