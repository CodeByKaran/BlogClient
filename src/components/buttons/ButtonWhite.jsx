import React, { useState } from "react";

export default function ButtonWhite({ text = "Button", 
   fun = () => {} ,
   width ,
   radius ,
   size,
   effect=true,
   style={},
 }) {
  const [pressed, setPressed] = useState(false);

  const makeHoverEffect = () => {
    fun();
    setPressed(false);
    setPressed(true);
    setTimeout(() => setPressed(false), 300);
  };

  return (
    <button
      className={`p-2 rounded shadow-lg border border-gray-600  bg-gray-100 font-medium text-black z-50 min-w-fit h-fit transition-all duration-300  select-none ${
        pressed&&effect? "bg-slate-950 shadow-lg text-gray-50 shadow-indigo-400":""
      } ml-1 mr-2`}
      onClick={makeHoverEffect}
      style = {{
         minWidth:`${width&&width}`,
         borderRadius:`${radius && radius}`,
         fontSize: `${size&&size}`,
         ...style
      }}
      
    >
      {text}
    </button>
  );
}
