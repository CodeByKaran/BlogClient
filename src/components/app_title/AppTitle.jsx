import React, { useState, useEffect } from 'react';


const AppTitle = ({ 
   title="Do BloG", delay = 100 
}) => {
  const [displayedTitle, setDisplayedTitle] = useState('D');
//  const [isPause,setIsPause] = useState(false)

  useEffect(() => {
    let currentIndex = 0;
    //setIsPause(false)
    const intervalId = setInterval(() => {
      if (currentIndex < title.length) {
        setDisplayedTitle(title.slice(0,currentIndex+1));
        ++currentIndex;
      } else {
        clearInterval(intervalId);
        /*setIsPause(true)
        currentIndex = 0*/
      }
    }, delay);

    return () => clearInterval(intervalId);
  }, [title, delay]);

  return (
    <div className="w-fit h-fit bg-gradient-to-br from-[#bf60ee] to-[#e83d63] bg-clip-text flex ">
     <h2 className="text-transparent logoFont text-left text-[25px] ">{displayedTitle}</h2>
    </div>
  );
};

export default AppTitle;
