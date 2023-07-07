import React from "react";
import Users from "../Users/Users";

const SuggestedUsers = () => {
  return (
    <div className=" fixed  top-[114px] right-0 mr-[166px] text-start">
      <div className="text-[#9E98B3] text-xl font-bold">
        You may Know
      </div>
      <div className="card py-2 h-auto w-[284px] px-2 overflow-y-scroll scrollbar-theme rounded-2xl mt-2">
        <Users />
      </div>
    </div>
  );
};

export default SuggestedUsers;
