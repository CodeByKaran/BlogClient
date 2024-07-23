import React, { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import VerticalSpacer from "../spacer/VerticalSpacer.jsx";
import { useLocation } from "react-router-dom";
import useCustomNavigate from "../../hooks/useCustomNavigate.js";

const FollowSwitchBar = () => {
  const navigate = useCustomNavigate();
  const location = useLocation();

  useEffect(() => {
    const URI = location.pathname.split("/");
    if (URI.length == 3) navigate("follower", true);
  }, []);

  return (
    <>
      <div className="flex items-end w-full sm:w-full md:w-[70%] lg:w-[50%] fixed left-0 right-0 mx-auto z-[150] bg-slate-950 my-0 top-0 h-[150px] ">
        <NavLink
          to="follower"
          replace
          className={({ isActive }) =>
            `flex-1 flex justify-center items-center px-2 py-2 pt-3 transition-colors duration-300 ${
              isActive
                ? "border-b bg-gradient-to-r from-[#865fe6c7] to-[#f15f8fcb] backdrop-blur rounded-lg border-pink-300 "
                : ""
            } `
          }
        >
          <p className="text-md font-medium text-gray-200 ">Follower</p>
        </NavLink>
        <NavLink
          to="following"
          replace
          className={({ isActive }) =>
            `flex-1 flex justify-center items-center px-2 py-2 pt-3 transition-colors duration-300 ${
              isActive
                ? "border-b bg-gradient-to-r from-[#865fe6c7] to-[#f15f8fcb] backdrop-blur rounded-lg border-pink-300 "
                : ""
            } `
          }
        >
          <p className="text-md font-medium text-gray-200">Following</p>
        </NavLink>
      </div>
    </>
  );
};

export default React.memo(FollowSwitchBar);
