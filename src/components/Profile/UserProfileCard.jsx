import { Modal } from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { avatar1 } from "../../backend/db/assets";
import { authSelector } from "../../features/authSlice";
import {
  editProfile,
  followUser,
  unfollowUser,
} from "../../features/usersSlice";

const UserProfileCard = ({ user, usersData }) => {
  const { encodedToken, foundUser } = useSelector(authSelector);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const dispatch = useDispatch();

  const [bioDetails, setBioDetails] = useState({
    bio: user?.bio,
    portfolio: user?.portfolio,
  });
  
  const currentUser = usersData?.find(
    (user) => user.username === foundUser?.username
  );


  const isFollowed = currentUser?.following?.find(
    (followedUser) => followedUser._id === user._id
  );

  const showModal = () => {
    setIsEditModalOpen(true);
  };

  const editBioHandler = () => {
    const userData = {
      ...user,
      bio: bioDetails?.bio,
      portfolio: bioDetails?.portfolio,
    };

    if (
      bioDetails?.bio?.trim().length ||
      bioDetails?.portfolio?.trim().length
    ) {
      dispatch(editProfile({ encodedToken, userData }));
      setIsEditModalOpen(false);
    }
  };

  const closeModal = () => {
    setIsEditModalOpen(false);
    setBioDetails(val => ({...val, bio: user?.bio, portfolio: user?.portfolio}))
  };

  return (
    <div className="card rounded-2xl p-4 flex flex-col gap-4">
      <div className="flex gap-3">
        <img
          src={user?.profile || avatar1}
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
          <p className="text-md">{user?.bio}</p>
          <a
            href={user?.portfolio}
            target="_blank"
            rel="noreferrer"
            className="text-blue-400 text-sm"
          >
            {user?.portfolio}
          </a>
        </div>
        {user?._id === foundUser?._id ? (
          <button className="follow-btn" onClick={showModal}>
            Edit Profile
          </button>
        ) : (
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
        )}
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
      {isEditModalOpen && (
        <Modal
          title="Edit Profile"
          open={isEditModalOpen}
          onCancel={closeModal}
          placeholder="center"
          footer={null}
        >
          <div>
            <label htmlFor="bio">
              <h2 className="text-xl">Bio</h2>
              <textarea
                placeholder="Where are you rn ?!🌍"
                value={bioDetails?.bio}
                className="w-full px-4 bg-rose-100 rounded-lg outline-none pt-2 resize-none"
                onChange={(e) =>
                  setBioDetails((val) => ({ ...val, bio: e.target.value }))
                }
              ></textarea>
            </label>

            <label htmlFor="portfolio">
              <h2 className="text-xl">Portfolio</h2>
              <textarea
                placeholder="Showcase your creativity !!"
                onChange={(e) =>
                  setBioDetails((val) => ({
                    ...val,
                    portfolio: e.target.value,
                  }))
                }
                className="w-full px-4 bg-rose-100 rounded-lg outline-none pt-2 resize-none"
                value={bioDetails?.portfolio}
              ></textarea>
            </label>

            <div className="flex gap-3 mt-4 items-center justify-end">
              <button
                className="follow-btn rounded-2xl h-8 bg-red-300"
                onClick={closeModal}
              >
                Discard
              </button>
              <button
                className="follow-btn rounded-2xl h-8"
                onClick={editBioHandler}
              >
                Save
              </button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default UserProfileCard;
