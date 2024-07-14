import React from 'react'
import UserPhoto from "../user_photo/UserPhoto.jsx"
import ButtonBlack from "../buttons/ButtonBlack.jsx"
import ButtonWhite from "../buttons/ButtonWhite.jsx"

const UserList = ({
   user = {},
   showborder = true
}) => {
   
  return (
    <div className={`w-full h-fit pr-3 pt-3 pb-4 pl-2 ${showborder&&"border-b"} border-gray-400/30 flex items-center justify-between my-4  z-10 select-none active:bg-gray-400/30`}>
     <div className="flex h-fit w-fit ">
      <UserPhoto 
        src={user?.avatar}
        showBorder={user?false:true}
       />
        <div className="flex flex-col ml-2 items-start leading-[15px] self-center ">
          <h2 className="text-gray-200 text-[15px] font-semibold">{user?.username}</h2>
          <p className="text-gray-300 text-[12px] font-normal ">{user.followers} • Followers</p>
        </div>
     </div>
     
     <div>
     {user.isFollowed?(       <ButtonWhite
         text={user?.isFollowed?"followed ✔️":"unfollowed"}
         radius="25px"
         size="12px"
         style={{
            padding:"6px 5px 6px 5px",
            marginRight:"0",
            zIndex:"111111"
         }}
         effect={false}
        />):
       <ButtonBlack text="follow" width="75px" radius="25px" size="11px" 
          style={{
             padding:"9px 5px 9px 5px",
             zIndex:"111111"
          }}
        />
     }
     </div>
    
    </div>
  )
}

export default UserList