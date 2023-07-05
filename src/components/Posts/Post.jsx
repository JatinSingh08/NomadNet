import React from "react";
import { profileImage } from "../../assets";
import { IoEllipsisHorizontal } from "react-icons/io5";
import {
  AiOutlineLike,
  AiOutlineDislike,
  AiOutlineShareAlt,
} from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { useSelector } from "react-redux";
import { userSelector } from "../../features/usersSlice";

const Post = ({ postData }) => {
  const { usersData } = useSelector(userSelector);
  const {
    firstName,
    lastName,
    content,
    likes: { likeCount },
    comments,
    userId
  } = postData;
  const userDetails = usersData?.find((user) => userId === user._id);

  return (
    <div className="shadow card p-5 rounded-xl">
      <div className="flex justify-between">
        <div className="flex items-start justify-center gap-3">
          <img
            src={userDetails?.profile}
            alt=""
            className="w-16 h-16 rounded-full object-contain"
          />
          <div className="flex-col gap-2 text-start">
            <p>{firstName + " " + lastName}</p>
            <p>Thu June 29 2023</p>
          </div>
        </div>
        <IoEllipsisHorizontal className="font-bold hover:cursor-pointer" />
      </div>
      <div className="text-start px-8">
        <div className="mt-6">{content}</div>
        <div className="flex items-start text-[#64748B] justify-between text-2xl mt-6">
          <span className="flex items-center justify-center gap-1">
            <AiOutlineLike className="hover:cursor-pointer" />
            <p className="text-sm">{likeCount}</p>
          </span>
          <AiOutlineDislike className="hover:cursor-pointer" />
          <span className="flex items-center justify-center gap-1">
            <FaRegComment className="cursor-pointer" />
            <p className="text-sm">{comments?.length}</p>
          </span>
          <AiOutlineShareAlt className="cursor-pointer" />
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Post;
