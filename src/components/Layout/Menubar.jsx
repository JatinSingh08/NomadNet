import React from "react";
import { AiFillHome } from "react-icons/ai";
import { BsFillBookmarksFill } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { HiLogout } from "react-icons/hi";
import { MdExplore } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { authSelector, logoutUser } from "../../features/authSlice";

const Menubar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { foundUser } = useSelector(authSelector);
  const location = useLocation();

  const isActiveRoute = (route) => {
    return location.pathname === route;
  };

  const logoutUserHandler = () => {
    dispatch(logoutUser());
    navigate("/login");
  };
  return (
    <div className="card fixed px-12 rounded-2xl ml-[10rem]  top-28 py-6  h-auto flex justify-center">
      <ul className="flex flex-col gap-10 items-start text-start justify-center text-xl">
        <Link
          className={`flex gap-6 items-center hover:cursor-pointer ${
            isActiveRoute("/") && "text-purple-800"
          }`}
          to="/"
        >
          <AiFillHome
            className={` text-[#9E98B3] w-6 h-6 ${
              isActiveRoute("/") && "text-purple-600"
            }`}
          />
          <span>Home</span>
        </Link>
        <Link
          className={`flex gap-6 items-center hover:cursor-pointer ${
            isActiveRoute("/explore") && "text-purple-800"
          }`}
          to="/explore"
        >
          <MdExplore
            className={` text-[#9E98B3] w-6 h-6 ${
              isActiveRoute("/explore") && "text-purple-600"
            }`}
          />
          <span>Explore</span>
        </Link>
        <Link
          className={`flex gap-6 items-center hover:cursor-pointer ${
            isActiveRoute("/bookmarks") && "text-purple-800"
          }`}
          to="/bookmarks"
        >
          <BsFillBookmarksFill
            className={` text-[#9E98B3] w-6 h-6 ${
              isActiveRoute("/bookmarks") && "text-purple-600"
            }`}
          />
          <span>Bookmarks</span>
        </Link>
        <Link
          className={`flex gap-6 items-center hover:cursor-pointer ${
            isActiveRoute(`/profile/${foundUser?.username}`) &&
            "text-purple-800"
          }`}
          to={`/profile/${foundUser?.username}`}
        >
          <CgProfile
            className={` text-[#9E98B3] w-6 h-6 ${
              isActiveRoute(`/profile/${foundUser?.username}`) &&
              "text-purple-600"
            }`}
          />
          <span>Profile</span>
        </Link>
        <button
          onClick={logoutUserHandler}
          className="flex gap-6 items-center hover:cursor-pointer"
        >
          <HiLogout className=" text-[#9E98B3] w-6 h-6" />
          <span>Log Out</span>
        </button>
      </ul>
    </div>
  );
};

export default Menubar;
