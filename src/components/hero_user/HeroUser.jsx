import React from 'react'
import AppTitle from "../app_title/AppTitle.jsx"
import Cross from "../../assets/Cross.svg"

const HeroUser = () => {
  return (
    <div className="w-full pl-[0.45rem] pr-3 py-2 h-fit flex flex-col items-start relative">
      <div className="w-7 h-7 p-1 overflow-hidden object-cover absolute top-2 right-2 flex justify-center items-center flex-col">
        <img src={Cross} className="w-full h-full"/>
      </div>
     <div className="flex justify-start items-baseline  h-fit leading-none">  
       <h2 className="text-start text-[2rem] font-bold tracking-wide text-gray-100">Hey ,</h2>
       <h1 className="text-start text-[2.5rem] font-bold first-letter:text-[1.6em] first-letter:bg-gradient-to-br from-[#f038ab] to-[#ee3f3f] first-letter:bg-clip-text first-letter:text-transparent tracking-wide text-gray-100 break-normal ">
        <strong>Karan</strong>
       </h1>
      </div>
     <h3 className="text-start text-gray-300  text-[1rem] font-semibold flex relative w-fit ">Happy Posting By <span className="absolute left-[105%] top-[20%] min-w-[100px] ">{<AppTitle stylishtext={false}/>}</span>
     </h3>
    </div>
  )
}

export default HeroUser