const base_url = '/api';

const LOGIN =  `${base_url}/auth/login/`;
const SIGNUP = `${base_url}/auth/signup/`;

// Posts APIs
const POSTS = `${base_url}/posts/`;
const EDIT_POST =  `{base_url}/posts/edit/`
const LIKE_A_POST  = `{base_url}/posts/like/`
const DISLIKE_A_POST = `{base_url}/posts/dislike/`
const BOOKMARK_A_POST = `{base_url}/users/bookmark/`
const REMOVE_BOOKMARKED_POST = `{base_url}/users/remove-bookmark/`
const COMMENT_ON_POST = `{base_url}/`

// users
const GET_ALL_USERS = `{base_url}/users/`

const GET_POSTS_BY_USERNAME = `{base_url}/posts/user/`

const FOLLOW_A_USER = `{base_url}/users/follow/`
const UNFOLLOW_A_USER = `{base_url}/users/unfollow/`

const EDIT_PROFILE = `{base_url}/users/edit/`


export {
  LOGIN,
  SIGNUP,
  POSTS,
  EDIT_POST,
  LIKE_A_POST,
  DISLIKE_A_POST,
  BOOKMARK_A_POST,
  REMOVE_BOOKMARKED_POST,
  COMMENT_ON_POST,
  GET_ALL_USERS,
  GET_POSTS_BY_USERNAME,
  FOLLOW_A_USER,
  UNFOLLOW_A_USER,
  EDIT_PROFILE
}