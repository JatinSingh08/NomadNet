import { Bookmarks, Explore, Home, Login, PostDetails, Profile, Signup } from "../page";

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
    path: '/profile/:user',
    element: <Profile />
  },
  {
    pah: '/post/:postId',
    element: <PostDetails />
  }
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