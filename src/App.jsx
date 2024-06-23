import React,{useEffect} from "react";
import ButtonBlack from "./components/buttons/ButtonBlack.jsx";
import ButtonWhite from "./components/buttons/ButtonWhite.jsx";
import TopNav from "./components/top_navbar/TopNav.jsx";
import BottomNav from "./components/bottom_navbar/BottomNav.jsx";
import Home from "./page/home/Home.jsx";
import Search from "./page/Search/Search.jsx";
import CreatePost from "./page/create-post/CreatePost.jsx";
import Settings from "./page/settings/Settings.jsx";
import { Routes, Route, useNavigate } from "react-router-dom";
import ShowNav from "./components/to-show-nav/ShowNav.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ShowBottomNav from "./components/to_show_bottom_nav/ShowBottomNav.jsx"
import Login from "./page/login/Login.jsx"
import SinglePost from "./page/single-post/SinglePost.jsx"
import {useDispatch} from "react-redux"
import {FetchData} from "./utils/Fetch.js"
import {setUser} from "./redux/slice/LoggedSlice/LoggedUserSlice.js"


export default function App() {
   const dispatch = useDispatch()
   
   useEffect(()=>{
      FetchData("/api/v1/user/fetch")
      .then(data=>{
         dispatch(setUser(data.data))
      })
      .catch(error=>console.log(error))
   },[])
   
  return (
    <center className="flex flex-col items-center">
      <ToastContainer/>
      <ShowNav>
        <TopNav />
      </ShowNav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="search" element={<Search />} />
        <Route path="create-post" element={<CreatePost />} />
        <Route path="settings" element={<Settings />} />
        <Route path="login" element={<Login />} />
        <Route path="blog/:blogId" element={<SinglePost/>} />
      </Routes>
      <ShowBottomNav>
        <BottomNav />
      </ShowBottomNav>
    </center>
  );
}
