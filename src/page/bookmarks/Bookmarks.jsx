import React from "react";
import { useSelector } from "react-redux";
import { Post } from "../../components";
import { authSelector } from "../../features/authSlice";
import { postsSelector } from "../../features/postsSlice";
import { userSelector } from "../../features/usersSlice";

const Bookmarks = () => {
  const { usersData } = useSelector(userSelector);
  const { foundUser } = useSelector(authSelector);
  const { postsData } = useSelector(postsSelector);

  const userBookmarkPosts = usersData?.find(
    (user) => user.username === foundUser.username
  )?.bookmarks;
  const bookmarkPosts = postsData?.filter(({ _id }) =>
    userBookmarkPosts?.some((post) => post._id === _id)
  );

  console.log({ userBookmarkPosts });

  return (
    <div className="px-20 py-10 flex flex-col gap-4  w-[calc(100%-46rem)] min-h-screen  ml-[22rem]">
      <div className="text-start">
        <h1 className="text-3xl font-bold">Bookmarks</h1>
        <p className="text-[15px] text-[#A6A0B9]">@{foundUser?.username}</p>
      </div>
      <div className="flex flex-col gap-8">
        {bookmarkPosts?.length > 0 ? (
          bookmarkPosts?.map((postData) => <Post postData={postData} />)
        ) : (
          <h1 className="text-2xl font-medium text-slate-400 m-auto mt-10">
            No Posts Bookmarked
          </h1>
        )}
      </div>
    </div>
  );
};

export default Bookmarks;
