import React from 'react'
import humanIcon from "../../assets/human_icon.svg"
import 'lord-icon-element';


export default function NavIcon({
   imgsrc = humanIcon,
   imgdescription = "Icon",
   fun = ()=>{},
   isactive = false,
   isstate = false
}) {
  return (
     <span className="w-[50px] h-fit flex flex-col items-center mt-4" onClick={fun}>
       <span className={`p-1 w-full h-[25px] rounded-full text-center flex justify-center ${isactive && "bg-gradient-to-r from-[#bf60eeef] to-[#e83d63ee]"}`}>
       <lord-icon
          src={imgsrc}
          trigger="click"
          colors="primary:#d7d7d7,secondary:#7d7d7d"
          state={`${isstate&&"hover-home-1"}`}
          style={{
             width:"100%",
             height:"100%",
          }}>
        </lord-icon>
       </span>
       <span className={`text-gray-300 text-[14px] w-full h-fit text-center font-bold ${isactive&& "text-gray-50"}`}>
        {imgdescription}
       </span>
     </span>
  )
}