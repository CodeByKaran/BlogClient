import React, { useState } from "react";

export default function ButtonWhite({ text = "Button", fun = () => {} }) {
  const [pressed, setPressed] = useState(false);

  const makeHoverEffect = () => {
    fun();
    setPressed(false);
    setPressed(true);
    setTimeout(() => setPressed(false), 300);
  };

  return (
    <button
      className={`p-2 rounded shadow-lg border border-gray-600  bg-gray-100 font-medium text-black min-w-[120px] w-fit h-fit transition-all duration-300 ${
        pressed && "bg-transparent shadow-2xl text-gray-50 shadow-indigo-400"
      }`}
      onClick={makeHoverEffect}
    >
      {text}
    </button>
  );
}
