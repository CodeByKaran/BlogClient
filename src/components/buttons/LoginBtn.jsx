import React from 'react'
import {Link} from "react-router-dom"

const LoginBtn = ({
   text = "",
   style = {}
}) => {
  return (
    <Link to={"/login"} className="w-fit bg-gradient-to-r from-[#f28080] via-[#f142a3] to-[#ef3b83] text-[16px] font-semibold text-transparent bg-clip-text relative right-1 top-[3px] select-none underline underline-offset-2 decoration-[#f3447b] decoration-1 active:no-underline" style={style}>
    {text}
    </Link>
  )
}

export default LoginBtn