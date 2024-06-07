import React, { forwardRef, useState } from "react";
import { autoHeight } from "../../utils/ResizeTextarea.js";

const DesginedTextArea = forwardRef(
  ({ style = {}, label = "Label", hint = "placeholder", rows = "1" ,val="",setvalue=()=>{}}, ref) => {
    const [showScrollBar, setShowScrollBar] = useState(false);
    const [isFocused, setIsFocused] = useState(false);

    const handleInput = element => {
       setvalue(element.value)
      let isFullHieght = autoHeight(
        element,
        Number(element.style.maxHeight.split("p")[0])
      );
      setShowScrollBar(isFullHieght);
    };

    const handleBlur = () => {
      setShowScrollBar(false);
      setIsFocused(false);
    };

    const handleFocus = () => {
      setIsFocused(true);
    };

    return (
      <div className="w-full flex flex-col items-center">
        <p
          className={`w-[90%] leading-none text-[1.1rem] text-start py-1 ${
            isFocused ? "text-[#e81a7d]" : "text-gray-300"
          } font-medium pl-1 transition-all duration-200`}
        >
          {label}
        </p>
        <textarea
          className={`w-[90%] resize-none bg-inherit pl-3 text-gray-200 mt-2 py-2 pr-1 border rounded border-gray-300/30 text-[1rem] border-r-4 border-r-pink-400 outline-none ${
            showScrollBar ? "overflow-y-auto" : "overflow-clip"
          }  focus:border-[#f36b9ecf] ${
            isFocused && "placeholder:text-gray-300"
          }`}
          rows="1"
          spellCheck="false"
          placeholder={hint}
          style={style}
          ref={ref}
          onInput={() => handleInput(ref?.current)}
          onBlur={handleBlur}
          onFocus={handleFocus}
          value = {val}
        />
      </div>
    );
  }
);

export default DesginedTextArea;
