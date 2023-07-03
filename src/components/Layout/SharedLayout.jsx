import React from "react";
import Header from "./Header";
import Menubar from "./Menubar";
import { Home } from "../../page";
import SuggestedUsers from "./SuggestedUsers";
import { Outlet } from "react-router-dom";

const SharedLayout = () => {
  return (
    <div className="App card">
      <Header />
      <div className="grid w-full">
        <Menubar />
        <Outlet />
        <SuggestedUsers />
      </div>
    </div>
  );
};

export default SharedLayout;
