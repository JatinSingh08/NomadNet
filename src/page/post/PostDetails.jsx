import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Post } from "../../components";
import { fetchPosts, postsSelector } from "../../features/postsSlice";

const PostDetails = () => {
  const { postId } = useParams();
  const { postsData } = useSelector(postsSelector);
  const dispatch = useDispatch();
  console.log({ postsData });
  const postData = postsData?.find((post) => post?._id === postId);
  console.log("postId", postId);
  console.log({ postData });

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  return (
    <div className="px-20 py-10 flex flex-col gap-8  w-[calc(100%-46rem)] min-h-screen  ml-[22rem]">
      <Post postData={postData} showComments postId={postId} />
    </div>
  );
};

export default PostDetails;
