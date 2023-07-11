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
      likeCount: 5,
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
    createdAt: "2023-03-12T10:38:12+01:30",
    updatedAt: "2023-03-12T10:38:12+01:30",
    userId: "2",
  },
  {
    _id: "2",
    content: "It's nice weather outside...",
    postMedia: swastikPosts[1],
    likes: {
      likeCount: 9,
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
    createdAt: "2023-01-01T10:38:12+12:01",
    updatedAt: "2023-01-01T10:38:12+12:01",
    userId: "3",
  },
  {
    _id: "3",
    content: "Heavy leg workout today at gym 💪",
    postMedia: swastikPosts[1],
    likes: {
      likeCount: 13,
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
    createdAt: "2023-07-04T10:38:12+03:30",
    updatedAt: "2023-07-04T10:38:12+03:30",
    userId: "4",
  },
  {
    _id: "4",
    content:
      "Starting corporate life from today. Excited, nervous and everything in between 🤞",
    postMedia: swastikPosts[1],
    likes: {
      likeCount: 10,
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
    username: "matheus123",
    firstName: "Matheus",
    lastName: "Ferraro",
    createdAt: "2022-12-08T10:38:12+02:30",
    updatedAt: "2022-12-08T10:38:12+02:30",
    userId: "10",
  },
  {
    _id: "5",
    content:
      "Sitting at the airport on the way home, I'm reflecting on what an incredible week it's been",
    postMedia: swastikPosts[1],
    likes: {
      likeCount: 6,
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
        username: "matheus123",
        createdAt: formatDate(),
        firstName: "Matheus",
        lastName: "Ferraro",
        profile: devangProfile,
      },
    ],
    username: "slav123",
    firstName: "Slav",
    lastName: "Romanav",
    createdAt: "2023-05-24T10:38:12+12:30",
    updatedAt: "2023-05-24T10:38:12+12:30",
    userId: "9",
  },
  {
    _id: "6",
    content:
      "active learning & productive failure >>>>>>> copying things from the internet",
    postMedia: swastikPosts[1],
    likes: {
      likeCount: 15,
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
        username: "matheus123",
        createdAt: formatDate(),
        firstName: "Matheus",
        lastName: "Ferraro",
        profile: devangProfile,
      },
    ],
    username: "albert123",
    firstName: "Albert",
    lastName: "Dera",
    createdAt: "2023-02-11T10:38:12+06:27",
    updatedAt: "2023-02-11T10:38:12+06:27",
    userId: "8",
  },
  {
    _id: "7",
    content:
      "I just realized some of my biggest childhood inspirations have followed me here ✨ Don't even know how to react, this feels surreal. Just want to say thank you and I will not disappoint, new side projects coming soon :)",
    postMedia: swastikPosts[1],
    likes: {
      likeCount: 25,
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
        username: "matheus123",
        createdAt: formatDate(),
        firstName: "Matheus",
        lastName: "Ferraro",
        profile: devangProfile,
      },
    ],
    username: "joseph123",
    firstName: "Joseph",
    lastName: "Gonzalez",
    createdAt: "2023-07-10T10:38:12+11:05",
    updatedAt: "2023-07-10T10:38:12+11:05",
    userId: "7",
  },
  {
    _id: "8",
    content:
      "There are 4 people in my neighborhood that drive Lambos. Every single one of them is a PHP developer.",
    postMedia: swastikPosts[1],
    likes: {
      likeCount: 16,
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
        username: "matheus123",
        createdAt: formatDate(),
        firstName: "Matheus",
        lastName: "Ferraro",
        profile: devangProfile,
      },
    ],
    username: "jurica123",
    firstName: "Jurica",
    lastName: "Koletic",
    createdAt: "2023-07-05T10:38:12+04:25",
    updatedAt: "2023-07-05T10:38:12+05:25",
    userId: "6",
  },
  {
    _id: "9",
    content:
      "There are 4 people in my neighborhood that drive Lambos. Every single one of them is a PHP developer.",
    postMedia: swastikPosts[1],
    likes: {
      likeCount: 16,
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
        username: "matheus123",
        createdAt: formatDate(),
        firstName: "Matheus",
        lastName: "Ferraro",
        profile: devangProfile,
      },
    ],
    username: "john123",
    firstName: "John",
    lastName: "Doe",
    createdAt: "2023-06-11T10:38:12+06:30",
    updatedAt: "2023-06-11T10:38:12+06:30",
    userId: "5",
  },
  {
    _id: "10",
    content:
      "Douro River, Portugal. Just look at those massive rocks that border the river. The valley is known for beautiful views, from rolling vineyards to scenic overlooks. It's also a renowned wine region and a UNESCO World Heritage Site. ~ #TravelTuesday",
    postMedia: swastikPosts[1],
    likes: {
      likeCount: 11,
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
        username: "matheus123",
        createdAt: formatDate(),
        firstName: "Matheus",
        lastName: "Ferraro",
        profile: devangProfile,
      },
    ],
    username: "jatinsingh08",
    firstName: "Jatin",
    lastName: "Singh",
    createdAt: "2023-07-10T10:38:12+09:14",
    updatedAt: "2023-07-10T10:38:12+09:14",
    userId: "1",
  },
];
