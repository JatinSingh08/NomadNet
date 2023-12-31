import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  bookmarksPostService,
  editProfileService,
  followUserService,
  getAllUsersService,
  removeBookmarkedPostService,
  unfollowUserService,
} from "../services/apiServices";

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
      console.log({
        error,
      });
      return rejectWithValue(error?.message);
    }
  }
);

export const followUser = createAsyncThunk(
  "users/followUser",
  async ({ encodedToken, followUserId }, { rejectWithValue }) => {
    try {
      const response = await followUserService(encodedToken, followUserId);
      if (response.status === 200 || response.status === 201) {
        return {
          followUser: response.data.followUser,
          user: response.data.user,
        };
      }
    } catch (error) {
      console.log(error?.message);
      return rejectWithValue(error?.message);
    }
  }
);

export const unfollowUser = createAsyncThunk(
  "users/unfollowUser",
  async ({ encodedToken, unfollowUserId }, { rejectWithValue }) => {
    try {
      const response = await unfollowUserService(encodedToken, unfollowUserId);
      if (response.status === 200 || response.status === 201) {
        return {
          followUser: response.data.followUser,
          user: response.data.user,
        };
      }
    } catch (error) {
      console.log(error?.message);
      return rejectWithValue(error?.message);
    }
  }
);

export const bookmarkPost = createAsyncThunk(
  "users/bookmarkPost",
  async ({ encodedToken, postId, username }, { rejectWithValue }) => {
    try {
      const response = await bookmarksPostService(encodedToken, postId);
      if (response.status === 200 || response.status === 201) {
        let foundUser = null;
        if (foundUser !== null && foundUser !== undefined) {
          foundUser = JSON.parse(localStorage.getItem("foundUser"));
          localStorage.setItem(
            "foundUser",
            JSON.stringify({
              ...foundUser,
              bookmarks: response.data.bookmarks,
            })
          );
        }
        return {
          bookmarks: response.data.bookmarks,
          username,
        };
      }
    } catch (error) {
      console.log(error?.message);
      return rejectWithValue(error?.message);
    }
  }
);

export const removeBookmarkPost = createAsyncThunk(
  "users/removeBookmarkPost",
  async ({ encodedToken, postId, username }, { rejectWithValue }) => {
    try {
      const response = await removeBookmarkedPostService(encodedToken, postId);
      if (response.status === 200 || response.status === 201) {
        let foundUser = null;
        if (foundUser !== null && foundUser !== undefined) {
          foundUser = JSON.parse(localStorage.getItem("foundUser"));
          localStorage.setItem(
            "foundUser",
            JSON.stringify({
              ...foundUser,
              bookmarks: response.data.bookmarks,
            })
          );
        }
        return {
          bookmarks: response.data.bookmarks,
          username,
        };
      }
    } catch (error) {
      console.log(error?.message);
      return rejectWithValue(error?.message);
    }
  }
);

export const editProfile = createAsyncThunk(
  "users/editProfile",
  async ({ encodedToken, userData }, { rejectWithValue }) => {
    try {
      const response = await editProfileService(encodedToken, userData);

      if (response.status === 201) {
        return response.data.user;
      }
    } catch (error) {
      console.log({
        error,
      });
      return rejectWithValue(error.message);
    }
  }
);

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.usersData = action.payload;
      })
      .addCase(bookmarkPost.pending, (state) => {
        state.disabled.bookmarkDisabled = true;
      })
      .addCase(bookmarkPost.fulfilled, (state, action) => {
        let userIndex = null;
        userIndex = state.usersData.findIndex(
          (data) => data?.username === action.payload.username
        );
        if (userIndex !== null || userIndex !== undefined) {
          state.usersData[userIndex].bookmarks = action.payload.bookmarks;
        }
        state.disabled.bookmarkDisabled = false;
      })
      .addCase(bookmarkPost.rejected, (state, action) => {
        state.disabled.bookmarkDisabled = false;
      })
      .addCase(removeBookmarkPost.pending, (state) => {
        state.disabled.bookmarkDisabled = true;
      })
      .addCase(removeBookmarkPost.fulfilled, (state, action) => {
        let userIndex = null;
        userIndex = state.usersData.findIndex(
          (data) => data.username === action.payload.username
        );
        if (userIndex !== null || userIndex !== undefined) {
          state.usersData[userIndex].bookmarks = action.payload.bookmarks;
        }
        state.disabled.bookmarkDisabled = false;
      })
      .addCase(removeBookmarkPost.rejected, (state) => {
        state.disabled.bookmarkDisabled = false;
      })
      .addCase(followUser.pending, (state) => {
        state.disabled.followDisabled = true;
      })
      .addCase(followUser.fulfilled, (state, action) => {
        const { followUser, user } = action.payload;
        const followUserIndex = state?.usersData?.findIndex(
          (user) => user._id === followUser._id
        );
        const userIndex = state?.usersData?.findIndex(
          (userObj) => userObj._id === user._id
        );

        if (followUserIndex !== undefined) {
          state.usersData[followUserIndex] = followUser;
        }
        if (userIndex !== undefined) {
          state.usersData[userIndex] = user;
          localStorage.setItem("foundUser", JSON.stringify(user));
        }
        state.disabled.followDisabled = false;
      })
      .addCase(followUser.rejected, (state) => {
        state.disabled.followDisabled = false;
      })
      .addCase(unfollowUser.pending, (state) => {
        state.disabled.followDisabled = true;
      })
      .addCase(unfollowUser.fulfilled, (state, action) => {
        const { followUser, user } = action.payload;
        const unfollowUserIndex = state?.usersData?.findIndex(
          (user) => user._id === followUser._id
        );
        const userIndex = state?.usersData?.findIndex(
          (userObj) => userObj._id === user._id
        );

        if (unfollowUserIndex !== undefined) {
          state.usersData[unfollowUserIndex] = followUser;
        }
        if (userIndex !== undefined) {
          state.usersData[userIndex] = user;
          localStorage.setItem("foundUser", JSON.stringify(user));
        }
        state.disabled.followDisabled = false;
      })
      .addCase(unfollowUser.rejected, (state) => {
        state.disabled.followDisabled = false;
      })
      .addCase(editProfile.pending, (state) => {
        state.disabled.editDisabled = true;
      })
      .addCase(editProfile.fulfilled, (state, action) => {
        const userIndex = state.usersData.findIndex(
          (data) => data._id === action.payload._id
        );

        if (userIndex !== undefined) {
          state.usersData[userIndex] = action.payload;
          localStorage.setItem("foundUser", JSON.stringify(action.payload));
        }
        state.disabled.editDisabled = false;
      })
      .addCase(editProfile.rejected, (state) => {
        state.disabled.editDisabled = false;
      });
  },
});

export const userSelector = (state) => state.users;
export default usersSlice.reducer;
