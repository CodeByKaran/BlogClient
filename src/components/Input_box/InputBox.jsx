import React, { forwardRef } from 'react';

const InputBox = forwardRef(({
  type = "text",
  style = {},
  handleInputChange = () => {},
  nextRef,
  value
}, currentRef) => {
  
  const handleInput = (e) => {
    const input = e.target;
    if (input.value.length > 1) {
      input.value = input.value[0];  // Keep only the first character
    }
    handleInputChange(currentRef, nextRef, input.value);
  }
  
  return (
    <input 
      type={type} 
      className="w-12 h-12 p-3 rounded outline-none bg-inherit border border-gray-300/80 text-gray-200 text-center font-medium mx-1 focus:outline focus:outline-[#ed7f93] outline-[1px] select-none" 
      ref={currentRef}
      onInput={handleInput}
      value={value}
      style={style}
    />
  )
});

export default InputBox;
