import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createPostService, getAllPostService } from "../services/apiServices";

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
  })
)

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.postsData = action.payload;
      console.log("action", action.payload);
    })
  }
})

export const postsSelector = (state) => state.posts;
export default postsSlice.reducer;