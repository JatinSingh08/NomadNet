import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
import { devangProfile, swastikPosts, yashProfile } from "./assets";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: "1",
    content: "Hey, What's up. New to SocialSphere...",
    postMedia: swastikPosts[1],
    likes: {
      likeCount: 2,
      likedBy: [
        {
          _id: "3",
          firstName: "Devang",
          lastName: "Mehra",
          username: "devang123",
          profile: devangProfile,
        },
        {
          _id: "4",
          firstName: "Yash",
          lastName: "Rawat",
          username: "yash123",
          profile: yashProfile,
        },
      ],
      dislikedBy: [],
    },
    comments: [
      {
        _id: "1",
        comment: "Don't I look good",
        username: "devang123",
        createdAt: formatDate(),
        firstName: "Devang",
        lastName: "Mehra",
        profile: devangProfile,
      },
    ],
    username: "swastik123",
    firstName: "Swastik",
    lastName: "Patro",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    userId: "2",
  },
  {
    _id: "2",
    content: "It's nice weather outside...",
    postMedia: swastikPosts[1],
    likes: {
      likeCount: 2,
      likedBy: [
        {
          _id: "3",
          firstName: "Devang",
          lastName: "Mehra",
          username: "devang123",
          profile: devangProfile,
        },
        {
          _id: "4",
          firstName: "Yash",
          lastName: "Rawat",
          username: "yash123",
          profile: yashProfile,
        },
      ],
      dislikedBy: [],
    },
    comments: [
      {
        _id: "1",
        comment: "Don't I look good",
        username: "devang123",
        createdAt: formatDate(),
        firstName: "Devang",
        lastName: "Mehra",
        profile: devangProfile,
      },
    ],
    username: "devang123",
    firstName: "Devang",
    lastName: "Mehra",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    userId: "3",
  },
  {
    _id: "3",
    content: "Heavy leg workout today at gym 💪",
    postMedia: swastikPosts[1],
    likes: {
      likeCount: 2,
      likedBy: [
        {
          _id: "3",
          firstName: "Devang",
          lastName: "Mehra",
          username: "devang123",
          profile: devangProfile,
        },
        {
          _id: "4",
          firstName: "Yash",
          lastName: "Rawat",
          username: "yash123",
          profile: yashProfile,
        },
      ],
      dislikedBy: [],
    },
    comments: [
      {
        _id: "1",
        comment: "Don't I look good",
        username: "devang123",
        createdAt: formatDate(),
        firstName: "Devang",
        lastName: "Mehra",
        profile: devangProfile,
      },
    ],
    username: "yash123",
    firstName: "Yash",
    lastName: "Rawat",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    userId: "4",
  },
];
