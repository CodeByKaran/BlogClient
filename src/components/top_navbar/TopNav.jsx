import React from 'react'
import AppTitle from "../app_title/AppTitle.jsx"
import UserPhoto from "../user_photo/UserPhoto.jsx"

export default function TopNav() {
  return (
    <div className="w-full sm:w-full md:w-[85%] lg:w-[60%] h-fit  gradient_border flex items-end justify-between px-3 pb-3">
      <div className="relative top-[5px]">
        <AppTitle />
      </div>
      <div>
        <UserPhoto 
          showname = {true}
          />
      </div>
    </div>
  )
}