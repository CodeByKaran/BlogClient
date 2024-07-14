import React from 'react'
import Spinner from "../spinner/Spinner.jsx"

const GradientButton = ({
   btnText = "Post",
   fun = ()=>{},
   style,
   loading=false
}) => {
  return (
    <button className=" w-[90%] sm:w-[90%] md:w-[60%] lg:w-[50%] h-10 bg-gradient-to-r from-[#f14a8a] via-[#f93255] to-[#f5607b] rounded border-none text-lg text-gray-100 font-bold hover:bg-gradient-to-l from-[#f5607b] via-[#f93255] to-[#f14a8a] transition-all duration-300 active:scale-90" onClick={fun} style={style} disabled={loading}>
      {loading?
      <Spinner style={{
         borderColor:"#3c77ec"
      }}/>:btnText}
    </button>
  )
}

export default GradientButton