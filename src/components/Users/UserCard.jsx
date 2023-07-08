import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { authSelector } from "../../features/authSlice";
import { followUser, userSelector } from "../../features/usersSlice";

const UserCard = ({ userData }) => {
  const dispatch = useDispatch();
  const { encodedToken } = useSelector(authSelector);
  const {
    disabled: { followDisabled },
  } = useSelector(userSelector);
  const followUserId = userData?._id;
  const navigate = useNavigate();

  return (
    <div className="flex justify-between items-center gap-2">
      <div className="flex gap-2">
        <img
          src={userData?.profile}
          alt="avatar"
          className="w-11 h-11 rounded-full object-contain hover:cursor-pointer"
          onClick={() => navigate(`/profile/${userData.username}`)}
        />
        <div className="flex flex-col text-start">
          <h1 className="font-medium">{userData?.firstName}</h1>
          <p className="text-[12px] text-[#A6A0B9]">@{userData?.username}</p>
        </div>
      </div>
      <button
        className="button-theme h-7 rounded-2xl"
        disabled={followDisabled}
        onClick={() => {
          dispatch(followUser({ encodedToken, followUserId }));
        }}
      >
        Follow
      </button>
    </div>
  );
};

export default UserCard;
