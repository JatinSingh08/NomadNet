import React from "react";
import { CreatePost, Post, PostsOrder, Users } from "../../components";

const Home = () => {
  return (
    <div className="mt-20 px-20 py-10 flex flex-col gap-8 bg-[#F8F9FA] w-[calc(100%-40rem)]  ml-80">
      <CreatePost />
      <PostsOrder />
      <Users />
      <Post />
    </div>
  );
};

export default Home;
