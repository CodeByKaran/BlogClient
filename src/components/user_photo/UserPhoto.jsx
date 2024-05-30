import React,{useState} from 'react'
import humanIcon from "../../assets/human_icon.svg"

export default function UserPhoto({
   src=humanIcon,
   fun = ()=>{}
}) {
   const [ispressed, setispressed] = useState(false)
   
   const addRipple=()=>{
      setispressed(true)
      setTimeout(()=>setispressed(false),400)
      fun()
   }
   
  return (
     <span className={`block w-[40px] h-[40px] rounded-full p-2 flex justify-center items-center overflow-hidden border-2 border-indigo-400 relative ${ispressed && "scale-105 shadow-lg shadow-indigo-500 "} transition-all duration-300 `}
      onClick={addRipple}
       >
      <img src={src} className="object-cover h-full w-full   "/>
     </span>
  )
}