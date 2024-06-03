import React,{forwardRef} from "react";
import {ImagePreviewer} from "../../utils/ImagePreviewer.js"

const SpecialInputField = forwardRef(({
   svg = {},
},ref)=> {
  return (
    <div className="relative w-[90%] h-64 overflow-hidden">
      <input
        type="file"
        id="imageUpload"
        accept="image/*"
        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
        onChange={(e)=>ImagePreviewer(e,"showImage")}
        ref={ref}
      />
      <label
        htmlFor="imageUpload"
        className="flex  flex-col items-center justify-center w-full h-full border-[1.2px] border-dashed border-[#ee70b0d3]
           rounded-lg cursor-pointer bg-inherit hover:bg-gray-50 text-gray-200"
      >
       <img src={svg} className="w-9 h-9"/>
       <p className="text-[15px] font-bold text-gray-200 font-mono text-transparent bg-gradient-to-br from-[#f63da2] to-[50%] to-[#fe517d] bg-clip-text">Show The World</p>
      </label>
   <div id="showImage" className="absolute h-full w-full z-50 inset-0  z-[-10]"></div>
    </div>
  );
});

export default SpecialInputField;
