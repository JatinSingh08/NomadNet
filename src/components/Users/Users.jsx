import React, { useEffect } from "react";
import UserCard from "./UserCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, userSelector } from "../../features/usersSlice";

const Users = () => {
  const { usersData } = useSelector(userSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <div className="flex flex-col p-2 gap-4 ">
        {usersData?.map((user) => (
          <UserCard userData={user} key={user._id} />
        ))}
    </div>
  );
};

export default Users;
