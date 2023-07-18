import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Logo } from "../../assets";
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
  };
  console.log("loginToken", encodedToken);

  useEffect(() => {
    if (encodedToken) navigate("/");
  }, [encodedToken]);

  return (
    <form className="h-full md:mx-1  z-10" onSubmit={submitHandler}>
      <div className="w-96  m-auto mt-24 md:mt-44 md:mx-auto h-auto p-4 border rounded-md drop-shadow-sm flex flex-col gap-3">
        <div className="flex items-center justify-center m-auto">
          <img src={Logo} alt="logo" />
          <h1 className=" text-[#60A5FA] text-3xl font-bold">NomadNet</h1>
        </div>
        <div className="flex flex-col gap-1">
          <label>Username</label>
          <input
            className="w-auto border rounded-md p-2 outline-none"
            type="text"
            value={userDetails?.email}
            autoComplete="nope"
            placeholder="Enter Email"
            onChange={(e) =>
              setUserDetails({ ...userDetails, username: e.target.value })
            }
          />
        </div>
        <div className="flex flex-col gap-1">
          <label>Password</label>
          <input
            className="w-auto border rounded-md p-2 outline-none"
            value={userDetails.password}
            type="password"
            placeholder="Enter Password"
            onChange={(e) =>
              setUserDetails({ ...userDetails, password: e.target.value })
            }
          />
        </div>
        <button
          className=" bg-slate-900  text-slate-100 shadow-2xl rounded-lg px-2 py-1.5 active:scale-90 transition-all duration-100 ease-in-out "
          type="submit"
          disabled={loggingIn}
        >
          {loggingIn ? "Logging In..." : "Log In"}
        </button>
        <button
          className=" bg-slate-200  text-slate-900 shadow-2xl rounded-lg px-2 py-1.5 active:scale-90 transition-all duration-100 ease-in-out "
          onClick={() => setUserDetails(guestUserDetails)}
        >
          Login as Guest
        </button>
        <div className="text-gray-600 m-auto">
          <p className="text-xl mb-0 text-slate-200">
            Don't have an account?
            <Link to="/signup">
              <span className="text-slate-900 underline ml-2 font-medium">Signup</span>
            </Link>
          </p>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
