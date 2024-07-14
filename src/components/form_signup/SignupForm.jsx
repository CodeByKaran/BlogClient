import React, { useState,useRef } from "react";
import SignupHero from "../hero_signup/SignupHero.jsx";
import AvatarSvg from "../../assets/AvatarCamera.svg";
import Human from "../../assets/human_icon.svg";
import VerticalSpacer from "../spacer/VerticalSpacer.jsx";
import EmailInput from "../email_input/EmailInput.jsx"
import GradientButton from "../buttons/GradientButton.jsx"
import {ImageCompressor} from "../../utils/ImageCompressor.js"
import {showErrorToast,showSuccessToast} from "../../utils/ShowToast.js"
import {FetchData} from "../../utils/Fetch.js"
import useCustomNavigate from "../../hooks/useCustomNavigate.js"


const SignupForm = () => {
  const [userImg, setUserImg] = useState(null);
  const [loading, setLoading] = useState(false)
  const navigate = useCustomNavigate()

  const handleImageChange = e => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setUserImg(imageUrl);
    }
  };
  
  const splitTags=(tags)=>{
     let tagsArray = [];
     if(!tags.includes(",")){
        return tagsArray
     }else{
        tagsArray = tags.split(",")
        return tagsArray
     }
  }
  
  const handleFormSubmit=async(e)=>{
     e.preventDefault()
     setLoading(true)
     let formData = new FormData()
     const avatar = e.target[0].files[0]
     if(!avatar){
        showErrorToast("avatar is required !")
        setLoading(false)
        return
     }
     const compImg = await  ImageCompressor(avatar,0.3)
     const tags = splitTags(e.target[5].value)
     if(!tags.length){
        setLoading(false)
        showErrorToast("at least two #tags required !")
        return
     }
     formData.append("avatar",compImg)
     tags.forEach((tag) => formData.append("tags[]", tag));
     for(let i=0;i<7;++i){
       if(i==0||i==5)
        continue
        formData.append(e.target[i].name,e.target[i].value)
     }
     const config = {
        method: "POST",
        headers: {
        },
        body: formData,
      };
     FetchData("/api/v1/user/sign-up",config)
     .then(res=>{
        const userId = res.data;
        showSuccessToast("otp has sent to your email")
        setLoading(false)
        navigate(`/signup/${userId}/verify`)
     })
     .catch(err=>{
        showErrorToast(err)
        setLoading(false)
     })
  }
  
  const handleNavigateLogin=()=>{
     navigate("/login")
  }

  return (
    <div className="w-full text-gray-200 pb-[60px]">
      <SignupHero />
      <VerticalSpacer h="50px" />
      <form className="flex flex-col w-full items-center" onSubmit={handleFormSubmit}>
        <div className="relative w-[70px] h-[70px]">
          <input
            type="file"
            id="avatarUpload"
            accept="image/*"
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer rounded-full"
            onChange={handleImageChange}
            name="avatar"
          />
          <label
            htmlFor="avatarUpload"
            className={`flex ${
              !userImg && "p-4"
            } flex-col items-center justify-center w-full h-full 
           rounded-full cursor-pointer bg-gray-500/20 hover:bg-gray-50 text-gray-200 border border-gray-500/40 shadow-lg shadow-[#121212]`}
          >
            <img
              src={userImg ? userImg : Human}
              className="w-full h-full object-cover rounded-full"
            />
          </label>
          <img
            src={AvatarSvg}
            className="w-[23px] h-[23px] absolute top-[70%] right-0 z-50"
          />
         <span className="text-gray-300 text-[14px] font-bold absolute top-[100%] right-0 left-0 mx-auto mt-1 ml-1 font-mono">
          Profile
        </span>
        </div>
      <VerticalSpacer h="60px" />
       <div className="w-[90%] sm:w-[90%] md:w-[75%] lg:w-[65%] flex flex-col">
        <EmailInput 
         id="signup_fullname"
         label="Fullname"
         type="text"
         hint="karan kumar"
         bg={true}
         name="fullname"
         lstyle={{
            fontFamily:"monospace",
            fontWeight:"700"
         }}
         />
       <VerticalSpacer h="30px" />
        <EmailInput 
         id="signup_username"
         label="Username"
         type="text"
         hint="karryOP35"
         bg={true}
         name="username"
         lstyle={{
            fontFamily:"monospace",
            fontWeight:"700"
         }}
         />
       <VerticalSpacer h="30px" />
        <EmailInput 
         id="signup_email"
         label="Email"
         type="email"
         hint="example@.com"
         bg={true}
         name="email"
         lstyle={{
            fontFamily:"monospace",
            fontWeight:"700"
         }}
         />
       <VerticalSpacer h="30px" />
        <EmailInput 
         id="signup_bio"
         label="Bio"
         type="text"
         hint="About your self ..."
         bg={true}
         name="bio"
         lstyle={{
            fontFamily:"monospace",
            fontWeight:"700"
         }}
         />
      <VerticalSpacer h="30px" />
        <EmailInput 
         id="signup_tags"
         label="# tags"
         type="text"
         hint="cool , bro , educator"
         bg={true}
         name="tags"
         lstyle={{
            fontFamily:"monospace",
            fontWeight:"700"
         }}
         />
       <VerticalSpacer h="30px" />
        <EmailInput 
         id="signup_password"
         label="Password"
         type="password"
         hint="*****************"
         bg={true}
         name="password"
         lstyle={{
            fontFamily:"monospace",
            fontWeight:"700"
         }}
         />
       <VerticalSpacer h="30px" />
        <EmailInput 
         id="signup_confirm"
         label="Confirm password"
         type="password"
         hint="*****************"
         bg={true}
         lstyle={{
            fontFamily:"monospace",
            fontWeight:"700"
         }}
         />
      <VerticalSpacer h="30px" />
      <p className=" w-full text-start text-[14px] font-medium text-[#e9cad3] select-none">Already Have Account? <strong className="underline underline-offset-2 active:no-underline" onClick={handleNavigateLogin}>Login</strong></p>
      <VerticalSpacer h="43px" />
      <GradientButton 
        btnText="Sign Up"
        style={{
           alignSelf:"center"
        }}
        loading={loading}
       />
      </div>
      </form>
    </div>
  );
};

export default SignupForm;
