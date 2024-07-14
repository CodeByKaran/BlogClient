import React,{useState,useEffect} from 'react'
import NavIcon from "../nav_icon/NavIcon.jsx"
import HomeIcon from "../../assets/Home.gif"
import {NavLink,useLocation} from "react-router-dom"

export default function BottomNav() {
  
  const [navItem, setnavItem] = useState(null)
  
  const handlePage=(item)=>{
     setnavItem(item)
  }
  
  const URI = useLocation()
  
  useEffect(() => {
    const URI_SPLIT = URI.pathname.split("/")
    if(URI_SPLIT[1]=="search"){
       setnavItem(2)
    }else if(URI_SPLIT[1]=="create-post"){
       setnavItem(3)
    }else if(URI_SPLIT[1]=="settings"){
       setnavItem(4)
    }else{
       setnavItem(1)
    }
  }, [URI])
  
  
  return (
    <div className="fixed bottom-0   w-full sm:w-full md:w-[85%] lg:w-[60%] pb-2 px-6 flex justify-between items-start blur_effect h-fit justify-self-center select-none">
   <NavLink to={"/"}>   
    <NavIcon 
     imgdescription = "Home"
     isactive = {navItem==1?true:false}
     imgsrc = "https://cdn.lordicon.com/wmwqvixz.json"
     isstate = {true}
     fun = {()=>handlePage(1)}
      />
   </NavLink>
   <NavLink to={"/search"}>
     <NavIcon 
     imgdescription = "Search"
     imgsrc = "https://cdn.lordicon.com/fkdzyfle.json"
     isactive = {navItem==2?true:false}
     fun = {()=>handlePage(2)}
      />
   </NavLink>
   <NavLink to={"/create-post"}>
     <NavIcon
     imgdescription = "Create"
     imgsrc = "https://cdn.lordicon.com/jgnvfzqg.json"
     isactive = {navItem==3?true:false}
     fun = {()=>handlePage(3)}
      />
   </NavLink>
   <NavLink to={"/settings"}>
     <NavIcon 
      imgdescription = "Settings"
      imgsrc = "https://cdn.lordicon.com/ifsxxxte.json"
      isactive = {navItem==4?true:false}
      fun = {()=>handlePage(4)}
      />
   </NavLink>
    </div>
  )
}