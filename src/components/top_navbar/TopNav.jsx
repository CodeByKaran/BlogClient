import React, { useEffect,useState } from "react";
import AppTitle from "../app_title/AppTitle.jsx";
import UserPhoto from "../user_photo/UserPhoto.jsx";
import { useDispatch, useSelector } from "react-redux";
import { FetchData } from "../../utils/Fetch.js";
import { setUser } from "../../redux/slice/LoggedSlice/LoggedUserSlice.js";
import LoginBtn from "../buttons/LoginBtn.jsx";
import { detectUpDownScroll } from "../../utils/DetectUpDownScroll.js";

export default function TopNav() {
  const dispatch = useDispatch();
  const { userState } = useSelector(state => state.loggedUserSlice);
  const [isUpScroll, setIsUpScroll] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (detectUpDownScroll()) {
        setIsUpScroll(false);
      } else {
        setIsUpScroll(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  

  return (
    <div className={`w-full sm:w-full md:w-[85%] lg:w-[60%] h-fit   flex items-center justify-between px-3 py-3 bg-slate-950 shadow-lg border-b border-pink-300/50 ${isUpScroll?"sticky top-0 left-0 shadow-slate-950/90 rounded-b-lg ":" block shadow-gray-700/30 "} z-50`}>
      <div className="relative top-[5px] ">
        <AppTitle />
      </div>
      <div>
        {!userState ? (
          <LoginBtn text="Login" />
        ) : (
          <UserPhoto
            src={userState && userState.avatar}
            showname={true}
            username={userState ? userState.username : ""}
            showBorder={false}
          />
        )}
      </div>
    </div>
  );
}
