import { Bookmarks, Explore, Home, Login, PostDetails, Profile, Signup, UserProfile } from "../page";

const contentRoutes = [
  {
    path: '/',
    element: <Home />
  }, 
  {
    path: '/explore',
    element: <Explore />
  }, 
  {
    path: '/bookmarks',
    element: <Bookmarks />
  }, 
  {
    path: '/profile/:username',
    element: <UserProfile />
  },
  {
    pah: '/post/:postId',
    element: <PostDetails />
  }, 
  
]

const publicRoutes = [
  {
    path: '/login',
    element: <Login />
  }, 
  {
    path: '/signup',
    element: <Signup />
  }
]

const privateRoutes = [];
export {
  contentRoutes,
  publicRoutes,
  privateRoutes
}