import React,{useState} from "react";
import LottieIcon from "../../components/lottie/LottieIcon.jsx"

const SettingOption = ({
   imgid = "xcxzayqr",
   imgsvg,
   colors = ["#1176e3","#f4f24d"],
   settingname = "Accounts",
   options = ["login","signup","logout","delete","private"],
   click = ()=>{}
}) => {
   
   const [pressed, setPressed] = useState(false)
   
   const handleOptionClick=()=>{
      setPressed(true)
      setTimeout(()=>setPressed(false),300)
      click()
   }
   
  return (
    <>
    <div className="w-full flex justify-between items-center  h-[70px] px-2 select-none active:bg-gray-500 transition ease-in-out duration-200" onClick={handleOptionClick}>
      <div className={`w-fit self-center flex items-center justify-center object-cover overflow-hidden transition-all ease-in duration-300 ${pressed&&"scale-110"} `}>
      {imgsvg?
       <img src={imgsvg} className="w-9 h-9"/>:
       <LottieIcon 
        id={imgid}
        color = {colors[0]}
        seccolor = {colors[1]}
        />
      }
      </div>
      <div className="w-full flex flex-col items-start justify-center leading-[1.2] pl-[8px] pr-1 overflow-hidden ">
        <h2 className="text-[17px] font-medium text-gray-200 ">{settingname}</h2>
        <p className="font-normal text-[14px] text-gray-300 overflow-hidden">
        {
         options.map((e, i) => `${e} ${options.length-1!=i?"•":""} `)
        }
         </p>
      </div>
    </div>
    <hr  className=" w-full sm:w-full md:w-[95%] lg:w-[90%] h-[1px] border-none bg-gray-400/40"/>
    </>
  );
};

export default SettingOption;
