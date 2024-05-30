import React, { useState, useEffect } from 'react';

const AppTitle = ({ 
   title="Do BloG", delay = 100 
}) => {
  const [displayedTitle, setDisplayedTitle] = useState('');
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
    <div className="w-fit h-fit bg-gradient-to-br from-indigo-600 to-blue-300 bg-clip-text">
     <h2 className="text-transparent font-bold  text-left text-[25px] ">{displayedTitle}</h2>
    </div>
  );
};

export default AppTitle;
