import Reac,{useEffect,useState} from 'react'
import {useLetterInterval} from "../../hooks/useLetterInterval.js"
import UnderLine from "../../animation/UnderLine.jsx"


const SignupHero = ({
   string="Create Account ..."
}) => {
   
   const [text,completed] = useLetterInterval(string,120)
   
   
  return (
    <div className="w-full sm:w-full md:w-[85%] lg:w-[75%] flex justify-start ">
      <h1 className={`logoFont w-fit text-start font-semibold text-[30px] bg-clip-text text-transparent bg-gradient-to-r from-[#e93b7e] to-[#f09fbd] pt-2 pl-3 pb-2 pr-2 relative`}>
      {text}
      {completed &&
      <UnderLine />
      }
      </h1>
    </div>
  )
}

export default SignupHero