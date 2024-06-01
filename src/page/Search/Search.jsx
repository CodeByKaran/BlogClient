import React,{useState} from 'react'
import  SearchTopBar  from  "../../components/search_top_bar/SearchTopBar.jsx"
import ShowUserList from "../../components/show_list/ShowUserList.jsx"
import SearchTag from "../../components/search_tags/SearchTag.jsx"

export default function Search() {
   
   
   const [isScrolled, setisScrolled] = useState(0)
   
 window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY || document.documentElement.scrollTop;
  if(scrollPosition>=30){
     setisScrolled(true)
  }else{
     setisScrolled(false)
  }
 });

   
   
  return (
    <div className="text-white w-full sm:w-full md:w-[80%] lg:w-[60%] overflow-y-scroll flex flex-col items-center">
    <div className={`top-0 pt-2 px-3 w-full sm:w-full md:w-[80%] lg:w-[60%] z-50 ${isScrolled&&"blur_effect_two"} fixed h-fit transition-all duration-300`}>
     <SearchTopBar />
     <SearchTag />
    </div>
    <div className="w-full h-[120px] ">
    </div>
     <ShowUserList 
      data = {["1","2","3","4","2","3","4","2","3","4","2","3","4","2","3","4"]}
      />
    </div>
  )
} 