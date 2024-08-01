import React, { useEffect } from "react";
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
import ShowBottomNav from "./components/to_show_bottom_nav/ShowBottomNav.jsx";
import Login from "./page/login/Login.jsx";
import SinglePost from "./page/single-post/SinglePost.jsx";
import Blogs from "./page/blogs/Blogs.jsx";
import Post from "./components/blogs_body/post/Post.jsx";
import Blog from "./components/blogs_body/blog/Blog.jsx";
import SignUp from "./page/signup/SignUp.jsx";
import Verify from "./page/verify/Verify.jsx";
import { useDispatch } from "react-redux";
import { FetchData } from "./utils/Fetch.js";
import { setUser } from "./redux/slice/LoggedSlice/LoggedUserSlice.js";
import { BlogProvider } from "./context/BlogContext.jsx";
import SaveBlogs from "./page/save_blogs/SaveBlogs.jsx"
import Account from "./page/account/Account.jsx"
import Follow from "./page/follow/Follow.jsx"
import PrivacyAbout from "./page/privacy_about/PrivacyAbout.jsx"
import Follower from "./components/follow/Follower.jsx"
import Following from "./components/follow/Following.jsx"




export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    FetchData("/api/v1/user/fetch", {
      method: "GET",
      credentials: "include",
    })
      .then(data => {
        dispatch(setUser(data.data));
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <BlogProvider>
      <center className="flex flex-col items-center">
        <ToastContainer />
        <ShowNav>
          <TopNav />
        </ShowNav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="search" element={<Search />} />
          <Route path="create-post" element={<CreatePost />} />
          <Route path="settings" element={<Settings />} >
            <Route path="following-follower" element={<Follow />}>
             <Route path=":userId/follower" element={<Follower/>} />
             <Route path=":userId/following" element={<Following/>} />
            </Route>
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="blog/:blogId" element={<SinglePost />} />
          <Route path="user/blog/:userId" element={<Blogs />}>
            <Route path="posts" element={<Post />} />
            <Route path="blogs" element={<Blog />} />
          </Route>
          <Route path="signup" element={<SignUp />} />
          <Route path="signup/:id/verify" element={<Verify />} />
          <Route path="saved/blog" element={<SaveBlogs />} />
          <Route path="settings/privacy-about" element={<PrivacyAbout />}/>   
          <Route path="settings/account" element={<Account />}/>
          </Routes>
        <ShowBottomNav>
          <BottomNav />
        </ShowBottomNav>
      </center>
    </BlogProvider>
  );
}
