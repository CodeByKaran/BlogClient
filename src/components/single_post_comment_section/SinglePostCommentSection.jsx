import React from 'react'
import UserPhoto from "../user_photo/UserPhoto.jsx"
import Human from "../../assets/human_icon.svg"
import LottieIcon from "../lottie/LottieIcon.jsx"
import Menu from "../../assets/Menu.svg"

const SinglePostCommentSection = () => {
  return (
    <div className="h-fit w-full flex flex-col items-center mt-5 relative select-none ">
     <div className={`w-full rounded   border-b-2 border-b-[#b0b0b088] bg-inherit flex flex-col pt-2 px-2 pb-1 relative shadow-lg shadow-[#0a0a0a] overflow-hidden my-2 bg-[#f37794] inset_top_shadow`}>
       <div className="w-4 h-4 rounded bg-inherit absolute top-2 right-2 active:bg-gray-400/50 ">
       <img src={Menu} alt="full Screen"/>
     </div>
     <div>
      <UserPhoto
        src={Human}
        username={`• Karan`}
        showname = {true}
        w="24px"
        h="24px"
        font="13px"
        weight="450"
        showNameRight={true}
        showBorder = {false}
        textColor = "#cccccc"
       />
     </div>
     <div className="w-full text-start text-[#c4c4c4] font-normal max-h-fit mt-2 min-w-fit text-[13px] min-h-fit">
        lorem pisab lo qhi ji haowna are ypu bro are your kwibsjjs aiis wko qo8xu w8zi wi8ak wid8.
     </div>
     <div className="w-full h-fit flex justify-between items-center mt-3 mb-2">
      <div className="relative w-[70px] flex justify-start rounded-full pl-2 items-center bg-gray-800/30 pt-1 pb-1">
       <LottieIcon 
        id="hbzwsetw"
        style={{
           height:"20px",
           width:"20px",
        }}
        color="#486df4"
        />
        <span className="absolute  right-3 self-center select-none text-gray-200 text-[10px] font-semibold">126k</span>
      </div>
      <div className="text-[10px] text-[#cccccc] font-black mr-2  rounded-full">
       12 • jun
      </div>
     </div>
     </div>
    </div>
  )
}

export default SinglePostCommentSection