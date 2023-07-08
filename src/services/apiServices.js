import axios from "axios";
import {
  BOOKMARK_A_POST,
  DISLIKE_A_POST,
  EDIT_POST,
  EDIT_PROFILE,
  FOLLOW_A_USER,
  GET_ALL_USERS,
  GET_POSTS_BY_USERNAME,
  LIKE_A_POST,
  LOGIN,
  POSTS,
  REMOVE_BOOKMARKED_POST,
  SIGNUP,
  UNFOLLOW_A_USER,
} from "./apiUrls";

export const loginService = (username, password) =>
  axios.post(LOGIN, {
    username,
    password,
  });

export const signupService = (userInfo) =>
  axios.post(SIGNUP, {
    ...userInfo,
  });

export const getAllPostService = () => axios.get(POSTS);
export const getPostByIdService = (postId) => axios.get(`${POSTS}${postId}`);

export const createPostService = (encodedToken, postData) =>
  axios.post(
    POSTS,
    { postData },
    {
      headers: {
        authorization: encodedToken,
      },
    }
  );

export const likePostService = (encodedToken, postId) =>
  axios.post(
    `${LIKE_A_POST}${postId}`,
    {},
    {
      headers: {
        authorization: encodedToken,
      },
    }
  );

export const dislikePostService = (encodedToken, postId) =>
  axios.post(
    `${DISLIKE_A_POST}${postId}`,
    {},
    {
      headers: {
        authorization: encodedToken,
      },
    }
  );

export const editPostService = (encodedToken, postData) =>
  axios.post(
    `${EDIT_POST}${postData._id}`,
    {
      postData,
    },
    {
      headers: {
        authorization: encodedToken,
      },
    }
  );

export const deletePostService = (encodedToken, postId) =>
  axios.delete(`${POSTS}${postId}`, {
    headers: {
      authorization: encodedToken,
    },
  });

export const getAllUsersService = () => axios.get(GET_ALL_USERS);
export const bookmarksPostService = (encodedToken, postId) =>
  axios.post(
    `${BOOKMARK_A_POST}${postId}`,
    {},
    {
      headers: {
        authorization: encodedToken,
      },
    }
  );

export const removeBookmarkedPostService = (encodedToken, postId) =>
  axios.post(
    `${REMOVE_BOOKMARKED_POST}${postId}`,
    {},
    {
      headers: {
        authorization: encodedToken,
      },
    }
  );

export const getPostsByUsernameService = (username) =>
  axios.get(`${GET_POSTS_BY_USERNAME}${username}`);

export const followUserService = (encodedToken, followUserId) =>
  axios.post(
    `${FOLLOW_A_USER}${followUserId}`,
    {},
    {
      headers: {
        authorization: encodedToken,
      },
    }
  );

export const unfollowUserService = (encodedToken, unfollowUserId) =>
  axios.post(
    `${UNFOLLOW_A_USER}${unfollowUserId}`,
    {},
    {
      headers: {
        authorization: encodedToken,
      },
    }
  );

export const editProfileService = (encodedToken, userData) =>
  axios.post(
    `${EDIT_PROFILE}`,
    { userData },
    {
      headers: {
        authorization: encodedToken,
      },
    }
  );
