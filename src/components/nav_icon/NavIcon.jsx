import React from 'react'
import humanIcon from "../../assets/human_icon.svg"

export default function NavIcon({
   imgsrc = humanIcon,
   imgdescription = "Icon",
   fun = ()=>{},
   isactive = false
}) {
  return (
     <span className="w-[50px] h-fit flex flex-col items-center mt-4" onClick={fun}>
       <span className={`p-1 w-full h-[25px] rounded-full text-center flex justify-center ${isactive && "bg-indigo-500/50"}`}>
        <img src={imgsrc} className=" object-cover h-full "/>
       </span>
       <span className="text-gray-50 text-[14px] w-full h-fit text-center font-bold">
        {imgdescription}
       </span>
     </span>
  )
}