import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Logo } from "../../assets";
import { useDispatch, useSelector } from "react-redux";
import { authSelector, userLogin } from "../../features/authSlice";

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { encodedToken, loggingIn } = useSelector(authSelector);

  const guestUserDetails = {
    username: "john123",
    password: "john123",
  };
  const [userDetails, setUserDetails] = useState({
    username: "",
    password: "",
  });

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(userLogin(userDetails));
  }
  console.log('loginToken', encodedToken);

  useEffect(() => {
    if(encodedToken) navigate('/');
  } ,[encodedToken])

  return (
      <form className="h-full mb-20 md:mx-1" onSubmit={submitHandler}>
        <div className="w-96  m-auto mt-24 md:mt-44 md:mx-auto h-auto p-4 border rounded-md drop-shadow-sm flex flex-col gap-3">
          <div className="flex items-center justify-center m-auto">
            <img src={Logo} alt="logo" />
            <h1 className=" text-[#60A5FA] text-3xl logo">SocialSphere</h1>
          </div>
          <div className="flex flex-col gap-1">
            <label>Username</label>
            <input
              className="w-auto border rounded-md p-2 outline-none"
              type="text"
              value={userDetails.email}
              autoComplete="nope"
              placeholder="Enter Email"
              onChange={(e) => setUserDetails({...userDetails, username: e.target.value})}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label>Password</label>
            <input
              className="w-auto border rounded-md p-2 outline-none"
              value={userDetails.password}
              type="password"
              placeholder="Enter Password"
              onChange={(e) => setUserDetails({...userDetails, password: e.target.value})}
            />
          </div>
          <button
            className="button-theme bg-slate-900 shadow-md text-slate-200 button-theme"
            type="submit"
            disabled={loggingIn}
          >
            {loggingIn ? "Logging In..." : "Log In"}
          </button>
          <button
            className="button-theme bg-slate-200 shadow-md text-slate-900 button-theme"
            onClick={() => setUserDetails(guestUserDetails)}
          >
            Login as Guest
          </button>
          <div className="text-gray-600 m-auto">
            <p className="text-xl mb-0">
              Don't have an account?
              <Link to="/signup">
                <span className="text-slate-900 underline ml-2">Signup</span>
              </Link>
            </p>
          </div>
        </div>
      </form>
  );
};

export default LoginForm;
