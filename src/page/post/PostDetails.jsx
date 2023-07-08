import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Post } from "../../components";
import { postsSelector } from "../../features/postsSlice";

const PostDetails = () => {
  const { postId } = useParams();
  const { postsData } = useSelector(postsSelector);
  const postData = postsData?.find((post) => post._id === postId);
  return (
    <div className="px-20 py-10 flex flex-col gap-8  w-[calc(100%-46rem)] min-h-screen  ml-[22rem]">
      <Post postData={postData} showComments />
    </div>
  );
};

export default PostDetails;
