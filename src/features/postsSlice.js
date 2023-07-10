import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { commentOnPostService, createPostService, dislikePostService, getAllPostService, likePostService } from "../services/apiServices";

const initialState = {
  postsData: [],
  error: null,
  loading: false,

  disabled: {
    likeDisabled: false,
    commentDisabled: false
  }
}

export const fetchPosts = createAsyncThunk(
  'posts/fetchPosts',
  async (_, { rejectWithValue}) => {
    try {
      const response = await getAllPostService();
      let postsList = [];
      if(response.status === 200 || response.status === 201) {
        postsList = response.data.posts;
      }
      return postsList;
    } catch (error) {
      console.log({error});
      return rejectWithValue(error?.message);
    }
  }
)

export const createNewPost = createAsyncThunk(
  'posts/createNewPost',
  async ({ encodedToken, postData}, { rejectWithValue }) => {
    try {
      const response = await createPostService(encodedToken, postData);
      if(response.status === 201) {
        return response.data.posts;
      }
    } catch (error) {
      console.log({error});
      return rejectWithValue(error?.message);
    }
  }
)

export const likePost = createAsyncThunk(
  'posts/likePost',
  async ({encodedToken, postId}, { rejectWithValue }) => {
    try {
      const response = await likePostService(encodedToken, postId);
      if(response.status === 200 || response.status === 201) {
        return response.data.posts;
      }
    } catch (error) {
      console.log(error.message);
      return rejectWithValue(error?.message);
    }
  }
)

export const dislikePost = createAsyncThunk(
  'posts/dislikePost',
  async ({ encodedToken, postId }, { rejectWithValue }) => {
    try {
      const response = await dislikePostService(encodedToken, postId);
      if(response.status === 200 || response.status === 201) {
        return response.data.posts;
      }
    } catch (error) {
      console.log(error?.message);
      return rejectWithValue(error?.message);
    }
  }
)

export const commentOnPost = createAsyncThunk(
  "users/commentPost",
  async ({encodedToken, postData}, {rejectWithValue}) => {
    try {
      const response = await commentOnPostService(encodedToken, postData);
      if(response.status === 200 || response.status === 201) {
        console.log('response', response.data.posts);
        return response.data.posts;

      }
    } catch (error) {
      console.log(error?.message);
      return rejectWithValue(error?.message);
    }
  }
)

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
      state.postsData = action.payload;
    })
    .addCase(fetchPosts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase(createNewPost.fulfilled, (state, action) => {
      if(action.payload) state.postsData = action.payload;
    })
    .addCase(likePost.pending, (state) => {
      state.disabled.likeDisabled = true;
    })
    .addCase(likePost.fulfilled, (state, action) => {
      state.disabled.likeDisabled = false;
      state.postsData = action.payload;
    })
    .addCase(likePost.rejected, (state, action) => {
      state.error = action.payload;
    })
    .addCase(dislikePost.pending, (state) => {
      state.disabled.likeDisabled = true;
    })
    .addCase(dislikePost.fulfilled, (state, action) => {
      state.disabled.likeDisabled = false;
      state.postsData = action.payload;
    })
    .addCase(dislikePost.rejected, (state, action) => {
      state.error = action.payload;
    })
    .addCase(commentOnPost.pending, (state) => {
      state.dislikePost.commentDisabled = true;
    })
    .addCase(commentOnPost.fulfilled, (state, action) => {
      if(action.payload) {
        state.postsData = action.payload;
      }
      console.log('action', action.payload);
      state.disabled.commentDisabled = false;
    })
    .addCase(commentOnPost.rejected, (state) => {
      state.disabled.commentDisabled = false;
    })
  }
})

export const postsSelector = (state) => state.posts;
export default postsSlice.reducer;