import { BookmarkIcon } from "@heroicons/react/24/outline";
import { Dropdown } from "antd";
import React, { useState } from "react";
import { AiOutlineShareAlt } from "react-icons/ai";
import { FaRegCommentDots } from "react-icons/fa";
import { IoEllipsisHorizontal } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";
import { avatar1 } from "../../backend/db/assets";
import { authSelector } from "../../features/authSlice";
import {
  commentOnPost,
  deletePost,
  dislikePost,
  likePost,
  postsSelector,
} from "../../features/postsSlice";
import {
  bookmarkPost,
  removeBookmarkPost,
  userSelector,
} from "../../features/usersSlice";
import {
  getIsBookmarkedByUser,
  getIsLikedByUser,
} from "../../utils/postsHelper";
import EditModal from "./EditModal";

const Post = ({ postData, showComments, postId }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { encodedToken, foundUser } = useSelector(authSelector);
  const { usersData } = useSelector(userSelector);
  const { postsData } = useSelector(postsSelector);
  const [comment, setComment] = useState({
    _id: uuid(),
    comment: "",
    createdAt: new Date(),
    firstName: foundUser?.firstName,
    lastName: foundUser?.lastName,
    profile: foundUser?.profile,
  });
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const likedByUser = getIsLikedByUser(postData, foundUser?.username);
  const bookmarkedByUser = getIsBookmarkedByUser(
    usersData,
    postData?._id,
    foundUser?.username
  );
  const userDetails = usersData?.find((user) => postData?.userId === user?._id);

  const commentHandler = () => {
    const posts = postsData?.map((post) =>
      post._id === postId
        ? { ...post, comments: [...post.comments, comment] }
        : { ...post }
    );
    const postData = posts?.find((post) => post._id === postId);
    console.log("commented posts", posts);
    dispatch(commentOnPost({ encodedToken, postData }));
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const currentDate = new Date();

    const diffInSeconds = Math.floor((currentDate - date) / 1000);

    if (diffInSeconds < 60) {
      return `${diffInSeconds} seconds ago`;
    } else {
      const diffInMinutes = Math.floor(diffInSeconds / 60);

      if (diffInMinutes < 60) {
        return `${diffInMinutes} minutes ago`;
      } else {
        const options = {
          day: "numeric",
          month: "long",
          year: "numeric",
          hour: "numeric",
          minute: "numeric",
        };
        const formattedDateTime = date.toLocaleDateString(undefined, options);
        return formattedDateTime;
      }
    }
  };

  console.log({userDetails})
  const dropdownItems = [
    {
      label: (
        <button onClick={() => setIsEditModalOpen((val) => !val)}>Edit</button>
      ),
      key: "0",
    },
    {
      label: (
        <button
          onClick={() =>
            dispatch(deletePost({ encodedToken, postId: postData?._id }))
          }
        >
          Delete
        </button>
      ),
      key: "1",
    },
  ];

  
  return (
    <div className=" card p-5 rounded-xl">
      <div className="flex justify-between">
        <div className="flex items-start justify-center gap-3">
          <img
            src={userDetails?.profile || avatar1}
            onClick={() => navigate(`/profile/${userDetails?.username}`)}
            alt="avatar"
            className="w-12 h-12 rounded-full object-contain cursor-pointer"
          />
          <div className="flex-col text-start">
            <p
              onClick={() => navigate(`/profile/${userDetails?.username}`)}
              className="cursor-pointer"
            >
              {postData?.firstName + " " + postData?.lastName}
            </p>
            {/* <p>{postData?.createdAt}</p> */}
            <p className="text-[13px] text-[#928da5]">
              {formatDate(postData?.createdAt)}
            </p>
          </div>
        </div>
        {userDetails?._id === foundUser?._id && (
          <div>
            <Dropdown
              trigger="click"
              menu={{ items: dropdownItems }}
              placement="bottomLeft"
            >
              <IoEllipsisHorizontal className="font-bold hover:cursor-pointer" />
            </Dropdown>
          </div>
        )}
      </div>
      <div className="text-start px-8">
        <div className="mt-6">{postData?.content}</div>
        <div className="flex justify-between items-center mt-6">
          <div className="flex items-start  justify-start gap-6 text-2xl ">
            <button
              className={`flex items-center justify-center gap-1 icon-theme`}
              // disabled={disabled.likeDisabled}
              onClick={() => {
                if (likedByUser) {
                  dispatch(
                    dislikePost({ encodedToken, postId: postData?._id })
                  );
                } else {
                  dispatch(likePost({ encodedToken, postId: postData?._id }));
                }
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill={likedByUser ? "red" : "transparent"}
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke={likedByUser ? "red" : "currentColor"}
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                />
              </svg>

              <p className="text-sm">{postData?.likes?.likeCount}</p>
            </button>

            <button
              className="flex items-center justify-center gap-1 icon-theme"
              onClick={() => navigate(`/post/${postData?._id}`)}
            >
              <FaRegCommentDots className="cursor-pointer" />
              <p className="text-sm">{postData?.comments?.length}</p>
            </button>
            <button>
              <AiOutlineShareAlt className="cursor-pointer icon-theme" />
            </button>
          </div>
          <button
            onClick={() => {
              let username = foundUser?.username;
              if (bookmarkedByUser) {
                dispatch(
                  removeBookmarkPost({
                    encodedToken,
                    postId: postData?._id,
                    username,
                  })
                );
              } else {
                dispatch(
                  bookmarkPost({
                    encodedToken,
                    postId: postData?._id,
                    username,
                  })
                );
              }
            }}
          >
            <BookmarkIcon
              className="w-6 h-6 cursor-pointer icon-theme"
              fill={`${bookmarkedByUser ? "black" : "transparent"}`}
            />
          </button>
        </div>
      </div>
      {showComments && (
        <div className="mt-6 flex flex-col gap-4">
          <div className="flex gap-1">
            <img
              src={foundUser?.profile}
              alt="avatar"
              className="w-12 h-12 rounded-full object-contain"
            />
            <div className="flex flex-col text-start justify-end">
              <h1 className="font-semibold text-[16px]">
                {foundUser?.firstName + " " + foundUser?.lastName}
              </h1>
              <p className="text-[12px] text-[#A6A0B9] -mt-1.5">
                @{foundUser?.username}
              </p>
            </div>
          </div>
          <div className="flex gap-4 items-center justify-center">
            <textarea
              placeholder="comment here"
              className="w-full px-4 bg-rose-50 rounded-lg outline-none pt-2 resize-none outline-violet-200"
              onChange={(e) =>
                setComment((val) => ({ ...val, comment: e.target.value }))
              }
              // onChange={(e) => setPostData(val => ({...val, content: e.target.value}))}
            ></textarea>
            <button
              className="button-theme rounded-2xl h-8"
              onClick={commentHandler}
            >
              Post
            </button>
          </div>
        </div>
      )}

      {isEditModalOpen && (
        <EditModal
          isEditModalOpen={isEditModalOpen}
          setIsEditModalOpen={setIsEditModalOpen}
          userDetails={userDetails}
          postData={postData}
        />
      )}
    </div>
  );
};

export default Post;
