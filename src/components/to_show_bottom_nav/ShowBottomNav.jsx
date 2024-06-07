import React,{useState,useEffect} from 'react'
import {useLocation} from "react-router-dom"

const ShowBottomNav = ({children}) => {
  const [showNav, setShowNav] = useState(false)
   
   const URI = useLocation()
   
   useEffect(() => {
     const URI_SPLIT = URI.pathname.split("/")
     if(URI_SPLIT[1]=="login"||URI_SPLIT[1]=="sign-up"){
        setShowNav(false)
     }else{
        setShowNav(true)
     }
   }, [URI])
   
   
  return (
     <>
       {showNav && children}
     </>
  )
}

export default ShowBottomNav