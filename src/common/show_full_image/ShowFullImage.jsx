import React, { useEffect } from 'react';

const ShowFullImage = ({ SRC, CLOSE }) => {
   
  useEffect(() => {
    // Disable body scroll when the component mounts
    document.body.style.overflow = 'hidden';

    // Clean up and re-enable body scroll when the component unmounts
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div className="flex justify-center items-center h-[100vh] w-full fixed top-0 left-0 p-3 z-[11111111] bg-slate-900/80 backdrop-blur">
      <span className="text-2xl sm:text-3xl font-extrabold text-red-400 absolute top-3 right-5 md:top-6 md:right-8 cursor-pointer h-[100px] w-[100px] text-right" onClick={CLOSE}>
        ×
      </span>
      <div className="h-[60%] w-full z-[11111111] md:w-[80%] lg:w-[60%]">
        <img
          src={SRC}
          alt={SRC}
          className="object-contain w-full h-full "
          loading="lazy"
          placeholder="blur"
        />
      </div>
    </div>
  );
};

export default React.memo(ShowFullImage);
