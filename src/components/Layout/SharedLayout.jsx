import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Menubar from "./Menubar";
import SuggestedUsers from "./SuggestedUsers";

const SharedLayout = () => {
  return (
    <div className="App card bg-[#F0EEF6] h-[100vh]">
      <Header />
      <div className="grid w-full mt-[5rem] ">
        <Menubar />
        <Outlet />
        <SuggestedUsers />
      </div>
    </div>
  );
};

export default SharedLayout;
