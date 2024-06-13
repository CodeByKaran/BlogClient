import React, { useState, useEffect,useRef } from "react";
import HumanIcon from "../../assets/human_icon.svg";
import ButtonBlack from "../../components/buttons/ButtonBlack.jsx";
import Sample from "../../assets/Sample.jpg"
import ButtonWhite from "../../components/buttons/ButtonWhite.jsx"
import LottieIcon from "../lottie/LottieIcon.jsx"
import { showSuccessToast,showInfoToast,showErrorToast,showWarnToast } from "../../utils/ShowToast.js";

export default function Card({
  avatar = HumanIcon,
  username= "unknown",
  followers = "",
  isfollowed = "",
  contentdec="",
  content = Sample,
  likes = "",
  comment = ""
}) {
  const [overContent, setoverContent] = useState(true);
  
   const [moreClick, setmoreClick] = useState(false)

  useEffect(() => {
     
    if (contentdec.length > 120) {
      setoverContent(true);
    } else {
      setoverContent(false);
    }
  }, [contentdec]);
  
  const handleMoreClick=()=>{
     setmoreClick(!moreClick)
     //setoverContent(!overContent)
  }
  
  const handleLike=()=>{
     showSuccessToast(`you liker ${username}`)
  }

  return (
    <div className="border-[0.8px] border-gray-500/20 rounded w-[95%] sm:w-[95%] md:w-[80%] lg:w-[55%] mt-4 mb-9 shadow-md shadow-slate-900 max-h-fit pb-2 ">
      <div className="flex items-center justify-between select-none p-2">
        <div className="w-fit h-fit flex">
          <span className="w-[30px] h-[30px] rounded-full bg-gradient-to-br from-pink-300 to-red-300 overflow-hidden bg-cover object-cover ">
            <img src={avatar} className="w-[100%] h-[100%] brightness-125 object-cover" />
          </span>
          <div className="flex flex-col items-center justify-center w-fit h-fit text-gray-200  pl-2 leading-none">
            <h2 className="text-start text-[15px] font-bold w-full">{username}</h2>
            <p className="text-[13px] font-normal">Followers • {followers}</p>
          </div>
        </div>
        <ButtonBlack text={`${isfollowed?"unfollow":"follow"}`} width="90px" radius="25px" size="14px" />
      </div>

      <p className={`overflow-clip min-h-[30px] max-h-fit leading-[18px] font-[400] text-[15px] text-gray-300 w-full text-start mt-2 ${moreClick&&"h-fit"} select-none p-2`}>
        {overContent ? (
          <>
            {moreClick?
            <span className="text-gray-300 font- select-none leading-[18px] font-[400] text-[15px]" onClick={handleMoreClick}> {contentdec} <strong>Less</strong></span>:
            (
         <>
            {contentdec.slice(0, 110)}
           <span className="text-gray-100 font-semibold select-none   " onClick={handleMoreClick}> ..More</span>
           </>
           )
            }
          </>
        ) : (
          <>
          {contentdec}
          </>
        )}
      </p>
      
      <div className="w-full  rounded-b overflow-hidden relative max-h-[350px] min-h-[160px]">
       <img src={`${content.replace("/upload/", "/upload/c_fill,q_100/")}`} className="w-full object-center" alt="Content" />
       <div className="absolute top-0 left-0 w-full h-full  text-end text-gray-400 font-bold text-[12px] pr-3 pb-1 flex items-end justify-end">
        30 • 6 • 2024
       </div>
      </div>
      
   <div className="w-full px-3 flex justify-start mt-3">
      <div className="w-fit rounded-full bg-gradient-to-r from-[#e84d4d] to-[#e957ad]  text-[11px] font-semibold text-gray-300 leading-none px-2 py-1 " >
           {likes} Likes
      </div>
    <div className="w-fit rounded-full bg-gradient-to-r from-[#575cd9] to-[#ea5c90]  text-[11px] font-semibold text-gray-300 leading-none px-2 py-1 ml-2">
           {comment} Comments
      </div>
    <div className="w-fit rounded-full bg-gradient-to-r from-[#4890f1] to-[#a37af4]  text-[11px] font-semibold text-gray-300 leading-none px-2 py-1 ml-2">
           40 Share
      </div>
   </div>

      <div className="flex justify-between items-center text-slate-100 mt-6 ">
        <button className="w-[calc(100%/3.5)] bg-blue-500 p-1 font-bold text-[12px] divider rounded-full m-1 flex items-center justify-center relative h-[32px]">
         <LottieIcon 
          id = "hbzwsetw"
          style={{
             width:"100%",
             height:"25px",
             borderRadius:"25px"
          }}
          />
        </button>
       <button className="w-[calc(100%/3.5)] bg-yellow-500 p-1 font-bold text-[12px] divider rounded-full m-1 flex items-center justify-center h-[32px]" >
        <LottieIcon
        style={{
             width:"100%",
             height:"25px",
             borderRadius:"25px"
          }}
        />
       </button>
      <button className="w-[calc(100%/3.5)] bg-green-500 p-1 font-bold text-[12px]  rounded-full m-1 flex items-center justify-center relative h-[32px]" onClick={()=>showSuccessToast("Share Clicked")}>
       <LottieIcon
        id = "boyoxams"
        style={{
             width:"100%",
             height:"25px",
             borderRadius:"25px"
          }}
        />
      </button>
      </div>
      
    </div>
  );
}
