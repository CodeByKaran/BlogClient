import React, { useState } from "react";

export default function ButtonBlack({ text = "Button", 
   fun = () => {} ,
   width ,
   radius ,
   size
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
      className={`p-2 rounded shadow-lg border border-gray-600 bg-black font-medium text-slate-50 min-w-fit h-fit transition-all duration-300 ${
        pressed &&
        "bg-gray-100 text-slate-900 shadow-2xl shadow-indigo-400"
      }`}
      onClick={makeHoverEffect}
      style = {{
         width:`${width&&width}`,
         borderRadius:`${radius && radius}`,
         fontSize: `${size&&size}`
      }}
    >
      {text}
    </button>
  );
}
