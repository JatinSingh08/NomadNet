import React, { useEffect } from "react";
import UserCard from "./UserCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, userSelector } from "../../features/usersSlice";
import { authSelector } from "../../features/authSlice";

const Users = () => {
  const { usersData } = useSelector(userSelector);
  const { foundUser } = useSelector(authSelector);
  const dispatch = useDispatch();

  const currentUser = usersData?.find(user => user._id === foundUser._id);
  const unFollowedUsers = usersData?.filter(user => user._id !== currentUser?._id && currentUser?.following.every(followingUser => followingUser._id !== user._id))
  // const unFollowedUsers = usersData?.filter(user => user._id !== foundUser._id)

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <div className="flex flex-col p-2 gap-4 ">
        {unFollowedUsers?.map((user) => (
          <UserCard userData={user} key={user._id} />
        ))}
    </div>
  );
};

export default Users;
