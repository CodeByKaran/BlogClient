import React,{useState} from 'react'
import NavIcon from "../nav_icon/NavIcon.jsx"
import HomeIcon from "../../assets/Home.gif"
import {NavLink} from "react-router-dom"

export default function BottomNav() {
  
  const [navItem, setnavItem] = useState(1)
  
  const handlePage=(item)=>{
     setnavItem(item)
  }
  
  return (
    <div className="fixed bottom-0 left-0 md:left-[8%] w-full sm:w-full md:w-[85%] lg:w-[60%] pb-2 px-6 flex justify-between items-start blur_effect">
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