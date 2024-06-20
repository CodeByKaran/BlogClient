import React,{useState} from 'react'
import humanIcon from "../../assets/human_icon.svg"

export default function UserPhoto({
   src=humanIcon,
   username = "Karan Kumar",
   fun = ()=>{},
   showname = false,
   w = "35px",
   h = "35px",
   font = "16px",
   weight = "700",
   showNameRight = false,
   showBorder = true,
   textColor = "#e5e5e5"
}) {
   const [ispressed, setispressed] = useState(false)
   
   const addRipple=()=>{
      setispressed(true)
      setTimeout(()=>setispressed(false),400)
      fun()
   }
   
  return (
    <div className="flex items-baseline">
    {showname && !showNameRight &&
     <p className="text-gray-300 mr-2 self-end capitalize overflow-x-clip max-w-[50px] font-bold" style={{fontSize:font,fontWeight:weight}}>{username.length>5?username.slice(0,5)+"...":username}</p>
    }
     <span className={`block w-[35px] h-[35px] rounded-full flex justify-center items-center overflow-hidden ${showBorder&&"border"} border-[#bf60ee] relative ${ispressed && "scale-105 shadow-lg shadow-[#bf60ee] "} transition-all duration-300 `}
     style = {{
        height: h,
        width: w
     }}
      onClick={addRipple}
       >
      <img src={src} className="object-cover h-full w-full   "/>
     </span>
   {showname && showNameRight &&
     <p className="text-#808080-300 ml-[5px] self-end capitalize overflow-x-clip max-w-fit font-bold" style={{fontSize:font,fontWeight:weight,color:textColor}}>{username}</p>
    }
     </div>
  )
}