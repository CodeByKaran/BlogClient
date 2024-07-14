import React,{useEffect} from 'react'
import UserPhoto from "../user_photo/UserPhoto.jsx"
import {useSelector} from "react-redux"

const HeroUserSetting = () => {
   
   const {userState} = useSelector(state=>state.loggedUserSlice)
   
   useEffect(() => {
     console.log(userState)
   }, [userState])
   
   
  return (
    <div className="flex justify-between pt-4 pb-5 px-4 items-center blur_effect_two select-none w-full sm:w-full md:w-[80%] lg:w-[60%]">
     <div className="flex flex-col items-start justify-center  leading-none">
      <h1 className="text-3xl font-semibold  bg-gradient-to-r from-[#f84685] to-[#f73965] bg-clip-text text-transparent">{userState?userState.username:"Hey , User"}</h1>
      <p className="text-[15px] text-gray-300">{userState?"account • "+userState.email.slice(0,9)+"***":"Make sure you logged in"}</p>
     </div>
     
     <div>
      <UserPhoto  h="43px" w="43px"
       src={userState?.avatar}
       showBorder={false}
      />
     </div>
    </div>
   
  )
}

export default HeroUserSetting