import React from 'react';

const Spinner = ({
   style={}
}) => {
  return (
    <div className="flex items-center justify-center mt-1 mb-2">
      <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-[#f3487b]" style={style}></div>
    </div>
  );
};

export default Spinner;
