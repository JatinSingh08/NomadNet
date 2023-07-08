import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice";
import postsReducer from "../features/postsSlice";
import usersReducer from "../features/usersSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    users: usersReducer,
    posts: postsReducer,
  },
});

export { store };
