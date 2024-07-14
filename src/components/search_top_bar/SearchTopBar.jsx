import React,{forwardRef} from 'react'
import LottieIcon from "../lottie/LottieIcon.jsx"
import useCustomNavigate from "../../hooks/useCustomNavigate.js"

const SearchTopBar=forwardRef(({
   fun = ()=>{},
   handleInput=()=>{}
},ref)=>{
   const navigate = useCustomNavigate()
   const handleBackNavigation=()=>{
      navigate("/",true)
   }
   
   const handleEnterSearchClick=(e)=>{
      if(e.key==="Enter")
      fun()
   }
   
   
  return (
    <div className="px-1 py-1 w-full  flex items-center pt-1 ">
      <div className="w-[10%] h-[35px] rotate-180 rounded-full p-1 mr-2" onClick={handleBackNavigation}>
       <LottieIcon 
         id = "whtfgdfm"
         stroke = "bold"
         color = "#ff4383"
         style={{
            width: "100%",
            height: "100%",
         }}
        />
      </div>
      
      <div className="w-[90%] h-fit relative flex justify-end items-center">
       <input type="text"
         placeholder="username"
         className="w-full h-[45px] rounded bg-inherit border border-gray-500/20 pl-2 py-1 text-[14px] placeholder:text-[14px] transition-all duration-200 focus:outline-none outline-none focus:border-[#5c59eb] text-[#d7d7d7] pr-11"
          spellCheck="false"
          autoFocus
          title="search"
          autoComplete="true"
          ref = {ref&&ref}
          onInput={handleInput}
          onKeyDown={handleEnterSearchClick}
        />
       
      <div className="w-[45px] h-[35px] rounded-full p-1 absolute right-[6px] z-50" onClick={fun}>
        <LottieIcon 
           id = "fkdzyfle"
           color = "#4542f3"
           style={{
            width: "100%",
            height: "100%",
         }}
         />
      </div>
       
      </div>
   
    </div>
  )
})



export default SearchTopBar