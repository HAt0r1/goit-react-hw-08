import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = "";
};

export const signUser = createAsyncThunk(
  "auth/signup",
  async (newUser, thunkAPI) => {
    try {
      const responce = await axios.post("/users/signup", newUser);
      setAuthHeader(responce.data.token);
      return responce.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const loginUser = createAsyncThunk(
  "auth/login",
  async (user, thunkAPI) => {
    try {
      const responce = await axios.post("/users/login", user);
      setAuthHeader(responce.data.token);
      return responce.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOutUser = createAsyncThunk(
  "auth/logout",
  async (_, thunkAPI) => {
    try {
      const responce = await axios.post("/users/logout");
      clearAuthHeader();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const savedToken = state.auth.token;
    console.log(savedToken);
    setAuthHeader(savedToken);
    const response = await axios.get("users/current");
    return response.data;
  },
  {
    condition(_, thunkAPI) {
      const state = thunkAPI.getState();
      return state.auth.token !== null;
    },
  }
);
