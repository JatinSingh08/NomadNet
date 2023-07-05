import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllUsersService } from "../services/apiServices";

const initialState = {
  usersData: [],
  disabled: {
    bookmarkDisabled: false,
    followDisabled: false,
    editDisabled: false,
  },
};

export const fetchUsers = createAsyncThunk(
  "users/fetchUsers",
  async (_, { rejectWithValue }) => {
    try {
      const response = await getAllUsersService();
      let usersList = [];

      if (response.status === 200 || response.status === 201) {
        usersList = response.data.users;
      }
      return usersList;
    } catch (error) {
      console.log({ error });
      return rejectWithValue(error?.message);
    }
  }
);

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.usersData = action.payload;
    });
  },
});

export const userSelector = (state) => state.users;
export default usersSlice.reducer;
