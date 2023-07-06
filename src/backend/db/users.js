// import { v4 as uuid } from "uuid";
// import { formatDate } from "../utils/authUtils";
import { formatDate } from "../utils/authUtils";
import {
  devangProfile,
  jatinProfile,
  swastikProfile,
  yashProfile,
} from "./assets";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: 1,
    firstName: "Jatin",
    lastName: "Singh",
    username: "jatinsingh08",
    password: "12345678",
    createdAt: "2023-04-10T10:38:12+05:30",
    updatedAt: "2023-06-17T10:33:36+05:30",
    email: "singhjatin0812@gmail.com",
    profile: jatinProfile,
    portfolio: "https://sandhya-dev-7.netlify.app/",
    bio: "Don't Worry, I'm The Strongest",
    followers: [
      {
        _id: "2",
        firstName: "Swastik",
        lastName: "Patro",
        username: "swastik123",
        profile: swastikProfile,
      },
    ],
    following: [
      {
        _id: "2",
        firstName: "Swastik",
        lastName: "Patro",
        username: "not_just_sukunas_vessel",
        profile: swastikProfile,
      },
    ],
    bookmarks: [],
  },
  {
    _id: "2",
    firstName: "Swastik",
    lastName: "Patro",
    username: "swastik123",
    password: "swastik123",
    createdAt: "2023-04-10T10:38:12+05:30",
    updatedAt: "2023-06-17T10:33:36+05:30",
    email: "swastik123@gmail.com",
    profile: swastikProfile,
    portfolio: "https://sandhya-dev-7.netlify.app/",
    bio: "Don't Worry, I'm The Strongest",
    followers: [
      {
        _id: "3",
        firstName: "Devang",
        lastName: "Mehra",
        username: "devang123",
        profile: devangProfile,
      },
    ],
    following: [
      {
        _id: "1",
        firstName: "Jatin",
        lastName: "Singh",
        username: "jatinsingh08",
        profile: jatinProfile,
      },
    ],
    bookmarks: [],
  },
  {
    _id: "3",
    firstName: "Devang",
    lastName: "Mehra",
    username: "devang123",
    password: "devang123",
    createdAt: "2023-04-10T10:38:12+05:30",
    updatedAt: "2023-06-17T10:33:36+05:30",
    email: "devang123@gmail.com",
    profile: devangProfile,
    portfolio: "https://sandhya-dev-7.netlify.app/",
    bio: "Don't Worry, I'm The Strongest",
    followers: [
      {
        _id: "4",
        firstName: "Yash",
        lastName: "Rawat",
        username: "yash123",
        profile: yashProfile,
      },
    ],
    following: [
      {
        _id: "2",
        firstName: "Swastik",
        lastName: "Patro",
        username: "swastik123",
        profile: swastikProfile,
      },
    ],
    bookmarks: [],
  },
  {
    _id: "4",
    firstName: "Yash",
    lastName: "Rawat",
    username: "yash123",
    password: "yash123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    email: "yash123@gmail.com",
    profile: yashProfile,
    portfolio: "https://sandhya-dev-7.netlify.app/",
    bio: "Don't Worry, I'm The Strongest",
    followers: [
      {
        _id: "1",
        firstName: "Jatin",
        lastName: "Singh",
        username: "jatinsingh08",
        profile: jatinProfile,
      },
    ],
    following: [
      {
        _id: "3",
        firstName: "Devang",
        lastName: "Mehra",
        username: "devang123",
        profile: devangProfile,
      },
    ],
    bookmarks: [],
  },

  {
    _id: "5",
    firstName: "Yash",
    lastName: "Rawat",
    username: "yash123",
    password: "yash123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    email: "yash123@gmail.com",
    profile: yashProfile,
    portfolio: "https://sandhya-dev-7.netlify.app/",
    bio: "Don't Worry, I'm The Strongest",
    followers: [
      {
        _id: "1",
        firstName: "Jatin",
        lastName: "Singh",
        username: "jatinsingh08",
        profile: jatinProfile,
      },
    ],
    following: [
      {
        _id: "3",
        firstName: "Devang",
        lastName: "Mehra",
        username: "devang123",
        profile: devangProfile,
      },
    ],
    bookmarks: [],
  },
  // {
  //   _id: "4",
  //   firstName: "Yash",
  //   lastName: "Rawat",
  //   username: "yash123",
  //   password: "yash123",
  //   createdAt: formatDate(),
  //   updatedAt: formatDate(),
  //   email: "yash123@gmail.com",
  //   profile: yashProfile,
  //   portfolio: "https://sandhya-dev-7.netlify.app/",
  //   bio: "Don't Worry, I'm The Strongest",
  //   followers: [
  //     {
  //       _id: "1",
  //       firstName: "Jatin",
  //       lastName: "Singh",
  //       username: "jatinsingh08",
  //       profile: jatinProfile,
  //     },
  //   ],
  //   following: [
  //     {
  //       _id: "3",
  //       firstName: "Devang",
  //       lastName: "Mehra",
  //       username: "devang123",
  //       profile: devangProfile
  //     },
  //   ],
  //   bookmarks: [],
  // },
  // {
  //   _id: "4",
  //   firstName: "Yash",
  //   lastName: "Rawat",
  //   username: "yash123",
  //   password: "yash123",
  //   createdAt: formatDate(),
  //   updatedAt: formatDate(),
  //   email: "yash123@gmail.com",
  //   profile: yashProfile,
  //   portfolio: "https://sandhya-dev-7.netlify.app/",
  //   bio: "Don't Worry, I'm The Strongest",
  //   followers: [
  //     {
  //       _id: "1",
  //       firstName: "Jatin",
  //       lastName: "Singh",
  //       username: "jatinsingh08",
  //       profile: jatinProfile,
  //     },
  //   ],
  //   following: [
  //     {
  //       _id: "3",
  //       firstName: "Devang",
  //       lastName: "Mehra",
  //       username: "devang123",
  //       profile: devangProfile
  //     },
  //   ],
  //   bookmarks: [],
  // },
  // {
  //   _id: "4",
  //   firstName: "Yash",
  //   lastName: "Rawat",
  //   username: "yash123",
  //   password: "yash123",
  //   createdAt: formatDate(),
  //   updatedAt: formatDate(),
  //   email: "yash123@gmail.com",
  //   profile: yashProfile,
  //   portfolio: "https://sandhya-dev-7.netlify.app/",
  //   bio: "Don't Worry, I'm The Strongest",
  //   followers: [
  //     {
  //       _id: "1",
  //       firstName: "Jatin",
  //       lastName: "Singh",
  //       username: "jatinsingh08",
  //       profile: jatinProfile,
  //     },
  //   ],
  //   following: [
  //     {
  //       _id: "3",
  //       firstName: "Devang",
  //       lastName: "Mehra",
  //       username: "devang123",
  //       profile: devangProfile
  //     },
  //   ],
  //   bookmarks: [],
  // },
  {
    _id: "6",
    firstName: "John",
    lastName: "Doe",
    username: "john123",
    password: "john123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    email: "john123@gmail.com",
    profile: jatinProfile,
    portfolio: "https://sandhya-dev-7.netlify.app/",
    bio: "Don't Worry, I'm The Strongest",
    followers: [
      {
        _id: "1",
        firstName: "Jatin",
        lastName: "Singh",
        username: "jatinsingh08",
        profile: jatinProfile,
      },
    ],
    following: [
      {
        _id: "3",
        firstName: "Devang",
        lastName: "Mehra",
        username: "devang123",
        profile: devangProfile,
      },
    ],
    bookmarks: [],
  },
];
