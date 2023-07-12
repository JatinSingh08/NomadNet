import React from "react";
import { useSelector } from "react-redux";
import { authSelector } from "../../features/authSlice";
import { userSelector } from "../../features/usersSlice";
import UserCard from "./UserCard";

const Users = () => {
  const { usersData } = useSelector(userSelector);
  const { foundUser } = useSelector(authSelector);

  const currentUser = usersData?.find((user) => user?._id === foundUser?._id);
  console.log({currentUser})
  const unFollowedUsers = usersData?.filter(
    (user) =>
      user._id !== currentUser?._id &&
      currentUser?.following.every(
        (followingUser) => followingUser._id !== user._id
      )
  );
  console.log({usersData})

  const numberOfUsers = unFollowedUsers?.length;
  console.log('unfollowUser', unFollowedUsers)
  // flex flex-col p-2 gap-4
  return (
    <div className={` ${numberOfUsers > 5 ? "flex flex-col px-2 gap-4  overflow-y-scroll scrollbar-theme h-72" : " flex flex-col p-2 gap-4"} ` }>
      {
      unFollowedUsers?.map((user) => (
        <UserCard userData={user} key={user._id} />
      ))
      }
    </div>
  );
};

export default Users;
