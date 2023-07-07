import React, { useEffect } from "react";
import { CreatePost, Post, PostsOrder, Users } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, userSelector } from "../../features/usersSlice";
import { fetchPosts, postsSelector } from "../../features/postsSlice";
import { authSelector } from "../../features/authSlice";

const Home = () => {
  const { usersData } = useSelector(userSelector);
  const { postsData } = useSelector(postsSelector);
  const { foundUser } = useSelector(authSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
    dispatch(fetchPosts());
  } ,[])

  const user = usersData?.find(user => user.username === foundUser.username);
  console.log({user});

  return (
    <div className="px-20 py-10 flex flex-col gap-8  w-[calc(100%-46rem)] min-h-screen  ml-[22rem]">
      <CreatePost />
      <PostsOrder />
      {/* <Users /> */}
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
