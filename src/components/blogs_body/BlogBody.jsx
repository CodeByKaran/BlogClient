import React,{useEffect,useState} from 'react'
import useCustomNavigate from "../../hooks/useCustomNavigate.js"
import { Outlet,useParams,useLocation } from "react-router-dom";

const BlogBody = () => {
   
   const navigate = useCustomNavigate()
   const {userId} = useParams()
   const location = useLocation()
   const [firstTab, setFirstTab] = useState(true)
   
   
   useEffect(() => {
     const URI = location.pathname.split("/")
     if(URI.length<=4) {
        navigate(`/user/blog/${userId}/posts`,true)
        return
     }
     const tab = URI[URI.length - 1]
     const isFirstTab = tab==="posts"?true:false
     setFirstTab(isFirstTab)
   }, [location])
   
   
   const handleNavigatePost=()=>{
      navigate(`/user/blog/${userId}/posts`,true)
   }
   
   const handleNavigateBlog=()=>{
      navigate(`/user/blog/${userId}/blogs`,true)
   }
   
   
  return (
    <div>
      <div className="flex justify-between select-none px-1">
       <div className={`text-base text-slate-700 font-semibold bg-yellow-300 py-2 rounded-full   inset_top_glass_shadow active:scale-90 transition-all duration-200 ${firstTab?"w-[70%]":"w-[27%]"}`} onClick={handleNavigatePost}> 
        posts <strong className="text-[0.8em]">(125)</strong>
       </div>
       <div className={`text-base text-slate-800 font-semibold bg-blue-500 py-2 rounded-full inset_top_glass_shadow_two active:scale-90 transition-all duration-200 ${!firstTab?"w-[70%]":"w-[27%]"} `} onClick={handleNavigateBlog}>
        blogs <strong className="text-[0.8em]">(125)</strong>
       </div>
      </div>
      <Outlet />
    </div>
  )
}

export default BlogBody