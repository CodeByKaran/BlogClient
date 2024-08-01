import React from "react";
import UserPhoto from "../user_photo/UserPhoto.jsx";
import ButtonBlack from "../buttons/ButtonBlack.jsx";
import ButtonWhite from "../buttons/ButtonWhite.jsx";
import useCustomNavigate from "../../hooks/useCustomNavigate.js"



const UserList = ({ user = {}, showborder = true, ticking = false ,handleFollow,handleUnfollow}) => {
   
   const navigate = useCustomNavigate()
   
   const handleOpenUserDashboard=()=>{
      navigate(`/user/blog/${user?._id}`);
   }
   
  return (
    <div
      className={`w-full h-fit pr-3 pt-3 pb-4 pl-2 ${
        showborder && "border-b"
      } border-gray-400/30 flex items-center justify-between my-4 z-10 select-none`}
    >
      <div className="flex h-fit w-fit active:bg-gray-400/30" onClick={handleOpenUserDashboard}>
        <UserPhoto
          src={user?.avatar}
          showBorder={user ? false : true} // This condition might need revision
        />
        <div className="flex flex-col ml-2 items-start leading-[15px] self-center">
          <h2 className="text-gray-200 text-[15px] font-semibold">
            {user?.username}
          </h2>
          <p className="text-gray-300 text-[12px] font-normal">
            {user.followers} • Followers
          </p>
        </div>
      </div>

      <div>
        {!ticking ? (
          user.isFollowed ? (
            <ButtonWhite
              text="followed ✔️"
              radius="25px"
              size="12px"
              style={{
                padding: "6px 5px 6px 5px",
                marginRight: "0",
                zIndex: "111111"
              }}
              effect={false}
            />
          ) : (
            <ButtonBlack
              text="follow"
              width="75px"
              radius="25px"
              size="11px"
              style={{
                padding: "9px 5px 9px 5px",
                zIndex: "111111"
              }}
            />
          )
        ) : (
          <ButtonBlack
            text={user.isFollowed ? "unfollow" : "follow"}
            width="75px"
            radius="25px"
            size="11px"
            style={{
              padding: "9px 5px 9px 5px",
              zIndex: "111111"
            }}
            fun={user.isFollowed ? ()=>handleUnfollow(user?._id) :()=>handleFollow(user?._id)}
            effect={!ticking}
          />
        )}
      </div>
    </div>
  );
};

export default UserList;
