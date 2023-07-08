import { BookmarkIcon } from "@heroicons/react/24/outline";
import React from "react";
import { AiOutlineShareAlt } from "react-icons/ai";
import { IoEllipsisHorizontal } from "react-icons/io5";
import { FaRegCommentDots } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { authSelector } from "../../features/authSlice";
import { dislikePost, likePost } from "../../features/postsSlice";
import {
  bookmarkPost,
  removeBookmarkPost,
  userSelector,
} from "../../features/usersSlice";
import {
  getIsBookmarkedByUser,
  getIsLikedByUser,
} from "../../utils/postsHelper";

const Post = ({ postData, showComments }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { encodedToken, foundUser } = useSelector(authSelector);
  const { usersData } = useSelector(userSelector);
  const likedByUser = getIsLikedByUser(postData, foundUser?.username);
  const bookmarkedByUser = getIsBookmarkedByUser(
    usersData,
    postData?._id,
    foundUser?.username
  );
  const userDetails = usersData?.find((user) => postData?.userId === user._id);

  return (
    <div className=" card p-5 rounded-xl">
      <div className="flex justify-between">
        <div className="flex items-start justify-center gap-3">
          <img
            src={userDetails?.profile}
            alt=""
            className="w-12 h-12 rounded-full object-contain"
          />
          <div className="flex-col gap-2 text-start">
            <p>{postData?.firstName + " " + postData?.lastName}</p>
            <p>{postData?.createdAt}</p>
          </div>
        </div>
        <IoEllipsisHorizontal className="font-bold hover:cursor-pointer" />
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

            <span
              className="flex items-center justify-center gap-1 icon-theme"
              onClick={() => navigate(`/post/${postData?._id}`)}
            >
              <FaRegCommentDots className="cursor-pointer" />
              <p className="text-sm">{postData?.comments?.length}</p>
            </span>
            <AiOutlineShareAlt className="cursor-pointer icon-theme" />
          </div>
          <div
            onClick={() => {
              let username = foundUser?.username;
              if (bookmarkedByUser) {
                console.log("removing from bookmark");
                dispatch(
                  removeBookmarkPost({
                    encodedToken,
                    postId: postData?._id,
                    username,
                  })
                );
              } else {
                console.log("added to bookmark");
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
          </div>
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
              // onChange={(e) => setPostData(val => ({...val, content: e.target.value}))}
            ></textarea>
            <button className="button-theme rounded-2xl h-8">Reply</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Post;
