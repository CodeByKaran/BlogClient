import React from "react";
import ButtonBlack from "./components/buttons/ButtonBlack.jsx";
import ButtonWhite from "./components/buttons/ButtonWhite.jsx";
import TopNav from "./components/top_navbar/TopNav.jsx";
import BottomNav from "./components/bottom_navbar/BottomNav.jsx";
import Home from "./page/home/Home.jsx";
import Search from "./page/Search/Search.jsx";
import CreatePost from "./page/create-post/CreatePost.jsx";
import Settings from "./page/settings/Settings.jsx";
import { Routes, Route } from "react-router-dom";
import ShowNav from "./components/to-show-nav/ShowNav.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
   
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
      </Routes>
      <BottomNav />
    </center>
  );
}
