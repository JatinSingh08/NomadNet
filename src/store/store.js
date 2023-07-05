import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/authSlice';
import usersReducer from '../features/usersSlice';
import postsReducer from '../features/postsSlice';
const store = configureStore({
  reducer: {
    auth: authReducer,
    users: usersReducer,
    posts: postsReducer
  }
})

export { store };