import React, { useState, useEffect } from 'react';


const AppTitle = ({ 
   title="Do BloG",
   delay = 100 ,
   stylishtext = true,
   style
}) => {
  const [displayedTitle, setDisplayedTitle] = useState('D');

  useEffect(() => {
    let currentIndex = 0;
    const intervalId = setInterval(() => {
      if (currentIndex < title.length) {
        setDisplayedTitle(title.slice(0,currentIndex+1));
        ++currentIndex;
      } else {
        clearInterval(intervalId);
      }
    }, delay);

    return () => clearInterval(intervalId);
  }, [title, delay]);

  return (
    <div className="w-fit h-fit bg-gradient-to-br from-[#bf60ee] to-[#e83d63] bg-clip-text flex ">
     <h2 className={`text-transparent ${stylishtext&&"logoFont"} text-left text-[25px] `} style={style}>{displayedTitle}</h2>
    </div>
  );
};

export default AppTitle;
