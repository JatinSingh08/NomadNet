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
    <div className="flex gap-2  overflow-auto hide-scrollbar transition-all duration-300 ease-linear p-2">
      <div className="flex space-x-2">
        {usersData?.map((user) => (
          <UserCard userData={user} key={user._id} />
        ))}
      </div>
    </div>
  );
};

export default Users;
