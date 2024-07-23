import React from 'react'
import BlogHead from "../../components/blogs_head/BlogHead.jsx"
import BlogBody from "../../components/blogs_body/BlogBody.jsx"
import VerticalSpacer from "../../components/spacer/VerticalSpacer.jsx"

const Blogs = () => {
  return (
    <div className="w-full sm:w-full md:w-[80%] lg:w-[60%] text-white">
     <BlogHead />
     <BlogBody />
    </div>
  )
}

export default Blogs