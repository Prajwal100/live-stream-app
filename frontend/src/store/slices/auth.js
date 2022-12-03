import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../services/api";
import authService from "../services/auth.service";

// Get user from localStorage;
const user = JSON.parse(localStorage.getItem("user"));

const initialState = {
  user: user ? user : null,
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: "",
};

// Register user;
export const register1 = createAsyncThunk(
  "auth/register",
  async (userData, thunkAPI) => {
    try {
      let res = await api.post("/api/v1/auth/register", userData);
      if (res.ok) {
        localStorage.setItem("access_token", res.accessToken);
        localStorage.setItem("user", JSON.stringify(res.data));
        return res;
      } else {
        return thunkAPI.rejectWithValue(res);
      }
    } catch (e) {
      const message =
        (e.response && e.response.data && e.response.data.message) ||
        e.message ||
        e.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);
// Login user;
export const login = createAsyncThunk(
  "auth/login",
  async (userData, thunkAPI) => {
    try {
      let res = await api.post("/api/v1/auth/login", userData);

      if (res.ok) {
        localStorage.setItem("access_token", res.accessToken);
        localStorage.setItem("user", JSON.stringify(res.data));
        return res;
      } else {
        return thunkAPI.rejectWithValue(res);
      }
    } catch (e) {
      const message =
        (e.response && e.response.data && e.response.data.message) ||
        e.message ||
        e.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder

      // register actions
      .addCase(register1.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(register1.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.user = payload.data;
        state.message = payload.message;
        state.isSuccess = true;
      })
      .addCase(register1.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.user = null;
        state.message = payload.message;
        state.isError = true;
      })

      // Login actions
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.message = payload.message;
        state.user = payload.data;
        state.isSuccess = true;
      })
      .addCase(login.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.user = null;
        state.isError = true;
        state.message = payload.message;
      });
  },
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;
