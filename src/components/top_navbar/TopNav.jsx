import React,{useEffect} from 'react'
import AppTitle from "../app_title/AppTitle.jsx"
import UserPhoto from "../user_photo/UserPhoto.jsx"
import {useDispatch,useSelector} from "react-redux"
import {FetchData} from "../../utils/Fetch.js"
import {setUser} from "../../redux/slice/LoggedSlice/LoggedUserSlice.js"

export default function TopNav() {
   
   const dispatch = useDispatch()
   const {userState} = useSelector(state=>state.loggedUserSlice)
   
   useEffect(()=>{
      FetchData("/api/v1/user/fetch")
      .then(data=>{
         dispatch(setUser(data.data))
         console.log(data);
      })
      .catch(error=>console.log(error))
   },[])
   
  return (
    <div className="w-full sm:w-full md:w-[85%] lg:w-[60%] h-fit  gradient_border flex items-end justify-between px-3 py-3">
      <div className="relative top-[5px]">
        <AppTitle />
      </div>
      <div>
        <UserPhoto 
          src={userState&&userState.avatar}
          showname = {true}
          username = {userState?userState.username:""}
          />
      </div>
    </div>
  )
}