import React, { useEffect } from "react";
import { CreatePost, Post, PostsOrder, Users } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, userSelector } from "../../features/usersSlice";
import { fetchPosts, postsSelector } from "../../features/postsSlice";

const Home = () => {
  const { usersData } = useSelector(userSelector);
  const { postsData } = useSelector(postsSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
    dispatch(fetchPosts());
  } ,[])
  console.log({postsData});
  return (
    <div className="mt-20 px-20 py-10 flex flex-col gap-8 bg-[#F8F9FA] w-[calc(100%-40rem)]  ml-80">
      <CreatePost />
      <PostsOrder />
      <Users />
      {
        postsData.map(postData => (
          <Post 
          postData={postData}
          />
        ))
      }
    </div>
  );
};

export default Home;
