import React,{useEffect} from 'react'
import AppTitle from "../app_title/AppTitle.jsx"
import UserPhoto from "../user_photo/UserPhoto.jsx"
import {useDispatch,useSelector} from "react-redux"
import {FetchData} from "../../utils/Fetch.js"
import {setUser} from "../../redux/slice/LoggedSlice/LoggedUserSlice.js"
import LoginBtn from "../buttons/LoginBtn.jsx"

export default function TopNav() {
   
   const dispatch = useDispatch()
   const {userState} = useSelector(state=>state.loggedUserSlice)
   
  return (
    <div className="w-full sm:w-full md:w-[85%] lg:w-[60%] h-fit  gradient_border flex items-center justify-between px-3 py-3">
      <div className="relative top-[5px]">
        <AppTitle />
      </div>
      <div>
      {!userState?
      <LoginBtn 
        text="Login"
        />:
        <UserPhoto 
          src={userState&&userState.avatar}
          showname = {true}
          username = {userState?userState.username:""}
          showBorder={false}
          />
      }
      </div>
    </div>
  )
}