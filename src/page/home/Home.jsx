import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CreatePost, Post, PostsOrder } from "../../components";
import { authSelector } from "../../features/authSlice";
import { fetchPosts, postsSelector } from "../../features/postsSlice";
import { fetchUsers, userSelector } from "../../features/usersSlice";

const Home = () => {
  const { usersData } = useSelector(userSelector);
  const { postsData } = useSelector(postsSelector);
  const { foundUser } = useSelector(authSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
    dispatch(fetchPosts());
  }, []);

  const user = usersData?.find((user) => user?.username === foundUser?.username);
  const userFollowingPosts = postsData?.filter( post => post?.userId === user?._id || user?.following?.some(userData => userData._id === post.userId));
  

  return (
    <div className="px-20 py-10 flex flex-col gap-8  w-[calc(100%-46rem)] min-h-screen  ml-[22rem]">
      <CreatePost />
      <PostsOrder />
      {/* <Users /> */}
      {userFollowingPosts?.map((postData, index) => (
        <Post postData={postData} key={index} />
      ))}
    </div>
  );
};

export default Home;
