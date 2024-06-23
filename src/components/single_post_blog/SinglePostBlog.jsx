import React from "react";
import Sample from "../../assets/Sample.jpg";
import Badge from "../badges/Badge.jsx";

const SinglePostBlog = () => {
  return (
    <div className="text-gray-200 flex flex-col items-center w-full">
      <div className="w-[95%] flex flex-col items-center">
        <img src={Sample} className="w-full object-cover rounded" />
        <div className="flex flex-wrap justify-start w-full mt-5">
          <Badge text="like • 220k" color1="#f56788" color2="#f160b2" />
          <Badge text="comments • 220k" color1="#6c9eee" color2="#8565f5" />
          <Badge text="saves • 220k" color1="#a870ef" color2="#aa93e8" />
        </div>
      </div>
      <p className="text-[#cbcbcb] text-[14px] font-normal text-start mt-3 leading-[1.3] w-full pl-4 pr-2 ">
        god ho kya jso duqo lodi zuyqo sooheb aois qooxi dhaiqo soz88w akooq qoO
        wkos wkaooz qjwos9 woqo9sbwm kqoomxbxmoa
      </p>
      <div className="w-full flex justify-start pl-4 pr-3 pt-2 items-center">
      <p className="text-start text-gray-400 font-medium text-[12px]">16 • jun • 24 </p>
        <span className="border-r h-[12px] border-gray-400/50 mx-2"></span>
       <p className="text-start text-gray-400 font-medium text-[12px]">13 : 20</p>
      </div>
    </div>
  );
};

export default SinglePostBlog;
