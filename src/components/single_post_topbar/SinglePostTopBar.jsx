import React from 'react'
import Cross from "../../assets/Cross.svg"
import UserPhoto from "../user_photo/UserPhoto.jsx"
import useCustomNavigate from "../../hooks/useCustomNavigate.js"

export default function SinglePostTopBar() {
   
   const navigate= useCustomNavigate()
   
   
  return (
    <div className="flex justify-between items-center pl-3 pr-3 pb-2 text-white pt-4 w-full">
    <div className="flex items-center">
     <UserPhoto 
       showBorder={false}
      />
     <div className="flex flex-col ml-4 justify-center leading-[1.150]">
       <h1 className="text-gray-200 text-[20px] font-semibold text-start font-[system-ui]">Karan</h1>
       <p className="text-gray-300 text-[14px] font-medium font-[system-ui]">followers • 126k </p>
     </div>
    </div>
         <span className="w-8 h-8 rounded-full p-1 " onClick={()=>navigate("/")}>
      <img src={Cross} className="object-cover w-full h-full" />
     </span>
    </div>
  )
}