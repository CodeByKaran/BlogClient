import React,{useState,useEffect} from 'react'
import {useLocation} from "react-router-dom"

export default function ShowNav({children}){
   
   const [showNav, setShowNav] = useState(false)
   
   const URI = useLocation()
   
   useEffect(() => {
     const URI_SPLIT = URI.pathname.split("/")
     if(URI_SPLIT[1]=="search"||URI_SPLIT[1]=="create-post"){
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