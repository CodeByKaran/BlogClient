import React, { useEffect, useState } from "react";

let index = 1;

const useLetterInterval = (
   string = "", 
   delay = 300
) => {
   
  const [text, setText] = useState(string[0]);
  const [completed,setCompleted] = useState(false)
  
  useEffect(() => {
    const textInterval = setInterval(() => {
      if (index < string.length) {
        setCompleted(false)
        setText(string.slice(0, index + 1));
        ++index;
      } else {
        clearInterval(textInterval);
        setCompleted(true)
        index = 1
      }
    }, delay);

    return () => clearInterval(textInterval);
  },[]);
  
  return [text, completed];
};

export { useLetterInterval };
