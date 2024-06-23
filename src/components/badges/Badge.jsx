import React from 'react'

export default function Badge({
   text = "",
   style={},
   color1 = "#4890f1",
   color2 = "#a37af4"
}) {
  return (
      <div className={`w-fit rounded-full bg-gradient-to-r from-[${color1}] to-[${color2}]  text-[11px] font-semibold text-gray-300 leading-none px-2 py-1 ml-2`} 
      style={{
         background:`linear-gradient(to right,${color1},${color2})`,
         ...style
      }}>
          {text}
        </div>
  )
}