import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CreatePost, Post, PostsOrder } from "../../components";
import { authSelector } from "../../features/authSlice";
import { fetchPosts, postsSelector } from "../../features/postsSlice";
import { fetchUsers, userSelector } from "../../features/usersSlice";
import { AiOutlineClockCircle } from "react-icons/ai";
import { BiTrendingUp } from "react-icons/bi";

const Home = () => {
  const { usersData } = useSelector(userSelector);
  const { postsData } = useSelector(postsSelector);
  const { foundUser } = useSelector(authSelector);
  const dispatch = useDispatch();
  const [postsOrder, setPostsOrder] = useState('latest');

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  const user = usersData?.find((user) => user?.username === foundUser?.username);
  const userFollowingPosts = postsData?.filter( post => post?.userId === user?._id || user?.following?.some(userData => userData._id === post.userId));
  

  const sortedPosts = userFollowingPosts?.sort((a, b) =>
  postsOrder === 'latest'
    ? new Date(b?.createdAt) - new Date(a?.createdAt)
    : b?.likes?.likeCount - a?.likes?.likeCount
);

  return (
    <div className="px-20 py-10 flex flex-col gap-8  w-[calc(100%-46rem)] min-h-screen  ml-[22rem]">
      <CreatePost />
      <div className="w-full card rounded-lg h-14 flex justify-between">
      <button className={`flex items-center justify-center gap-2 text-lg w-[50%]  hover:rounded-e-2xl ${postsOrder === 'trending' && "bg-rose-100 rounded-r-2xl" }`}
      onClick={() => setPostsOrder('trending')}
      >
        <BiTrendingUp />
        <span>Trending</span>
      </button>
      <button className={`flex items-center justify-center gap-2 text-lg w-[50%] hover:bg-rose-100 hover:rounded-s-2xl ${postsOrder === 'latest' && "bg-rose-100 rounded-l-2xl"}`}
      onClick={() => setPostsOrder('latest')}
      >
        <AiOutlineClockCircle />
        <span>Latest</span>
      </button>
    </div>
      {sortedPosts?.map((postData, index) => (
        <Post postData={postData} key={index} />
      ))}
    </div>
  );
};

export default Home;
