import React from 'react'
import UserPhoto from "../user_photo/UserPhoto.jsx"
import ButtonBlack from "../buttons/ButtonBlack.jsx"

const UserList = ({
   showborder = true
}) => {
  return (
    <li className={`w-full h-fit pr-2 pt-1 pb-2 pl-1 ${showborder&&"border-b"} border-gray-400/30 flex items-center justify-between my-4`}>
     <div className="flex h-fit w-fit">
      <UserPhoto/>
        <div className="flex flex-col ml-2 items-start leading-[15px] self-center">
          <h2 className="text-gray-200 text-[15px] font-semibold">Karan</h2>
          <p className="text-gray-300 text-[12px] font-normal ">126k • Followers</p>
        </div>
     </div>
     
     <div>
       <ButtonBlack text="Follow" width="60px" radius="25px" size="11px" />
     </div>
     
    </li>
  )
}

export default UserList