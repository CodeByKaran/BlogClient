import React from 'react'
import FetchCustomBlog from "../../common/fetch_custom_blog/FetchCustomBlog.jsx"
import RouteNav from "../../common/route_nav/RouteNav.jsx"


function SaveBlogs() {
  return (
    <div className="w-full sm:w-full md:w-[80%] lg:w-[60%]">
      <RouteNav 
         ROUTE="Savedblogs"
       />
      <FetchCustomBlog 
        URI="/api/v1/save/blog/get"
        CONFIG={{
           method:"GET",
           credentials: "include",
        }}
        PAGE={1}
        PAGESIZE={10}
       />
    </div>
  )
}


export default React.memo(SaveBlogs)