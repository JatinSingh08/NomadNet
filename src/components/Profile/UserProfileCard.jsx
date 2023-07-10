import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { authSelector } from "../../features/authSlice";
import { followUser, unfollowUser } from "../../features/usersSlice";

const UserProfileCard = ({ user, usersData }) => {
  const { encodedToken, foundUser } = useSelector(authSelector);

  const dispatch = useDispatch();

  const currentUser = usersData?.find(
    (user) => user.username === foundUser.username
  );
  console.log({ currentUser });

  const isFollowed = currentUser?.following?.find(
    (followedUser) => followedUser._id === user._id
  );
  console.log({ isFollowed });

  console.log({ user });
  return (
    <div className="card rounded-2xl p-4 flex flex-col gap-4">
      <div className="flex gap-3">
        <img
          src={user?.profile}
          alt="avatar"
          className="w-16 h-16 rounded-full object-contain"
        />
        <div className="flex flex-col text-start">
          <h1 className="font-semibold text-xl">
            {user?.firstName + " " + user?.lastName}
          </h1>
          <p className="text-[12px] text-[#A6A0B9]">@{user?.username}</p>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className="text-start">
          <p>Frontend Developer</p>
          <a
            href="https://sneakhead.vercel.app/"
            className="text-blue-400 text-sm"
          >
            https://sneakhead.vercel.app/
          </a>
        </div>
        {
          
        }
        <button
          className="follow-btn"
          onClick={() => {
            if (isFollowed) {
              dispatch(
                unfollowUser({ encodedToken, unfollowUserId: user?._id })
              );
            } else {
              dispatch(followUser({ encodedToken, followUserId: user?._id }));
            }
          }}
        >
          {isFollowed ? "Following" : "Follow"}
        </button>
      </div>
      <div className="flex gap-2">
        <div className="flex gap-1">
          <h1>2</h1>
          <p className="text-[#A6A0B9]">Posts</p>
        </div>
        <div className="flex gap-1">
          <h1>{user?.followers?.length}</h1>
          <p className="text-[#A6A0B9]">Followers</p>
        </div>
        <div className="flex gap-1">
          <h1>{user?.following?.length}</h1>
          <p className="text-[#A6A0B9]">Following</p>
        </div>
      </div>
    </div>
  );
};

export default UserProfileCard;
