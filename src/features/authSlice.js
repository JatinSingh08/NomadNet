import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loginService, signupService } from "../services/apiServices";

const initialState = {
  encodedToken:
    localStorage.getItem("encodedToken") &&
    localStorage.getItem("encodedToken") !== "undefined"
      ? localStorage.getItem("encodedToken")
      : null,
  foundUser:
    !localStorage.getItem("foundUser") ||
    localStorage.getItem("foundUser") === "undefined"
      ? null
      : JSON.parse(localStorage.getItem("foundUser")),
  loggingIn: false,
  loginError: null,
  signingUp: false,
  signingError: null,
};

export const userLogin = createAsyncThunk(
  "auth/userLogin",
  async ({ username, password }, { rejectWithValue }) => {
    try {
      const response = await loginService(username, password);
      console.log('userLogin', response);
      if (response.status === 200 || response.status === 201) {
        return {
          encodedToken: response.data.encodedToken,
          foundUser: response.data.foundUser,
        };
      }

      return {};
    } catch (error) {
      return rejectWithValue(error?.response?.data?.errors[0] ?? error.message);
    }
  }
);

export const userSignup = createAsyncThunk(
  "auth/userSignup",
  async (userInfo, { rejectWithValue }) => {
    try {
      const response = await signupService(userInfo);
      console.log("signupres", response);
      if (response.status === 200 || response.status === 201) {
        return {
          encodedToken: response?.data?.encodedToken,
          foundUser: response?.data?.createdUser,
        };
      }
      return {};
    } catch (error) {
      console.log("error occured in signup");
      return rejectWithValue(error?.response?.errors[0] ?? error.message);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logoutUser: (state) => {
      localStorage.removeItem("encodedToken");
      localStorage.removeItem("foundUser");
      state.encodedToken = null;
      state.foundUser = null;
      console.log("user logged out");
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(userLogin.pending, (state) => {
        state.loggingIn = true;
      })
      .addCase(userLogin.fulfilled, (state, action) => {
        state.loggingIn = false;
        state.encodedToken = action.payload.foundUser;
        localStorage.setItem("encodedToken", action.payload.encodedToken);
        state.foundUser = action.payload.foundUser;
        localStorage.setItem(
          "foundUser",
          JSON.stringify(action.payload.foundUser)
        );
      })
      .addCase(userLogin.rejected, (state, action) => {
        state.loggingIn = false;
        state.loginError = action.payload;
      })
      .addCase(userSignup.pending, (state) => {
        state.signingUp = true;
      })
      .addCase(userSignup.fulfilled, (state, action) => {
        state.signingUp = false;
        state.encodedToken = action.payload.encodedToken;
        localStorage.setItem("encodedToken", action.payload.encodedToken);
        console.log("actionToken", action.payload.encodedToken);
        state.foundUser = action.payload.foundUser;
        localStorage.setItem(
          "foundUser",
          JSON.stringify(action.payload.foundUser)
        );
      })
      .addCase(userSignup.rejected, (state, action) => {
        state.signingUp = false;
        state.signingError = action.payload;
      });
  },
});

export const authSelector = (state) => state.auth;

export const { logoutUser } = authSlice.actions;
export default authSlice.reducer;
