import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiRoutes } from "../routes/routes";
import axios from "axios";

export const getAllProperties = createAsyncThunk(
  "property/getAllProperties",
  async () => {
    const response = await axios.get(apiRoutes.property.getAllProperties());
    return response.data;
  }
);
export const getPropertyById = createAsyncThunk(
  "property/getPropertyById",
  async (id) => {
    // console.log("request-id", id);
    const response = await axios.get(apiRoutes.property.getPropertyById(id));
    //  console.log(response.data);
    return response.data;
  }
);

export const createNewProperty = createAsyncThunk(
  "property/createNewProperty",
  async (propertyData) => {
    const user = JSON.parse(localStorage.getItem("user"));
    console.log("token", user.token);
    const response = await axios.post(
      apiRoutes.property.createPropertyRoute(),
      propertyData,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
      }
    );
    console.log("create-property-request", response.data);
    return response.data;
  }
);

export const editProperty = createAsyncThunk(
  "property/edit-property",
  async (propertyData) => {
    const user = JSON.parse(localStorage.getItem("user"));
    const response = await axios.put(
      apiRoutes.property.editPropertyRoute(),
      propertyData,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
      }
    );
    return response.data;
  }
);
export const deleteProperty = createAsyncThunk(
  "property/delete-property",
  async (id) => {
    console.log("delete", id);
    const user = JSON.parse(localStorage.getItem("user"));
    console.log(user.token);
    const response = await axios.delete(
      apiRoutes.property.deletePropertyRoute(id),
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
      }
    );
    console.log("delete response", response.data);
    return response.data;
  }
);

export const uploadImage = async (formData) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const response = await axios.post(
    apiRoutes.property.uploadImagesRoute(),
     formData,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
    }
  );
  return console.log(response.data);
};
