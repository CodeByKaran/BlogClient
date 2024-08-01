import React from 'react'
import LottieIcon from "../../components/lottie/LottieIcon.jsx"
import useCustomNavigate from "../../hooks/useCustomNavigate.js"


const RouteNav = ({
   ROUTE="Route"
}) => {
   
   const navigate = useCustomNavigate()
   
   const handlePrevNavigate=()=>{
      navigate(-1,true)
   }
   
  return (
    <div className="flex items-center justify-between pt-4 pl-4 pb-2 pr-4 sticky top-0 left-0 bg-slate-950 shadow-xl shadow-gray-950/30 mb-7 z-50 rounded-b-md ">
      <div className="w-fit rounded-full pt-2 rotate-180" onClick={handlePrevNavigate}>
        <LottieIcon 
          id="whtfgdfm"
          stroke="bold"
          color = "#ffffff"
          style={{
            width:"26px",
            height:"26px"
          }}
         />
      </div>
      <div className="w-full h-fit ml-1">
       <p className="text-[1.45rem] w-full text-start pl-3 text-gray-300/85 font-semibold font-nunito">{ROUTE}</p>
      </div>
    </div>
  )
}

export default RouteNav