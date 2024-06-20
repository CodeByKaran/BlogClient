import React,{useState,useRef,forwardRef} from 'react'

const EmailInput = forwardRef(({
   id,
   hint,
   label,
   type,
   icon,
   iconclick,
},ref) => {
  
   const [focus,setFocus] = useState(false)
   
   const handleFocus=()=>{
      setFocus(true)
   }
   
  return (
     <>
      <label className={`w-full text-start text-sm font-medium pb-1 pl-2 ${focus?"text-[#f34782]":"text-gray-300"}`} htmlFor={id}>{label}</label>
      <div className="w-full relative">
      <input type={type} spellCheck="false" id={id} className="outline-none py-3 pl-2 pr-11 border-b-2 border-b-gray-400 bg-inherit focus:bg-[#ec71a128]  w-[100%] text-[16px] font-normal text-gray-100 transition-all duration-200 focus:border-b-[#f34782] placeholder:text-gray-400 " placeholder={hint} onFocus={handleFocus}
         onBlur={()=>setFocus(false)}
        ref={ref}
        />
       <img src={icon} alt="email" className="h-6 w-6 absolute right-2 top-0 bottom-0 my-auto" onClick={iconclick}
       />
      </div>
      </>
  )
})

export default EmailInput