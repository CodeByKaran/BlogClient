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



export default function App() {
   const navigate = useNavigate()
   
   
  return (
    <center className="flex flex-col items-center">
      <ToastContainer
        position="top-center"
        autoClose={3500}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition:Bounce
      />
      <ShowNav>
        <TopNav />
      </ShowNav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="search" element={<Search />} />
        <Route path="create-post" element={<CreatePost />} />
        <Route path="settings" element={<Settings />} />
        <Route path="login" element={<Login />} />
      </Routes>
      <ShowBottomNav>
        <BottomNav />
      </ShowBottomNav>
    </center>
  );
}
